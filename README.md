This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# PJ - Weather App

PJ - Weather App in a single page website providing weather information to the user along with the short description of the query destination.

It provides sets of information such as:
- current weather description
- temperature
- feels-like temperature
- pressure
- humidity
- wind speed

User can type the name of the location into input.

# UX Write up

## color scheme
- Main body uses generated css gradient (via https://www.ccbg.io/)
GREEN and LIGHT BLUE
There colors are meant to create positive, and modern look.

- Main buttons and call to action buttons:
Used as a contrast to purple background. Eye - catcher. 
BLUE rgb(17,153,142);

## typography
- Main titles:
font-family: 'Quicksand'
- Rest:
font-family: Pacifico'

## USER STORIES
As a user, I want to learn about the weather at specific location 

# FEATURES

### Navbar 
Navbar is responsive and in mobile version it is changed into toggle drop down menu. Light color provides extra styling and keeps elements visable. 

- Icon at the top left corner 
- API btn
-a link to main API used for this project  page
- Repo btn
-a link to github repository
- Author drop down menu
-a link to social media of the author of the app

### Search bar
user input is sotore as a state in Container component and passed to Weather component as a prop. That input is used as an end point to the both OpenWeather api as well as Wiki api. 

Wiki Api returns an image and short description. 

OpenWeather api populate all the details of the weather as well as sends country code to a flag api and populate the name of the location in the welcome heading. 

* here potential error may be that the weather api has begger database than wikipedia, names of the locations also have more veriations. Therefore, it may happen that the weather will display correct data wheras wikipedia will throw an error. 

### In the future:
- Better Error handling with use of already built ErrorBoundary component
- more content
- Weather forecasts for the future days
- Locations saved as favourite


### Responsivenes
- site tested in google chrome developer tools as well as on desktop and mobile versions. All elements are  responsive, the layout does not break at mobile point, elements are not overlaping. 

* Aplication has to be adjusted to mobile version as well.


# DEPLOYMENT Write up

My project was developed using VSC IDE, committed to git and pushed to GitHub. 

### From GitHub
- Logged into GitHub.
- Selected repository from the GitHub dashboard.
- Clicked on "Open in GitPod button"
- From VSC I accessed the page via terminal 
 "npm start" for React app
 "node server/server.js" from root directory for server 


My repository can be found here:
https://github.com/pjachimowski/pj-weather


# TECHNOLOGIES USED

### Languages
- HTML
- CSS
- JavaScript

### Libraries
- Bootstrap-React (https://getbootstrap.com/)
- Fontawesome (https://fontawesome.com/)
- React

### Database
- https://openweathermap.org/
- https://www.countryflags.io/
- https://en.wikipedia.org/api/rest_v1/page/summary/

### Others
- gradient generator CSS (www.ccbg.io)


# Use of other code
- footer source(edited)  https://colorlib.com/wp/bootstrap-footer/

- I use fragments of the code from previous lessons Salt summer-lab.
All codes were sourced from my own profile on GitHub portal
Parts of the code were edited and adjust to page layout.

### Media
Icons were taken from font awesome portal.
Entire text was edited by author.

### Acknowledgments

- I received inspiration for this project from various lessons conducted at Sali - school of applied technology

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
