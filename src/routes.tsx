import { RouteObject } from "react-router-dom";
import { t } from "@lingui/macro";

import BasicTemplate from '@/templates/basic';
import Home from '@/scenes/home';
import Contact from '@/scenes/contact';
import NotFound from '@/scenes/not_found';

interface RouteHandle {
	title: () => string;
};

const routes: RouteObject[] = [
	{
		element: <BasicTemplate />,
		children: [
			{
				path: "/",
				element: <Home />,
				handle: {
					title: () => t`title.home`,
				} satisfies RouteHandle,
			},
			{
				path: "/contact",
				element: <Contact />,
				handle: {
					title: () => t`title.contact`,
				} satisfies RouteHandle,
			},
			{
				path: "*",
				element: <NotFound />,
				handle: {
					title: () => t`title.404`,
				} satisfies RouteHandle,
			},
		]
	},
];

export { type RouteHandle, routes };