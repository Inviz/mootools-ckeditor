/*
---

script: core/htmlparser/cdata

description: Some file that does something

author: Frederico Knabben

license: http://ckeditor.com/license

requires: 
  - core.htmlparser
  - core.htmlparser

provides: 
  - core.htmlparser.cdata

...
*/


;(function()
{

	/**
	 * A lightweight representation of HTML text.
	 * @constructor
	 * @example
	 */
	CKEDITOR.htmlParser.cdata = function( value )
	{
		/**
		 * The CDATA value.
		 * @type String
		 * @example
		 */
		this.value = value;
	};

	CKEDITOR.htmlParser.cdata.prototype =
	{
		/**
		 * CDATA has the same type as {@link CKEDITOR.htmlParser.text} This is
		 * a constant value set to {@link CKEDITOR.NODE_TEXT}.
		 * @type Number
		 * @example
		 */
		type : CKEDITOR.NODE_TEXT,

		/**
		 * Writes write the CDATA with no special manipulations.
		 * @param {CKEDITOR.htmlWriter} writer The writer to which write the HTML.
		 */
		writeHtml : function( writer )
		{
			writer.write( this.value );
		}
	};
})();
