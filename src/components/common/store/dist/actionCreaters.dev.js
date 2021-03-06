"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPartReallyData = exports.getDrawReallyData = exports.getFileReallyData = exports.storeProjectRelationInfo = exports.storeTssRelationInfo = exports.storeZssRelationInfo = exports.storeDssRelationInfo = exports.getPartSonRelations = exports.getPartFaRelations = exports.getDrawSonRelations = exports.getDrawFaRelations = exports.getFileFaRelations = exports.storeProjectAllDatas = exports.storeFolderAllDatas = exports.storeFolderSelectedkeys = exports.storeFolderExpandedKeys = exports.storeFileSelectedkeys = exports.storeFileExpandedKeys = exports.storePragramSelectedkeys = exports.storeProgramExpandedKeys = exports.storePartSelectedkeys = exports.storePartExpandedKeys = exports.storeDrawSelectedkeys = exports.storeDrawExpandedKeys = exports.sentDetilType = exports.getAllBillTypes = void 0;

var constants = _interopRequireWildcard(require("./constants"));

var _immutable = require("immutable");

var _testBone = require("../../../dataModule/testBone");

var _UrlList = require("../../../dataModule/UrlList");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var model = new _testBone.Model(); // export const dispatchBreadcrumbList = (data) => ({
//   type: constants.breadcrumbList,
//   data: fromJS(data)
// })

var getAllBillTypes = function getAllBillTypes() {} // model.fetch(
//   { creater: 'c6825ed3afa9411694b62e61119544ed' },
//   billTypes,
//   'POST',
//   function(response) {
//     console.log(response)
//   },
//   // eslint-disable-next-line handle-callback-err
//   function(error) {
//     return
//   },
//   false
// )
//???????????????????????????
;

exports.getAllBillTypes = getAllBillTypes;

var sentDetilType = function sentDetilType(data) {
  return {
    type: constants.GETDETIL,
    data: (0, _immutable.fromJS)(data)
  };
};

exports.sentDetilType = sentDetilType;

var storeDrawExpandedKeys = function storeDrawExpandedKeys(data) {
  return {
    type: constants.STOREDRAWEXPAND,
    data: (0, _immutable.fromJS)(data)
  };
};

exports.storeDrawExpandedKeys = storeDrawExpandedKeys;

var storeDrawSelectedkeys = function storeDrawSelectedkeys(data) {
  return {
    type: constants.STOREDRAWSELECT,
    data: (0, _immutable.fromJS)(data)
  };
};

exports.storeDrawSelectedkeys = storeDrawSelectedkeys;

var storePartExpandedKeys = function storePartExpandedKeys(data) {
  return {
    type: constants.STOREPARTEXPAND,
    data: (0, _immutable.fromJS)(data)
  };
};

exports.storePartExpandedKeys = storePartExpandedKeys;

var storePartSelectedkeys = function storePartSelectedkeys(data) {
  return {
    type: constants.STOREPARTSELECT,
    data: (0, _immutable.fromJS)(data)
  };
};

exports.storePartSelectedkeys = storePartSelectedkeys;

var storeProgramExpandedKeys = function storeProgramExpandedKeys(data) {
  return {
    type: constants.STOREPROGRAMEXPAND,
    data: (0, _immutable.fromJS)(data)
  };
};

exports.storeProgramExpandedKeys = storeProgramExpandedKeys;

var storePragramSelectedkeys = function storePragramSelectedkeys(data) {
  return {
    type: constants.STOREPROGRAMSELECT,
    data: (0, _immutable.fromJS)(data)
  };
};

exports.storePragramSelectedkeys = storePragramSelectedkeys;

var storeFileExpandedKeys = function storeFileExpandedKeys(data) {
  return {
    type: constants.STOREFILEEXPAND,
    data: (0, _immutable.fromJS)(data)
  };
};

exports.storeFileExpandedKeys = storeFileExpandedKeys;

var storeFileSelectedkeys = function storeFileSelectedkeys(data) {
  return {
    type: constants.STOREFILESELECT,
    data: (0, _immutable.fromJS)(data)
  };
};

exports.storeFileSelectedkeys = storeFileSelectedkeys;

var storeFolderExpandedKeys = function storeFolderExpandedKeys(data) {
  return {
    type: constants.STOREFOLDERSXPAND,
    data: (0, _immutable.fromJS)(data)
  };
};

exports.storeFolderExpandedKeys = storeFolderExpandedKeys;

var storeFolderSelectedkeys = function storeFolderSelectedkeys(data) {
  return {
    type: constants.STOREFOLDERSELECT,
    data: (0, _immutable.fromJS)(data)
  };
}; //?????????????????????


exports.storeFolderSelectedkeys = storeFolderSelectedkeys;

var storeFolderAllDatas = function storeFolderAllDatas(result) {
  return {
    type: constants.FOLDERCONTENTDATA,
    data: result
  };
}; //??????????????????


exports.storeFolderAllDatas = storeFolderAllDatas;

var storeProjectAllDatas = function storeProjectAllDatas(result) {
  return {
    type: constants.PROJECTCONTENTDATA,
    data: result
  };
}; //??????????????????


exports.storeProjectAllDatas = storeProjectAllDatas;

var fileRelationInfo = function fileRelationInfo(result) {
  return {
    type: constants.FILERELATIONDATA,
    data: result
  };
}; //??????????????????????????????


var getFileFaRelations = function getFileFaRelations(params) {
  return function (dispatch) {
    model.fetch({
      target: params
    }, _UrlList.getFileFaRelationUrl, 'get', function (res) {
      // console.log('????????????', res.data)
      var result = res.data;
      dispatch(fileRelationInfo(result));
    }, function () {
      console.log('?????????????????????????????????');
    }, false);
  };
}; //???????????????????????????


