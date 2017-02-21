// JSX handling children components

// We want to create a component that contains an article, 
// it should take in a color as props for the text-color 
// and create a red border around all the elements
// that make up the article. This is the structure we want:

<div class="article" style="color: blue;">
  <h1>Title of the article</h1>
  <p>This is the text of a very interesting article about the baes from the previous exercise. </p>
  <p>This is the second part of the superFunTimes article.</p>
</div>

// Modify the ArticleContainer so that it receives elements
// and puts them inside of the container so they display
// with the correct structure: surrounded by the box and 
// colored blue. 

// YOUR CODE HERE
var ArticleContainer = React.createClass({
  render: function() {
    return (
      //YOUR CODE HERE
    ) 
  }
});

// DO NOT MODIFY
ReactDOM.render(
  <ArticleContainer color="blue">
   <h1>Title of the article</h1>
   <p>This is the text of a very interesting article about the baes from the previous exercise. </p>
   <p>This is the second part of the superFunTimes article.</p>
  </ArticleContainer>,
  document.getElementById('blue'));