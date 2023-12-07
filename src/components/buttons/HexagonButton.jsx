const HexagonButton = ({ text, classList, fn }) => {
  return (
    <button
      type="button"
      className={`hexagon_btn ${classList}`}
      onClick={() => fn()}>
      {text}
    </button>
  )
}

export default HexagonButton
