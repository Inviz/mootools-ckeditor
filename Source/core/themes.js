/*
---

script: core/themes

description:  Defines the {@link CKEDITOR.themes} object, which is used to
              manage themes registration and loading.

author: Frederico Knabben

license: http://ckeditor.com/license

requires: 
  - core.resourcemanager
  - core.tools

provides: 
  - core.themes

...
*/




/**
 * Manages themes registration and loading.
 * @namespace
 * @augments CKEDITOR.resourceManager
 * @example
 */
CKEDITOR.themes = new CKEDITOR.resourceManager(

	'themes/', 'theme' );
