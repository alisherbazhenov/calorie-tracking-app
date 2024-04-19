import PropTypes from 'prop-types'
import plusButton from '/icons/plus.svg'

export const IncrementBtn = ({ onClick }) => (
  <button onClick={onClick} type="button" aria-label="Увеличить">
    <img src={plusButton} alt="plus button" />
  </button>
)
IncrementBtn.propTypes = {
  onClick: PropTypes.func,
}
