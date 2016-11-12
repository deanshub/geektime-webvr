var rucksack = require('rucksack-css')
var webpack = require('webpack')
var path = require('path')

var NODE_ENV = JSON.stringify(process.env.NODE_ENV || 'development');

var reactPlugins =[
  "react-transform", {
    transforms: [{
      transform: "react-transform-hmr",
      imports: ["react"],
      locals: ["module"]
    }, {
      transform: "react-transform-catch-errors",
      imports: ["react", "redbox-react"]
    }]
  }
]

module.exports = {
  context: path.join(__dirname, './client'),
  entry: {
    jsx: './index.js',
    html: './index.html',
    vendor: [
      'react',
      'react-dom',
      'react-redux',
      'react-router',
      'react-router-redux',
      'redux'
    ]
  },
  output: {
    path: path.join(__dirname, './static'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
        {
        test: /\.js$/,
        loader: "babel",
        query: {
          plugins: NODE_ENV==='development'?[ reactPlugins ]:[]
        },
        exclude: /node_modules/,
        include: __dirname
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        loaders: [
          'style',
          'raw',
        ]
      },
      {
        test: /\.css$/,
        include: /client/,
        loaders: [
          'style',
          'css?modules&sourceMap&importLoaders=1&localIdentName=[local]___[hash:base64:5]',
          'postcss'
        ]
      },
      {
         test: /\.svg$/,
         loader: "url?limit=10000&mimetype=image/svg+xml",
         include: path.join(__dirname, "client", "assets")
       }, {
         test: /\.png$/,
         loader: "url?limit=8192&mimetype=image/png",
         include: path.join(__dirname, "client", "assets")
       }, {
         test: /\.gif$/,
         loader: "url?limit=8192&mimetype=image/gif",
         include: path.join(__dirname, "client", "assets")
       }, {
         test: /\.jpg$/,
         loader: "url?limit=8192&mimetype=image/jpg",
         include: path.join(__dirname, "client", "assets")
       },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  postcss: [
    rucksack({
      autoprefixer: true
    })
  ],
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV }
    }),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
  ],
  devServer: {
    contentBase: './client',
    hot: true
  }
}
