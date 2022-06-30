(this["webpackJsonp@mikecodeur/react-hooks-avances"]=this["webpackJsonp@mikecodeur/react-hooks-avances"]||[]).push([[35],{240:function(n,a,e){"use strict";e.r(a),e.d(a,"readingTime",(function(){return o})),e.d(a,"default",(function(){return l})),e.d(a,"tableOfContents",(function(){return u})),e.d(a,"frontMatter",(function(){return r}));var t=e(84),s=(e(0),e(328)),p=["components"],o={text:"4 min read",minutes:3.975,time:238500,words:795},c={};function l(n){var a=n.components,e=Object(t.a)(n,p);return Object(s.a)("wrapper",Object.assign({},c,e,{components:a,mdxType:"MDXLayout"}),Object(s.a)("h3",{id:"-comprendre-le-hook-usereducer"},"\ud83d\udca1 Comprendre le Hook useReducer"),Object(s.a)("h2",{id:"-tes-notes"},"\ud83d\udcdd Tes notes"),Object(s.a)("p",null,"Detaille ce que tu as appris ici\n",Object(s.a)("inlineCode",{parentName:"p"},"src/exercise/01.md"),"ou\xa0sur\xa0une\xa0page\xa0",Object(s.a)("a",{parentName:"p",href:"https://go.mikecodeur.com/course-notes-template"},"Notion")),Object(s.a)("h2",{id:"comprendre"},"Comprendre"),Object(s.a)("p",null,Object(s.a)("strong",{parentName:"p"},"1.Qu\u2019est ce qu\u2019un r\xe9ducteur (",Object(s.a)("inlineCode",{parentName:"strong"},"reducer"),") ?")),Object(s.a)("p",null,"Un \u201cr\xe9ducteur\u201d est un mot compliqu\xe9 pour dire une fonction qui prend 2 valeurs\net renvoie 1 valeur. Voyons avec la m\xe9thode ",Object(s.a)("inlineCode",{parentName:"p"},"reduce")," disponible sur ",Object(s.a)("inlineCode",{parentName:"p"},"Array")," qui\nprend en param\xe8tre un ",Object(s.a)("inlineCode",{parentName:"p"},"reducer.")),Object(s.a)("pre",null,Object(s.a)("code",{parentName:"pre",className:"language-jsx","data-language":"jsx","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token keyword">let</span> numbers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>\n<span class="token keyword">const</span> <span class="token function-variable function">reducer</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">total<span class="token punctuation">,</span> number</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> total <span class="token operator">+</span> number\n<span class="token punctuation">}</span>\n<span class="token keyword">let</span> sum <span class="token operator">=</span> numbers<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span>reducer<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>\n'}})),Object(s.a)("p",null,Object(s.a)("inlineCode",{parentName:"p"},"reduce")," va parcourir chaque \xe9l\xe9ment du tableau et appliquer la fonction\n",Object(s.a)("inlineCode",{parentName:"p"},"reducer")," avec la valeur pr\xe9c\xe9dente (",Object(s.a)("inlineCode",{parentName:"p"},"return")," ) et la valeur courante.\nConcr\xe8tent voila ce qu\u2019il se passe dans notre cas. Le tableau contient 3\n\xe9l\xe9ments ",Object(s.a)("inlineCode",{parentName:"p"},"[1, 2, 3]"),", le ",Object(s.a)("inlineCode",{parentName:"p"},"reducer")," sera appeler 3 fois. La valeur initial est\n\xe0 0."),Object(s.a)("ul",null,Object(s.a)("li",{parentName:"ul"},"1er passage : ",Object(s.a)("inlineCode",{parentName:"li"},"(0, 1"),") retourne 1"),Object(s.a)("li",{parentName:"ul"},"2\xe8me passage : ",Object(s.a)("inlineCode",{parentName:"li"},"(1, 2)")," retourne 3"),Object(s.a)("li",{parentName:"ul"},"3\xe8me passage : ",Object(s.a)("inlineCode",{parentName:"li"},"(3, 3)")," retourne 6")),Object(s.a)("p",null,Object(s.a)("strong",{parentName:"p"},"2.",Object(s.a)("inlineCode",{parentName:"strong"},"useReducer")," est plus ou moins le m\xeame m\xe9canisme appliquer \xe0 des states.")),Object(s.a)("pre",null,Object(s.a)("code",{parentName:"pre",className:"language-jsx","data-language":"jsx","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token keyword">const</span> <span class="token punctuation">[</span>state<span class="token punctuation">,</span> dispatch<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useReducer</span><span class="token punctuation">(</span>reducer<span class="token punctuation">,</span> initialArg<span class="token punctuation">,</span> init<span class="token punctuation">)</span>\n'}})),Object(s.a)("p",null,"La chose la plus importante avec le hook ",Object(s.a)("inlineCode",{parentName:"p"},"useReducer")," est le reducer. Il s\u2019agit\nd\u2019une fonction qui prend le ",Object(s.a)("inlineCode",{parentName:"p"},"state")," initial en entr\xe9e, une ",Object(s.a)("inlineCode",{parentName:"p"},"action")," et qui\nretourne un nouveau state. La signature est : ",Object(s.a)("inlineCode",{parentName:"p"},"(state, action) => newStat"),"."),Object(s.a)("p",null,"\ud83d\udcd1 Le lien vers\n",Object(s.a)("a",{parentName:"p",href:"https://fr.reactjs.org/docs/hooks-reference.html#usereducer"},"useReducer")),Object(s.a)("h2",{id:"exercice"},"Exercice"),Object(s.a)("p",null,"Dans ce premier exercice tu vas devoir reproduire le comportement du hook\n",Object(s.a)("inlineCode",{parentName:"p"},"useState")," en utilisant ",Object(s.a)("inlineCode",{parentName:"p"},"useReducer"),". C\u2019est \xe0 dire que veut le m\xeame comportement\nsur ces 2 hooks."),Object(s.a)("pre",null,Object(s.a)("code",{parentName:"pre",className:"language-jsx","data-language":"jsx","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>\n<span class="token function">setCount</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>\n<span class="token function">setCount</span><span class="token punctuation">(</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>\n<span class="token comment">//et</span>\n<span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useReducer</span><span class="token punctuation">(</span>reducer<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>\n<span class="token function">setCount</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>\n<span class="token function">setCount</span><span class="token punctuation">(</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>\n'}})),Object(s.a)("p",null,"Il va donc falloir se concentrer sur la fonction ",Object(s.a)("inlineCode",{parentName:"p"},"reducer")),Object(s.a)("h2",{id:"bonus"},"Bonus"),Object(s.a)("h3",{id:"1--ajouter-un-type-daction"},"1. \ud83d\ude80 Ajouter un type d\u2019action"),Object(s.a)("p",null,"Dans cet exercice il va falloir utiliser l'",Object(s.a)("inlineCode",{parentName:"p"},"action")," (le deuxi\xe8me param\xe8tre du\n",Object(s.a)("inlineCode",{parentName:"p"},"reducer"),") pour sp\xe9cifier comment l\u2019on veut compter. incr\xe9menter, d\xe9cr\xe9menter,\nmettre \xe0 z\xe9ro. Pour cela on va passer en action un objet ",Object(s.a)("inlineCode",{parentName:"p"},"{type: 'DECREMENT'}"),"\nou ",Object(s.a)("inlineCode",{parentName:"p"},"{type: 'INCREMENT'}")," ou ",Object(s.a)("inlineCode",{parentName:"p"},"{type: 'RESET'}")),Object(s.a)("pre",null,Object(s.a)("code",{parentName:"pre",className:"language-jsx","data-language":"jsx","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token function">setCount</span><span class="token punctuation">(</span><span class="token punctuation">{</span>type<span class="token operator">:</span> <span class="token string">\'DECREMENT\'</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token function">setCount</span><span class="token punctuation">(</span><span class="token punctuation">{</span>type<span class="token operator">:</span> <span class="token string">\'INCREMENT\'</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token function">setCount</span><span class="token punctuation">(</span><span class="token punctuation">{</span>type<span class="token operator">:</span> <span class="token string">\'RESET\'</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n'}})),Object(s.a)("p",null,"Dans cet exercice tu vas devoir impl\xe9menter le ",Object(s.a)("inlineCode",{parentName:"p"},"reducer")," pour incr\xe9menter/\nd\xe9cr\xe9menter / mettre \xe0 z\xe9ro le state en fonction du type de l\u2019action. Utilise 3\nboutons ",Object(s.a)("inlineCode",{parentName:"p"},"input")," pour tester les 3 actions avec\n",Object(s.a)("inlineCode",{parentName:"p"},"onClick={() => setCount({type: 'DECREMENT'})")),Object(s.a)("pre",null,Object(s.a)("code",{parentName:"pre",className:"language-jsx","data-language":"jsx","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token keyword">const</span> <span class="token function-variable function">reducer</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> action</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token comment">// teste action.type</span>\n  <span class="token comment">// applique une op\xe9ration sur le state (incr\xe9mentation etc ...)</span>\n  <span class="token comment">// return le nouveau state</span>\n  <span class="token comment">// ex : return state + 1</span>\n<span class="token punctuation">}</span>\n'}})),Object(s.a)("h3",{id:"2--fonction-disptach"},"2. \ud83d\ude80 Fonction disptach"),Object(s.a)("p",null,"Renommons ",Object(s.a)("inlineCode",{parentName:"p"},"setCount")," en ",Object(s.a)("inlineCode",{parentName:"p"},"disptach"),". c\u2019est comme cela que l\u2019on pr\xe9sente souvent\nle ",Object(s.a)("inlineCode",{parentName:"p"},"useReducer"),"."),Object(s.a)("pre",null,Object(s.a)("code",{parentName:"pre",className:"language-jsx","data-language":"jsx","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> dispatch<span class="token punctuation">]</span> <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useReducer</span><span class="token punctuation">(</span>reducer<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>\n<span class="token comment">//...</span>\nonClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span>type<span class="token operator">:</span> <span class="token string">\'INCREMENT\'</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n'}})),Object(s.a)("p",null,"Nous voulons \xe9viter s\u2019avoir \xe0 r\xe9utiliser partout dans le code :\n",Object(s.a)("inlineCode",{parentName:"p"},"dispatch({type: 'INCREMENT'})"),". Pour plus de clart\xe9 du code il est possible de\npasser par une ",Object(s.a)("inlineCode",{parentName:"p"},"fonction dispatch"),"."),Object(s.a)("pre",null,Object(s.a)("code",{parentName:"pre",className:"language-jsx","data-language":"jsx","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token keyword">function</span> <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span>type<span class="token operator">:</span> <span class="token string">\'INCREMENT\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n'}})),Object(s.a)("p",null,"Dans cet exercice tu vas devoir cr\xe9er et utiliser les 3 fonctions ",Object(s.a)("inlineCode",{parentName:"p"},"disptach")),Object(s.a)("ul",null,Object(s.a)("li",{parentName:"ul"},Object(s.a)("inlineCode",{parentName:"li"},"increment()")),Object(s.a)("li",{parentName:"ul"},Object(s.a)("inlineCode",{parentName:"li"},"decrement()")),Object(s.a)("li",{parentName:"ul"},Object(s.a)("inlineCode",{parentName:"li"},"reset()"))),Object(s.a)("h3",{id:"3--payload-data"},"3. \ud83d\ude80 Payload data"),Object(s.a)("p",null,"Un cas d\u2019utilisation fr\xe9quent est de passer une valeur utile (",Object(s.a)("inlineCode",{parentName:"p"},"payload"),"). Par\nexemple si l\u2019on veut incr\xe9menter de 10. exemple : ",Object(s.a)("inlineCode",{parentName:"p"},"increment(10)"),". Pour cela il\nsuffit de mettre ce ",Object(s.a)("inlineCode",{parentName:"p"},"payload")," dans l\u2019action\n",Object(s.a)("inlineCode",{parentName:"p"},"dispatch({type: 'INCREMENT', payload:10).")," Dans cet exercice tu vas devoir\ng\xe9rer ce ",Object(s.a)("inlineCode",{parentName:"p"},"payload")," dans le ",Object(s.a)("inlineCode",{parentName:"p"},"reducer")," et les 3 fonctions."),Object(s.a)("pre",null,Object(s.a)("code",{parentName:"pre",className:"language-jsx","data-language":"jsx","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token function">increment</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token comment">//incr\xe9mente le compteur de 10</span>\n<span class="token function">decrement</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span> <span class="token comment">//d\xe9cremente le compteur de 5</span>\n<span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// reset</span>\n'}})),Object(s.a)("h3",{id:"4--passer-un-objet-state"},"4. \ud83d\ude80 Passer un objet state"),Object(s.a)("p",null,"Au lieu d\u2019avoir une valeur dans le state on pourrait avoir un objet (qui\ncontient d\u2019autres valeurs). Pour \xe9viter la confusion entre les noms nous allons\nchanger la d\xe9claration. renommons ",Object(s.a)("inlineCode",{parentName:"p"},"count")," en ",Object(s.a)("inlineCode",{parentName:"p"},"state")," et la count sera stoker\ndans le state: ",Object(s.a)("inlineCode",{parentName:"p"},"state.count")),Object(s.a)("pre",null,Object(s.a)("code",{parentName:"pre",className:"language-jsx","data-language":"jsx","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token keyword">const</span> <span class="token punctuation">[</span>state<span class="token punctuation">,</span> dispatch<span class="token punctuation">]</span> <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useReducer</span><span class="token punctuation">(</span>reducer<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>\n'}})),Object(s.a)("p",null,"Fais les modifications dans le reducer pour qu\u2019il retourne ",Object(s.a)("inlineCode",{parentName:"p"},"{count:'new state'}"),"\net ailleurs dans le code ",Object(s.a)("inlineCode",{parentName:"p"},"state.count")," au lieu de ",Object(s.a)("inlineCode",{parentName:"p"},"count"),". N\u2019oublie pas la\nvaleur par d\xe9faut"),Object(s.a)("h3",{id:"5--simulation-setstate"},"5. \ud83d\ude80 Simulation setState"),Object(s.a)("p",null,"Dans le module react-hooks dans la section refactoring Classe vers Hook du\nprojet calculette IOS, nous voulions refactorer ceci avec des hooks"),Object(s.a)("pre",null,Object(s.a)("code",{parentName:"pre",className:"language-jsx","data-language":"jsx","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'state <span class="token operator">=</span> <span class="token punctuation">{</span>\n  total<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>\n  next<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>\n  operation<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token function-variable function">handleClick</span> <span class="token operator">=</span> <span class="token parameter">buttonName</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token comment">//ceci met a jour les 3 states d\'un coup</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token function">calculate</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">,</span> buttonName<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token comment">//equivalent \xe0</span>\n  <span class="token comment">//this.setState({total,next,operation}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n'}})),Object(s.a)("p",null,"Nous avons vu que ceci avait un comportement l\xe9g\xe8rement diff\xe9rent"),Object(s.a)("pre",null,Object(s.a)("code",{parentName:"pre",className:"language-jsx","data-language":"jsx","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token keyword">const</span> <span class="token punctuation">[</span>total<span class="token punctuation">,</span> setTotal<span class="token punctuation">]</span> <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useState</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> <span class="token punctuation">[</span>next<span class="token punctuation">,</span> setNext<span class="token punctuation">]</span> <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useState</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> <span class="token punctuation">[</span>operation<span class="token punctuation">,</span> setOperation<span class="token punctuation">]</span> <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useState</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> objCalc <span class="token operator">=</span> <span class="token function">calculate</span><span class="token punctuation">(</span><span class="token punctuation">{</span>total<span class="token punctuation">,</span> next<span class="token punctuation">,</span> operation<span class="token punctuation">}</span><span class="token punctuation">,</span> buttonName<span class="token punctuation">)</span>\n\n<span class="token function">setTotal</span><span class="token punctuation">(</span>objCalc<span class="token punctuation">.</span>total<span class="token punctuation">)</span>\n<span class="token function">setNext</span><span class="token punctuation">(</span>objCalc<span class="token punctuation">.</span>next<span class="token punctuation">)</span>\n<span class="token function">setOperation</span><span class="token punctuation">(</span>objCalc<span class="token punctuation">.</span>operation<span class="token punctuation">)</span>\n'}})),Object(s.a)("p",null,"Dans cette exercice nous allons finir la refactorisation avec un \xe9quivalent de\n",Object(s.a)("inlineCode",{parentName:"p"},"setState")," via ",Object(s.a)("inlineCode",{parentName:"p"},"useReducer"),". Le principe etant de retourner dans le reducer\ntoutes les propri\xe9t\xe9s de state et d\u2019actions."),Object(s.a)("h2",{id:"-feedback"},"\ud83d\udc1c Feedback"),Object(s.a)("p",null,"Remplir le formulaire le\n",Object(s.a)("a",{parentName:"p",href:"https://go.mikecodeur.com/cours-react-avis?entry.1430994900=React%20Hooks%20Avanc%C3%A9s&entry.533578441=01%20useReducer%20:%20Alternative%20%C3%A0%20useState"},"formulaire de FeedBack.")))}l.isMDXComponent=!0;var u=function(){return[{id:"-comprendre-le-hook-usereducer",level:3,title:"\ud83d\udca1 Comprendre le Hook useReducer",children:[]},{id:"-tes-notes",level:2,title:"\ud83d\udcdd Tes notes",children:[]},{id:"comprendre",level:2,title:"Comprendre",children:[]},{id:"exercice",level:2,title:"Exercice",children:[]},{id:"bonus",level:2,title:"Bonus",children:[{id:"1--ajouter-un-type-daction",level:3,title:"1. \ud83d\ude80 Ajouter un type d\u2019action",children:[]},{id:"2--fonction-disptach",level:3,title:"2. \ud83d\ude80 Fonction disptach",children:[]},{id:"3--payload-data",level:3,title:"3. \ud83d\ude80 Payload data",children:[]},{id:"4--passer-un-objet-state",level:3,title:"4. \ud83d\ude80 Passer un objet state",children:[]},{id:"5--simulation-setstate",level:3,title:"5. \ud83d\ude80 Simulation setState",children:[]}]},{id:"-feedback",level:2,title:"\ud83d\udc1c Feedback",children:[]}]},r={}},328:function(n,a,e){"use strict";e.d(a,"a",(function(){return k}));var t=e(0),s=e.n(t);function p(n,a,e){return a in n?Object.defineProperty(n,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[a]=e,n}function o(n,a){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable}))),e.push.apply(e,t)}return e}function c(n){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?o(Object(e),!0).forEach((function(a){p(n,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(a){Object.defineProperty(n,a,Object.getOwnPropertyDescriptor(e,a))}))}return n}function l(n,a){if(null==n)return{};var e,t,s=function(n,a){if(null==n)return{};var e,t,s={},p=Object.keys(n);for(t=0;t<p.length;t++)e=p[t],a.indexOf(e)>=0||(s[e]=n[e]);return s}(n,a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(n);for(t=0;t<p.length;t++)e=p[t],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(s[e]=n[e])}return s}var u=s.a.createContext({}),r=function(n){var a=s.a.useContext(u),e=a;return n&&(e="function"===typeof n?n(a):c(c({},a),n)),e},i={inlineCode:"code",wrapper:function(n){var a=n.children;return s.a.createElement(s.a.Fragment,{},a)}},d=s.a.forwardRef((function(n,a){var e=n.components,t=n.mdxType,p=n.originalType,o=n.parentName,u=l(n,["components","mdxType","originalType","parentName"]),d=r(e),k=t,m=d["".concat(o,".").concat(k)]||d[k]||i[k]||p;return e?s.a.createElement(m,c(c({ref:a},u),{},{components:e})):s.a.createElement(m,c({ref:a},u))}));function k(n,a){var e=arguments,t=a&&a.mdxType;if("string"===typeof n||t){var p=e.length,o=new Array(p);o[0]=d;var c={};for(var l in a)hasOwnProperty.call(a,l)&&(c[l]=a[l]);c.originalType=n,c.mdxType="string"===typeof n?n:t,o[1]=c;for(var u=2;u<p;u++)o[u]=e[u];return s.a.createElement.apply(null,o)}return s.a.createElement.apply(null,e)}d.displayName="MDXCreateElement"}}]);
//# sourceMappingURL=35.9b2a139d.chunk.js.map