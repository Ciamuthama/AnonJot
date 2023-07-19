🚀 Anon Jot - Share Your Thoughts Anonymously! 🚀

Welcome to Anon Jot, a unique MERN Stack project that allows you to share notes, thoughts, and ideas anonymously with ease! 📝💭 This web app provides a user-friendly experience, eliminating the need to sign in to create a new note. Rest assured, your data remains private, making Anon Jot a safe and enjoyable platform to express yourself. 😊

## Technologies Used

- MongoDB: A NoSQL database for storing anonymous notes.
- Express.js: A backend web application framework for building APIs.
- React: A powerful frontend library for creating interactive user interfaces.
- Node.js: A JavaScript runtime used for server-side development.

## Problems Encountered

🤔 Developing Anon Jot presented some exciting challenges, especially since I had to build both the backend and frontend from scratch. The most significant hurdle I faced was connecting the APIs, but with persistence and the help of various documentation and community support, I successfully overcame this obstacle. Now, the project is fully functional and ready for you to use! 💪

## How to Clone and Run the Project

To run Anon Jot on your local environment, follow these simple steps:

1. Clone the repository to your local machine using the following command:
   ```
   git clone https://github.com/Ciamuthama/AnonJot
   ```

2. Navigate to the project directory:
   ```
   cd AnonJot
   ```

3. Install the required dependencies for both the frontend and backend:
   ```
   cd frontend
   npm install
   cd ../backend
   npm install
   ```

4. Set up your MongoDB database:
   - Create a MongoDB database and get the connection string.
   - Create a `.env` file in the `backend` directory.
   - Add your MongoDB connection string to the `.env` file as follows:
     ```
     MONGODB_URI=<your_mongodb_connection_string>
     ```

5. Run the backend server:
   ```
   nodemon server
   ```

6. Open a new terminal window, navigate to the `frontend` directory, and start the React app:
   ```
   cd ../frontend
   npm run dev
   ```

7. Voilà! 🎉 The Anon Jot web app should now be running locally at `http://localhost:3000/`. You can access it using your web browser.

Feel free to explore AnonJot, create anonymous notes, and share your thoughts without any worries! If you encounter any issues or have suggestions, don't hesitate to contribute or reach out for help.

Happy jotting! ✍️😄
