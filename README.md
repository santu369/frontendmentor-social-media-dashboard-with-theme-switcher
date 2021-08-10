# Frontend Mentor - Social media dashboard with theme switcher solution

This is a solution to the [Social media dashboard with theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-media-dashboard-with-theme-switcher-6oY8ozp_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshots](#screenshots)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Toggle color theme to their preference

### Screenshots

Desktop version

![desktop version](./screenshots/desktop-version.png)

Tablet version

![tablet version](./screenshots/tablet-version.png)

Mobile version

![mobile version](./screenshots/mobile-version.png)

### Links

- Solution URL: [Code on GitHub](https://github.com/santu369/frontendmentor-social-media-dashboard-with-theme-switcher)
- Live Site URL: [Netlify Live URL](https://santu369-frontendmentor-social-media-dashboard-theme-switcher.netlify.app/)

## My process

Worked on Mobile first approach, then added media queries, adjusting the layout.
Used React for building the app using component based approach and Bootstrap for layout.
Split the code into as many reusable components as possible.

Used prefers-color-scheme for dark/light mode toggle using custom data attribute.
If user has selected dark mode in browser color preferences, code will automatically detect it and change the display to dark mode. The app watches for changes in the browser coloe preferences, if after opening the app, user changes color preference in browser settings, app will change to selected color mode. If user choses to change mode using the toggle, this is stored in local storage of the browser and takes precedence over browser color preference.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- BEM Methodology
- SASS
- Bootstrap
- React
- Clip-path animation

### What I learned

Adding simple clip-path animation to the application on the toggle.
Using prefers-color-scheme media query and applying in react.
Setting dark/light mode based on browser color preferences set by user.
Adding toggle functionality to change between dark and light modes.

### Continued development

Continue working on more full page designs in frontendmentor using react.

### Useful resources

- [Sass](https://sass-lang.com/) - Installing and Learning Sass.
- [BEM](https://en.bem.info/methodology/quick-start/) - Quick Start with BEM.
- [W3C Markup Validation Service](https://validator.w3.org/) - Validator for checking the markup validity of Web documents in HTML, XHTML, SMIL, MathML, etc.
- [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/) - Check Cascading Style Sheets (CSS) and (X)HTML documents with style sheets.
- [Bootstrap CSS](https://getbootstrap.com/docs/5.0/getting-started/introduction/) - Getting started with Bootstrap.
- [React](https://reactjs.org/) - Javascript library for building interfaces.
- [prefers-color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme) - The prefers-color-scheme CSS media feature is used to detect if the user has requested a light or dark color theme.
- [clip-path](https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path) - The clip-path CSS property creates a clipping region that sets what part of an element should be shown. Parts that are inside the region are shown, while those outside are hidden. -[Clippy — CSS clip-path maker](https://bennettfeely.com/clippy/) - Tool to help make CSS clip-paths.

## Author

- Website - [Shiva Santosh Jana](https://santu369.github.io/FreeCodeCamp-PersonalPortfolioWebpage)
- Frontend Mentor - [@santu369](https://www.frontendmentor.io/profile/santu369)
- Twitter - [@santu69](https://www.twitter.com/santu69)
