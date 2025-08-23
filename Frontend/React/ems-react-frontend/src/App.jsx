
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import ListEmployeeComponentDummy from './components/ListEmployeeComponentDummy'
import ListEmployeeComponentRest from './components/ListEmployeeComponentRest'
import WelcomeJs from './WelcomeJs'
import AddEmployeeComponent from './components/AddEmployeeComponent'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
          <Routes>

            <Route path='/' element = {<><WelcomeJs/><ListEmployeeComponentDummy/><ListEmployeeComponentRest/></>}></Route>
            <Route path='/employee' element = {<ListEmployeeComponentRest/>}></Route>
            <Route path='/add-employee' element = {<AddEmployeeComponent/>}></Route>

          </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
