/** @type {import('next').NextConfig} */

const Dotenv = require('dotenv-webpack');

const nextConfig = {
    // webpack:(config) => {
    //     new Dotenv({
    //         path: process.env.NODE_ENV == 'production'?'./.env.docker' :'./.env.local', // Path to .env file (this is the default)
    //     })

    //     return config
    // },
    images:{
        domains:["images.pexels.com","i.pinimg.com",],
        
    },
    output: 'standalone',
    
}

module.exports = nextConfig



