# Wmsiddiqui
This is a website intended to be my personal portfolio.

## Stack
This website is built using React and Redux. Although Redux is probably not necessary for this project, I included it as an exercise to simply show that Redux can be used for state management. This website, at least at the time of writing this, will not have much state.

* React
* Redux
* React-Router-Dom
* React-Bootstrap

## Hosting and other Ops related notes:
This website was built and then deployed to Github Pages. I used a custom domain, which you can find in the CNAME file. Because this is a React application using BrowserRouter from ReactRouterDOM, deep links are not supported by Github Pages. There are two options around this:

1. Stop using BrowserRouter and use HashRouter instead. This would make any deep link work, although the URLs would not be very user friendly, since, as the name suggest, they would be hashes. I wanted to keep the URLs user friendly for my portfolio in order to easily link my resume and other pages.
2. Redirect any non-root url to root, and then add the route to the url. This can luckily be done by adding some code found in [this repository by rafrex](https://github.com/rafrex/spa-github-pages). This seems a bit hacky, but seems to be a better option at the time.

## ToDo
Here are some items I'd like to add to my portfolio:

* A gallery with all my hobby related items
* A blog to document some of my findings and learnings throughout my career
* A collapsable menu when the screen resizes