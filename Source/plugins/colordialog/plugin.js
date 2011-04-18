/*
---

script: plugins/colordialog/plugin

description: Some file that does something

author: Frederico Knabben

license: http://ckeditor.com/license

provides: 
  - plugins.colordialog.plugin

...
*/
( function()
{
	CKEDITOR.plugins.colordialog =
	{
		init : function( editor )
		{
			editor.addCommand( 'colordialog', new CKEDITOR.dialogCommand( 'colordialog' ) );
			CKEDITOR.dialog.add( 'colordialog', this.path + 'dialogs/colordialog.js' );
		}
	};

	CKEDITOR.plugins.add( 'colordialog', CKEDITOR.plugins.colordialog );
} )();
