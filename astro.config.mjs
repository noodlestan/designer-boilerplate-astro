// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import designerDecisionsIntegration from '@noodlestan/designer-integration-astro';

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: 'Foobar Design System',
            social: {
                github: 'https://github.com/noodlestan',
                discord: 'https://discord.gg/b8DkbJSF9z',
            },
            sidebar: [
                {
                    label: 'Identity',
                    slug: 'identity',
                },
                {
                    label: 'Foundations',
                    autogenerate: { directory: 'foundations' },
                },
            ],
            customCss: ['./src/styles/custom.css'],
        }),
        designerDecisionsIntegration({ styles: { applyStarlight: true } }),
    ],
});
