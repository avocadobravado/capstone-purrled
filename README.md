# Purrled

#### A community for knitters

#### By **Rose Sponseller, October 6th, 2017**

## Description

Purrled is a web application for knitters built with Angular 4, Firebase, and Sass for knitters. Knitters can upload new projects in Purrled and view the other projects others have uploaded.

## Screenshots of Web Application

![screenshot of project](https://github.com/avocadobravado/capstone-purrled/raw/master/src/assets/scs01.png?raw=true)

![screenshot of project](https://github.com/avocadobravado/capstone-purrled/raw/master/src/assets/scs02.png?raw=true)

![screenshot of project](https://github.com/avocadobravado/capstone-purrled/raw/master/src/assets/scs03.png?raw=true)

### Installation

#### Prerequisites

* Web browser with ES6 compatibility
* Node.js
* npm
* Firebase
* Angular
* TypeScript
* Git

Open your terminal and clone this repository with the following command:

```
$ git clone https://github.com/avocadobravado/capstone-purrled
```

Move into the cloned repository:

```
$ cd capstone-purrled
```

Create an api-keys.ts file:

```
$ touch src/app/api-keys.ts
```

* Go to http://firebase.google.com and sign up for an account
* Once signed up, click on "Go to Console"
* Then, "Add project" and add your project's name
* From there, click on "Add Firebase to your Web App"
* Finally, add the information from the pop up modal from Firebase to your api-keys.ts file (it should look something like this, but replace the information inside the masterFirebaseConfig with your own unique information):

```
export var masterFirebaseConfig = {
  apiKey: "xxxxx",
  authDomain: "xxxxx",
  databaseURL: "xxxxx",
  projectId: "xxxxx",
  storageBucket: "",
  messagingSenderId: "xxxxx"
};
```

Install npm and Bower by typing:

```
$ npm install
$ bower install
```

Set up the build:

```
$ ng build
```

Start the server:

```
$ ng serve
```

The previous step should immediately open up a web browser such as Google Chrome and take you to the site, but if not, visit the following address in your preferred browser:

```
localhost:4200
```

## Built With

### Code
* HTML
* CSS
* JavaScript
* TypeScript
* Angular 2
* Neat

### Tools &amp; Dependencies
* Node
* Bower
* npm
* Angular CLI
* Firebase

### Design
* Google Fonts

## Support and contact details

* Feel free to reach out with suggestions at rosesponseller@gmail.com

## License

This project is licensed under the MIT License

**_Rose Sponseller_** Copyright (c) 2017
