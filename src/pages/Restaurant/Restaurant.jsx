import { useEffect, useState } from 'react'
import { NavLink, useParams, Outlet, useNavigate } from 'react-router-dom'
import styles from './Restaurant.module.scss'
import { getRestaurant } from '../../api/restaurants'
import { SkeletonRest } from '../../components/SkeletonRest'
import { Error } from '../../errors/Error'
import { NoData } from '../../errors/NoData'

export const Restaurant = () => {
  const params = useParams()
  const navigate = useNavigate()
  const [restaurant, setRestaurant] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await getRestaurant(params.restaurantId)
        navigate(result.categories[0].id)
        setRestaurant(result)
      } catch (err) {
        setError(err)
      } finally {
        setIsLoading(false)
      }
    }
    getData()
  }, [params.restaurantId])

  if (isLoading) {
    return <SkeletonRest />
  }

  if (error) {
    return <Error text={error} />
  }

  if (!restaurant || restaurant.length === 0) {
    return <NoData text="Нет данных по ресторану..." />
  }

  const { categories } = restaurant

  return (
    <div className={styles.main}>
      <h1 className={styles.title}>{restaurant.name}</h1>
      <nav className={styles.navBlock}>
        <ul className={styles.nav}>
          {categories.map(item => (
            <li key={item.id} className={styles.navItem}>
              <NavLink
                to={item.id}
                className={({ isActive }) => (isActive ? `${styles.link} ${styles.activeLink}` : styles.link)}
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}
