import Link from "next/link"
import ReactMarkdown from "react-markdown";

const InfoBlock = ({ data }) => {
  const { headline, text, button, imgSrc, showImageRight } = data

  return (
    <div className={`info ${showImageRight ? 'info--reversed' : ''}`}>
      <img 
        className="info__image" 
        src={imgSrc} 
        alt="first info block" 
      />

      <div className="info__text">
        <h2 className="info__headline">{headline}</h2>

        <ReactMarkdown className="copy">{text}</ReactMarkdown>

        {button}
      </div>
    </div>
  )
}

export default InfoBlock