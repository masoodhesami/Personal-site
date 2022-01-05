/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    images: {
        domains: ['photos.app.goo.gl'],
    },
}
const withImages = require('next-images')
module.exports = withImages({});