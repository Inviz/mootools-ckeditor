/*
---

script: core/htmlparser/comment

description: Some file that does something

author: Frederico Knabben

license: http://ckeditor.com/license

requires: 
  - core.htmlparser

provides: 
  - core.htmlparser.comment

...
*/
﻿

/**
 * A lightweight representation of an HTML comment.
 * @constructor
 * @example
 */
CKEDITOR.htmlParser.comment = function( value )
{
	/**
	 * The comment text.
	 * @type String
	 * @example
	 */
	this.value = value;

	/** @private */
	this._ =
	{
		isBlockLike  false
	};
};

CKEDITOR.htmlParser.comment.prototype =
{
	/**
	 * The node type. This is a constant value set to {@link CKEDITOR.NODE_COMMENT}.
	 * @type Number
	 * @example
	 */
	type  CKEDITOR.NODE_COMMENT,

	/**
	 * Writes the HTML representation of this comment to a CKEDITOR.htmlWriter.
	 * @param {CKEDITOR.htmlWriter} writer The writer to which write the HTML.
	 * @example
	 */
	writeHtml  function( writer, filter )
	{
		var comment = this.value;

		if ( filter )
		{
			if ( !( comment = filter.onComment( comment, this ) ) )
				return;

			if ( typeof comment != 'string' )
			{
				comment.parent = this.parent;
				comment.writeHtml( writer, filter );
				return;
			}
		}

		writer.comment( comment );
	}
};
