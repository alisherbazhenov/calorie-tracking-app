import { useSelector } from 'react-redux'
import { initialData } from './data'

export const useData = () => {
  const { dietItems } = useSelector(state => state.diets)

  // достаю суммы необходимых величин
  // сумма общего веса всех блюд
  const sumOfGm = dietItems.reduce(
    (accumulator, currentValue) =>
      accumulator + (+currentValue.gm * currentValue.count ? +currentValue.gm * currentValue.count : 0),
    0,
  )

  // сумма всех жиров
  const sumOfFat = dietItems.reduce(
    (accumulator, currentValue) =>
      accumulator + (+currentValue.fat * currentValue.count ? +currentValue.fat * currentValue.count : 0),
    0,
  )

  // сумма всех белков
  const sumOfProtein = dietItems.reduce(
    (accumulator, currentValue) =>
      accumulator + (+currentValue.protein * currentValue.count ? +currentValue.protein * currentValue.count : 0),
    0,
  )

  // сумма всех угдеводов
  const sumOfCarbohydrates = dietItems.reduce(
    (accumulator, currentValue) =>
      accumulator +
      (+currentValue.carbohydrates * currentValue.count ? +currentValue.carbohydrates * currentValue.count : 0),
    0,
  )

  // сумма всех каллорий
  const sumOfKcal = dietItems.reduce(
    (accumulator, currentValue) =>
      accumulator + (+currentValue.kcal * currentValue.count ? +currentValue.kcal * currentValue.count : 0),
    0,
  )

  return [
    {
      ...initialData.protein,
      value: sumOfProtein,
    },
    {
      ...initialData.fat,
      value: sumOfFat,
    },
    {
      ...initialData.carbohydrates,
      value: sumOfCarbohydrates,
    },
    {
      ...initialData.kcal,
      value: sumOfKcal,
    },
    {
      ...initialData.gm,
      value: sumOfGm,
    },
  ]
}
