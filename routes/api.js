var express = require('express');
var router = express.Router();
var Api = require("../api/api");

router.get("/index_slider", function(req, res){
  Api.getHomeSlider().then(function(data){
    res.json(data.data);
  }).catch(function(e){
    res.json({
      status: "error",
      error: e
    });
  });
});

router.get("/top_list", function(req, res){
  Api.getTopList().then(function(data){
    res.json(data);
  }).catch(function(e){
    res.json({
      status: "error",
      error: e
    });
  })
});

router.get("/hot_key", function(req, res){
  Api.getHotKey().then(function(data){
    res.json(data);
  }).catch(function(e){
    res.json({
      status: "error",
      error: e
    });
  });
});

router.get("/search", function(req, res){
    Api.getSearchResult(req.query.key, req.query.p, req.query.perpage).then(function(data){
      res.json(data);
    }).catch(function(e){
      res.json({
        status: "error",
        error: e
      });
    });
});


module.exports = router;