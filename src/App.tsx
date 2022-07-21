import { BrowserRouter } from 'react-router-dom'
import Signup from './pages/signup'
import RoutesComponent from './routes'
import './styles/global.css'

function App() {

  return (
    <>
      <BrowserRouter>
      <Signup />
        <RoutesComponent/>
      </BrowserRouter>
    </>
  )
}

export default App
