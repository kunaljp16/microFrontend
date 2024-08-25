const moduleFederationConfig = {
    name: 'catalog',
    exposes: {
        './Module': './src/app/app.tsx',
    },
}

module.exports = moduleFederationConfig;