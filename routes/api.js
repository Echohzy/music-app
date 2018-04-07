var express = require('express');
var router = express.Router();
var Api = require("../api/api");

router.get("/index_slider", function(req, res){
  Api.getHomeSlider().then(function(data){
    res.json(data.data);
  }).catch(function(e){
    res.json({
      status: "error",
      error: error
    });
  });
});

module.exports = router;