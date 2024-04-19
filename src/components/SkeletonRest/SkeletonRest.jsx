import styles from './SkeletonRest.module.scss'

export const SkeletonRest = () => (
  <div className={styles.container}>
    <div className={styles.title} />
    <nav className={styles.navBlock}>
      <ul className={styles.nav}>
        <li className={styles.navItem} />
        <li className={styles.navItem} />
        <li className={styles.navItem} />
      </ul>
    </nav>
  </div>
)
