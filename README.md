
# Overview
Phone House is an e-commerce application developed using Express and TypeScript, integrating MongoDB and Mongoose for efficient data management. It offers comprehensive product management, order management, data validation, and robust error handling. The project adheres to clean coding practices and is accessible via GitHub and live server links.


# Production API endpoint for testing

- https://phone-house-backend.vercel.app/
- https://phone-house-backend.vercel.app/api/products
- https://phone-house-backend.vercel.app/api/orders

# Explaining how to run the application locally from the GitHub repository:
- ## **Clone the Repository**
1. Open terminal
2. Clone the repository using Git: git clone 
- [https://github.com/Towhid02/assignment-2_phone_house.git]
3. Navigate into the project directory:

- ##**Install Dependencies**
 Install npm dependencies:  
 ```bash
  npm install
  ```

- ## **Set Up Environment Variables**
1. Create a `.env` file in the root of the project.
2. Add the necessary environment variables to `.env`. You might need to refer to the project's documentation or source code to determine which variables are required and their values.
3. <p>Create a `.env` file in the root directory of the project and add the following environment variables. You can modify the values according to your setup.</p>

  ```env
  PORT=5000
  DATABASE_URL=mongodb+srv://<UserName>:<Password>@cluster*** (Mongodb Database Driver URL)
  ```

- ## **Run the Application**

  <p>To run the application in development mode, use the following command:</p>

  ```bash
  npm run start:dev
  ```

   ## **Linting**

  To lint the code, you can use the following command:

  ```bash
  npm run lint
  ```

  To automatically fix linting errors:

  ```bash
  npm run lint:fix
  ```

- ## **Acces The App from browser**

  - The APP will be running on `http://localhost:5000`.