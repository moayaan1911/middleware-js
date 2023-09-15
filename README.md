<!-- @format -->

# MIDDLEWARES IN JS

This repo consists of all major middlewares used in node backend

## About Middlewares used

- **Built-in Middlewares:**

  - **JSON Parsing Middleware:** This middleware parses incoming JSON requests and simplifies handling JSON data in the request body.
  - **URL-Encoded Data Parsing Middleware:** This middleware parses incoming URL-encoded requests with extended options, making it suitable for handling form submissions and complex URL-encoded data.
  - **Static File Serving Middleware:** This middleware serves static files from the 'public' directory, making it easy to deliver assets like HTML, CSS, JavaScript, and images to clients.

- **Application Level Middleware:** This middleware logs incoming requests to the application, providing valuable information for debugging and monitoring. It is applied globally to all routes and executed for every incoming request.

- **Router Level Middleware:** Applied to specific routes (e.g., '/api/users'), this middleware handles user authentication. It checks the 'authStatus' condition, allowing or denying access based on the result. It offers fine-grained control over access to specific routes.

- **Error Level Middleware:** This middleware centrally handles and responds to various HTTP errors. It constructs appropriate error responses based on the HTTP status code, providing consistent error handling across the application.

- **Third-Party Middleware (Multer):** Multer is used for handling file uploads. It is configured to save uploaded files to the './uploads' directory. This middleware extends Express's functionality to support file uploads, adding an extra layer of complexity but enabling file processing capabilities.

These middlewares serve different purposes within your Node.js backend, enhancing functionality, security, and error handling.

## RUN ON YOUR LOCAL MACHINE

- clone this repo by typing `git clone `
- upload the sample data set file on mongoose OR upload your own
- create .env with same credentials as mentioned in .env.example
- Run the endpoints mentioned in index.js

# About the Developer

Hello everyone, myself **Mohammad Ayaan Siddiqui** from India. I am a Full Stack WEB3 developer and a **DECENTRALIZATION MAXI**. I talk about WEB3, Cryptocurrencies, Javascript and Python and currently learning web3.

**Currently Learning and Building in React.js, Next.js, Solidity, Golang, Hardhat, Ethers.js, React Native, Tailwind, Html, CSS, Python, etc.**

<p align="center">
<img src="./public/profile.jpg" alt="profile" style="height: 400px; width:500px;"/>
</p>

If you are interested in either of the topics or building in similar skills, connect with me below:-

1. ![Alt text](public/linktree.png 'linktree') [My Linktree with ALL SOCIALS](https://linktr.ee/ayaaneth)

2. ![Alt text](public/github.png 'github') [Connect on Github](https://github.com/moayaan1911)

3. ![Alt text](public/linkedin.png 'linkedin') [Connect on Linkedin](www.linkedin.com/in/ayaaneth)
4. ![Alt text](public/hashnode.png 'dev') [Connect on Hashnode](https://moayaan.hashnode.dev/)

5. ![Alt text](public/twitter.png 'twitter') [Connect on Twitter](https://www.twitter.com/usdisshitcoin)

6. ![Alt text](public/telegram.png 'telegram') [Connect on Telegram](https://t.me/usdisshitcoin)

7. ![Alt text](public/dev.png 'dev') [Connect on dev.to](https://dev.to/moayaan1911)
