# HeliosX Tech Test

Hosted Site: https://gworsnop-line-up-tech-test.vercel.app/

---

## Introduction

- This is a Front-end application that uses React, Typescript, Redux, Redux Toolkit and Styled Components in order to create a web page that displays data from the https://reqres.in API.

- The site is styled using Styled Components using responsive techniques.

- State is managed by Redux and Redux Toolkit.

---

## How to use the site

At the application's homepage, you will initially come across a unused page, this is because the home page has not been created yet. The idea is that this is the beginning of a project and we are focusing on "/users". Use the URL or the header to navigate to "/users"

From here, you can see the different information displayed from an API request, containing a number of differerent users data. You can see their names and emails as well as a displayed avatar. Clicking on a button to see more info takes you to "user/:id". There is some placeholder data here to show some rough layout of the page.

---

## Running the project locally:

1. Fork this repository to your GitHub account

2. Clone your forked repository to your local machine

3. cd to the correct directory _(line-up-tech-test)_ and run `npm install` to install the correct packages.

4. Use the command `npm start` to run the project locally.

---

## Recommended Node Version:

- Node: v18.0.0
- It is recommended that you use this version or higher.

## Thoughts and considerations of this task

I intentionally used React, Typescript and Redux to build this as I know that this the tech stack you use for your front end. I hope this shows my ability using these languages and how I can work within your exisitng codebase. I learnt Redux from scratch for this project, and although it isn't perfect, I feel I made good progress.

In this task there were a couple of small issues I spent a lot of time considering - the main one being managing state / using the store alongside URL params. In the end I could either get one or the other working, not both. There is some functionality there for the params, but I feel I am missing one small thing. I would love to discuss this with you in more detail at some stage.

In terms of styling, I intentionally tried to match the colour palette of your current website https://lineupnow.com/ - you can see the coolor palette I made here and used for the theme https://coolors.co/ffffff-f6f8fb-399ba2-012b4f-121212.

There is lots of room for this task to be extended, I have shown some places it could for example in the header. Navigating to different pages across the site, including the home page which needs creating.

I wanted the page to be simple and accessible on both mobile and desktop, as I have created it mobile first.

There is not a huge amount of comments in my code, however I have added some in in order to highlight particular pain points for me when working and some things I had to add in due to certain issues that arose. If I were to go back and work on this further, I would make sure to include more comments.

Similarly, I spent so much time learning Redux that I did not spend any time writing tests - I know this is an important part of writing code, so I would endeavour to add them in if this were a production app.

Overall, I enjoyed working on this task and would love to discuss it with you in more detail at a later stage. Redux has a steep learning curve, but I feel I learnt a lot!
