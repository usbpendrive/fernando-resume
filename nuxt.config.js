const webpack = require('webpack');

export default {
    titleTemplate: "Fernando's Resume",
    css: [
        { src:'bootstrap/scss/bootstrap.scss', lang: 'scss' },
        { src:'@/assets/scss/resume.scss', lang: 'scss' },
        { src:'@fortawesome/fontawesome-free/css/all.css', lang: 'scss'}
    ],
    head: {
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1"},
            { hid: "description", name: "description", content: "Fernando's Resume"},
            { name: 'msapplication-TileColor', content: '#da532c' },
            { name: 'theme-color', content: '#ffffff' }
        ],
        script: [
            { src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js", body: true},
            { src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.4/popper.min.js", body: true},
            { src: "https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js", body: true},
            { src: "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.min.js", body: true},
            { src: "js/resume.min.js", body: true }
        ],
        link: [
            { rel: 'stylesheet', href:'https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:500,700' },
            { rel: 'stylesheet', href:'https://fonts.googleapis.com/css?family=Muli:400,400i,800,800i' },
            { rel: 'favicon', type: 'image/png', sizes: '32x32', href: 'favicon-32x32.png' },
            { rel: 'favicon', type: 'image/png', sizes: '16x16', href: 'favicon-16x16.png' },
            { rel: 'apple-touch-icon', sizes: '180x180', href: 'apple-touch-icon.png' },
            { rel: 'manifest', href: 'site.webmanifest' },
            { rel: 'mask-icon', href: 'safari-pinned-tab.svg', color: '#5bbad5' },
        ],
        bodyAttrs: {
            id: 'page-top'
        }
    },
    build: {
        plugins: [
            new webpack.ProvidePlugin({
                jQuery: 'jquery',
                $: "jquery",
                'window.jquery': 'jquery',
            })
        ],
    }
}