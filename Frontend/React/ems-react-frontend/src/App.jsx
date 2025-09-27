
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import ListEmployeeComponentDummy from './components/ListEmployeeComponentDummy'
import ListEmployeeComponentRest from './components/ListEmployeeComponentRest'
import WelcomeJs from './WelcomeJs'
import AddEmployeeComponent from './components/AddEmployeeComponent'
// import DotGrid from './ReactBitsTheme/DotGrid'
import LiquidEther from './ReactBitsTheme/LiquidEther'
import SplashCursor from './ReactBitsTheme/SplashCursor'

function App() {
  return (
    <>
      <div style={{
        color: '#fff',
      }}>
        {/* <DotGrid
          dotSize={10}
          gap={15}
          baseColor="#410033ff"
          activeColor="#05f429ff"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: -10,
            background: '#181A20',
          }}
        /> */}
        <LiquidEther
          colors={['#5227FF', '#FF9FFC', '#B19EEF']}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: -10,
            background: '#181A20',
          }}
        />
        <SplashCursor />
        <h1> Employee Management Application </h1>
        <BrowserRouter>
          {/* <Header /> */}

          <Routes>

            <Route path='/' element={<><ListEmployeeComponentDummy /><ListEmployeeComponentRest /></>}></Route>
            <Route path='/employee' element={<ListEmployeeComponentRest />}></Route>
            <Route path='/add-employee' element={<AddEmployeeComponent />}></Route>
            <Route path='/update-employee/:id' element={<AddEmployeeComponent />}></Route>

          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
