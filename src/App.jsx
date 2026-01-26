import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter.jsx';
import UserAPI from './UserAPI.jsx';
import UserList from './UserList.jsx';




function App() {


  const [count, setCount] = useState(0)
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const names = ['Alice','Bob','Charlie'];
const doubled = names.map(name => name.length * 2);
console.log('Doubled lengths:', doubled);

const person = { name: 'Alice', age: 25 };
const { name, age } = person;
console.log('Destructured:', name, age);

const users = ['Alice','Bob','Charlie'];
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
          {isLoggedIn ? 'Logout' : 'Login'}
        </button>
      </div>
      <div>
        {isLoggedIn ? <p>Welcome back!</p> : <p>Please log in</p>}
      </div>
      {isLoggedIn && (
        <div>
          <h2>User Data (Only visible when logged in)</h2>
          <UserList users={users} />
          <UserAPI />
        </div>
      )}
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
  
}
export default App
