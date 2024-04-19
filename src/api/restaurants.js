/* eslint-disable */
import data from '../data/data.json'

export const getRestaurants = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data)
      // resolve(null)
      // resolve([])
      // reject('Возникла ошибка...')
    }, 500)
  })
}

export const getRestaurant = id => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const promise = data.find(item => item.id === id)
      resolve(promise)
      // resolve(null)
      // resolve([])
      // reject('Возникла ошибка...')
    }, 500)
  })
}

export const getCategories = ({ restaurantId, categoryId }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const restaurant = data.find(item => item.id === restaurantId)
      const category = restaurant.categories.find(item => item.id === categoryId)
      resolve(category)
      // resolve(null)
      // resolve([])
      // reject('Возникла ошибка...')
    }, 500)
  })
}

export const getDish = ({ restaurantId, categoryId, dishId }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const restaurant = data.find(item => item.id === restaurantId)
      const categories = restaurant.categories.find(item => item.id === categoryId)
      const dish = categories.dishes.find(item => item.id === dishId)
      resolve(dish)
      // resolve(null)
      // resolve([])
      // reject('Возникла ошибка...')
    }, 500)
  })
}
