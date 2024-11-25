import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <>
    <main className='bg-verdegris min-h-screen'>
      <Header />
      <div className="mx-3">
        <Outlet />
      </div>
      <Footer />
    </main>
    
    </>
  )
}

export default App