exports.getFileFaRelations = getFileFaRelations;

var drawFaRelationInfo = function drawFaRelationInfo(result) {
  return {
    type: constants.DRAWFARELATIONDATA,
    data: result
  };
}; //??????????????????????????????


var getDrawFaRelations = function getDrawFaRelations(params) {
  return function (dispatch) {
    model.fetch({
      target: params
    }, _UrlList.getDrawFaRelationUrl, 'get', function (res) {
      // console.log('???????????????', res.data)
      var result = res.data;
      dispatch(drawFaRelationInfo(result));
    }, function () {
      console.log('?????????????????????????????????');
    }, false);
  };
}; //???????????????????????????


exports.getDrawFaRelations = getDrawFaRelations;

var drawSonRelationInfo = function drawSonRelationInfo(result) {
  return {
    type: constants.DRAWSONRELATIONDATA,
    data: result
  };
}; //??????????????????????????????


var getDrawSonRelations = function getDrawSonRelations(params) {
  return function (dispatch) {
    model.fetch({
      folder_id: params
    }, _UrlList.getDrawSonRelationUrl, 'get', function (res) {
      // console.log('???????????????', res.data)
      var result = res.data;
      dispatch(drawSonRelationInfo(result));
    }, function () {
      console.log('?????????????????????????????????');
    }, false);
  };
}; //???????????????????????????


exports.getDrawSonRelations = getDrawSonRelations;

var partFaRelationInfo = function partFaRelationInfo(result) {
  return {
    type: constants.PARTFARELATIONDATA,
    data: result
  };
}; //??????????????????????????????


var getPartFaRelations = function getPartFaRelations(params) {
  return function (dispatch) {
    model.fetch({
      target: params
    }, _UrlList.getPartFaRelationUrl, 'get', function (res) {
      // console.log('???????????????', res.data)
      var result = res.data;
      dispatch(partFaRelationInfo(result));
    }, function () {
      console.log('?????????????????????????????????');
    }, false);
  };
}; //???????????????????????????


exports.getPartFaRelations = getPartFaRelations;

var partSonRelationInfo = function partSonRelationInfo(result) {
  return {
    type: constants.PARTSONRELATIONDATA,
    data: result
  };
}; //??????????????????????????????


var getPartSonRelations = function getPartSonRelations(params) {
  return function (dispatch) {
    model.fetch({
      folder_id: params
    }, _UrlList.getPartSonRelationUrl, 'get', function (res) {
      // console.log('?????????????????????', res.data)
      var result = res.data;
      dispatch(partSonRelationInfo(result));
    }, function () {
      console.log('?????????????????????????????????');
    }, false);
  };
}; //????????????????????????


exports.getPartSonRelations = getPartSonRelations;

var storeDssRelationInfo = function storeDssRelationInfo(data) {
  return {
    type: constants.DSSRELATIONINFO,
    data: (0, _immutable.fromJS)(data)
  };
}; //????????????????????????


exports.storeDssRelationInfo = storeDssRelationInfo;

var storeZssRelationInfo = function storeZssRelationInfo(data) {
  return {
    type: constants.ZSSRELATIONINFO,
    data: (0, _immutable.fromJS)(data)
  };
}; //????????????????????????


exports.storeZssRelationInfo = storeZssRelationInfo;

var storeTssRelationInfo = function storeTssRelationInfo(data) {
  return {
    type: constants.TSSRELATIONINFO,
    data: (0, _immutable.fromJS)(data)
  };
}; //????????????????????????


exports.storeTssRelationInfo = storeTssRelationInfo;

var storeProjectRelationInfo = function storeProjectRelationInfo(data) {
  return {
    type: constants.PROJECTRELATIONINFO,
    data: (0, _immutable.fromJS)(data)
  };
}; //????????????????????????


exports.storeProjectRelationInfo = storeProjectRelationInfo;

var fileReallyData = function fileReallyData(result) {
  return {
    type: constants.FILEREALLYDATA,
    data: result
  };
}; //????????????magodb?????????


var getFileReallyData = function getFileReallyData(params) {
  // console.log(params)
  return function (dispatch) {
    model.fetch({}, "".concat(_UrlList.getFileReallyDataUrl).concat(params), 'get', function (res) {
      // console.log('datatrue', res)
      var result = res.data;
      dispatch(fileReallyData(result));
    }, function () {
      console.log('???????????????????????????');
    }, false);
  };
}; //????????????????????????


exports.getFileReallyData = getFileReallyData;

var drawReallyData = function drawReallyData(result) {
  return {
    type: constants.DRAWREALLYDATA,
    data: result
  };
}; //????????????magodb?????????


var getDrawReallyData = function getDrawReallyData(params) {
  // console.log(params)
  return function (dispatch) {
    model.fetch({}, "".concat(_UrlList.getFileReallyDataUrl).concat(params), 'get', function (res) {
      // console.log('datatrue', res)
      var result = res.data;
      dispatch(drawReallyData(result));
    }, function () {
      console.log('???????????????????????????');
    }, false);
  };
}; //????????????????????????


exports.getDrawReallyData = getDrawReallyData;

var partReallyData = function partReallyData(result) {
  return {
    type: constants.PARTREALLYDATA,
    data: result
  };
}; //????????????magodb?????????


var getPartReallyData = function getPartReallyData(params) {
  // console.log(params)
  return function (dispatch) {
    model.fetch({}, "".concat(_UrlList.getFileReallyDataUrl).concat(params), 'get', function (res) {
      // console.log('datatrue', res)
      var result = res.data;
      dispatch(partReallyData(result));
    }, function () {
      console.log('???????????????????????????');
    }, false);
  };
};

exports.getPartReallyData = getPartReallyData;