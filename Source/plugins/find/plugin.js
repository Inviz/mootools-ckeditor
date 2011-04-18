/*
---

script: plugins/find/plugin

description: Some file that does something

author: Frederico Knabben

license: http://ckeditor.com/license

provides: 
  - plugins.find.plugin

...
*/


CKEDITOR.plugins.add( 'find',
{
	init : function( editor )
	{
		var forms = CKEDITOR.plugins.find;
		editor.ui.addButton( 'Find',
			{
				label : editor.lang.findAndReplace.find,
				command : 'find'
			});
		var findCommand = editor.addCommand( 'find', new CKEDITOR.dialogCommand( 'find' ) );
		findCommand.canUndo = false;

		editor.ui.addButton( 'Replace',
			{
				label : editor.lang.findAndReplace.replace,
				command : 'replace'
			});
		var replaceCommand = editor.addCommand( 'replace', new CKEDITOR.dialogCommand( 'replace' ) );
		replaceCommand.canUndo = false;

		CKEDITOR.dialog.add( 'find',	this.path + 'dialogs/find.js' );
		CKEDITOR.dialog.add( 'replace',	this.path + 'dialogs/find.js' );
	},

	requires : [ 'styles' ]
} );

/**
 * Defines the style to be used to highlight results with the find dialog.
 * @type Object
 * @default { element : 'span', styles : { 'background-color' : '#004', 'color' : '#fff' } }
 * @example
 * // Highlight search results with blue on yellow.
 * config.find_highlight =
 *     {
 *         element : 'span',
 *         styles : { 'background-color' : '#ff0', 'color' : '#00f' }
 *     };
 */
CKEDITOR.config.find_highlight = { element : 'span', styles : { 'background-color' : '#004', 'color' : '#fff' } };
