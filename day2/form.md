# Warmup exercise: Controlled form fields

## Goal

The goal of this exercise is to use controlled form fields
to tie the values of two text input fields together in React.

## Time limit: 15 minutes

## Instructions

1. [Open CodePen for this exercise.](http://codepen.io/moose-horizons/pen/akyorq?editors=0010)
1. There are two text input fields here. We are going to make it  
   so that they display identical data at all times. So when
   one text input field changes the other should change with it.
1. Turn input fields into controlled input fields by setting
   `value={this.state.text}` on them.
1. Create a new function `change` inside the class. This function should
   take an `event` argument and update `this.state.text` using
   `this.setState` to `event.target.value`.
   ![](img/change.png)
1. Add the `onChange={this.change}` event handler to both form fields.
1. Try changing input fields, they should update at the same time.
