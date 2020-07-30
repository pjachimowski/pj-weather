This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# PJ - Weather App
...........................................................................................
PJ - Weather App in a single page website providing weather information to the user along with short description of the query destination.

It provides sets of information such as:
- current weather description
- temperature
- feels-like temperature
- pressure
- humidity
- wind speed

User can type the name of the location into input.

# UX Write up
...........................................................................................
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
...........................................................................................
### Navbar 
Navbar is responsive and in mobile version it is changed into toggle drop down menu. Light color provides extra styling and keeps elements visable. 

- Icon at the top left corner 
- API btn
-a link to main API used for this project  page
- Repo btn
-a link to github repository
- Author drop down menu
-a link to social media of the author of the app

### In the future:
- Better Error handling with use of already built ErrorBoundary component
- more content


# TESTING Write up
...........................................................................................
### Forms
- all the form have validation features. all forms passed testing. 
! card with products should accept only numbers. However, they do accept letter 'e'. This error has to be fixed later. 
### Buttons
- all the buttons are linked correctly and fire up successfully 
### Payment 
- test payment with stripe technology was performed successfully 
### Email 
- email sent via REVIEW form as well as REQUEST form
- emails were received in correct form and without errors
### Travis 
- Travis used for automatic validation on deployed site
### Responsivenes
- site terted in google chrome developer tools as well as on desktop and mobile versions. All elements are responsive, the layout does not breat, elements are not overlaping. 
### Code validation
- Python Code tested with PEP8. Python code adheres to PEP8 standards. (http://pep8online.com/checkresult)
    exception being E501 "line is too long"
- HTML code tested with online validator. (https://www.freeformatter.com/html-validator.html)
- CSS code tested with online validator (http://csslint.net/)
    exception being "Using width with padding can sometimes make elements larger than you expect."


# DEPLOYMENT Write up
...........................................................................................
My project was developed using GitPod IDE, committed to git and pushed to GitHub. Finally the code was wired up with AWS S3 where dynamic media content of shop products are stored. The following steps where taken to deploy my project.
### From GitHub
- Logged into GitHub.
- Selected repository from the GitHub dashboard.
- Clicked on "Open in GitPod button"
- From gitpod I accessed the page via terminal coment "python3 manage.py runserver"
### From Heroku
- Logged into Heroku
- Opened the pj-stickers project 
- In Deploy panel I clicked Deploy branch
- After the page is deployed I opened the app vie "Open App" button

Website is now deployed and is available here:
https://pj-stickers.herokuapp.com/
My repository can be found here:
https://github.com/pjachimowski/stickers

## AWS s3
- Media stored in AWS S3 bucket 
- Static files and CSS sored in the project on Heroku


# TECHNOLOGIES USED
...........................................................................................
### Languages
- HTML
- CSS
- JavaScript
- Python
- django
- Stripe payments

### Libraries
- Bootstrap (https://getbootstrap.com/)
- Fontawesome (https://fontawesome.com/)

### Database
- AWS s3
- local sqlite

### Others
- gradient generator CSS (www.ccbg.io)
- Email JS (https://www.emailjs.com/)
- Heroku cloud platform




# Use of other code
...........................................................................................
- footer source(edited)  https://colorlib.com/wp/bootstrap-footer/

- I use fragments of the code from previous lessons of Code Institure.
All codes were sourced from my own profile on GitHub portal
Parts of the code were edited and adjust to page layout.

### Media
Some stickers were downloaded for free picture collection https://www.pexels.com/
Icons were taken from font awesome portal.
Entire text was edited by author.



# TESTING Write up
...........................................................................................
## HTML
- HTML code produces NO errors on being passed through a validator.
https://validator.w3.org/nu/ 

- All the forms passed testing. All the forms featured with form validation code. 


## Password reset
- Password reset tested and passed successfuly. It may display following error:
SMTPAuthenticationError at /accounts/password-reset/
Due to google account default setups. 
Last time updated: 01.05.2020 after which averything was working correctly. 


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
