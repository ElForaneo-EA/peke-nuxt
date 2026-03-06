// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
const repository = process.env.GITHUB_REPOSITORY ?? '';
const [owner = '', repo = ''] = repository.split('/');
const isUserSite = owner && repo && repo.toLowerCase() === `${owner.toLowerCase()}.github.io`;

const site = owner ? `https://${owner}.github.io` : 'https://example.github.io';
const base = owner && repo && !isUserSite ? `/${repo}/` : '/';

export default defineConfig({
	site,
	base,
});
