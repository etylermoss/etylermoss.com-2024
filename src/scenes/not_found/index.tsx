import { Trans } from "@lingui/macro";

import './index.scss';

const NotFound = () => (
	<div id="scene-not_found">
		<h1><Trans>Oops, page not found</Trans></h1>
		<p><Trans>I'm sure it's not your fault.</Trans></p>
	</div>
);

export default NotFound;