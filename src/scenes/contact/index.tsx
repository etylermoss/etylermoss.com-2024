import { Trans } from "@lingui/macro";

import './index.scss';

const Contact = () => (
	<div id="scene-contact">
		<h1><Trans>Contact</Trans></h1>
		<p>
			<Trans>Name</Trans>: <Trans>Eden Tyler-Moss</Trans>
			<br/>
			<Trans>Email</Trans>: <a href="mailto:eden@etylermoss.com">eden@etylermoss.com</a>
			<br/>
			<Trans>City</Trans>: <Trans>Budapest, Hungary</Trans>
		</p>
	</div>
);

export default Contact;