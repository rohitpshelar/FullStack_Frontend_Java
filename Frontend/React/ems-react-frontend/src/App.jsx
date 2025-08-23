
import './App.css'
import ListEmployeeComponentDummy from './components/ListEmployeeComponentDummy'
import ListEmployeeComponent from './components/ListEmployeeComponentDummy'
import ListEmployeeComponentRest from './components/ListEmployeeComponentRest'
import WelcomeJs from './WelcomeJs'

function App() {

  return (
    <>
      <WelcomeJs></WelcomeJs>
      <ListEmployeeComponentDummy/>
      <ListEmployeeComponentRest></ListEmployeeComponentRest>
    </>
  )
}

export default App
