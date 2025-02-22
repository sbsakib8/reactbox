import './App.css'
import Component1 from './compnent/Component1'
import Component2 from './compnent/Component2'
import { ToastContainer, toast } from 'react-toastify';

function App() {
 
  return (
    <div>
      <Component1/>
      <Component2/>
      <ToastContainer/>
    </div>
  )
}

export default App
