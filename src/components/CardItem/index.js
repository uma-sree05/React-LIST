// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails

  return (
    <li className={`${className} card-items`}>
      <div>
        <h1 className="title">{title}</h1>
        <p className="description">{description}</p>
        <img src={imageUrl} className="image" alt={title} />
      </div>
    </li>
  )
}

export default CardItem
