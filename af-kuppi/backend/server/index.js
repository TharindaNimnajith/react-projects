const express = require("express");
const mongoose = require("mongoose");
const compression = require("compression");
const cors = require("cors");
const helmet = require("helmet");
const path = require("path");

// Importing Configs
const { mongoUri, port } = require("./configs/configs");

// Importing routes
const userRoutes = require("./routes/user.routes");
const authRoutes = require("./routes/auth.routes");
const categoryRoutes = require("./routes/category.routes");
const bookRoutes = require("./routes/book.routes");
const fileUploadRoutes = require("./routes/file-upload.routes");


// Initialize
const app = express();

// Configuring middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());
app.use(cors());
app.use(helmet());

app.use("/public", express.static(path.join(__dirname, "public")));


// Configuring routes
app.use("/api/users", userRoutes.router);
app.use("/api/auth", authRoutes.router);
app.use("/api/categories", categoryRoutes.router);
app.use("/api/books", bookRoutes.router);
app.use("/api/uploads", fileUploadRoutes.router);


// Web route
app.get("*", (req, res) => {
    res.status(200).send("Online Book Store");
})


// Connecting to Database
mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {
        console.log("DB Connection has established");
    })
    .catch((err) => {
        console.log(`Unable to connect to the DB: ${err}`);
    })


// Starting the Server
app.listen(port, () => {
    console.log(`Server has started on ${port}`);
})
