import home from '/icons/home1.svg'
import homeFill from '/icons/home2.svg'
import wishlist from '/icons/wishlist.svg'
import wishlistFill from '/icons/wishlist2.svg'
import dislike from '/icons/dislike.svg'
import like from '/icons/like.svg'

export const items = [
  { id: 'home', icon: home, iconFill: homeFill, to: '/', title: 'ссылка на главную' },
  {
    id: 'wishlist',
    icon: wishlist,
    iconFill: wishlistFill,
    to: '/diet',
    title: 'ссылка на страницу списка',
  },
  { id: 'dislike', icon: dislike, iconFill: like, to: '/wishlist', title: 'кнопка лайка' },
]
