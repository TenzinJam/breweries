# AndCulture Mini Coding Project

Build a single page application using React to display a list of breweries with the ability to click on
an item from the list to view more details on that brewery.

## Description

This web app was built using the Create React App scaffold because of its easy set-up and other important functionalities it provides. Backend was not incorporated to this project because of the time constraints and the potential loss of cool functionalities available through frontend API fetching. 

I highly encourage you to refer to package.json file in the root directory to get a better understanding of the libraries and frameworks used to build this SPA. 

Data is generously provided by [Open Brewery](https://www.openbrewerydb.org/) and the breweries on this app are listed by according their proximity to your location. What you are seeing when you click on "Breweries Near You" are the literally those closest to you and not a random list from the API. 

## Navigating

As you get to the Home page, you can see the "Breweries Near You" button. Clicking on it will take you to another page that lists 50 breweries around you. You can either click on the "website" link to see a brewery's official site or the on their names to find out more about the brewery. Home button in the nav gives you the option to return to the main page whenever you want. The individual brewery page also has the "Back to List" button to see the complete list again and choose another brewery. 

Google-Map-React, on production, has some glitches and does not render as well as it does locally on development. However, I recommend checking out the web app using the deployed link here: [Breweries](https://brewery-around-you.herokuapp.com/) than running it locally. 

If you do wish to run it locally, there are a few steps you need to follow that are listed below. 

## Getting Started#Set up Steps

* Fork the repository and clone it onto your local machine: 
[how-to-clone-repo](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository)
* Run the following commands in the terminal:    
```
$ cd breweries    
```
```
$ code .
```
* Once you have your code editor open, $ npm install 

### Dependencies and Installing

* Foundational Dependencies include react, react-dom and node-Sass. For full list of dependencies and dev dependencies, please clone the file and refer to it's package.json file in the root directory. 
* Once you "$ npm install", these dependencies and dev dependencies will be installed without you having to do so individually. 


### Executing program
* Run npm start (all commands and stripts are in package.json file under "scripts")
```
npm start
```
* If a tab does not open automatically, hit http://localhost:3000/


Disclaimer: You'd need an API key to see some of the components if you want to run the program locally. For security purposes, I recommend checking out the deployed site [Breweries Around you](https://brewery-around-you.herokuapp.com/). 

## Tech Stack
* Javascript
* React.js
* Sass

## Authors

* Name: Tenzin Jamyang
* Email: jamyangu@gmail.com



## License

MIT license




