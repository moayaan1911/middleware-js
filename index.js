// middlewares in express js

const express = require("express"); // import express js

const app = express(); // create express app

// application level middleware
const applicationMiddleware = (req, res, next) => {
  console.log(
    `Application level middleware called at ${Date.now()} with path ${
      req.path
    } and method ${req.method} and url ${req.url}`
  );
  next();
};
app.use(applicationMiddleware);

// router level middleware
const router = express.Router();
app.use("/api/users", router);

const routerLevelMiddleware = async (req, res, next) => {
  const authStatus = false;
  if (authStatus) {
    console.log("User authStatus : ", authStatus);
    next();
  } else {
    //  use the error middleware here
    res.status(401);
    throw new Error("Auth Error");
  }
};

const getUsers = async (req, res) => {
  res.status(200).json({
    message: "Get All users",
  });
};

const createUsers = async (req, res) => {
  res.status(201).json({
    message: "Create new user",
  });
};

router.use(routerLevelMiddleware);
router.route("/").get(getUsers).post(createUsers);

// error level middleware
const errorLevelMiddleware = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  res.status(statusCode);
  switch (statusCode) {
    case 401:
      res.json({
        title: "Unauthorized",
        message: err.message,
      });
      break;
    case 404:
      res.json({
        title: "Not Found",
        message: err.message,
      });
      break;
    case 500:
      res.json({
        title: "Server Error",
        message: err.message,
      });
      break;
    default:
      break;
  }
};

app.use(errorLevelMiddleware);
// listen to app
app.listen(3000, () => {
  console.log("server is running on port 3000");
});
