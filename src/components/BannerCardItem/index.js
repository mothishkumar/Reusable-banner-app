// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {BannerCard} = props

  const {headerText, description, className} = BannerCard

  return (
    <div className="bgmain">
      <li className={className}>
        <div className="bgcard">
          <h1 className="heading">{headerText}</h1>
          <p className="para">{description}</p>
          <button className="button"> show more </button>
        </div>
      </li>
    </div>
  )
}

export default BannerCardItem
