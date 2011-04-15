/*
---

script: plugins/a11yhelp/plugin

description:  Plugin definition for the a11yhelp, which provides a dialog
              with accessibility related help.

author: Frederico Knabben

license: http://ckeditor.com/license

provides: 
  - plugins.a11yhelp.plugin

...
*/
﻿



(function()
{
	var pluginName = 'a11yhelp',
		commandName = 'a11yHelp';

	CKEDITOR.plugins.add( pluginName,
	{
		// List of available localizations.
		availableLangs  { en:1, he:1 },

		init : function( editor )
		{
			var plugin = this;
			editor.addCommand( commandName,
				{
					exec : function()
					{
						var langCode = editor.langCode;
						langCode = plugin.availableLangs[ langCode ] ? langCode : 'en';

						CKEDITOR.scriptLoader.load(
								CKEDITOR.getUrl( plugin.path + 'lang/' + langCode + '.js' ),
								function()
								{
									CKEDITOR.tools.extend( editor.lang, plugin.langEntries[ langCode ] );
									editor.openDialog( commandName );
								});
					},
					modes : { wysiwyg:1, source:1 },
					canUndo : false
				});

			CKEDITOR.dialog.add( commandName, this.path + 'dialogs/a11yhelp.js' );
		}
	});
})();
