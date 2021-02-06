module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "./stylesheets/application.scss";`
      }
    }
  }
};
