import FeaturedArticle from "./FeaturedArticle"

const FeaturedItems = ({ headline, articles }) => {
  return (
    <section className="featured-items">
      <h3 className="featured-items__headline">
        {headline || "Our Featured Articles"}
      </h3>

      <div className="featured-items__container">
        {articles.map((article) => (
          <FeaturedArticle key={article.slug} article={article} />
        ))};
      </div>
    </section>
  )
}

export default FeaturedItems