import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
function noice() {
  var current = document.getElementById('changeit').src
  if (current === 'https://cdn.discordapp.com/avatars/637800660875608085/a_4acee38fcb401dd59c5d065ca387ce68.gif?size=4096') {
    document.getElementById('changeit').src = 'https://cdn.discordapp.com/avatars/767041966549499925/eb14064bb0050d8bc6d38512b8276543.png?size=4096'
    document.getElementById('whoavatar').innerHTML = 'This is my avatar.'
  } else {
    document.getElementById('whoavatar').innerHTML = 'This is my friends dylan avatar.'
    document.getElementById('changeit').src = 'https://cdn.discordapp.com/avatars/637800660875608085/a_4acee38fcb401dd59c5d065ca387ce68.gif?size=4096'
  }
  
}
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <nav className='nav'><button className='navbutton' href='/'>Home</button><button className='navbutton' href='test.html'><a href="/test.html"> About me</a></button></nav>
        <br /><br /><br />
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello world!</h1>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Hello, my name is Emile and welcome to my site. <br/>
          I like coding and playing roblox.
        </p>
        <img id='changeit' src="https://cdn.discordapp.com/avatars/767041966549499925/eb14064bb0050d8bc6d38512b8276543.png?size=4096" />
        <span id='whoavatar'>This is my avatar</span>
        <br />
        <button onClick={noice} className='button-27'> This button doesn't do anything</button>
        <br />
        <br />
        <footer>Made by <a href="https://emidblol.carrd.co/">@emidblol</a></footer>
      </header>
    </div>
  )
}

export default App
