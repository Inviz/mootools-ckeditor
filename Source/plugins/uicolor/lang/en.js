/*
---

script: plugins/uicolor/lang/en

description: Some file that does something

author: Frederico Knabben

license: http://ckeditor.com/license

requires: 
  - core.lang

provides: 
  - plugins.uicolor.lang.en

...
*/


CKEDITOR.plugins.setLang( 'uicolor', 'en',
{
	uicolor :
	{
		title : 'UI Color Picker',
		preview : 'Live preview',
		config : 'Paste this string into your config.js file',
		predefined : 'Predefined color sets'
	}
});
