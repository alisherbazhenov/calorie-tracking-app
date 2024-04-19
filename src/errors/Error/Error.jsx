import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import styles from './Error.module.scss'

export const Error = ({ text }) => {
  const navigate = useNavigate()
  const backBtn = () => {
    navigate(-1)
  }

  return (
    <div className={styles.error}>
      <p className={styles.text}>{text}</p>
      <button onClick={backBtn} type="button" className={styles.btn}>
        Назад
      </button>
    </div>
  )
}

Error.propTypes = {
  text: PropTypes.string,
}
