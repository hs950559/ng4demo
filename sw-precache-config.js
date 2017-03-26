module.exports = {
    navigateFallback: '/index.html',
    stripPrefix: 'dist',
    root: 'dist/',
    staticFileGlobs: [
            'dist/index.html',
            'dist/**.js',
            'dist/**.css',
            'dist/**.woff',
            'dist/**.woff2',
            'dist/**/*.png'
        ]
        // runtimeCaching: [
        //   {
        //     urlPattern: /\/api\/pokemon\//,
        //     handler: 'networkFirst',
        //     options: {
        //       cache: {
        //         maxEntries: 10,
        //         name: 'api-cache'
        //       }
        //     }
        //   }
        // ]
};