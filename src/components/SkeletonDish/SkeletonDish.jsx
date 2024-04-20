import styles from './SkeletonDish.module.scss'

export const SkeletonDish = () => (
  <div className={styles.main}>
    <div className={styles.topBlock}>
      <div className={styles.title}></div>
    </div>
    <div className={styles.image} />
    <div className={styles.favorite}>
      <div className={styles.title}></div>
      <div className={styles.array}></div>
    </div>

    <ul className={styles.list}>
      <li className={styles.item}>
        <div className={styles.icon} />
        <div className={styles.span}></div>
        <div className={styles.span}></div>
      </li>
      <li className={styles.item}>
        <div className={styles.icon} />
        <div className={styles.span}></div>
        <div className={styles.span}></div>
      </li>
      <li className={styles.item}>
        <div className={styles.icon} />
        <div className={styles.span}></div>
        <div className={styles.span}></div>
      </li>
      <li className={styles.item}>
        <div className={styles.icon} />
        <div className={styles.span}></div>
        <div className={styles.span}></div>
      </li>
      <li className={styles.item}>
        <div className={styles.icon} />
        <div className={styles.span}></div>
        <div className={styles.span}></div>
      </li>
    </ul>

    <div className={styles.title}></div>
    <div className={styles.descBlock}>
      <p className={styles.desc}></p>
      <p className={styles.desc}></p>
      <p className={styles.desc}></p>
    </div>
    <div className={styles.title}></div>
    <div className={styles.btn}></div>
  </div>
)
