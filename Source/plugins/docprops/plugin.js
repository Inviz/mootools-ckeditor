/*
---

script: plugins/docprops/plugin

description: Some file that does something

author: Frederico Knabben

license: http://ckeditor.com/license

requires: 
  - core.config
  - core.plugins

provides: 
  - plugins.docprops.plugin

...
*/


CKEDITOR.plugins.add( 'docprops',
{
	init : function( editor )
	{
		var cmd = new CKEDITOR.dialogCommand( 'docProps' );
		// Only applicable on full page mode.
		cmd.modes = { wysiwyg : editor.config.fullPage };
		editor.addCommand( 'docProps', cmd );
		CKEDITOR.dialog.add( 'docProps', this.path + 'dialogs/docprops.js' );

		editor.ui.addButton( 'DocProps',
		{
			label : editor.lang.docprops.label,
			command : 'docProps'
		});
	}
});
