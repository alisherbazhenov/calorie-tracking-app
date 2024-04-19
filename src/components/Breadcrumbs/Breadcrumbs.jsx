import { useLocation, Link } from 'react-router-dom'
import styles from './Breadcrumbs.module.scss'

export const Breadcrumbs = () => {
  const location = useLocation()
  let currentLink = ''
  const crumbs = location.pathname
    .split('/')
    .filter(crumb => crumb !== '')
    .map((crumb, index, array) => {
      currentLink += `/${crumb}`
      if (array.length === 1) {
        return false
      } else {
        return (
          <div className={styles.crumb} key={crumb}>
            {index === array.length - 1 ? (
              <span className={styles.spanLink}>{crumb}</span>
            ) : (
              <Link className={styles.link} to={currentLink}>
                {crumb}
              </Link>
            )}
          </div>
        )
      }
    })

  return <div className={styles.breadCrumbs}>{crumbs}</div>
}
