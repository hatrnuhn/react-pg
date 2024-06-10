import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css'
import HomePage from './pages/Home';
import CarsPage from './pages/Cars';
import LendPage from './pages/Lend';
import StopPage from './pages/Stop';
import UpdateCarPage from './pages/UpdateCar'
import Protected from './components/Protected';
import LoginPage from './pages/Login';
import { useEffect, useRef, useState } from 'react';
import ErrorPage from './pages/Error';
import MyContextPage, { ContextProvider } from './pages/MyContext'
import { AppProvider } from './contexts';

interface setupStatusMessagesAdded {
  [key: string]: string | null
}

function App() {
  const [setupStatus, setSetupStatus] = useState<string[]>([]);
  const messagesAdded = useRef<setupStatusMessagesAdded>({});

  useEffect(() => {
    const envVars = [
      { key: 'VITE_G_OAUTH_CID', message: 'Please provide Google OAuth ClientID as VITE_G_OAUTH_CID in Environment variables' },
    ];
  
    envVars.forEach(envVar => {
      const envValue = import.meta.env[envVar.key];
      if (!envValue && !messagesAdded.current[envVar.key]) {
        setSetupStatus(ss => ([...ss, envVar.message]));
        messagesAdded.current[envVar.key] = envVar.message;
      }
    });
  }, []);  

  return (
    <AppProvider>
      {(setupStatus.length > 0) ? <ErrorPage setupStatus={setupStatus} /> : 
        <Router>
          <Routes>
            <Route 
              path='/*'
              element={
                <Protected children={
                  <Routes>
                    <Route path='/' element={<HomePage />}/>
                    <Route path='/home' element={<Navigate to='/app'/>} />
                    <Route path='/cars' element={<CarsPage />}/>
                    <Route path='/rent' element={<HomePage />}/>
                    <Route path='/lend' element={<LendPage />}/>
                    <Route path='/update-car' element={<UpdateCarPage />}/>
                    <Route path='/lend/stop' element={<StopPage />}/>      
                  </Routes>
                }/>
              }
            />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/click-counting' element={
              <ContextProvider>
                <MyContextPage />
              </ContextProvider>
            } />
          </Routes>
        </Router>
      }
    </AppProvider>
  )
}

export default App
