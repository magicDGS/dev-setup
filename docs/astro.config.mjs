import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://magicDGS.github.io',
	base: 'dev-setup',
	integrations: [
		starlight({
			title: 'dev-setup',
			lastUpdated: true,
			pagination: false,
			social: {
				github: 'https://github.com/magicDGS/dev-setup',
			},
			sidebar: [
				{
					label: 'Environments',
					autogenerate: { directory: 'environment' },
				},
				{
					label: 'Tools',
					autogenerate: { directory: 'tool' }
				},
				{
					label: 'Utilities',
					autogenerate: { directory: 'utilities' },
				}
			],
		}),
	],
});
