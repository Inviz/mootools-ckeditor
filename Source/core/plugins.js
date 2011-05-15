/*
---

script: core/plugins

description:  Defines the {@link CKEDITOR.plugins} object, which is used to
              manage plugins registration and loading.

author: Frederico Knabben

license: http://ckeditor.com/license

requires: 
  - core.resourcemanager
  - core.dtd
  - core.tools

provides: 
  - core.plugins

...
*/




/**
 * Manages plugins registration and loading.
 * @namespace
 * @augments CKEDITOR.resourceManager
 * @example
 */
CKEDITOR.plugins = new CKEDITOR.resourceManager(

	'plugins/', 'plugin' );

// PACKAGER_RENAME( CKEDITOR.plugins )

CKEDITOR.plugins.load = CKEDITOR.tools.override( CKEDITOR.plugins.load, function( originalLoad )
	{
		return function( name, callback, scope )
		{
			var allPlugins = {};

			var loadPlugins = function( names )
			{
				originalLoad.call( this, names, function( plugins )
					{
						CKEDITOR.tools.extend( allPlugins, plugins );

						var requiredPlugins = [];
						for ( var pluginName in plugins )
						{
							var plugin = plugins[ pluginName ],
								requires = plugin && plugin.requires;

							if ( requires )
							{
								for ( var i = 0 ; i < requires.length ; i++ )
								{
									if ( !allPlugins[ requires[ i ] ] )
										requiredPlugins.push( requires[ i ] );
								}
							}
						}

						if ( requiredPlugins.length )
							loadPlugins.call( this, requiredPlugins );
						else
						{
							// Call the "onLoad" function for all plugins.
							for ( pluginName in allPlugins )
							{
								plugin = allPlugins[ pluginName ];
								if ( plugin.onLoad && !plugin.onLoad._called )
								{
									plugin.onLoad();
									plugin.onLoad._called = 1;
								}
							}

							// Call the callback.
							if ( callback )
								callback.call( scope || window, allPlugins );
						}
					}
					, this);

			};

			loadPlugins.call( this, name );
		};
	});

CKEDITOR.plugins.setLang = function( pluginName, languageCode, languageEntries )
{
	var plugin = this.get( pluginName ),
		pluginLangEntries = plugin.langEntries || ( plugin.langEntries = {} ),
		pluginLang = plugin.lang || ( plugin.lang = [] );

	if ( CKEDITOR.tools.indexOf( pluginLang, languageCode ) == -1 )
		pluginLang.push( languageCode );

	pluginLangEntries[ languageCode ] = languageEntries;
};
