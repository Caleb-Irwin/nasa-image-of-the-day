const API_ROUTE =
	'https://api.nasa.gov/planetary/apod?api_key=1g0kLCTn4xC1ZTfDVizSOL8ADXc4yyZbSdKKdFQm';

import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const res = await fetch(API_ROUTE);
	const { title, url } = await res.json();
	return {
		title,
		url
	};
};
