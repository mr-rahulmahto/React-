import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import LoginForm from './LoginForm'
import LoginsignUP from './loginsignUp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <LoginForm /> */}
    <LoginsignUP/>
  </StrictMode>
)
