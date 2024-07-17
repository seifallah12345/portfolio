import React from 'react';
import './ProjectPage.css';

const ProjectPage = () => (
  <div className="project-page">
    <div className="content">
      <h2>Logicana</h2>
      <p>
        Logicana is a sophisticated desktop application designed to manage stock in a cannabis lab. The primary goal of Logicana is to streamline inventory management, ensuring that the cannabis lab operates with maximum efficiency and accuracy. This application helps lab technicians keep track of stock levels, manage incoming and outgoing shipments, and generate detailed reports on inventory status.
      </p>
      <p>
        The application provides an intuitive interface that simplifies the complex process of stock management. Users can easily add new stock items, update existing ones, and remove items that are no longer needed. With Logicana, the risk of manual errors is significantly reduced, which is crucial in a regulated industry like cannabis where compliance and accuracy are paramount.
      </p>
      <h3>Technologies Used</h3>
      <ul>
        <li><strong>JavaScript, HTML, and CSS</strong> - These core web technologies were used to develop the user interface, providing a responsive and interactive experience for users.</li>
        <li><strong>Electron Framework</strong> - Electron was used to build the desktop application, allowing the use of web technologies to create a cross-platform app that runs on Windows, macOS, and Linux.</li>
        <li><strong>SQL</strong> - SQL was used for database management and querying. It allows the application to efficiently store and retrieve data, ensuring that the stock information is always up-to-date.</li>
        <li><strong>XAMPP</strong> - XAMPP was used to create a local web server environment for developing and testing the application. It also provides the tools necessary for managing the SQL database.</li>
        <li><strong>Node.js</strong> - Node.js was used for the backend of the application, providing server-side functionalities and handling database interactions.</li>
      </ul>
      <h2>E-Commerce Site</h2>
      <p>
        The e-commerce site is a full-fledged online shopping platform designed to provide users with a seamless and enjoyable shopping experience. The site features a variety of products, a user-friendly interface, and secure payment options. The back end of the e-commerce site was developed using Node.js, while the front end was built with React.js.
      </p>
      <p>
        The site includes features such as product listings, a shopping cart, user authentication, and order management. Users can browse products by categories, add items to their cart, and proceed to checkout with a secure payment gateway. Admins have access to manage products, view orders, and handle customer queries.
      </p>
      <h3>Technologies Used</h3>
      <ul>
        <li><strong>Node.js</strong> - Used for the backend to handle server-side logic, manage databases, and provide APIs for the front end.</li>
        <li><strong>React.js</strong> - Used for the front end to create a dynamic and responsive user interface. React's component-based architecture ensures efficient rendering and a smooth user experience.</li>
        <li><strong>Express.js</strong> - A web application framework for Node.js used to build the backend API endpoints.</li>
        <li><strong>MongoDB</strong> - A NoSQL database used to store product information, user data, and orders.</li>
        <li><strong>Redux</strong> - A state management library used in React.js to manage the application state and facilitate communication between components.</li>
      </ul>
      <h3>Key Features</h3>
      <ul>
        <li>User authentication and secure login.</li>
        <li>Product browsing and search functionality.</li>
        <li>Shopping cart and checkout process.</li>
        <li>Order history and tracking for users.</li>
        <li>Admin panel for managing products and orders.</li>
      </ul>
    </div>
  </div>
);

export default ProjectPage;
