export default {
    generate: {},

    head: {
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:400,700' }
        ]
    },

    ssr: true,

    modules: [
        '@nuxtjs/tailwindcss'
    ],

    css: [
        '~/assets/css/tailwind.css',
    ],

    build: {
        postcss: {
            postcssOptions: require('./postcss.config.js'),
        },
    }
}