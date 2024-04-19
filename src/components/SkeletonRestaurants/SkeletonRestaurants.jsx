import styles from './SkeletonRestaurants.module.scss'

export const SkeletonRestaurants = () => (
  <div className={styles.block}>
    <div className={styles.rest} />
    <div className={styles.rest} />
  </div>
)
