const express = require("express");
const { createViewPath } = require("../helpers/create_veiws_path");
const { getJobs } = require("../controllers/jobs");

const router = express.Router();


router.get("/jobs",  getJobs);


module.exports = router;