import './App.css'
import Component1 from './compnent/Component1'
import Component2 from './compnent/Component2'
import { ToastContainer, toast } from 'react-toastify';
import Singin from './compnent/form/Singin';

function App() {
 
  return (
    <div>
    <Singin/>
      <ToastContainer/>
    </div>
  )
}

export default App
