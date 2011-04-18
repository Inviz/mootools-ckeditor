/*
---

script: plugins/wsc/plugin

description: Some file that does something

author: Frederico Knabben

license: http://ckeditor.com/license

provides: 
  - plugins.wsc.plugin

...
*/
﻿

/**
 * @file Spell checker
 */

// Register a plugin named "wsc".
CKEDITOR.plugins.add( 'wsc',
{
	requires  [ 'dialog' ],
	init  function( editor )
	{
		var commandName = 'checkspell';

		var command = editor.addCommand( commandName, new CKEDITOR.dialogCommand( commandName ) );

		// SpellChecker doesn't work in Opera and with custom domain
		command.modes = { wysiwyg  ( !CKEDITOR.env.opera && !CKEDITOR.env.air && document.domain == window.location.hostname ) };

		editor.ui.addButton( 'SpellChecker',
			{
				label  editor.lang.spellCheck.toolbar,
				command  commandName
			});
		CKEDITOR.dialog.add( commandName, this.path + 'dialogs/wsc.js' );
	}
});

CKEDITOR.config.wsc_customerId			= CKEDITOR.config.wsc_customerId || '1ua3xw1-2XyGJ3-GWruD3-6OFNT1-oXcuB1-nR6Bp4-hgQHc-EcYng3-sdRXG3-NOfFk' ;
CKEDITOR.config.wsc_customLoaderScript	= CKEDITOR.config.wsc_customLoaderScript || null;
