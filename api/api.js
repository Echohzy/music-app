var urls = require("./urls");
var rp = require("request-promise");

function getHomeSlider(){
  return rp({uri: urls.HOME_SLIDER_URL, json: true});
}

module.exports = {
  getHomeSlider
};