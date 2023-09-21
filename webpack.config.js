const path = require('path');

module.exports = {
    mode: 'development', // Set the mode to development or production
    entry: './target/index.js', // Specify the path to your external-index file
    output: {
        filename: 'libs.js', // Output filename for the bundle
        path: path.resolve(__dirname, 'public/js'), // Output directory
    },
};