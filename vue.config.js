// vue.config.js
module.exports = {
  publicPath:
    process.env.NODE_ENV === "production" ? "/Protein-Manage-Website/" : "/",
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  }
};
