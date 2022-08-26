# Youtube Clone

- Deployed site on https://clone-b9180.web.app/

- This Youtube Clone is build using :
    - react
    - material-ui
    - tailwind css
    - firebase

## Material-ui

- setup the material-ui with the icons and the core all the way over here.

- to use the material-ui icons we must need to install this:  
         npm install @mui/icons-material

## Tailwind-css Integration into react app

- npm install -D tailwindcss postcss autoprefixer
- npx tailwindcss init -p   -- creates the tailwind.config.js file 

- Add these to the index.css at root
    - @tailwind base;
    - @tailwind components;
    - @tailwind utilities;

- flex-1: If an element has flex: 1 , this means the size of all of the other elements will have the same width as their content, but the element with flex: 1 will have the remaining full space given to it.

## Firebase setup

- setting up the firebase account here all the way from the console by creating a simple project name here youtube-clone
- The magic thing over here is the config file which will help us to conect the firebase with the web.

- we need firebase-tools so as we need the cli
- npm install -g firebase-tools

- copying the firebase config file and saving in firebase.js file.

## Firebase Deployment 

- =======================================================Deploy using Firebase=========================================================================
 
    - firebase init        -- click on hosting - configure and deploy firebase hosting sites
    - select an existing project
    - select your clone with that name
    - we have to run the command build in the terminal for our application
    - run in terminal -- yarn build
    - firebase deploy 

## React Router

- It is the library to route pages
- yarn add react-router-dom 

- import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

- link tag surround to the search button and it takes to the page defined in the route with the id that page which is dynamic all the way.
- link tag surround to the youtube logo as well that will take us back to the homepage all the way.

- path="/"    - take to the homepage
- path="/search/:searchTerm" - this is the dynamic functionality.

- link tag donot refresh it well as a tag do so as we are actually using the link tag here.
- to get the dynamic search term we get that term from the state we saved the input and then we pass in to the to attribute in the link tag which takes us dynamically to the page, which we have written in the tempelate literals.
- The best advantage of using the link tag is that, It doesnot refresh the whole page again, it just renders the component all the just.

### Extra Information

- We use BEM that is really useful all the way the bem class naming convention means components names to start with capital

- We need to write the name of the components in the Capital.

- magicline for the image in the css is the object-fit:contain;

- position:sticky, top:0, z-index: 100
- stroke-color for the color in tailwind-css

- bydefault components are block in nature as they appear one after another, when we apply flex they come side by side.
- flex:0.2;  -- means it 20% of the screen
- font-weight,font-size

- we can also pass components in the props, Put to pass the components in the props we must have the props name start with the capital letter.

- firebase is used here just to deploy the application

- We must use the component inside the Router tag so as we can use Link tag init, else we will get the error that ref error.








