const axios = require("axios");
const express = require("express");
const { createViewPath } = require("../helpers/create_veiws_path");
const{ getUsers, getUsersById, getAddUser, postsUser, deleteUser, getEditUser, putEditUser, getPostsId } = require('../controllers/users');


const router = express.Router();

  
  router.get("/users", getUsers);
  
  // req.params, req.body, req.query
  router.get("/user/:id", getUsersById);
  
  router.get("/add-user", getAddUser);
  
  router.post("/add-user", postsUser);
  
  router.delete("/user/:id", deleteUser);
  
  router.get("/edit/:id",  getEditUser);
  
  // CRUD create(post), Read(get), Update(put, patch), Delete(delete).
  router.put("/edit/:id",  putEditUser);

  router.get("/posts/:id",  getPostsId);
  

  module.exports = router;