/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['lh3.googleusercontent.com']
    },
    serverRuntimeConfig: {
        apiUrl: process.env.NEXT_SERVER_API_URL
    },
    publicRuntimeConfig: {
        apiUrl: process.env.NEXT_PUBLIC_API_URL
    },
}

module.exports = nextConfig
