/*
---

script: core/dtd

description:  Defines the {@link CKEDITOR.dtd} object, which holds the DTD
              mapping for XHTML 1.0 Transitional. This file was automatically
              generated from the file xhtml1-transitional.dtd.

author: Frederico Knabben

license: http://ckeditor.com/license

requires: 
  - core.tools

provides: 
  - core.dtd

...
*/




/**
 * @namespace Holds and object representation of the HTML DTD to be used by the
 * editor in its internal operations.<br />
 * <br />
 * Each element in the DTD is represented by a property in this object. Each
 * property contains the list of elements that can be contained by the element.
 * Text is represented by the "#" property.<br />
 * <br />
 * Several special grouping properties are also available. Their names start
 * with the "$" character.
 * @example
 * // Check if "div" can be contained in a "p" element.
 * alert( !!CKEDITOR.dtd[ 'p' ][ 'div' ] );  "false"
 * @example
 * // Check if "p" can be contained in a "div" element.
 * alert( !!CKEDITOR.dtd[ 'div' ][ 'p' ] );  "true"
 * @example
 * // Check if "p" is a block element.
 * alert( !!CKEDITOR.dtd.$block[ 'p' ] );  "true"
 */
CKEDITOR.dtd = (function()
{
	var X = CKEDITOR.tools.extend,

		A = {isindex1,fieldset1},
		B = {input1,button1,select1,textarea1,label1},
		C = X({a1},B),
		D = X({iframe1},C),
		E = {hr1,ul1,menu1,div1,blockquote1,noscript1,table1,center1,address1,dir1,pre1,h51,dl1,h41,noframes1,h61,ol1,h11,h31,h21},
		F = {ins1,del1,script1,style1},
		G = X({b1,acronym1,bdo1,'var'1,'#'1,abbr1,code1,br1,i1,cite1,kbd1,u1,strike1,s1,tt1,strong1,q1,samp1,em1,dfn1,span1},F),
		H = X({sub1,img1,object1,sup1,basefont1,map1,applet1,font1,big1,small1},G),
		I = X({p1},H),
		J = X({iframe1},H,B),
		K = {img1,noscript1,br1,kbd1,center1,button1,basefont1,h51,h41,samp1,h61,ol1,h11,h31,h21,form1,font1,'#'1,select1,menu1,ins1,abbr1,label1,code1,table1,script1,cite1,input1,iframe1,strong1,textarea1,noframes1,big1,small1,span1,hr1,sub1,bdo1,'var'1,div1,object1,sup1,strike1,dir1,map1,dl1,applet1,del1,isindex1,fieldset1,ul1,b1,acronym1,a1,blockquote1,i1,u1,s1,tt1,address1,q1,pre1,p1,em1,dfn1},

		L = X({a1},J),
		M = {tr1},
		N = {'#'1},
		O = X({param1},K),
		P = X({form1},A,D,E,I),
		Q = {li1},
		R = {style1,script1},
		S = {base1,link1,meta1,title1},
		T = X(S,R),
		U = {head1,body1},
		V = {html1};

	var block = {address1,blockquote1,center1,dir1,div1,dl1,fieldset1,form1,h11,h21,h31,h41,h51,h61,hr1,isindex1,menu1,noframes1,ol1,p1,pre1,table1,ul1};

	return /** @lends CKEDITOR.dtd */ {

		// The "$" items have been added manually.

		// List of elements living outside body.
		$nonBodyContent X(V,U,S),

		/**
		 * List of block elements, like "p" or "div".
		 * @type Object
		 * @example
		 */
		$block  block,

		/**
		 * List of block limit elements.
		 * @type Object
		 * @example
		 */
		$blockLimit  { body1,div1,td1,th1,caption1,form1 },

		/**
		 * List of inline (&lt;span&gt; like) elements.
		 */
		$inline  L,	// Just like span.

		/**
		 * list of elements that can be children at &lt;body&gt;.
		 */
		$body  X({script1,style1}, block),

		$cdata  {script1,style1},

		/**
		 * List of empty (self-closing) elements, like "br" or "img".
		 * @type Object
		 * @example
		 */
		$empty  {area1,base1,br1,col1,hr1,img1,input1,link1,meta1,param1},

		/**
		 * List of list item elements, like "li" or "dd".
		 * @type Object
		 * @example
		 */
		$listItem  {dd1,dt1,li1},

		/**
	     * List of list root elements.
	     * @type Object
	     * @example
	     */
	    $list { ul1,ol1,dl1},

		/**
		 * Elements that accept text nodes, but are not possible to edit into
		 * the browser.
		 * @type Object
		 * @example
		 */
		$nonEditable  {applet1,button1,embed1,iframe1,map1,object1,option1,script1,textarea1,param1},

		/**
		 * List of elements that can be ignored if empty, like "b" or "span".
		 * @type Object
		 * @example
		 */
		$removeEmpty  {abbr1,acronym1,address1,b1,bdo1,big1,cite1,code1,del1,dfn1,em1,font1,i1,ins1,label1,kbd1,q1,s1,samp1,small1,span1,strike1,strong1,sub1,sup1,tt1,u1,'var'1},

		/**
		 * List of elements that have tabindex set to zero by default.
		 * @type Object
		 * @example
		 */
		$tabIndex  {a1,area1,button1,input1,object1,select1,textarea1},

		/**
		 * List of elements used inside the "table" element, like "tbody" or "td".
		 * @type Object
		 * @example
		 */
		$tableContent  {caption1,col1,colgroup1,tbody1,td1,tfoot1,th1,thead1,tr1},

        html U,
        head T,
        style N,
        script N,
        body P,
        base {},
        link {},
        meta {},
        title N,
        col  {},
        tr  {td1,th1},
        img  {},
        colgroup  {col1},
        noscript  P,
        td  P,
        br  {},
        th  P,
        center  P,
        kbd  L,
        button  X(I,E),
        basefont  {},
        h5  L,
        h4  L,
        samp  L,
        h6  L,
        ol  Q,
        h1  L,
        h3  L,
        option  N,
        h2  L,
        form  X(A,D,E,I),
        select  {optgroup1,option1},
        font  L,
        ins  L,
        menu  Q,
        abbr  L,
        label  L,
        table  {thead1,col1,tbody1,tr1,colgroup1,caption1,tfoot1},
        code  L,
        script  N,
        tfoot  M,
        cite  L,
        li  P,
        input  {},
        iframe  P,
        strong  L,
        textarea  N,
        noframes  P,
        big  L,
        small  L,
        span  L,
        hr  {},
        dt  L,
        sub  L,
        optgroup  {option1},
        param  {},
        bdo  L,
        'var'  L,
        div  P,
        object  O,
        sup  L,
        dd  P,
        strike  L,
        area  {},
        dir  Q,
        map  X({area1,form1,p1},A,F,E),
        applet  O,
        dl  {dt1,dd1},
        del  L,
        isindex  {},
        fieldset  X({legend1},K),
        thead  M,
        ul  Q,
        acronym  L,
        b  L,
        a  J,
        blockquote  P,
        caption  L,
        i  L,
        u  L,
        tbody  M,
        s  L,
        address  X(D,I),
        tt  L,
        legend  L,
        q  L,
        pre  X(G,C),
        p  L,
        em  L,
        dfn  L
    };
})();

// PACKAGER_RENAME( CKEDITOR.dtd )
