import './styles.css'

const Footer = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      id="main_footer">
      <div className="text-center">
        <span className="copyright">Copyright © 2023</span>
        <h6 style={{ color: 'red' }}>
          Contents are collected from internet and various resources, so please
          do not assume that they all are correct.
        </h6>
      </div>
    </div>
  )
}

export default Footer
