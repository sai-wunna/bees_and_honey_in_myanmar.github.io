import { useEffect } from 'react'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'
import { useSelector } from 'react-redux'
import './styles.css'

const AppWrapper = ({ children }) => {
  const { nature, benefits, about } = useSelector((store) => store.navigator)
  useEffect(() => {
    const smooth = document.querySelector('.smooth_the_page')
    const loader = document.querySelector('.smooth_loader')
    smooth.style.display = 'block'
    smooth.style.backgroundColor = 'white'
    let timerOne = setTimeout(() => {
      loader.style.backgroundColor = 'rgb(255, 255, 201)'
    }, 10)
    let timerTwo = setTimeout(() => {
      loader.style.backgroundColor = 'transparent'
      smooth.style.backgroundColor = 'transparent'
    }, 600)
    let timerThree = setTimeout(() => {
      smooth.style.display = 'none'
    }, 900)
    return () => {
      clearTimeout(timerOne)
      clearTimeout(timerTwo)
      clearTimeout(timerThree)
    }
  }, [nature, benefits, about])

  return (
    <>
      <Navbar />
      <div className="smooth_the_page">
        <div className="smooth_loader"></div>
      </div>
      {children}
      <Footer />
    </>
  )
}

export default AppWrapper
