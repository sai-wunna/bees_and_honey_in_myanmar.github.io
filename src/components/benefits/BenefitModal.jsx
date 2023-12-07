import { useEffect, useState } from 'react'
import './styles.css'
import { benefits } from './benefits'

export const BenefitModal = ({ idx, closeDetailModal }) => {
  const [data, setData] = useState(false)
  useEffect(() => {
    setData(benefits[idx - 1])
  }, [idx])

  const handleClose = () => {
    closeDetailModal()
  }

  return (
    <>
      {data && (
        <div
          className="d-flex flex-column justify-content-center"
          style={{ height: '100%' }}>
          <div id="content_body">
            <h5 className="fw-bold">{data.title}</h5>
            <p>
              <span className="mx-5">{data.content}</span>
            </p>
            <div className="text-center">
              <img src={data.imgSrc} alt={data.title} />
            </div>
          </div>
          <button
            type="button"
            className="close-detail-modal-btn"
            onClick={handleClose}>
            ______
          </button>
        </div>
      )}
    </>
  )
}
