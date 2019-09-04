# SiGn
https://sg-sign.herokuapp.com/

## Overview
SiGn is a web application that allows learners to access lesson packages for Singapore Sign Language (SgSL). Learners can play games to gamify their learning experience and consolidate their learnings in a fun and interative way. Learners can also access the word bank to look up commonly used signs. The Singapore Association for the Deaf (SaDEAF) can assign administrators who can populate the word bank.

## Site Navigation

Landing page:
Users are able to log in or sign up for an account. 
Login button will bring up modal which requires username and password.
Users will be redirected to homepage upon successful login.
_________________

Register page:
Users will be able to sign up for new account which requires name, username, password, email. 
New users will then be redirected to group page upon registration.
_________________

Group page:
New users will be be required to join an existing punnet or create one. 
If they choose to login, a modal will be brought up which requires punnet name and password.
Users will be redirected to homepage upon successful login. 
If users choose to create punnet, they will be redirected to create group page. 
_________________

Create group page:
Users will be presented with a form to create new punnet which requires punnet name, punnet password, punnet description/mission, weekly cheat meals and weekly exercise sessions.
Upon creation, users will be redirected to homepage. 
_________________

Homepage:
Posts related to user's punnet. 
User is able to log their meals, workouts and comment on posts. 
_________________

Ownpage:
Users personal page will show only their own meal and workout logs. 
Users can click on the thumbnails to access edit/delete post.

## Live version
Heroku: https://pu-nnet.herokuapp.com/
Github: https://github.com/sharkyu3/diet_tracker

## Built with
herokuapp - https://www.heroku.com

## Workflow
ERD - /SiGn_ERD.pdf
Wireframes - public/wireframes

## Technologies used
MVC
models
Data store - PostgreSQL (Get, Post, Put, Delete)
SQL (Select, Insert, Update)
React.js
Node.js
Express.js
AJAX
Sign up and log in functions for users and group
Cookies
Hashing of passwords (SHA256)
Uploading and retrieval of images via Multer and Cloudinary

## User stories
1. As a user (learner), I want to be able to access lesson content and view my practice alongside the instructional video.
2. As a user (learner), I want to be able to play games to enhance my learning. 
3. As a user (learner), I want to be able to search for words and see it in SgSL.
4. As a user (learner), I want to be able to request for words to be added to the word bank. 
5. As a user (admin), I want to be able to add words to the word bank.
6. As a user (admin), I want to be able to see the requests from users of what they would like added to the word bank. 
