---
layout: post
title:  "How to use Google Sheets as a Database"
date:   2019-09-01 10:00:00 -0400
featureImg: /img/google-sheets-as-database-post.png
categories: Past Challenges
future: true
excerpt:  "Have you ever wondered how to use Google Sheets as a database for a quick data viz representation? I know I have! After many attempts, I found an open source project that simplifies the process and allows you to skip jumping through hoops. Keep reading to learn more... "
---
My data visualization representation for the July challenge used voter turnout data for the past three presidential elections. The patriotism data visualization project source code is available in [Github](https://github.com/milufranz08/patriotism) and it is also hosted in this [link](https://frozen-tor-98791.herokuapp.com/).

![Alt Text](https://media.giphy.com/media/gFhO0EPg7kI5DMWlv7/giphy.gif)

Tables of voter turnout data are free and available for everybody via Google Sheets shared by the [United States Elections Project](http://www.electproject.org/home/voter-turnout/voter-turnout-data).

In order to use the data I found, I followed the following steps:

### 1. Create your Google Sheets File

I downloaded and collected tables with information in regards to presidential election voter turnout for the years 2016, 2012, and 2008. Each table was placed in a different tab. Check out [this](https://docs.google.com/spreadsheets/d/1tzGMbEk2xUQXg-47FM9NWK1NCCsPfby81fnQrL4-hlE/edit#gid=0) Google Sheets file as an example.

When you create your Google Sheets file (aka your future database), make sure you populate your first row with the field names that represent the information listed under that column. This is going to help you to easily retrieve information from the response.

<div class="Post__images">
    <div class="Post__image-crop">
        <img src="/img/google-sheets-database-post/example-sheet.png">
    </div>
</div>

### 2. Create an API

Sign up for a free account with [Stein](https://steinhq.com). The singing in process will guide to an input field where you need to paste you Google Sheets link to create an API. Make sure the Google Sheets file was created under the same Google account you used to sign up with Stein.

<div class="Post__images">
    <div class="Post__image-crop">
        <img src="/img/google-sheets-database-post/example-form.png">
    </div>
</div>

Once you create your API, Stein will redirect you to your dashboard page:

<div class="Post__images">
    <div class="Post__image-crop">
        <img src="/img/google-sheets-database-post/example-dashboard.png">
    </div>
</div>

Here you will get access to an API URL, make sure you copy it before following the next step.

### 3. Read Data from Google Sheet

Go to your React JS project in the terminal and install the library “stein-js-client” using the command:
`npm i stein-js-client`

Then, include the following lines of code in your project file:

```javascript
const SteinStore = require("stein-js-client");
const store = new SteinStore(“[your API URL]/[sheet name]”);

Const fetchData = () => {
    store.read({limit: 51, offset: 1}).then(data => {
	console.log({data});
    }
}
```

The first and second lines import the library to your file and create a new instance of the store respectively. The store object calls the read function which accepts a couple of optional request parameters, limit and offset. Limit is the maximum number of rows to be returned and offset is the index of the row from which the response should start (the default is 0).

This function returns an array populated with objects that represent each row. For instance, I got the following object for the state of Alabama:

```{
"state":"Alabama",
"VEP Total Ballots Counted":"59.1%",
"VEP Highest Office":"58.8%",
"VAP Highest Office":"56.3%",
"Total Ballots Counted (Estimate)":"2,134,061",
"Highest Office":"2,123,372",
"Voting-Eligible Population (VEP)":"3,609,447",
"Voting-Age Population (VAP)":"3,770,142",
"% Non-citizen":"2.5%",
"Prison":"28,680",
"Probation":"52,177",
"Parole":"8,562",
"Total Ineligible Felon":"66,983"
,"Overseas Eligible":null,
"State Abv":"AL"
}
```

For this specific project, I only needed to read data. However, Stein offers a POST request to write to your Google Sheet which I’m sure will come in handy in the near future.

And that it’s all friends. Let us know if you try this out on the next Imagine.Dat challenge!
