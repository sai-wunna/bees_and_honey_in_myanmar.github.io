import { useState } from 'react'
import './styles.css'
import { mapping } from './mapping'

function getNode(node) {
  return document.querySelector(node)
}

function openM() {
  const map_modal = getNode('.map-modal')
  map_modal.style.display = 'block'
  let timerOne = setTimeout(() => {
    map_modal.style.transform = 'translate(-50%, -50%) rotateX(0deg)'
  }, 50)
  return () => clearTimeout(timerOne)
}

function closeM() {
  const map_modal = getNode('.map-modal')
  map_modal.style.transform = 'translate(-50%, -50%) rotateX(90deg)'
  let timerOne = setTimeout(() => {
    map_modal.style.display = 'none'
  }, 300)
  return () => clearTimeout(timerOne)
}

const Map = () => {
  const [locationData, setLocationData] = useState(false)
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 })
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentPin, setCurrentPin] = useState()

  const handleClick = (e) => {
    const map_box = document.querySelector('.map_box')
    if (getComputedStyle(map_box).cursor !== 'pointer') return
    const image = e.currentTarget
    const boundingRect = image.getBoundingClientRect()
    const x = e.clientX - boundingRect.left
    const y = e.clientY - boundingRect.top
    const pin = mapping(x, y, setLocationData)

    if (pin) {
      if (pin === currentPin) return
      setCurrentPin(pin)
      if (!isModalOpen) {
        openM()
      }
      setModalPosition({
        x: parseInt(e.pageX.toFixed(0)),
        y: parseInt(e.pageY.toFixed(0)) - 70,
      })
      setIsModalOpen(true)
    } else if (isModalOpen) {
      setCurrentPin(0)
      setLocationData(false)
      setIsModalOpen(false)
      closeM()
    }
  }

  return (
    <article className="my-3 p-2 text-center" id="pastures_and_migrations">
      <h4 className="text-start text-lg-center">Pastures and Migrations</h4>
      <div className="map_box" onClick={handleClick}>
        <img
          src="./assets/images/pasturesAndMigrations.png"
          alt="pastures and migrations in myanmar"
        />
      </div>
      <div
        className="map-modal"
        style={{
          top: modalPosition.y + 'px',
          left: modalPosition.x + 'px',
        }}>
        <h6>{locationData?.title}</h6>
        <p>{locationData.content}</p>
        <span id="map_pin_provider"></span>
      </div>
    </article>
  )
}

export default Map
