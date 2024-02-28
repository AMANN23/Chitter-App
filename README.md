<div align="center">
  <a href="https://github.com/AMANN23/Chitter-App">
   <img src="public/ChitterLogo.png" width="200" height="200">
  </a>

  <h1 align="center">Chitter Application</h1>
  <p>A clone of a popular social network created using TypeScript and React!</p>
  <p align="center">
  <a href="https://chitter-application.vercel.app/">Try Out the App Out For Yourself!</a>
  </p>
</div>

## About the Project

Chitter represents a comprehensive full-stack application serving as a replica of the widely-used social media platform, Twitter (now X).

Users are empowered to create and share 'Chits,' engage with content through likes and comments, and establish connections by following other Chitter users, mirroring the functionalities of the original application.

This initial version of Chitter lays the groundwork for upcoming enhancements and advanced features, such as the ability to upload GIFs and videos, a direct messaging service, and the integration of a hashtag search functionality.

As the project is deployed on Vercel, a 504 (Gateway Timeout) error occurs, so not all the functions work but the app works perfectly locally. All of the main features will be screenshot and shown below!

## Getting Started

First, run the development server:

```bash

Step 1: In your terminal run: git clone https://github.com/AMANN23/Chitter-App.git

Step 2: In your terminal run: npm install, npm install i, npm install bcrypt in the main directory

Step 3: Create a .env file in the main directory

Step 4: Inside the .env file copy the following lines:
       DATABASE_URL=
       NEXTAUTH_JWT_SECRET="NEXT_AUTH_JWT_SECRET"
       NEXTAUTH_SECRET="NEXT_AUTH_SECRET"


Step 5: To get the DATABASE_URL, you will need to complete these following sub-steps:
       1. Sign up or Login to MongoDB.
       2. Create a deployment choosing the free cluster option.
       3. Create a username and password.
       4. Add a 0.0.0.0/0 IP address so it can be accessed anywhere then click finish and close.
       5. On the left sidebar click 'Database', 'Connect' and then click 'MongoDB for VS Code'
       6. The Database URL can be found in a similar format to this 'mongodb+srv://username:<password>@cluster0.*******.mongodb.net/test'
       7. The .env file should be completed

Step 6: In your terminal run npx prisma db push

Step 7: Make sure MongoDB for VS code is installed on your Visual Studio Code and connect with string using the 'Database URL'

Step 8: In your terminal run: npm run dev

Step 9: Open http://localhost:3000 with your browser to see the results.

Step 10: Everything should be working but if not, delete all node modules and type in the terminal npm install

```

## Key Features

## Screenshots of Key Features

## Future Ideas to be Implemented
