var firebase = require("firebase");

var config = {
    apiKey: "AIzaSyCgZ6UW7WcrynCaBqAZPMUPqg7Dn-9_SZ4",
    authDomain: "notepad-dbe76.firebaseapp.com",
    databaseURL: "https://notepad-dbe76.firebaseio.com",
    projectId: "notepad-dbe76",
    storageBucket: "notepad-dbe76.appspot.com",
    messagingSenderId: "383270566051"
};
firebase.initializeApp(config);

var stroage = firebase.storage();

// Points to the root reference
var storageRef = firebase.storage().ref();

// Points to 'images'
var imagesRef = storageRef.child('images');

// Points to 'images/space.jpg'
// Note that you can use variables to create child values
var fileName = 'space.jpg';
var spaceRef = imagesRef.child(fileName);

// File path is 'images/space.jpg'
var path = spaceRef.fullPath

// File name is 'space.jpg'
var name = spaceRef.name

// Points to 'images'
var imagesRef = spaceRef.parent;