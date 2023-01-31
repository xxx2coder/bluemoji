export default {
    head: {
        title: 'Test',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Nuxt.js project' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:400,700' }
        ]
    },

    ssr: false,

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