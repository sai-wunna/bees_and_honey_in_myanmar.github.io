import './styles.css'
import HexagonButton from '../buttons/HexagonButton'

const HexagonNav = ({ openDetailModal }) => {
  return (
    <article className="d-flex justify-content-center align-items-center vh-100 nav_container">
      <span id="vc">Vitamin C</span>
      <span id="vb">Vitamin B</span>
      <span id="ca">Calcium</span>
      <span id="fe">Iron</span>
      <span id="mg">Magnesium</span>
      <span id="p">Phosphorous</span>
      <span id="k">Potassium</span>
      <span id="zn">Zinc</span>
      <div id="gate"></div>
      <nav id="hexagon_nav">
        <div className="d-flex" id="hexa_row_one">
          <div id="hexa_one">
            <HexagonButton
              text={'Pollination'}
              fn={() => openDetailModal(1)}
              classList={''}
            />
          </div>
          <div id="hexa_two">
            <HexagonButton
              text={'Crop'}
              fn={() => openDetailModal(2)}
              classList={''}
            />
          </div>
          <div id="hexa_three">
            <HexagonButton
              text={'Environment'}
              fn={() => openDetailModal(3)}
              classList={''}
            />
          </div>
        </div>
        <div className="d-flex" id="hexa_row_two">
          <div id="hexa_four">
            <HexagonButton
              text={'Honey'}
              fn={() => openDetailModal(4)}
              classList={''}
            />
          </div>
          <div id="hexa_five">
            <HexagonButton
              text={'Food'}
              fn={() => openDetailModal(5)}
              classList={''}
            />
          </div>
          <div id="hexa_six">
            <HexagonButton
              text={'Wax'}
              fn={() => openDetailModal(6)}
              classList={''}
            />
          </div>
        </div>
        <div className="d-flex" id="hexa_row_three">
          <div id="hexa_seven">
            <HexagonButton
              text={'Candles'}
              fn={() => openDetailModal(7)}
              classList={''}
            />
          </div>
          <div id="hexa_eight">
            <HexagonButton
              text={'Health'}
              fn={() => openDetailModal(8)}
              classList={''}
            />
          </div>
        </div>
      </nav>
    </article>
  )
}

export default HexagonNav
