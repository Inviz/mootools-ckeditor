/*
---

script: plugins/about/plugin

description: Some file that does something

author: Frederico Knabben

license: http://ckeditor.com/license

requires: 
  - core.plugins

provides: 
  - plugins.about.plugin

...
*/


CKEDITOR.plugins.add( 'about',
{
	requires : [ 'dialog' ],
	init : function( editor )
	{
		var command = editor.addCommand( 'about', new CKEDITOR.dialogCommand( 'about' ) );
		command.modes = { wysiwyg:1, source:1 };
		command.canUndo = false;
		command.readOnly = 1;

		editor.ui.addButton( 'About',
			{
				label : editor.lang.about.title,
				command : 'about'
			});

		CKEDITOR.dialog.add( 'about', this.path + 'dialogs/about.js' );
	}
});
