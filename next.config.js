/** @type {import('next').NextConfig} */
const { configureRuntimeEnv } = require('next-runtime-env/build/configure');

configureRuntimeEnv();
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
    env:{
        baseUrl:"http://localhost:3000",
        abc:"1234"
    },
    publicRuntimeConfig:{
        Dummy_Val:"abcd"
    }
    
    
}

module.exports = nextConfig



