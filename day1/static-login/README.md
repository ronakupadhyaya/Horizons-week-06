# Inline Exercise: React static login form

## Goal

The goal of this exercise is to generate a static login form
in HTML using React.

## Time limit 10 minutes

## Instructions

Generate this HTML login form in React using `React.createElement()`

```html
<form>
  Username: <input type="text" name="username">
  Password: <input type="password" name="password">
  <input type="submit">
</form>
```

1. Open `week06/day1/static-login/client/index.js`
1. Start your server `npm start`
1. Add your `React.createElement()` calls to where it says
  `YOUR CODE HERE`.
1. Make sure your login form is properly rendered using
   DevTools HTML inspector.


   var children = [
     React.createElement('h2', null, 'Items'),
     React.createElement('ul', null,
       React.createElement('li', null, 'Item 1'),
       React.createElement('li', null, 'Item 2'),     React.createElement('li', null, 'Item 3'),     React.createElement('li', null, 'Item 4'))
   ];

   var div = React.createElement('div', null, children)

   ReactDOM.render(
     div,
     document.getElementById('out')
   );
