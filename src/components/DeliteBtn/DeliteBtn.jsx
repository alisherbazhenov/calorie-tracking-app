import PropTypes from 'prop-types'
import deliteButton from '/icons/delete.svg'

export const DeliteBtn = ({ onClick }) => (
  <button onClick={onClick} type="button" aria-label="Удалить блюдо">
    <img src={deliteButton} alt="delite button" />
  </button>
)

DeliteBtn.propTypes = {
  onClick: PropTypes.func,
}
