import React from 'react'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import Header from './Header.jsx'

const Layout = () => {
  return (
    // Quitamos el container-fluid de aquí para que nada limite al Header
    <> 
      <Header />

      {/* Solo aplicamos el contenedor al contenido central */}
      <main className='container mt-4' style={{ minHeight: '80vh' }}>
          <Outlet />
      </main>

      <footer className='container-fluid'>
          <Footer />
      </footer>
    </>
  )
}

export default Layout