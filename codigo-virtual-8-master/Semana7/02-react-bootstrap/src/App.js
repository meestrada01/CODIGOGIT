import React from 'react';
import Header from './components/Header';
import Noticia from './components/Noticia';
import { noticias } from './data/noticias';

const App = () => {
	console.log(noticias);
	return (
		<>
			<Header />
			<main className="container">
				<div className="row">
					<div className="col-12">
						<h1 className="display-3">Noticias App</h1>
					</div>
				</div>
				<section className="row">
					{noticias.map((objNoticia, i) => {
						return <Noticia key={i} noti={objNoticia} />;
					})}
				</section>
			</main>
		</>
	);
};

export default App;
