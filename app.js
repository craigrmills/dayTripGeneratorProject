"use strict";

let destinations = ["Arkansas", "Middle-Earth", "Vulcan", "The Imperium of Man", "Barovia"];
let restaurants = ["Micky D's", "BK Lounge", "Taco Hell", "Blood on the Vine Tavern", "Guy Fieri's Joint"];
let transportations = ["Boat", "Dragon", "Eagle", "Bigger Boat", "Starship"];
let entertainments = ["Fly Fishing", "Attend Execution", "Playing 3D Chess", "Purging Heretics", "Endless Coding"];

let destination = getRandom(destinations);
let restaurant = getRandom(restaurants);
let transportation = getRandom(transportations);
let entertainment = getRandom(entertainments);

showTrip();

let satisfied = false;
let userHappy = prompt("Are you satisfied with your trip? yes or no");
isSatisfied();

function getRandom(thing) {
    let random = Math.floor(Math.random() * thing.length)
    return thing[random];
}

function showTrip() {
    console.log("-----Your Day Trip-----")
    console.log("Destination: " + destination);
    console.log("Restaurant: " + restaurant);
    console.log("Transportation: " + transportation);
    console.log("Entertainment: " + entertainment);
    console.log("");
}

function validateHappy(happy) {
    while (happy != "yes" && happy != "no") {
        happy = prompt("::Invalid Input:: Are you satisfied with your trip? yes or no");
    }
    return happy;
}

function validateIssue(theIssue) {
    while (theIssue != 1 && theIssue != 2 && theIssue != 3 && theIssue != 4) {
        theIssue = prompt("What are you unhappy with? 1 for Destination, 2 for Restaurant, 3 for Transportation, 4 for Entertainment");
    }
    return theIssue;
}

function isSatisfied() {
    while (satisfied == false) {
        userHappy = validateHappy(userHappy);
        if (userHappy == "yes") {
            satisfied = true;
        } else {
            solveIssue(userHappy);
        }
    }
    console.log("===Completed===");
    showTrip();
}

function solveIssue(happy) {
    let issue = prompt("What are you unhappy with? 1 for Destination, 2 for Restaurant, 3 for Transportation, 4 for Entertainment");
    while (userHappy == "no") {
        issue = validateIssue(issue);
        switch (issue) {
            case "1":
                destination = getRandom(destinations);
                showTrip();
                break;
            case "2":
                restaurant = getRandom(restaurants);
                showTrip();
                break;
            case "3":
                transportation = getRandom(transportations);
                showTrip();
                break;
            case "4":
                entertainment = getRandom(entertainments);
                showTrip();
                break;
        }
        userHappy = prompt("Are you satisfied with your trip? yes or no");
        userHappy = validateHappy(userHappy);
        if (userHappy == "no") {
            issue = prompt("What are you unhappy with? 1 for Destination, 2 for Restaurant, 3 for Transportation, 4 for Entertainment");
        }
    }
}