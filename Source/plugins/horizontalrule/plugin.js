/*
---

script: plugins/horizontalrule/plugin

description: Some file that does something

author: Frederico Knabben

license: http://ckeditor.com/license

provides: 
  - plugins.horizontalrule.plugin

...
*/


/**
 * @file Horizontal Rule plugin.
 */

(function()
{
	var horizontalruleCmd =
	{
		canUndo : false,    // The undo snapshot will be handled by 'insertElement'.
		exec : function( editor )
		{
			editor.insertElement( editor.document.createElement( 'hr' ) );
		}
	};

	var pluginName = 'horizontalrule';

	// Register a plugin named "horizontalrule".
	CKEDITOR.plugins.add( pluginName,
	{
		init : function( editor )
		{
			editor.addCommand( pluginName, horizontalruleCmd );
			editor.ui.addButton( 'HorizontalRule',
				{
					label : editor.lang.horizontalrule,
					command : pluginName
				});
		}
	});
})();
