# Employee-Application

This is a React-based application for user management that integrates with the Reqres API. The assignment is divided into three levels of increasing complexity:

1. Authentication Screen: Implement login functionality and navigate to the Users List.

2. Users List: Display a paginated list of users and implement pagination.

3. Edit, Delete, and Update Users: Allow for user data modification, deletion, and provide appropriate success or error messages.
<u></u>
## Features
- User Authentication using the Reqres API.
- Displaying a paginated list of users with the ability to navigate between pages.
- Edit and Delete users from the list with corresponding API calls for CRUD operations.
- Error handling for API requests.
- Responsive design, working well on both desktop and mobile<br />
- Implemented client-side search and filtering.
- Navigation using React Router.
- Deployed on a free hosting platform (e.g., Vercel, Netlify, or Heroku)<br />

## Requirements
- Before running the application, ensure that you have the following installed:
-  Node.js (v14 or higher)
- npm (or yarn)
---
## Installation and Setup

1️⃣ Clone the Repository
(https://github.com/Khushboo0820/Employee-Application.git)

2. Install dependencies:
    ```bash
    npm install
    ```

2️⃣ Install Dependencies
Frontend
npm install
npm run dev

The application will be accessible at [http://localhost:5173](http://localhost:5173).

---

## API Endpoints Used

### Login
- **Endpoint**: `POST /api/login`
- **Required Payload**:
    ```json
    {
      "email": "eve.holt@reqres.in",
      "password": "cityslicka"
    }
    ```

### Fetch Users
- **Endpoint**: `GET /api/users?page=1`

### Update User
- **Endpoint**: `PUT /api/users/{id}`

### Delete User
- **Endpoint**: `DELETE /api/users/{id}`

---

## Technologies Used:-
- **Frontend**: React.js, React Router,Axios,Html5,javascript(ES6),LocalStorage
- **Backend:** Reqres API
- **Styling:** CSS, Bootstrap, Material UI
  
---

## Deployment
This application can be deployed on (employee-application-gc8j.vercel.app/login).
