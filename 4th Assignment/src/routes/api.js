const express = require('express');
const {UrlQuery} = require("../controllers/UrlQuery");
const {Header} = require("../controllers/Header");
const {Body} = require("../controllers/Body");
const {fileDownload} = require("../controllers/file_Download_Controller");
const router = express.Router();
// Route Config
router.post('/UrlQuery',UrlQuery);
router.post('/Header',Header);
router.post('/Body',Body);
router.get('/fileDownload',fileDownload);
module.exports = {router};