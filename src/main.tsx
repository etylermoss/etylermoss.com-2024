import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { createHashRouter, RouterProvider } from "react-router-dom";
import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";

import { routes } from '@/routes';
import { dynamicActivateLocale, getDefaultLocale } from "@/i18n";

import '@fontsource-variable/ubuntu-sans';

import './index.scss';

const router = createHashRouter(routes);

const App = () => {
	useEffect(() => {
		dynamicActivateLocale(getDefaultLocale());
	}, []);

	return (
		<StrictMode>
			<I18nProvider i18n={i18n}>
				<RouterProvider router={router}/>
			</I18nProvider>
		</StrictMode>
	);
};

createRoot(document.getElementById('root')!, {}).render(<App/>);