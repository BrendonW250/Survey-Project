// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import data from '/data'
import './App.css'


export default function App(){
  const something = data.map(item => {
    return (
      <Navbar
        item= {item}

      />

    )
  })

  return (
    <div>
      <h1>Hi Everyone</h1>
      <section>
        {something}
      </section>
    </div>
  )
}
// function App() {
//   // const [count, setCount] = useState(0)

//   const something = data.map(item => {
//     return (
//      <Navbar
//         item= {item}

//       />
//     )
//   })


      
//       {/* <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://reactjs.org" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </div> */}
    
  
// }

// return (
//   <div>
//     <h1>Hello there!</h1>
//     <section className='cards-list'>
//       {something}
//     </section>
//   </div>
// )



// export default App
