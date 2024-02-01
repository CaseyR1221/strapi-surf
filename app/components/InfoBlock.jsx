import Link from "next/link"

const InfoBlock = ({ data }) => {
  const { headline, text, button, reversed } = data

  return (
    <div className={`info ${reversed ? 'info--reversed' : ''}`}>
      <img 
        className="info__image" 
        src="/info-blocks/home-info-block-1.png" 
        alt="first info block" 
      />

      <div className="info__text">
        <h2 className="info__headline">{headline}</h2>

        {text}

        {button}
      </div>
    </div>
  )
}

export default InfoBlock