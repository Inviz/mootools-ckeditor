require 'rubygems'
require 'json'
require 'fileutils'
require 'pathname'

class CKEditor
  attr_accessor :input, :output, :dependencies
  
  R_DEPENDENCIES = /var scripts =[^{]*(.[^}]*?\})\s*;/m
  R_COPYRIGHT = /\/\*\s*Copyright.*?\*\/\n*/m
  R_BOM = /^\357\273\277/m
  R_COMMENTS = /\/\*.*?\*\//m
  R_DESCRIPTION = /\/\*\*.*?@fileOverview\s*?(.*?)\s*\*\//m
  R_DESCRIPTION_SPLITTER = /^\s*\*\s*$/
  R_DESCRIPTION_IDENTER = /\n\s*/
  R_DESCRIPTION_CLEANER = /\*\s+/
  R_PACKAGER_CLEANER = /(^.*?\/\/ @Packager.RemoveLine.*?$)|\:/
  
  def initialize(input = 'ckeditor', output = 'Source')
    self.input = Pathname.new input
    self.output = Pathname.new output
    extract_dependencies!
    pack!
  end
  
  def pack!
    files = Dir[File.join(input, '_source/**/**.js')].map do |src|
      next if src.index 'jquery'
      reading = Pathname.new(src)
      writing = output + reading.relative_path_from(input + '_source')
      FileUtils.mkdir_p(writing + '..')
      File.open(writing, 'w') do |file|
        file.write(transform(reading))
      end
      writing
    end.select {|a| a}
    
    puts "#{files.size} files packed"
    File.open('package.yml', 'w').write(package % files.map {|f| %Q|\n - "#{f.to_s}"|}.join(""))
  end
  
  def transform(path)
    relative = path.relative_path_from(input + '_source')
    structure = relative.sub('.js', '').to_s
    vars = [structure]
    vars << "Some file that does something" 
    vars << if (deps = dependencies[structure]) && !deps.empty?
              "\nrequires: #{array(*deps)}\n" 
            end       
    vars << array(relative.to_s.sub('.js', ''))
    content = File.read(path).
      sub(R_BOM, "").
      gsub(R_COPYRIGHT, '').
      gsub(R_PACKAGER_CLEANER, '').
      sub(R_DESCRIPTION) do |description|
        description = description.
          match(R_DESCRIPTION)[1].
          split(R_DESCRIPTION_SPLITTER)[0]
        
        vars[1] = description.
          gsub(R_DESCRIPTION_CLEANER, '').
          gsub(R_DESCRIPTION_IDENTER, "\n" + (" " * 14))  if description && !description.empty?
        ''
      end
    p header
    p content
    (header % vars) + content
  end
  
  def extract_dependencies!(path = input + '_source/core/loader.js')
    deps = File.read(path).match(R_DEPENDENCIES)[1].gsub(R_COMMENTS, '').gsub("'", '"')
    p deps
    self.dependencies = JSON.parse(deps)
  end
  
  def array(*args)
    args.map{|i| "\n  - #{i.gsub('/', '.')}"} * ""
  end
  
  def header
%Q|/*
---

script: %s

description: %s

author: Frederico Knabben

license: http://ckeditor.com/license
%s
provides: %s

...
*/\n|
  end
  
  def package
%|name: CKEditor
author: inviz
copyright: Frederico Knabben 
category: Interface
tags: [wysiwyg, editor]
docs: http://docs.cksource.com
demo: ckeditor.com/demo
sources: %s|
  end
end

CKEditor.new(*ARGV)