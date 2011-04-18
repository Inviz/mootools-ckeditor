/*
---

script: core/dom/nodelist

description: Some file that does something

author: Frederico Knabben

license: http://ckeditor.com/license

requires: 
  - core.dom.node

provides: 
  - core.dom.nodelist

...
*/


/**
 * @class
 */
CKEDITOR.dom.nodeList = function( nativeList )
{
	this.$ = nativeList;
};

CKEDITOR.dom.nodeList.prototype =
{
	count : function()
	{
		return this.$.length;
	},

	getItem : function( index )
	{
		var $node = this.$[ index ];
		return $node ? new CKEDITOR.dom.node( $node ) : null;
	}
};
