import PropTypes from 'prop-types'
import styles from './DishNav.module.scss'

export const DishNav = ({ itemLength, onClick }) => {
  return (
    <div className={styles.dishNav}>
      <div className={styles.quantity}>Колличество блюд ({itemLength})</div>
      <button className={styles.removeAll} onClick={onClick} type="button" aria-label="Вернуться">
        Удалить все
      </button>
    </div>
  )
}

DishNav.propTypes = {
  itemLength: PropTypes.number,
  onClick: PropTypes.func,
}
