require("dotenv").config();
const express = require("express");
const axios = require('axios');
const morgan = require("morgan");
const methodOverride = require('method-override');
const { createViewPath } = require("./helpers/create_veiws_path");
const userRoute = require('./routes/users');
const jobsRoute = require('./routes/jobs');
const galleryRoute = require('./routes/gallery');
const contactRoute = require('./routes/contact');


const PORT = process.env.PORT;


const app = express();
app.use(express.urlencoded({ extended: true })); // Frontdan forma ichida kelgan malumotni uqib beradi.
app.use(express.static("styles")); //serveStatic
app.use(express.static("images")); //serveStatic
app.use(methodOverride('_method')); // for DELETE/PUT


app.set("view engine", "ejs"); // ejs-shablon (HTML = JavaScript)
app.use(morgan("combined")); //middleware ulash



app.get("/", async (req, res) => {
  try {
    const menyuData = await axios("https://jsonplaceholder.typicode.com/posts");
    const menyu = await menyuData.data;
    res.render(createViewPath("index"), {
      title: "Home",
      menyu,
      page_name: "main",
    });
  } catch (err) {
    console.log(err);
  }
});

app.use(userRoute);
app.use(jobsRoute);
app.use(galleryRoute);
app.use(contactRoute);



app.use((req, res) => {
  res.render(createViewPath("error404"), {
    title: "Xatolik",
    page_name: "error",
  });
});


app.listen(PORT, () => {
  console.log(`Server ${PORT}-portda ishga tushdi`);
});
