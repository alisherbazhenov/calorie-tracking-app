import { MainPageItems } from '../../components/MainPageItems'
import styles from './MainPage.module.scss'

export const MainPage = () => {
  return (
    <div className={styles.content}>
      <div className={styles.top}>
        <img className={styles.img} src="./img/ginza-project.png" alt="Логотип" />
      </div>
      <div className={styles.main}>
        <h1 className={styles.title}>Выберите ресторан</h1>
        <MainPageItems />
      </div>
    </div>
  )
}
