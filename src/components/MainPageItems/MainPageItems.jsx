import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import array from '/icons/array.svg'
import styles from './MainPageItems.module.scss'
import { getRestaurants } from '../../api/restaurants'
import { SkeletonRestaurants } from '../SkeletonRestaurants/SkeletonRestaurants'
import { Error } from '../../errors/Error'
import { NoData } from '../../errors/NoData/NoData'

export const MainPageItems = () => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await getRestaurants()
        setData(result)
      } catch (err) {
        setError(err)
      } finally {
        setIsLoading(false)
      }
    }
    getData()
  }, [])

  if (isLoading) {
    return <SkeletonRestaurants />
  }

  if (error) {
    return <Error text={error} />
  }

  if (!data || data.length === 0) {
    return <NoData text="Нет данных по ресторанам..." />
  }

  return (
    <ul className={styles.list}>
      {data.map(item => (
        <li key={item.id} className={styles.item}>
          <Link to={`/restaurants/${item.id}`} className={styles.link}>
            <div className={styles.block}>
              <div className={styles.text}>
                <h2 className={styles.subtitle}>{item.name}</h2>
                <span className={styles.span}>{item.description}</span>
              </div>
              <img className={styles.array} src={array} alt="array icon" />
            </div>
            <img className={styles.icon} src={item.img} alt={item.alt} />
          </Link>
        </li>
      ))}
    </ul>
  )
}
