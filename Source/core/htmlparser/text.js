/*
---

script: core/htmlparser/text

description: Some file that does something

author: Frederico Knabben

license: http://ckeditor.com/license

requires: 
  - core.htmlparser

provides: 
  - core.htmlparser.text

...
*/


(function()
{
	var spacesRegex = /[\t\r\n ]{2,}|[\t\r\n]/g;

	/**
	 * A lightweight representation of HTML text.
	 * @constructor
	 * @example
	 */
 	CKEDITOR.htmlParser.text = function( value )
	{
		/**
		 * The text value.
		 * @type String
		 * @example
		 */
		this.value = value;

		/** @private */
		this._ =
		{
			isBlockLike : false
		};
	};

	CKEDITOR.htmlParser.text.prototype =
	{
		/**
		 * The node type. This is a constant value set to {@link CKEDITOR.NODE_TEXT}.
		 * @type Number
		 * @example
		 */
		type : CKEDITOR.NODE_TEXT,

		/**
		 * Writes the HTML representation of this text to a CKEDITOR.htmlWriter.
		 * @param {CKEDITOR.htmlWriter} writer The writer to which write the HTML.
		 * @example
		 */
		writeHtml : function( writer, filter )
		{
			var text = this.value;

			if ( filter && !( text = filter.onText( text, this ) ) )
				return;

			writer.text( text );
		}
	};
})();
