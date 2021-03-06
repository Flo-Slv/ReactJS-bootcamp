// Composant Proxy
// http://localhost:3000/alone/exercise/01.js

import * as React from 'react'

// ð¶ CrÃ©Ã© un composant proxy 'Button' ayant la mÃªme implementaiton du bouton qu'actuellement
// ð¤ return <button>ð</button>

// ð¶ Remplace tous les `<button>ð</button>` par le proxy composant 'Button'

const Button = () => {
	return <input
		type="button"
		value="ð"
		style={{
			backgroundColor: 'lightblue',
			border: 'none',
			padding: '6px 6px',
			cursor: 'pointer'
		}}
	/>
};

const Header = () => {
	return <div>
		<h1>Welcome</h1>
		<Button />
	</div>;
};

const Content = () => {
	return <div>
		<h2>Articles</h2>
		<span>article 1</span>
		<Button />
		<span>article 2</span>
		<Button />
		<span>article 3</span>
		<Button />
	</div>;
};

const Footer = () => {
	return <div>
		<h3>Contact us</h3>
		<Button />
	</div>
};

const App = () => {
	return <React.Fragment>
		<Header />
		<Content />
		<Footer />
	</React.Fragment>
};

export default App;
