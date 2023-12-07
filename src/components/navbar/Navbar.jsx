import './styles.css'
import BeeHiveButton from '../buttons/BeeHiveButton'
import { useDispatch, useSelector } from 'react-redux'
import { toAbout, toNature, toBenefits } from '../../features/navigator'
import { useState } from 'react'

const Navbar = () => {
  const dispatch = useDispatch()
  const { nature, about, benefits } = useSelector((store) => store.navigator)
  const [preOpenNav, setPreOpenNav] = useState(false)
  const [openedNav, setOpenedNav] = useState(false)

  function openNav() {
    setPreOpenNav(true)
    const timerId = setTimeout(() => {
      setOpenedNav(true)
    }, 10)
    return () => clearTimeout(timerId)
  }

  function closeNav() {
    setOpenedNav(false)
    const timerId = setTimeout(() => {
      setPreOpenNav(false)
    }, 300)
    return () => clearTimeout(timerId)
  }

  return (
    <div
      className="d-flex justify-content-between sticky-top align-items-center p-2"
      id="main_navbar">
      <h1 id="main_title">
        Honey and Bees
        <span id="title_location"> In myanmar</span>
      </h1>
      <div className="navigators">
        <button
          className="navigator"
          type="button"
          onClick={() => openNav()}></button>
        <nav
          className={`nav-box ${preOpenNav ? 'pre-open-nav' : ''} ${
            openedNav ? 'opened-nav' : ''
          }`}
          onClick={() => {
            if (openedNav) closeNav()
          }}>
          <BeeHiveButton
            text={'Nature'}
            fn={() => {
              dispatch(toNature())
              if (openedNav) closeNav()
            }}
            classList={`mx-1 nav-item ${nature ? 'focus_nav' : ''}`}
          />
          <BeeHiveButton
            text={'Benefits'}
            fn={() => {
              if (openedNav) closeNav()
              dispatch(toBenefits())
            }}
            classList={`mx-1 nav-item ${benefits && 'focus_nav'}`}
          />
          <BeeHiveButton
            text={'About'}
            fn={() => {
              if (openedNav) closeNav()
              dispatch(toAbout())
            }}
            classList={`mx-1 nav-item ${about && 'focus_nav'}`}
          />
        </nav>
      </div>
    </div>
  )
}

export default Navbar
