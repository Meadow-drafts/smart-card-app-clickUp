import { useState } from 'react'
import styles from '../style'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CardDeal from './components/CardDeal'
import Footer from './components/Footer'
import Services from './components/Services'
import CTA from './components/CTA'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="w-full overflow-hidden bg-gray-200">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      
        <div className={`pt-10 sm:px-40 px-6 mx-2 my-auto ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>


        <div className={` ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Services />
            <CardDeal />
            <CTA/>
            <Footer />
          </div>
        </div>   


    </div>
  )
}

export default App
