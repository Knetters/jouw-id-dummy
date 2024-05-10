import path from 'node:path';
import * as url from 'node:url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

/** @type {import('next').NextConfig} */

const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
        additionalData: '@import "@/styles/base/variables.scss"; @import "@/styles/mixins/index.scss";',
    },
    ...(process.env.NEXT_PUBLIC_OUTPUT ? {output: process.env.NEXT_PUBLIC_OUTPUT}: {}),
    distDir: (process.env.NEXT_PUBLIC_DISTDIR ? process.env.NEXT_PUBLIC_DISTDIR : undefined),
    webpack(config) {
        // Grab the existing rule that handles SVG imports
        const fileLoaderRule = config.module.rules.find(rule =>
            rule.test?.test?.('.svg'),
        );

        config.module.rules.push(
            // Reapply the existing rule, but only for svg imports ending in ?url
            {
                ...fileLoaderRule,
                test: /\.svg$/i,
                resourceQuery: /url/, // *.svg?url
            },
            // Convert all other *.svg imports to React components
            {
                test: /\.svg$/i,
                issuer: fileLoaderRule.issuer,
                resourceQuery: {
                    not: [...fileLoaderRule.resourceQuery.not, /url/],
                }, // exclude if *.svg?url
                use: ['@svgr/webpack'],
            },
        );

        // Modify the file loader rule to ignore *.svg, since we have it handled now.
        fileLoaderRule.exclude = /\.svg$/i;

        return config;
    },
};

export default nextConfig;