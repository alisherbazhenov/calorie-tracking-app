import PropTypes from 'prop-types'
import dislike from '/icons/dislike.svg'
import like from '/icons/like.svg'

export const LikeButton = ({ isActive, onClick }) => {
  return (
    <button type="button" aria-label="like" onClick={onClick}>
      {isActive ? <img src={like} alt="like button" /> : <img src={dislike} alt="dislike button" />}
    </button>
  )
}

LikeButton.propTypes = {
  onClick: PropTypes.func,
  isActive: PropTypes.any,
}
