const COMMON_PARAMS = "g_tk=1243657079&uin=1820123540&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1523086920521";
const HOST = "https://c.y.qq.com";

const HOME_SLIDER_URL = `${HOST}/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?${COMMON_PARAMS}`;

const TOP_LIST_URL = `${HOST}/v8/fcg-bin/fcg_myqq_toplist.fcg?${COMMON_PARAMS}`;

const HOT_KEY_URL = `${HOST}/splcloud/fcgi-bin/gethotkey.fcg?${COMMON_PARAMS}`

const SEARCH_FOR_URL = `${HOST}/soso/fcgi-bin/search_for_qq_cp?${COMMON_PARAMS}`

module.exports = {
  HOME_SLIDER_URL,
  TOP_LIST_URL,
  HOT_KEY_URL,
  SEARCH_FOR_URL
};

