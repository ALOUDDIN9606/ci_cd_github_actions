const axios = require("axios");
const express = require("express");
const { createViewPath } = require("../helpers/create_veiws_path");
const { getGallery } = require("../controllers/gallery");
const { getContact } = require("../controllers/contact");


const router = express.Router();

router.get("/contact",  getContact);

module.exports = router;
