import { useSelector, useDispatch } from 'react-redux'
import { MyResponsivePie } from '../../components/Chart/MyResponsivePie'
import { cleareAllDiet, removeDietItem, addToDiet, removeDish } from '../../features/diets/dietSlice'
import styles from './Diet.module.scss'
import { DecrementBtn } from '../../components/DecrementBtn/DecrementBtn'
import { IncrementBtn } from '../../components/IncrementBtn'
import { DeliteBtn } from '../../components/DeliteBtn/DeliteBtn'
import { DishNav } from '../../components/DishNav/DishNav'

export const Diet = () => {
  const { dietItems } = useSelector(state => state.diets)
  const dispatch = useDispatch()

  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Рацион</h1>
      <DishNav itemLength={dietItems.length} onClick={() => dispatch(cleareAllDiet())} />
      <div className={styles.pieChart}>
        <MyResponsivePie />
      </div>

      <ul className={styles.list}>
        {dietItems.map(item => (
          <li key={item.id} className={styles.item}>
            <div className={styles.itemLeft}>
              <img className={styles.image} src={item.img} alt={item.alt} />
              <div className={styles.itemText}>
                <div className={styles.dishName}>{item.name}</div>
                <div className={styles.dishParametres}>
                  <div className={styles.kcalGm}>
                    {item.kcal}ккал \ вес {item.gm}г
                  </div>
                  <div className={styles.bju}>
                    б&middot;{item.protein}\у&middot;{item.carbohydrates}\ж&middot;
                    {item.fat}
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.btns}>
              <div className={styles.incrementDecrement}>
                <DecrementBtn onClick={() => dispatch(removeDietItem(item))} />
                <div className={styles.dishQuantity}>{item.count}</div>
                <IncrementBtn onClick={() => dispatch(addToDiet(item))} />
              </div>
              <DeliteBtn onClick={() => dispatch(removeDish(item.id))} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
