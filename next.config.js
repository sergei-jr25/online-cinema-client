/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  optimizeFonts: false,
  poweredByHeader: false,
  env: {
    APP_URL: process.env.REACT_APP_URL,
    APP_ENV: process.env.REACT_APP_ENV,
    APP_SERVER_URL: process.env.REACT_APP_SERVER_URL  
  },
  
  async rewrites() {
  
    return [ 
      {  source : '/uploads/:path*',
      destination: 'http://localhost:4200/uploads/:path*',
 
    },
    {  source : '/api/:path*',
      destination: 'http://localhost:4200/api/:path*',
     },
   
    ]
 }
   
   
}

module.exports = nextConfig
