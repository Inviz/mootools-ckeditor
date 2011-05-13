/*
---

script: plugins/devtools/lang/en

description: Some file that does something

author: Frederico Knabben

license: http://ckeditor.com/license

requires: 
  - core.lang

provides: 
  - plugins.devtools.lang.en

...
*/


CKEDITOR.plugins.setLang( 'devtools', 'en',
{
	devTools :
	{
		title		: 'Element Information',
		dialogName	: 'Dialog window name',
		tabName		: 'Tab name',
		elementId	: 'Element ID',
		elementType	: 'Element type'
	}
});
