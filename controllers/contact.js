const { createViewPath } = require("../helpers/create_veiws_path");
const axios = require('axios');

const getContact = async (req, res) => {
    try {
      const contactData = await axios(
        `https://jsonplaceholder.typicode.com/users`
      );
      const contact = contactData.data;
      res.render(createViewPath("contact"), {
        title: "contact",
        contact,
        page_name: "contact",
      });
    } catch (err) {
      console.log(err);
    }
  };

  module.exports = {
    getContact,
  };
  

