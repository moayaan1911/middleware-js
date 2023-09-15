/** @format */

// middlewares in express js

const express = require('express'); // import express js
const path = require('path');
const app = express(); // create express app

/*.................................................................................. */
// Built-in middleware

// JSON Parsing Middleware:
// This middleware is responsible for parsing incoming JSON requests.
// It automatically parses the request body if the Content-Type header is 'application/json'.
// This feature simplifies handling JSON data in the request body of incoming API requests.
app.use(express.json());

// URL-Encoded Data Parsing Middleware:
// This middleware is responsible for parsing incoming URL-encoded requests with extended options.
// It automatically parses the request body if the Content-Type header is 'application/x-www-form-urlencoded'.
// The 'extended' option allows for parsing complex objects from the URL-encoded data.
// This middleware is useful for handling form submissions and other URL-encoded data.
app.use(express.urlencoded({ extended: true }));

// Static File Serving Middleware:
// This middleware serves static files from the 'public' directory. It is useful for serving assets like
// HTML, CSS, JavaScript, and images to clients. Requests for static files are mapped to the 'public' directory.
// This middleware simplifies the process of delivering static content to clients.
app.use(express.static(path.join(__dirname, 'public')));

/*.................................................................................. */
// Application Level Middleware:
// This middleware is responsible for logging incoming requests to the application. It captures the timestamp,
// request path, HTTP method, and URL of each incoming request, providing valuable information for debugging
// and monitoring purposes. It is applied globally to all routes and is executed for every incoming request.
// This middleware's primary advantage is that it helps track the flow of requests through the application,
// aiding in troubleshooting and performance optimization. However, it may add overhead if not used judiciously.
const applicationMiddleware = (req, res, next) => {
  console.log(
    `Application level middleware called at ${Date.now()} with path ${
      req.path
    } and method ${req.method} and url ${req.url}`
  );
  next();
};
app.use(applicationMiddleware);

/*.................................................................................. */
// Router Level Middleware:
// Router level middleware is applied to specific routes or groups of routes defined within the application.
// In this example, it is applied to routes under "/api/users." The router level middleware here handles user
// authentication. If the 'authStatus' condition is met, the middleware allows the request to proceed; otherwise,
// it responds with a 401 Unauthorized status and throws an 'Auth Error.' This middleware's advantage is that
// it can be selectively applied to specific routes, allowing for fine-grained control over access to those routes.
// However, it can make route definitions more complex.
const router = express.Router();
app.use('/api/users', router);

const routerLevelMiddleware = async (req, res, next) => {
  const authStatus = true;
  if (authStatus) {
    console.log('User authStatus : ', authStatus);
    next();
  } else {
    //  use the error middleware here
    res.status(401);
    throw new Error('Auth Error');
  }
};

const getUsers = async (req, res) => {
  res.status(200).json({
    message: 'Get All users',
  });
};

const createUsers = async (req, res) => {
  console.log('The body sent from frontend is ', req.body);
  res.status(201).json({
    message: 'Create new user',
  });
};

router.use(routerLevelMiddleware);
router.route('/').get(getUsers).post(createUsers);

/*.................................................................................. */
// Error Level Middleware:
// Error level middleware is responsible for handling and responding to various HTTP errors that may occur
// during the application's execution. It examines the HTTP status code and constructs an appropriate error
// response message. In this example, it handles 401 (Unauthorized), 404 (Not Found), and 500 (Server Error)
// status codes. The advantage of this middleware is that it centralizes error handling logic, making it easier
// to maintain consistent error responses across the application. However, it may require careful configuration
// to handle all possible error scenarios effectively.
const errorLevelMiddleware = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  res.status(statusCode);
  switch (statusCode) {
    case 401:
      res.json({
        title: 'Unauthorized',
        message: err.message,
      });
      break;
    case 404:
      res.json({
        title: 'Not Found',
        message: err.message,
      });
      break;
    case 500:
      res.json({
        title: 'Server Error',
        message: err.message,
      });
      break;
    default:
      break;
  }
};

/*.................................................................................. */
// Third Party Middleware (Multer):
// Third-party middleware, such as Multer, extends the functionality of Express by adding support for specific
// tasks or features. In this case, Multer is used for handling file uploads. It is configured to save uploaded
// files to the "./uploads" directory. This middleware adds support for processing file uploads, which is not
// provided by Express's built-in middlewares. However, it may introduce complexity and configuration overhead.
const multer = require('multer');
const upload = multer({ dest: './uploads' });

app.post(
  '/upload',
  upload.single('image'),
  (req, res, next) => {
    console.log(req.file, req.body);
    res.send(req.file);
  },
  (err, req, res, next) => {
    res.status(500).json({
      message: err.message,
    });
  }
);

app.use(errorLevelMiddleware);
// listen to app
app.listen(3000, () => {
  console.log('server is running on port 3000');
});
