import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserContext from './context/UserContext.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/Store.js'
import { BrowserRouter } from "react-router-dom"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename='/DishMenu'>
      <Provider store={store}>
        <UserContext>
          <App />
        </UserContext>
      </Provider>
    </BrowserRouter>
  </StrictMode>
)
