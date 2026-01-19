import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './components/ui/Navbar.jsx';
import App from './App.jsx'
import {Window} from './Window.jsx'

let screenWidth = document.documentElement.clientWidth;
console.log(screenWidth);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Window>
          <App />
      </Window>
  </StrictMode>,
)
