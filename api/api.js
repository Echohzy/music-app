var urls = require("./urls");
var rp = require("request-promise");

function getHomeSlider(){
  return rp({uri: urls.HOME_SLIDER_URL, json: true});
}

function getTopList(){
  return rp({uri: urls.TOP_LIST_URL, json: true});
}

function getHotKey(){
  return rp({uri: urls.HOT_KEY_URL, json: true});
}

function getSearchResult(key, p=1, per=20){
  console.log(key);
  return rp({uri: urls.SEARCH_FOR_URL+"&w="+ encodeURIComponent(key) + "&p="+p+"&perpage="+per, json: true});
}

module.exports = {
  getHomeSlider,
  getTopList,
  getHotKey,
  getSearchResult
};