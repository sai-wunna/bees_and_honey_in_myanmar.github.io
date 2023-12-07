import './styles.css'

const BeeHiveButton = ({ text, classList, fn }) => {
  return (
    <button
      type="button"
      className={`bee_btn ${classList}`}
      onClick={() => fn()}>
      {text}
    </button>
  )
}

export default BeeHiveButton
