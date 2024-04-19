import { Outlet } from 'react-router-dom'
import { Breadcrumbs } from '../components/Breadcrumbs'
import styles from './Layout.module.scss'
import { Footer } from '../components/Footer'

export const Layout = () => (
  <>
    <div className={styles.container}>
      <Breadcrumbs />
      <Outlet />
    </div>
    <Footer />
  </>
)
