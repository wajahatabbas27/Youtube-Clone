# Youtube Clone

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

### Extra Information

- We use BEM that is really useful all the way the bem class naming convention means components names to start with capital

- We need to write the name of the components in the Capital.

- magicline for the image in the css is the object-fit:contain;

- position:sticky, top:0, z-index: 100
- stroke-color for the color in tailwind-css









