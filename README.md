# Employee-Application

This is a React-based application for user management that integrates with the Reqres API. The assignment is divided into three levels of increasing complexity:

1. Authentication Screen: Implement login functionality and navigate to the Users List.

2. Users List: Display a paginated list of users and implement pagination.

3. Edit, Delete, and Update Users: Allow for user data modification, deletion, and provide appropriate success or error messages.
<u></u>
<b>Features</b> <br>
• User Authentication using the Reqres API.<br />
• Displaying a paginated list of users with the ability to navigate between pages.<br />
• Edit and Delete users from the list with corresponding API calls for CRUD operations.<br />
• Error handling for API requests.<br />
• Responsive design, working well on both desktop and mobile.<br />
• Implemented client-side search and filtering.<br />
• Navigation using React Router.<br />
• Deployed on a free hosting platform (e.g., Vercel, Netlify, or Heroku).<br />

<b>Requirements</b><br>
Before running the application, ensure that you have the following installed:<br />
• Node.js (v14 or higher)<br />
•npm (or yarn)<br />
<u></u>
<b>Installation</b><br />
To get started with the project, follow the instructions below:<br />

<b>Clone the Repository</b><br />
git clone https://github.com/your-username/employwise-assignment.git<br />
cd employwise-assignment

<b>Install Dependencies</b><br />
Install the required dependencies by running:<br />
npm install<br />

<b>Running the Development Server</b><br />
After the dependencies are installed, you can start the development server with:<br />
npm start<br />

This will start the application on http://localhost:3000.<br />
<u></u>

<b>API Endpoints Used</b><br />
Login<br />
• Endpoint: POST /api/login<br />
• Required Payload:<br />
{<br />
  "email": "eve.holt@reqres.in",<br />
  "password": "cityslicka"<br />
}<br />
Fetch Users<br />
• Endpoint: GET /api/users?page=1<br />
Update User<br />
• Endpoint: PUT /api/users/{id} <br />
Delete User<br />
•  Endpoint: DELETE /api/users/{id}<br />
<u></u>

<b>Technologies Used</b><br />
<b>Frontend:</b> React.js, React Router,Axios,Html5,javascript(ES6),LocalStorage<br />
<b>Backend:</b> Reqres API<br />
<b>Styling:</b> CSS, Bootstrap, Material UI<br />
<u></u>
<b>Deployment</b><br />
This application can be deployed on (https://employeewiseglobal.netlify.app/).
