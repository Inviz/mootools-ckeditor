/*
---

script: core/dom/comment

description:  Defines the {@link CKEDITOR.dom.comment} class, which represents
              a DOM comment node.

author: Frederico Knabben

license: http://ckeditor.com/license

requires: 
  - core.dom.node

provides: 
  - core.dom.comment

...
*/
﻿



CKEDITOR.dom.comment = CKEDITOR.tools.createClass(
{
	base  CKEDITOR.dom.node,

	$  function( text, ownerDocument )
	{
		if ( typeof text == 'string' )
			text = ( ownerDocument ? ownerDocument.$  document ).createComment( text );

		this.base( text );
	},

	proto 
	{
		type  CKEDITOR.NODE_COMMENT,

		getOuterHtml  function()
		{
			return '<!--' + this.$.nodeValue + '-->';
		}
	}
});
