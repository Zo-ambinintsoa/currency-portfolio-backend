# Welcome

<p align="center">
    <a href="https://www.linkedin.com/in/zo-ambinintsoa">
        <img src="https://img.shields.io/badge/LinkedIn-blue?style=flat-square&logo=linkedin" alt="LinkedIn">
    </a>
    <a href="mailto:ambinintsoa.business@gmail.com">
        <img src="https://img.shields.io/badge/Email-blue?style=flat-square&logo=gmail&logoColor=white" alt="e-mail">
    </a>
</p>

# Currency Portfolio backEnd

Currency Portfolio is a web application that allows users to manage their cryptocurrency portfolio. Users can track their holdings, view current market prices, and analyze their portfolio performance.

## Table of Contents

- [Features](#features)
- [Prerequisites](#Prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

## Features

- User registration and authentication
- Add, edit, and delete cryptocurrencies from the portfolio
- View real-time market prices of cryptocurrencies
- Calculate the total portfolio value
- Track portfolio performance over time
- User-friendly and responsive interface

## Prerequisites

Before running the app, ensure that you have the following dependencies installed on your machine:

- Node.js
- npm (Node package manager)
- MongoDB

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Zo-ambinintsoa/currency-portfolio-backend.git
```

2. Navigate to the project directory:

``` shell
 cd currency-portfolio-backend
  ```

3. Install the package:

``` shell
 npm install
  ```

## usage 

To start the development server, run the following command: 


``` shell
 npm start
  ```


This will start the development server. You can access it at **http://localhost:4000**.

The app provides a an endpoint for you to consumme using postman or other testing app.

Feel free to customize the app by modifying the code in the src directory.

## API Documentation

# Currency Portfolio API Documentation

This API documentation provides details about the available routes and their functionalities in the Currency Portfolio application.

<h3> Base URL <h3/>

The base URL for all the routes is: **http://localhost:4000**


<h3> Authentication Routes <h3/>

<h4> Login <h4/>

- URL: `/api/login`
- Method: `POST`
- Description: Authenticates a user and generates an authentication token.
- Request Body:
  - `email`: User's email (string)
  - `password`: User's password (string)

# Register

- URL: `/api/signup`
- Method: `POST`
- Description: Registers a new user.
- Request Body:
  - `email`: User's email (string)
  - `password`: User's password (string)

# Change Password

- URL: `/api/changePassword`
- Method: `POST`
- Description: Changes the password of an authenticated user.
- Authentication Required: Yes
- Request Body:
  - `oldPassword`: User's current password (string)
  - `newPassword`: User's new password (string)

# Get User Profile

- URL: `/api/logout`
- Method: `GET`
- Description: Retrieves the user profile.
- Authentication Required: Yes

# Update User Profile

- URL: `/api/logout`
- Method: `GET`
- Description: Updates the user profile.
- Authentication Required: Yes

# Logout

- URL: `/api/logout`
- Method: `GET`
- Description: Logs out the user.
- Authentication Required: Yes

# Currency Routes

# Create a New Currency

- URL: `/currencies`
- Method: `POST`
- Description: Creates a new currency.
- Authentication Required: Yes
- Admin Access Required: Yes
- Request Body:
  - `ticker`: Currency's ticker symbol (string)
  - `name`: Currency's name (string)
  - `APIUrl`: Currency's API URL (string)

# Get All Currencies

- URL: `/currencies`
- Method: `GET`
- Description: Retrieves all currencies.
- Authentication Required: Yes

# Get a Specific Currency

- URL: `/currencies/:id`
- Method: `GET`
- Description: Retrieves a specific currency by its ID.
- Authentication Required: Yes

# Update a Currency

- URL: `/currencies/:id`
- Method: `PUT`
- Description: Updates a specific currency by its ID.
- Authentication Required: Yes
- Admin Access Required: Yes
- Request Body:
  - `ticker`: Currency's ticker symbol (string)
  - `name`: Currency's name (string)
  - `APIUrl`: Currency's API URL (string)

# Delete a Currency

- URL: `/currencies/:id`
- Method: `DELETE`
- Description: Deletes a specific currency by its ID.
- Authentication Required: Yes
- Admin Access Required: Yes

# Authentication and Authorization

- The authentication routes (`/api/login`, `/api/signup`, `/api/changePassword`, `/api/logout`) require a valid user account and generate an authentication token.
- The routes that require authentication (`/api/logout`, `/api/changePassword`, `/api/logout`, `/currencies`, `/currencies/:id`) require the authentication token to be included in the request headers.
- The routes that require admin access (`/currencies`, `/currencies/:id`) also require the user to have the `isAdmin` flag set to `true` in their profile.

## Error Responses

- Error responses will follow the standard HTTP error status codes and will include a JSON response body with an `error` property indicating the specific error message.




## contributing
<p> Contributions are welcome! If you have any suggestions, bug fixes, or new features to propose, please follow the steps below: </p>

<ul>
  <li>Fork the repository.</li>
  <li>Create a new branch for your feature or bug fix.</li>
  <li>Make your modifications.</li>
  <li>Commit your changes and push to your forked repository.</li>
  <li>Submit a pull request explaining your changes.</li>
</ul>


## Author

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th>Name</th>
      <th>Profession</th>
      <th>LinkedIn Profile</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Ambinintsoa Mananjara Herizo</td>
      <td>Full Stack Developer</td>
      <td>
        <a href="https://www.linkedin.com/in/zo-ambinintsoa/" target="_blank">LinkedIn Profile</a>
      </td>
    </tr>
  </tbody>
</table>
