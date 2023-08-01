/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
                sans: [
                    'Helvetica Neue',
                    'Arial',
                    'Hiragino Kaku Gothic ProN',
                    'Hiragino Sans',
                    'Meiryo',
                    'sans-serif',
                    'system-ui'
                ],
                mono: [
                    'Consolas',
                    'Courier New',
                    'Courier',
                    'Monaco',
                    'monospace',
                    'Helvetica Neue',
                    'Arial',
                    'Hiragino Kaku Gothic ProN',
                    'Hiragino Sans',
                    'Meiryo',
                    'sans-serif',
                    'system-ui'
                ]
            }
        }
    },
    plugins: []
}
