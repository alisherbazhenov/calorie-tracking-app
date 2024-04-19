import { NavLink, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import styles from './Footer.module.scss'
import { items } from './consts'

export const Footer = () => {
  const { dietItems } = useSelector(state => state.diets)
  const { wishlistItems } = useSelector(state => state.wishlists)

  const sumOfCounts = dietItems.reduce((accumulator, currentValue) => {
    return accumulator + (currentValue && currentValue.count ? currentValue.count : 0)
  }, 0)

  return (
    <footer className={styles.footer}>
      <ul className={styles.list}>
        {items.map(item => {
          const getIcon = ({ isActive }) =>
            isActive ? <img src={item.iconFill} alt="" /> : <img src={item.icon} alt="" />

          let label = ''

          if (item.id === 'wishlist') {
            label = {
              count: sumOfCounts,
              styles: `${styles.label} ${styles.labelPink}`,
            }
          }

          if (item.id === 'dislike') {
            label = {
              count: wishlistItems && wishlistItems.length ? wishlistItems.length : 0,
              styles: `${styles.label} ${styles.labelBlue}`,
            }
          }

          return (
            <li key={item.id} className={styles.item}>
              {label.count > 0 && (
                <Link to={item.to} className={label.styles}>
                  <span>{label.count}</span>
                </Link>
              )}
              <NavLink className={styles.link} to={item.to} title={item.title}>
                {getIcon}
              </NavLink>
            </li>
          )
        })}
      </ul>
    </footer>
  )
}
