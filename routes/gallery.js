const axios = require("axios");
const express = require("express");
const { createViewPath } = require("../helpers/create_veiws_path");
const { getGallery } = require("../controllers/gallery");


const router = express.Router();

router.get("/gallery",  getGallery);


module.exports = router;