/*
---

script: plugins/about/plugin

description: Some file that does something

author: Frederico Knabben

license: http://ckeditor.com/license

provides: 
  - plugins.about.plugin

...
*/
﻿

CKEDITOR.plugins.add( 'about',
{
	requires  [ 'dialog' ],
	init  function( editor )
	{
		var command = editor.addCommand( 'about', new CKEDITOR.dialogCommand( 'about' ) );
		command.modes = { wysiwyg1, source1 };
		command.canUndo = false;

		editor.ui.addButton( 'About',
			{
				label  editor.lang.about.title,
				command  'about'
			});

		CKEDITOR.dialog.add( 'about', this.path + 'dialogs/about.js' );
	}
});
