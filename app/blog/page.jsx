import HighlightArticle from "../components/blog/HighlightArticle";
import SubscribeToNewsletter from "../components/blog/SubscribeToNewsletter";
import FeaturedItems from "../components/featuredItems/FeaturedItems";
import { fetchDataFromStrapi, processBlogArticle } from "@/utils/strapi.utils";

const BlogPage = async () => {

  const data = await fetchDataFromStrapi("blog-articles?populate=deep");

  const articles = processBlogArticle(data);
  
  const highlightArticleData = {
    headline: "3 tips for a super fast takeoff",
    excerpt: (
      <>
        Improving your take-off phase in surfing is a fundamental step toward riding waves with more confidence and style.

Improving your take-off phase is a gradual process, and it may take time to master. Be patient, stay committed to practice, and enjoy the journey of becoming a better surfer. With dedication and persistence, you&apos;ll see progress and have more enjoyable rides. Here is how:
      </>
    ),
    slug: "takeoff",
    featuredImage: "/assets/hero-experience.png",
  }

  return (
    <main className="blog-page">
      <HighlightArticle data={highlightArticleData} />
      <SubscribeToNewsletter />
      <FeaturedItems headline={''} articles={articles} />
    </main>
  )
}

export default BlogPage