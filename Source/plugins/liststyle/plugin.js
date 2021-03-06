/*
---

script: plugins/liststyle/plugin

description: Some file that does something

author: Frederico Knabben

license: http://ckeditor.com/license

requires: 
  - core.config
  - core.dom.walker
  - core.plugins

provides: 
  - plugins.liststyle.plugin

...
*/


;(function()
{
	CKEDITOR.plugins.liststyle =
	{
		requires : [ 'dialog' ],
		init : function( editor )
		{
			editor.addCommand( 'numberedListStyle', new CKEDITOR.dialogCommand( 'numberedListStyle' ) );
			CKEDITOR.dialog.add( 'numberedListStyle', this.path + 'dialogs/liststyle.js' );
			editor.addCommand( 'bulletedListStyle', new CKEDITOR.dialogCommand( 'bulletedListStyle' ) );
			CKEDITOR.dialog.add( 'bulletedListStyle', this.path + 'dialogs/liststyle.js' );

			// If the "menu" plugin is loaded, register the menu items.
			if ( editor.addMenuItems )
			{
				//Register map group;
				editor.addMenuGroup("list", 108);

				editor.addMenuItems(
					{
						numberedlist :
						{
							label : editor.lang.list.numberedTitle,
							group : 'list',
							command: 'numberedListStyle'
						},
						bulletedlist :
						{
							label : editor.lang.list.bulletedTitle,
							group : 'list',
							command: 'bulletedListStyle'
						}
					});
			}

			// If the "contextmenu" plugin is loaded, register the listeners.
			if ( editor.contextMenu )
			{
				editor.contextMenu.addListener( function( element, selection )
					{
						if ( !element || element.isReadOnly() )
							return null;

						while ( element )
						{
							var name = element.getName();
							if ( name == 'ol' )
								return { numberedlist: CKEDITOR.TRISTATE_OFF };
							else if ( name == 'ul' )
								return { bulletedlist: CKEDITOR.TRISTATE_OFF };

							element = element.getParent();
						}
						return null;
					});
			}
		}
	};

	CKEDITOR.plugins.add( 'liststyle', CKEDITOR.plugins.liststyle );
})();
