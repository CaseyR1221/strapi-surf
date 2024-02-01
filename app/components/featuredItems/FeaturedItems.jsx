import FeaturedArticle from "./FeaturedArticle"

const FeaturedItems = ({ headline, items }) => {
  return (
    <section className="featured-items">
      <h3 className="featured-items__headline">
        {headline || "Our Featured Articles"}
      </h3>

      <div className="featured-items__container">
        {items.map((item) => (
          <FeaturedArticle key={item.slug} article={item} />
        ))};
      </div>
    </section>
  )
}

export default FeaturedItems