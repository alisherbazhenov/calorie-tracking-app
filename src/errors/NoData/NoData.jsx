import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import styles from './NoData.module.scss'

export const NoData = ({ text }) => {
  const navigate = useNavigate()
  const backBtn = () => {
    navigate(-1)
  }

  return (
    <div className={styles.container}>
      <div className={styles.error}>
        <p className={styles.text}>{text}</p>
        <button onClick={backBtn} type="button" className={styles.btn}>
          Назад
        </button>
      </div>
    </div>
  )
}

NoData.propTypes = {
  text: PropTypes.string,
}
