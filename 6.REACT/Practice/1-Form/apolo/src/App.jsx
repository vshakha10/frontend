import './App.css'
import { Header } from './components/Form'
import { Image } from './components/Form'
import { MainContent } from './components/Form'
import { Footer } from './components/Form'


function App() {
  return (
    <>
      <Header />
    <div className='content'>
      <Image/>
      <MainContent />
    </div>
      <Footer />
    </>
  )
}

export default App
