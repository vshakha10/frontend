
import './App.css'
import Styles from './demo.module.css';
import Demo from './demo';

export const h1Styeles = {
  backgroundColor:'orange',
  fontWeight:'bold',
  textDecoration:'overline'
}

function App() {
  

  return (
    <>
      <h1 className={Styles.head }style={{backgroundColor:'red',fontSize:'100px'}}>This is Heading Tag</h1>
      <p style={ h1Styeles}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni est soluta animi accusamus fuga, minima at vero! Quam magnam deserunt in architecto similique saepe est ipsum rerum aliquid eveniet.</p>
      <Demo/>
    </>
  )
}

export default App
