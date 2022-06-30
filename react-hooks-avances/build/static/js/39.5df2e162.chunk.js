(this["webpackJsonp@mikecodeur/react-hooks-avances"]=this["webpackJsonp@mikecodeur/react-hooks-avances"]||[]).push([[39],{249:function(n,e,a){"use strict";a.r(e),a.d(e,"readingTime",(function(){return c})),a.d(e,"default",(function(){return r})),a.d(e,"tableOfContents",(function(){return u})),a.d(e,"frontMatter",(function(){return l}));var t=a(84),s=(a(0),a(328)),p=["components"],c={text:"1 min read",minutes:.85,time:51e3,words:170},o={};function r(n){var e=n.components,a=Object(t.a)(n,p);return Object(s.a)("wrapper",Object.assign({},o,a,{components:e,mdxType:"MDXLayout"}),Object(s.a)("h1",{id:"useimperativehandle"},"useImperativeHandle"),Object(s.a)("h3",{id:"-comprendre-useimperativehandle"},"\ud83d\udca1 Comprendre useImperativeHandle"),Object(s.a)("h2",{id:"-tes-notes"},"\ud83d\udcdd Tes notes"),Object(s.a)("p",null,"Detaille ce que tu as appris ici\n",Object(s.a)("inlineCode",{parentName:"p"},"src/exercise/05.md"),"ou\xa0sur\xa0une\xa0page\xa0",Object(s.a)("a",{parentName:"p",href:"https://go.mikecodeur.com/course-notes-template"},"Notion")),Object(s.a)("h2",{id:"comprendre"},"Comprendre"),Object(s.a)("p",null,Object(s.a)("inlineCode",{parentName:"p"},"useImperativeHandle")," permet de personnalis\xe9 l\u2019instance de ",Object(s.a)("inlineCode",{parentName:"p"},"ref")," du composant\nparent. Il est utilis\xe9 de pair avec ",Object(s.a)("inlineCode",{parentName:"p"},"React.forwardRef"),"."),Object(s.a)("blockquote",null,Object(s.a)("p",{parentName:"blockquote"},Object(s.a)("inlineCode",{parentName:"p"},"React.forwardRef")," cr\xe9e un composant React qui transf\xe8re la valeur de\nl\u2019attribut ",Object(s.a)("inlineCode",{parentName:"p"},"ref")," qu\u2019il re\xe7oit \xe0 un autre composant plus bas dans l\u2019arbre.\nCette technique est assez inhabituelle mais elle est particuli\xe8rement utile\ndans deux cas :")),Object(s.a)("ol",null,Object(s.a)("li",{parentName:"ol"},"Transf\xe9rer une r\xe9f\xe9rence \xe0 un composant DOM"),Object(s.a)("li",{parentName:"ol"},"Transf\xe9rer une r\xe9f\xe9rence au sein d\u2019un composant d\u2019ordre sup\xe9rieur")),Object(s.a)("pre",null,Object(s.a)("code",{parentName:"pre",className:"language-jsx","data-language":"jsx","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token keyword">function</span> <span class="token function">FancyInput</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> ref</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> inputRef <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function">useImperativeHandle</span><span class="token punctuation">(</span>ref<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>\n    <span class="token function-variable function">focus</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      inputRef<span class="token punctuation">.</span>current<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>inputRef<span class="token punctuation">}</span></span> <span class="token attr-name">...</span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\nFancyInput <span class="token operator">=</span> <span class="token function">forwardRef</span><span class="token punctuation">(</span>FancyInput<span class="token punctuation">)</span><span class="token punctuation">;</span>\n'}})),Object(s.a)("p",null,"\ud83d\udcd1 Le lien vers\n",Object(s.a)("a",{parentName:"p",href:"https://fr.reactjs.org/docs/hooks-reference.html#useimperativehandle"},"useImperativeHandle")),Object(s.a)("h2",{id:"exercice"},"Exercice"),Object(s.a)("p",null,"Dans cet exercice on va acc\xe9der depuis le composant parent aux r\xe9f\xe9rences des\ncomposants enfants."),Object(s.a)("pre",null,Object(s.a)("code",{parentName:"pre",className:"language-jsx","data-language":"jsx","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Composant</span></span> <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>composantRef<span class="token punctuation">}</span></span> <span class="token attr-name">onsubmit</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>setValue<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n<span class="token comment">//composantRef.current.focusInput()</span>\n<span class="token comment">//composantRef.current.focusButton()</span>\n<span class="token comment">//fait appel aux refs enfants</span>\n'}})),Object(s.a)("h2",{id:"-feedback"},"\ud83d\udc1c Feedback"),Object(s.a)("p",null,"Remplir le formulaire le\n",Object(s.a)("a",{parentName:"p",href:"https://go.mikecodeur.com/cours-react-avis?entry.1430994900=React%20Hooks%20Avanc%C3%A9s&entry.533578441=05%20useImperativeHandle"},"formulaire de FeedBack.")))}r.isMDXComponent=!0;var u=function(){return[{id:"-comprendre-useimperativehandle",level:3,title:"\ud83d\udca1 Comprendre useImperativeHandle",children:[]},{id:"-tes-notes",level:2,title:"\ud83d\udcdd Tes notes",children:[]},{id:"comprendre",level:2,title:"Comprendre",children:[]},{id:"exercice",level:2,title:"Exercice",children:[]},{id:"-feedback",level:2,title:"\ud83d\udc1c Feedback",children:[]}]},l={}},328:function(n,e,a){"use strict";a.d(e,"a",(function(){return d}));var t=a(0),s=a.n(t);function p(n,e,a){return e in n?Object.defineProperty(n,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[e]=a,n}function c(n,e){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.push.apply(a,t)}return a}function o(n){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?c(Object(a),!0).forEach((function(e){p(n,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))}))}return n}function r(n,e){if(null==n)return{};var a,t,s=function(n,e){if(null==n)return{};var a,t,s={},p=Object.keys(n);for(t=0;t<p.length;t++)a=p[t],e.indexOf(a)>=0||(s[a]=n[a]);return s}(n,e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(n);for(t=0;t<p.length;t++)a=p[t],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(n,a)&&(s[a]=n[a])}return s}var u=s.a.createContext({}),l=function(n){var e=s.a.useContext(u),a=e;return n&&(a="function"===typeof n?n(e):o(o({},e),n)),a},i={inlineCode:"code",wrapper:function(n){var e=n.children;return s.a.createElement(s.a.Fragment,{},e)}},m=s.a.forwardRef((function(n,e){var a=n.components,t=n.mdxType,p=n.originalType,c=n.parentName,u=r(n,["components","mdxType","originalType","parentName"]),m=l(a),d=t,f=m["".concat(c,".").concat(d)]||m[d]||i[d]||p;return a?s.a.createElement(f,o(o({ref:e},u),{},{components:a})):s.a.createElement(f,o({ref:e},u))}));function d(n,e){var a=arguments,t=e&&e.mdxType;if("string"===typeof n||t){var p=a.length,c=new Array(p);c[0]=m;var o={};for(var r in e)hasOwnProperty.call(e,r)&&(o[r]=e[r]);o.originalType=n,o.mdxType="string"===typeof n?n:t,c[1]=o;for(var u=2;u<p;u++)c[u]=a[u];return s.a.createElement.apply(null,c)}return s.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);
//# sourceMappingURL=39.5df2e162.chunk.js.map