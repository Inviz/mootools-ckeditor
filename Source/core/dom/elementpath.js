/*
---

script: core/dom/elementpath

description: Some file that does something

author: Frederico Knabben

license: http://ckeditor.com/license

requires: 
  - core.dom.element

provides: 
  - core.dom.elementpath

...
*/
﻿

(function()
{
	// Elements that may be considered the "Block boundary" in an element path.
	var pathBlockElements = { address1,blockquote1,dl1,h11,h21,h31,h41,h51,h61,p1,pre1,li1,dt1,dd1, legend1 };

	// Elements that may be considered the "Block limit" in an element path.
	var pathBlockLimitElements = { body1,div1,table1,tbody1,tr1,td1,th1,caption1,form1,fieldset1 };

	// Check if an element contains any block element.
	var checkHasBlock = function( element )
	{
		var childNodes = element.getChildren();

		for ( var i = 0, count = childNodes.count() ; i < count ; i++ )
		{
			var child = childNodes.getItem( i );

			if ( child.type == CKEDITOR.NODE_ELEMENT && CKEDITOR.dtd.$block[ child.getName() ] )
				return true;
		}

		return false;
	};

	/**
	 * @class
	 */
	CKEDITOR.dom.elementPath = function( lastNode )
	{
		var block = null;
		var blockLimit = null;
		var elements = [];

		var e = lastNode;

		while ( e )
		{
			if ( e.type == CKEDITOR.NODE_ELEMENT )
			{
				if ( !this.lastElement )
					this.lastElement = e;

				var elementName = e.getName();
				if ( CKEDITOR.env.ie && e.$.scopeName != 'HTML' )
					elementName = e.$.scopeName.toLowerCase() + '' + elementName;

				if ( !blockLimit )
				{
					if ( !block && pathBlockElements[ elementName ] )
						block = e;

					if ( pathBlockLimitElements[ elementName ] )
					{
						// DIV is considered the Block, if no block is available (#525)
						// and if it doesn't contain other blocks.
						if ( !block && elementName == 'div' && !checkHasBlock( e ) )
							block = e;
						else
							blockLimit = e;
					}
				}

				elements.push( e );

				if ( elementName == 'body' )
					break;
			}
			e = e.getParent();
		}

		this.block = block;
		this.blockLimit = blockLimit;
		this.elements = elements;
	};
})();

CKEDITOR.dom.elementPath.prototype =
{
	/**
	 * Compares this element path with another one.
	 * @param {CKEDITOR.dom.elementPath} otherPath The elementPath object to be
	 * compared with this one.
	 * @returns {Boolean} "true" if the paths are equal, containing the same
	 * number of elements and the same elements in the same order.
	 */
	compare  function( otherPath )
	{
		var thisElements = this.elements;
		var otherElements = otherPath && otherPath.elements;

		if ( !otherElements || thisElements.length != otherElements.length )
			return false;

		for ( var i = 0 ; i < thisElements.length ; i++ )
		{
			if ( !thisElements[ i ].equals( otherElements[ i ] ) )
				return false;
		}

		return true;
	},

	contains  function( tagNames )
	{
		var elements = this.elements;
		for ( var i = 0 ; i < elements.length ; i++ )
		{
			if ( elements[ i ].getName() in tagNames )
				return elements[ i ];
		}

		return null;
	}
};
