import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'dev-setup',
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
					autogenerate: { directory: 'tool'}
				}
			],
		}),
	],
});