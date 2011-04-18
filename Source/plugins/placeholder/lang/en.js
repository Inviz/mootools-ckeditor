/*
---

script: plugins/placeholder/lang/en

description: Some file that does something

author: Frederico Knabben

license: http://ckeditor.com/license

provides: 
  - plugins.placeholder.lang.en

...
*/
﻿

CKEDITOR.plugins.setLang( 'placeholder', 'en',
{
	placeholder 
	{
		title		 'Placeholder Properties',
		toolbar		 'Create Placeholder',
		text		 'Placeholder Text',
		edit		 'Edit Placeholder',
		textMissing	 'The placeholder must contain text.'
	}
});
