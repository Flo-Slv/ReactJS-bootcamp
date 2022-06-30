(this["webpackJsonp@mikecodeur/react-hooks-avances"]=this["webpackJsonp@mikecodeur/react-hooks-avances"]||[]).push([[38],{247:function(n,e,a){"use strict";a.r(e),a.d(e,"readingTime",(function(){return c})),a.d(e,"default",(function(){return r})),a.d(e,"tableOfContents",(function(){return u})),a.d(e,"frontMatter",(function(){return l}));var t=a(84),s=(a(0),a(328)),o=["components"],c={text:"2 min read",minutes:1.17,time:70200,words:234},p={};function r(n){var e=n.components,a=Object(t.a)(n,o);return Object(s.a)("wrapper",Object.assign({},p,a,{components:e,mdxType:"MDXLayout"}),Object(s.a)("h1",{id:"uselayouteffect"},"useLayoutEffect"),Object(s.a)("h3",{id:"-comprendre-uselayouteffect"},"\ud83d\udca1 Comprendre useLayoutEffect"),Object(s.a)("h2",{id:"-tes-notes"},"\ud83d\udcdd Tes notes"),Object(s.a)("p",null,"Detaille ce que tu as appris ici\n",Object(s.a)("inlineCode",{parentName:"p"},"src/exercise/04.md"),"ou\xa0sur\xa0une\xa0page\xa0",Object(s.a)("a",{parentName:"p",href:"https://go.mikecodeur.com/course-notes-template"},"Notion")),Object(s.a)("h2",{id:"comprendre"},"Comprendre"),Object(s.a)("p",null,Object(s.a)("inlineCode",{parentName:"p"},"useLayoutEffect")," et ",Object(s.a)("inlineCode",{parentName:"p"},"useEffect")," fonctionne de la m\xeame mani\xe8re mais ne s\u2019ex\xe9cute\npas dans la m\xeame phase (cf hooks-flow). ",Object(s.a)("inlineCode",{parentName:"p"},"useEffect")," fonctionne de mani\xe8re\nasynchrone apr\xe8s le rendu du navigateur. Tandis que ",Object(s.a)("inlineCode",{parentName:"p"},"useLayoutEffect")," va\ns\u2019ex\xe9cuter de mani\xe8re synchrone juste apr\xe8s le chargement du DOM mais avant le\nrendu du navigateur. Mais pour \xe9viter de bloquer le chargement de la page, nous\ndevons toujours utiliser le hook ",Object(s.a)("inlineCode",{parentName:"p"},"useEffect"),"."),Object(s.a)("pre",null,Object(s.a)("code",{parentName:"pre",className:"language-jsx","data-language":"jsx","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token function">useLayoutEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>dependances<span class="token punctuation">]</span><span class="token punctuation">)</span>\n'}})),Object(s.a)("p",null,"\ud83d\udcd1 Le lien vers\n",Object(s.a)("a",{parentName:"p",href:"https://fr.reactjs.org/docs/hooks-reference.html#uselayouteffect"},"useLayoutEffect")),Object(s.a)("h2",{id:"exercice"},"Exercice"),Object(s.a)("p",null,"Dans cet exercice nous allons simuler un composant qui est lent \xe0 l\u2019affichage\npour simuler un composant complexe. Ce composant est bloquant pendant 2.5\nsecondes."),Object(s.a)("pre",null,Object(s.a)("code",{parentName:"pre",className:"language-jsx","data-language":"jsx","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token keyword">function</span> <span class="token function">ComposantLent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  React<span class="token punctuation">.</span><span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token comment">//longue action</span>\n    <span class="token keyword">const</span> end <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">2500</span>\n    <span class="token keyword">while</span> <span class="token punctuation">(</span>Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> end<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token keyword">return</span> <span class="token keyword">null</span>\n<span class="token punctuation">}</span>\n'}})),Object(s.a)("p",null,"Nous avons \xe9galement un formulaire avec un bouton ",Object(s.a)("inlineCode",{parentName:"p"},"submit")," qui d\xe9clenche\nl\u2019action longue. Notre objectif est de remettre le focus sur le champs input\nautomatiquement apr\xe8s le clique sur le bouton (",Object(s.a)("em",{parentName:"p"},"qui nous fait perdre le focus"),")"),Object(s.a)("pre",null,Object(s.a)("code",{parentName:"pre",className:"language-jsx","data-language":"jsx","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token keyword">const</span> ref <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\nReact<span class="token punctuation">.</span><span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  ref<span class="token punctuation">.</span>current<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n'}})),Object(s.a)("p",null,"Le comportement est un peu probl\xe9matique car avec ",Object(s.a)("inlineCode",{parentName:"p"},"useEffect")," on est oblig\xe9\nd\u2019attendre la fin du rendu global. (plus de 2.5 secondes) . Testons avec\n",Object(s.a)("inlineCode",{parentName:"p"},"useLayoutEffect")),Object(s.a)("h2",{id:"-feedback"},"\ud83d\udc1c Feedback"),Object(s.a)("p",null,"Remplir le formulaire le\n",Object(s.a)("a",{parentName:"p",href:"https://go.mikecodeur.com/cours-react-avis?entry.1430994900=React%20Hooks%20Avanc%C3%A9s&entry.533578441=04%20useLayoutEffect"},"formulaire de FeedBack.")))}r.isMDXComponent=!0;var u=function(){return[{id:"-comprendre-uselayouteffect",level:3,title:"\ud83d\udca1 Comprendre useLayoutEffect",children:[]},{id:"-tes-notes",level:2,title:"\ud83d\udcdd Tes notes",children:[]},{id:"comprendre",level:2,title:"Comprendre",children:[]},{id:"exercice",level:2,title:"Exercice",children:[]},{id:"-feedback",level:2,title:"\ud83d\udc1c Feedback",children:[]}]},l={}},328:function(n,e,a){"use strict";a.d(e,"a",(function(){return d}));var t=a(0),s=a.n(t);function o(n,e,a){return e in n?Object.defineProperty(n,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[e]=a,n}function c(n,e){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.push.apply(a,t)}return a}function p(n){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?c(Object(a),!0).forEach((function(e){o(n,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))}))}return n}function r(n,e){if(null==n)return{};var a,t,s=function(n,e){if(null==n)return{};var a,t,s={},o=Object.keys(n);for(t=0;t<o.length;t++)a=o[t],e.indexOf(a)>=0||(s[a]=n[a]);return s}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(t=0;t<o.length;t++)a=o[t],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(n,a)&&(s[a]=n[a])}return s}var u=s.a.createContext({}),l=function(n){var e=s.a.useContext(u),a=e;return n&&(a="function"===typeof n?n(e):p(p({},e),n)),a},i={inlineCode:"code",wrapper:function(n){var e=n.children;return s.a.createElement(s.a.Fragment,{},e)}},f=s.a.forwardRef((function(n,e){var a=n.components,t=n.mdxType,o=n.originalType,c=n.parentName,u=r(n,["components","mdxType","originalType","parentName"]),f=l(a),d=t,m=f["".concat(c,".").concat(d)]||f[d]||i[d]||o;return a?s.a.createElement(m,p(p({ref:e},u),{},{components:a})):s.a.createElement(m,p({ref:e},u))}));function d(n,e){var a=arguments,t=e&&e.mdxType;if("string"===typeof n||t){var o=a.length,c=new Array(o);c[0]=f;var p={};for(var r in e)hasOwnProperty.call(e,r)&&(p[r]=e[r]);p.originalType=n,p.mdxType="string"===typeof n?n:t,c[1]=p;for(var u=2;u<o;u++)c[u]=a[u];return s.a.createElement.apply(null,c)}return s.a.createElement.apply(null,a)}f.displayName="MDXCreateElement"}}]);
//# sourceMappingURL=38.05cbf9b8.chunk.js.map