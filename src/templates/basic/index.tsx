import { useEffect } from "react";
import { Outlet, useMatches } from "react-router-dom";

import { RouteHandle } from '@/routes';

import Header from '@/components/header';
import Footer from '@/components/footer';

import './index.scss';

const BasicTemplate = () => {
	const matches = useMatches();
	const { handle } = matches[matches.length - 1]
	const title = (handle as RouteHandle).title();
	
	useEffect(() => {
		if (title) {
			document.title = title;
		}
	}, [title]);

	return (
		<div id="template-basic">
			<header>
				<Header/>
			</header>
			<main>
				<Outlet/>
			</main>
			<footer>
				<Footer/>
			</footer>
		</div>
	)
};

export default BasicTemplate;