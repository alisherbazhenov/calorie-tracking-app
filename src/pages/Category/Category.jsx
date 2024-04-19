import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import styles from './Category.module.scss'
import { getCategories } from '../../api/restaurants'
import { SkeletonDishes } from '../../components/SkeletonDishes'
import { Error } from '../../errors/Error'
import { NoData } from '../../errors/NoData'

export const Category = () => {
  const params = useParams()
  const [category, setCategory] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await getCategories({
          restaurantId: params.restaurantId,
          categoryId: params.categoryId,
        })
        setCategory(result)
      } catch (err) {
        setError(err)
      } finally {
        setIsLoading(false)
      }
    }
    getData()
  }, [params.restaurantId, params.categoryId])

  if (isLoading) {
    return <SkeletonDishes />
  }

  if (error) {
    return <Error text={error} />
  }

  if (!category || category.length === 0) {
    return <NoData text="Нет данных по котегориям блюд..." />
  }

  const { dishes } = category

  if (dishes.length === 0) {
    return <NoData text="Скоро мы добавим сюда новые блюда..." />
  }

  return (
    <ul className={styles.list}>
      {dishes.map(item => (
        <li key={item.id} className={styles.item}>
          <Link className={styles.link} to={item.id}>
            <div className={styles.itemBox}>
              <div className={styles.itemTop}>
                <img className={styles.image} src={item.img} alt={item.alt} />
                <p className={styles.dishName}>{item.name}</p>
              </div>
              <p className={styles.dishCalorie}>&#8226;{item.kcal} Ккал&#8226;</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}
