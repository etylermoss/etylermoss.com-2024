import { Trans } from "@lingui/macro";

import './index.scss';

const Home = () => (
	<div id="scene-home">
		<div className="home-left">
			<div className="greeting">
				<span><Trans>Hello, Hallo, Hola</Trans></span>
				<h1><Trans>Eden Tyler-Moss</Trans></h1>
			</div>
			<p><Trans>Web developer from Yorkshire - living in Budapest - programming on the internet.</Trans></p>
			<p><Trans>See my {<a href="https://github.com/etylermoss/">Github</a>} for a look at some of what I've made and contributed to.</Trans></p>
		</div>
		<div className="home-right">
			<picture className="profile-image">
				<source srcSet="profile_picture-1024x1024.webp" type="image/webp" />
				<source srcSet="profile_picture-1024x1024.jpg"  type="image/jpeg" />
				<img src="profile_picture-1024x1024.jpg" />
			</picture>
		</div>
	</div>
);

export default Home;