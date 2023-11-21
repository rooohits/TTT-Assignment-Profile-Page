# TTT-Assignment-Profile-Page

**Live Website**
https://ttt-profile-page.netlify.app/

**Overview**
This project is a React-based web application for a profile page. The profile page is divided into three main components:

_Navbar_: A navigation bar component that includes a logo, navigation links, a hamburger menu for small screens, and a "Courses" button.

_Main_: The main profile component that displays user information, including a cover image, profile image, name, followers, following, about section, and reaction statistics.

_Post_: A component that renders a list of posts, including the post title, content, category, author, date, read time, and views. Users can also like individual posts.

**Components**
_Navbar_
Functionality:
Displays a navigation bar with a logo, navigation links, and a "Courses" button.
Utilizes a hamburger menu for smaller screens to toggle the display of navigation links.
CSS:
The styling is responsive, adapting to different screen sizes using media queries.

_Main_
Functionality:
Displays user information, including cover and profile images, name, premium and verified icons, followers, following, about section, and reaction statistics.
CSS:
The styling is responsive, adjusting layout and font sizes for various screen sizes using media queries.

_Post_
Functionality:
Renders a list of posts with title, content, category, author, date, read time, views, and a like button.
Allows users to like individual posts, with the ability to toggle the like state.
CSS:
The styling is responsive, adapting the layout for different screen sizes using media queries.

**Libraries and Plugins**
React: A JavaScript library for building user interfaces.
React Hooks: Used for state management in functional components.
CSS: Styling is done using Cascading Style Sheets.
JSON: Data for profiles, posts, and post images is stored in JSON format.
FontAwesome: Icons are used for premium and verified badges.
Media Queries: Utilized for responsive design to adapt the layout for different screen sizes.

**How to Run**
Clone the repository.
Navigate to the project directory.
Run **npm install** to install dependencies.
Run **npm start** to start the development server.
Open your browser and go to **http://localhost:3000**.


**Deployment**
To deploy your React profile page on Netlify:

_GitHub Repository:_
Ensure your project is hosted on GitHub.

_Netlify Account:_
Create an account on Netlify.

_Connect GitHub:_
In Netlify, click "New site from Git" and connect your GitHub repository.

_Configure Build:_
Netlify will auto-detect React settings.
Set build command to npm run build and publish directory to build if needed.

_Deploy:_
Click "Deploy site" to initiate the build and deployment.

**Additional Notes**
The project uses functional components and React Hooks for state management.
Responsive design is achieved through media queries for different screen sizes.
Icons from FontAwesome are utilized for premium and verified badges.
Data for profiles, posts, and post images is stored in JSON format.
Feel free to explore the code and adapt it for your own projects! If you have any questions or issues, please create an issue in the repository. Contributions are welcome!
