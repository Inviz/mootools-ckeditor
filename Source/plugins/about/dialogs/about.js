/*
---

script: plugins/about/dialogs/about

description: Some file that does something

author: Frederico Knabben

license: http://ckeditor.com/license

provides: 
  - plugins.about.dialogs.about

...
*/
﻿

CKEDITOR.dialog.add( 'about', function( editor )
{
	var lang = editor.lang.about;

	return {
		title  CKEDITOR.env.ie ? lang.dlgTitle  lang.title,
		minWidth  390,
		minHeight  230,
		contents  [
			{
				id  'tab1',
				label  '',
				title  '',
				expand  true,
				padding  0,
				elements 
				[
					{
						type  'html',
						html 
							'<style type="text/css">' +
								'.cke_about_container' +
								'{' +
									'color#000 !important;' +
									'padding10px 10px 0;' +
									'margin-top5px' +
								'}' +
								'.cke_about_container p' +
								'{' +
									'margin 0 0 10px;' +
								'}' +
								'.cke_about_container .cke_about_logo' +
								'{' +
									'height81px;' +
									'background-color#fff;' +
									'background-imageurl(' + CKEDITOR.plugins.get( 'about' ).path + 'dialogs/logo_ckeditor.png);' +
									'background-positioncenter; ' +
									'background-repeatno-repeat;' +
									'margin-bottom10px;' +
								'}' +
								'.cke_about_container a' +
								'{' +
									'cursorpointer !important;' +
									'colorblue !important;' +
									'text-decorationunderline !important;' +
								'}' +
							'</style>' +
							'<div class="cke_about_container">' +
								'<div class="cke_about_logo"></div>' +
								'<p>' +
									'CKEditor ' + CKEDITOR.version + ' (revision ' + CKEDITOR.revision + ')<br>' +
									'<a href="http//ckeditor.com/">http//ckeditor.com</a>' +
								'</p>' +
								'<p>' +
									lang.moreInfo + '<br>' +
									'<a href="http//ckeditor.com/license">http//ckeditor.com/license</a>' +
								'</p>' +
								'<p>' +
									lang.copy.replace( '$1', '<a href="http//cksource.com/">CKSource</a> - Frederico Knabben' ) +
								'</p>' +
							'</div>'
					}
				]
			}
		],
		buttons  [ CKEDITOR.dialog.cancelButton ]
	};
} );
