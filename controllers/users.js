const { createViewPath } = require("../helpers/create_veiws_path");
const axios = require("axios");


const getUsers = async (req, res) => {
    try {
      const userData = await axios("https://jsonplaceholder.typicode.com/users");
      const users = await userData.data;
      res.render(createViewPath("users"), {
        title: "users",
        users,
        page_name: "users",
      });
    } catch (err) {
      console.log(err);
    }
  };

  const getUsersById = async (req, res) => {
    try {
      const id = req.params.id;
      const { data } = await axios(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      res.render(createViewPath("user"), {
        title: "users",
        user: data,
        page_name: "users",
      });
    } catch (err) {
      console.log(err);
    }
  }

  const getAddUser = (req, res) => {
    res.render(createViewPath("add-user"), {
      title: "Yangi user",
      page_name: "users",
    });
  }

  const postsUser = async (req, res) => {
    const { username, email } = req.body;
  
    try {
      const userData = await axios.post(
        `https://jsonplaceholder.typicode.com/users`,
        {
          username,
          email,
        }
      );
      const user = userData.data;
      res.render(createViewPath("user"), {
        title: "users",
        user,
        page_name: "users",
      });
    } catch (err) {
      console.log(err);
    }
  };

  const deleteUser =  async (req, res) => {
    const { id } = req.params;
  
    try {
      const userData = await axios.delete(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      const user = userData.data;
      console.log("Uchirildi", user);
      res.sendStatus(204);
    } catch (err) {
      console.log(err);
    }
  };


  const getEditUser = async(req, res) => {
    const { id } = req.params;
  
    try {
      const userData = await axios(
      {
        method: 'GET',
        url: `https://jsonplaceholder.typicode.com/users/${id}`
      }
      );
      const user = userData.data;
      res.render(createViewPath("edit-user"), {
        title: user.username,
        user,
        page_name: "users",
      });
    } catch (err) {
      console.log(err);
    }
  };

  const putEditUser = async (req, res) => {
    const id = req.params.id;
    const { name, phone, username, email } = req.body;
  
    try {
      const userData = await axios.put(
        `https://jsonplaceholder.typicode.com/users/${id}`,
        {
          username,
          email,
          name,
          phone,
        }
      );
      const user = userData.data;
      res.render(createViewPath("user"), {
        title: user.username,
        user,
        page_name: "users",
      });
    } catch (err) {
      console.log(err);
    }
  };

  const getPostsId = async (req, res) => {
    try {
      const id = req.params.id;
      const { data } = await axios(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      res.render(createViewPath("posts"), {
        title: "Home",
        posts: data,
        page_name: "main",
      });
    } catch (err) {
      console.log(err);
    }
  };



  module.exports =
    {
        getUsers,
        getUsersById,
        getAddUser,
        postsUser,
        deleteUser,
        getEditUser,
        putEditUser,
        getPostsId,
        
    };