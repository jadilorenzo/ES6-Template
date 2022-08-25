import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

console.log('React is "READY"')
console.log(<div>READY</div>)

const root = document.querySelector('#root')
ReactDOM.render(<App />, root)
