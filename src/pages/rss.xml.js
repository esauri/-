import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export async function GET(context) {
	const projects = await getCollection('projects');

	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: projects.map(({ description, pubDate, slug, title }) => ({
			description,
			link: `/projects/${slug}`,
			pubDate,
			title,
		})),
	});
}
