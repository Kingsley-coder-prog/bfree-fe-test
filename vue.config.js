import user from "./src/pages/User.js";

module.exports = {
  devServer: {
    proxy: user
  }
};
