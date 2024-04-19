import PropTypes from 'prop-types'
import minusButton from '/icons/minus.svg'

export const DecrementBtn = ({ onClick }) => (
  <button onClick={onClick} type="button" aria-label="Уменьшить">
    <img src={minusButton} alt="minus button" />
  </button>
)

DecrementBtn.propTypes = {
  onClick: PropTypes.func,
}
