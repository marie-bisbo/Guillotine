const BundleTracker = require("webpack-bundle-tracker");

module.exports = {
  // `publicPath` is used to determine where webpack-stats.json says
  // to look for static files
  publicPath: process.env.NODE_ENV === 'production'
  // In production, look at /static/frontend (on the same port).
  // We want to look there because (in settings.py) we have told django
  // to collect the files from `public` and `dist` into static_root/frontend
    ? '/static/frontend/'
  // In development, look at "localhost:8080/". Without specifying this
  // django would look for static files on the same port as it is running (8000)
    : 'http://127.0.0.1:8080/',
  outputDir: "./dist/",
  "transpileDependencies": [
    "vuetify"
  ],

  chainWebpack: config => {

    config.optimization
      .splitChunks(false)

    config
      .plugin("BundleTracker")
      .use(BundleTracker, [{ filename: "./webpack-stats.json" }])

    config.resolve.alias
      .set("__STATIC__", "static")

    // Tell the vue development server to serve the app on port 8080.
    // The value of publicPath (above) must match this so that
    // webpack-stats.json is generated correctly
    config.devServer
      .public("http://0.0.0.0:8080")
      .host("0.0.0.0")
      .port(8080)
      .hotOnly(true)
      .watchOptions({ poll: 1000 })
      .https(false)
      .headers({ "Access-Control-Allow-Origin": ["*"] })
  }
};
