import { Outlet } from 'react-router-dom'
import { Breadcrumbs } from '../components/Breadcrumbs'
import styles from './Layout.module.scss'
import { Footer } from '../components/Footer'

export const Layout = () => (
  <div className={styles.box}>
    <div className={styles.container}>
      <Breadcrumbs />
      <div className={styles.main}>
        <Outlet />
      </div>
    </div>
    <Footer />
  </div>
)
