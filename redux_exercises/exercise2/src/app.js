import React,{ Component } from 'react'
import { render } from 'react-dom'


var Base = () => (<h1>{'Hello React'}</h1>)
render(<Base />,document.getElementById('root'))