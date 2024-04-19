import { useDispatch, useSelector } from 'react-redux'
import { removeWishItem, clearAllWishlist } from '../../features/wishlists/wishSlice'
import styles from './Wishlist.module.scss'
import { LikeButton } from '../../components/LikeButton'
import { DishNav } from '../../components/DishNav/DishNav'

export const Wishlist = () => {
  const dispatch = useDispatch()
  const { wishlistItems } = useSelector(state => state.wishlists)
  const isActive = wishlistItems.find(item => item.id === item.id)

  const removeAllWishlist = () => {
    dispatch(clearAllWishlist())
  }

  const handleAddOrRemoveDish = dish => {
    if (isActive) {
      dispatch(removeWishItem(dish.id))
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.topBlock}>
        <h2 className={styles.title}>Список любимых блюд</h2>
      </div>
      <DishNav itemLength={wishlistItems?.length} onClick={() => removeAllWishlist()} />
      <ul className={styles.list}>
        {wishlistItems.map(item => {
          return (
            <li key={item.id} className={styles.item}>
              <div className={styles.link}>
                <div className={styles.dish}>
                  <img className={styles.image} src={item.img} alt={item.alt} />
                  <p className={styles.dishName}>{item.name}</p>
                </div>

                <div className={styles.linkBottom}>
                  <div className={styles.itemBottom}>
                    <p>{item.kcal} Ккал</p>
                    <div>
                      <LikeButton isActive={isActive} onClick={() => handleAddOrRemoveDish(item)} />
                    </div>
                  </div>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
