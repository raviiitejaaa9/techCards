import './index.css'
// Write your code here.
const CardItem = props => {
  const {cardDetail} = props
  const {title, description, imgUrl, className} = cardDetail
  return (
    <li className={className}>
      <h1> {title} </h1>
      <p> {description} </p>
      <img src={imgUrl} alt={title} />
    </li>
  )
}

export default CardItem
