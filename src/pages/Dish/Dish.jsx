import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import styles from './Dish.module.scss'
import { getDish } from '../../api/restaurants'
import { LikeButton } from '../../components/LikeButton'
import { SkeletonDish } from '../../components/SkeletonDish'
import { Error } from '../../errors/Error'
import { NoData } from '../../errors/NoData'
import { addToWishlist, removeWishItem } from '../../features/wishlists/wishSlice'
import { addToDiet, removeDietItem, removeDish } from '../../features/diets/dietSlice'
import { DecrementBtn } from '../../components/DecrementBtn/DecrementBtn'
import { IncrementBtn } from '../../components/IncrementBtn'
import { DeliteBtn } from '../../components/DeliteBtn/DeliteBtn'

export const Dish = () => {
  const params = useParams()
  const { wishlistItems } = useSelector(state => state.wishlists)
  const { dietItems } = useSelector(state => state.diets)
  const dispatch = useDispatch()
  const [dish, setDish] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const isActive = wishlistItems.find(items => items.id === dish?.id)
  const dishAdded = dietItems.find(items => items.id === dish?.id)

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await getDish({
          restaurantId: params.restaurantId,
          categoryId: params.categoryId,
          dishId: params.dishId,
        })
        setDish(result)
      } catch (err) {
        setError(err)
      } finally {
        setIsLoading(false)
      }
    }
    getData()
  }, [params.restaurantId, params.categoryId, params.dishId])

  if (isLoading) {
    return <SkeletonDish />
  }

  if (error) {
    return <Error text={error} />
  }

  if (!dish || dish.length === 0) {
    return <NoData text="Нет данных по блюду..." />
  }

  const handleAddOrRemoveDish = dish => {
    if (!isActive) {
      dispatch(addToWishlist(dish))
    } else {
      dispatch(removeWishItem(dish.id))
    }
  }

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.topBlock}>
          <h2 className={styles.title}>{dish.name}</h2>
        </div>
        <img className={styles.image} src={dish.img} alt={dish.alt} />
        <div className={styles.favorite}>
          <h3 className={styles.subtitle}>Пищевая ценность</h3>
          <LikeButton isActive={isActive} onClick={() => handleAddOrRemoveDish(dish)} />
        </div>

        <ul className={styles.list}>
          <li className={styles.item}>
            <img className={styles.icon} src="/img/gramm.png" alt="картинка" />
            <span className={styles.span}>вес</span>
            <span className={styles.span}>{dish.gm} гр</span>
          </li>
          <li className={styles.item}>
            <img className={styles.icon} src="/img/kcal.png" alt="картинка" />
            <span className={styles.span}>ккал</span>
            <span className={styles.span}>{dish.kcal}</span>
          </li>
          <li className={styles.item}>
            <img className={styles.icon} src="/img/protein.png" alt="картинка" />
            <span className={styles.span}>б</span>
            <span className={styles.span}>{dish.protein} гр</span>
          </li>
          <li className={styles.item}>
            <img className={styles.icon} src="/img/fats2.png" alt="картинка" />
            <span className={styles.span}>ж</span>
            <span className={styles.span}>{dish.fat} гр</span>
          </li>
          <li className={styles.item}>
            <img className={styles.icon} src="/img/carbohydrates.png" alt="картинка" />
            <span className={styles.span}>у</span>
            <span className={styles.span}>{dish.carbohydrates} гр</span>
          </li>
        </ul>

        <h3 className={styles.text}>Основные ингридиенты</h3>
        <p className={styles.desc}>{dish.ingredients}</p>
        <p className={styles.thermalProcess}>
          Основной тепловой процесс: <span>{dish.cookingProcess}</span>
        </p>
      </div>
      <div className={styles.btns}>
        {!dishAdded?.count ? (
          <button className={`${styles.btn} ${styles.btnColor}`} onClick={() => dispatch(addToDiet(dish))}>
            Добавить в рацион
          </button>
        ) : (
          <div className={styles.btnsCount}>
            <DecrementBtn onClick={() => dispatch(removeDietItem(dish))} />
            <div className={styles.dishQuantity}>{dishAdded?.count ? dishAdded?.count : 0}</div>
            <IncrementBtn onClick={() => dispatch(addToDiet(dish))} />
            <DeliteBtn onClick={() => dispatch(removeDish(dish.id))} />
          </div>
        )}
      </div>
    </div>
  )
}
