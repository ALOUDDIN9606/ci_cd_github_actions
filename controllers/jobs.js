const { createViewPath } = require("../helpers/create_veiws_path");
const axios = require('axios');

const getJobs = async (req, res) => {
    try {
      const jobsData = await axios(`https://jsonplaceholder.typicode.com/users`);
      const jobs = jobsData.data;
      res.render(createViewPath("jobs"), {
        title: "Jobs",
        jobs,
        page_name: "jobs",
      });
    } catch (err) {
      console.log(err);
    }
  };


  module.exports = {
    getJobs,
  };
