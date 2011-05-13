/*
---

script: plugins/colordialog/plugin

description: Some file that does something

author: Frederico Knabben

license: http://ckeditor.com/license

requires: 
  - core.config
  - core.plugins

provides: 
  - plugins.colordialog.plugin

...
*/


CKEDITOR.plugins.colordialog =
{
	init : function( editor )
	{
		editor.addCommand( 'colordialog', new CKEDITOR.dialogCommand( 'colordialog' ) );
		CKEDITOR.dialog.add( 'colordialog', this.path + 'dialogs/colordialog.js' );
	}
};

CKEDITOR.plugins.add( 'colordialog', CKEDITOR.plugins.colordialog );
