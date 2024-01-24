# webpack

## to create a webpack you have to see the following instructions :
- $ npm init -y
- $ npm install webpack webpack-cli --save-dev
- $ npm install jquery
- $ update package.json :
"scripts": {
    "build": "webpack --mode production"
}
- create scr folder which contain your js file
- create dist folder which contain your html file
- $ npm run build
=> main.js file will be generated

## we can control webpack to take specific code in a path and generate it in custom file :
- create webpack.config.js and set the following code in it :
const path = require('path')
module.exports = {
  mode: 'development',
  entry: {
    bundle: path.resolve(__dirname, 'js/dashboard_main.js'),
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
}}

=> in this case webpack will read 'js/dashboard_main.js' instead 'src/index.js' and
generate code in bundle.js which contain in public folder instead main.js in dist folder.

## we can run our server and open the browser by following the above steps :
- Modify the Webpack config to setup a development server running on the port 8564.
add this object just after output object :
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8564, // Set the development server port to 8564
    open: true, // Open the default browser when the server starts
  },
- Modify the Webpack config to set its mode to development :
  {mode: 'development'}

- Add a script in the package.json to start the server and open the browser with
$ npm run start-dev :
  "scripts": {
    "start-dev": "webpack serve --config webpack.config.js"
  },
