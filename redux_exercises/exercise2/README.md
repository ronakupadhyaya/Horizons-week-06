## Redux Hangman

In this exercise you will be creating your own version of the classic game known as Hangman. This exercise will help you get more practice with Redux and React-Redux bindings. Make sure you have understood the last exercise before embarking on this leg of your journey to Redux proficiency.

This time around you will have a chance to really appreciate how awesome the React/Redux synergy is. There are two paths through this particular exercise and you can choose either one.

The first path involves doing everything yourself without any guidance. This is strongly recommended if you are feeling pretty good about your understanding of React and Redux. You can use the image urls provided below if you arent inclined to create your own images just yet. 

```javascript
const imgUrls = [
  'https://d3vv6lp55qjaqc.cloudfront.net/items/0r303q3V433l180r3T04/Image%202017-05-28%20at%208.21.20%20PM.png?v=e03b9d65',
  'https://d3vv6lp55qjaqc.cloudfront.net/items/0C462C3Z2I1m0P2B3Q06/Image%202017-05-28%20at%208.22.39%20PM.png?v=42b328bd',
  'https://d3vv6lp55qjaqc.cloudfront.net/items/180f2x1H212V2c0x3l3d/Screen%20Shot%202017-05-28%20at%208.23.35%20PM.png?v=dc7faa40',
  'https://d3vv6lp55qjaqc.cloudfront.net/items/0v091u1y0L2V1o303D2I/Screen%20Shot%202017-05-28%20at%208.24.11%20PM.png?v=b2135880',
  'https://cl.ly/171p1o461528/Image%202017-05-28%20at%208.25.49%20PM.png',
  'https://cl.ly/151P0M1E2f3n/Image%202017-05-28%20at%208.26.09%20PM.png',
  'https://cl.ly/2Q27011r022a/Image%202017-05-28%20at%208.26.23%20PM.png'
]

```

If you decided to go it alone thats pretty awesome! If you are still feeling a little wobbly with all the new stuff you learned its okay and understandable. What is most important is to challenge yourself. Many of the best developers have had slower starts. 

This exercise is broken down into a series of checkpoints that will help you make steady progress toward our goal of creating Hangman.

### Plan of attack

The overall strategy is pretty simple. For each of the three components in our game (Man, LetterSelector, LetterBox) we will 

1. create a static or "pure presentational" component that "looks right".
1. After we have created the static version we will figure out all the actions that relate to our component. 
1. For each action we will create an action creator (more on this below). 
1. Once we have all action creators for that component we can begin writing the reducer, making sure to handle each action in a case of the switch statement. 
1. After the reducer is done we just connect the static component as we have practiced and we are done! 

Feel free to switch to "manual" at any point and finish the rest of the exercise whenever you feel confident enough to take over. If you get lost you can always come back to the steps here or ask a TA for guidance. Armed with our plan of attack above let's begin!

### <Man />

