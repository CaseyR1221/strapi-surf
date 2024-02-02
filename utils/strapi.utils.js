import Link from "next/link";

const BASE_URL = process.env.STRAPI_URL || "http://localhost:1337";

export const fetchDataFromStrapi = async (route) => {
  const url = `${BASE_URL}/api/${route}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    throw new Error(`Error fetching data from Strapi: ${error}`);
  }
}

export const processInfoBlocks = (data) => {
  const infoBlocksRaw = data.attributes.info_blocks.data;

  const infoBlocks = infoBlocksRaw.map((block) => {
    return {
      ...block.attributes,
      imgSrc: BASE_URL + block.attributes.image.data.attributes.url,
      id: block.id,
      button: createInfoBlockButton(block.attributes.button),
    }
  });

  return infoBlocks;
}

const createInfoBlockButton = (buttonData) => {
  if (!buttonData) {
    return null;
  }

  return (
    <Link href={`/${buttonData.slug}`}>
      <button 
        className={`btn btn--medium btn--${buttonData.color}`}
      >
        {buttonData.text}
      </button>
    </Link>
  );
}

export const processBlogArticle = (data) => {
  const articlesRaw = data;

  const articles = articlesRaw.map((article) => {
    return {
      ...article.attributes,
      imgSrc: BASE_URL + article.attributes.featuredImage.data.attributes.url,
      publishedOn: new Date(article.attributes.createdAt).toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      id: article.id,
    }
  });

  return articles;
}
