import { useState } from 'react'
import { BenefitModal } from '../components/benefits/BenefitModal'
import HexagonNav from '../components/benefits/HexagonNav'
import './styles.css'

function getNode(node) {
  return document.querySelector(node)
}

const Benefits = () => {
  const [idx, setIdx] = useState(1)

  function openDetailModal(idx) {
    setIdx(idx)
    getNode('.detail-modal-frame').style.display = 'flex'
    const timerId = setTimeout(() => {
      getNode('.detail-modal-frame').style.backgroundColor =
        'rgba(0, 0, 0, 0.331)'
      getNode('.detail-modal-content').style.opacity = 1
      getNode('.detail-modal-content').style.transform = 'translate(0%,0%)'
    }, 100)
    return () => clearTimeout(timerId)
  }

  function closeDetailModal() {
    getNode('.detail-modal-content').style.opacity = 0.5
    getNode('.detail-modal-content').style.transform = 'translate(0%,-150%)'
    getNode('.detail-modal-frame').style.backgroundColor = 'transparent'
    const timerId = setTimeout(() => {
      getNode('.detail-modal-frame').style.display = 'none'
    }, 450)
    return () => clearTimeout(timerId)
  }

  return (
    <main className="mb-3">
      <HexagonNav openDetailModal={openDetailModal} />
      <div className="detail-modal-frame">
        <div className="rounded-2 detail-modal-content">
          <BenefitModal closeDetailModal={closeDetailModal} idx={idx} />
        </div>
      </div>
    </main>
  )
}

export default Benefits
