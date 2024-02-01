import HeroSection from "../components/HeroSection";
import InfoBlock from "../components/InfoBlock";
import { fetchDataFromStrapi, processInfoBlocks } from "@/utils/strapi.utils";

const ExperiencePage = async () => {

  const data = await fetchDataFromStrapi("infoblock-experience?populate=deep");

  const infoBlocks = processInfoBlocks(data);

  const heroHeadline = (
    <>
      <h1>Barrel.</h1>
      <h1>Your.</h1>
      <h1>Happiness.</h1>
    </>
  )

  return (
    <main>
      <HeroSection headline={heroHeadline} theme="orange" imgSrc="/assets/hero-experience.png" />

      {infoBlocks.map((block) => (
        <InfoBlock key={block.id} data={block} />
      ))};
    </main>
  )
}

export default ExperiencePage
export const revalidate = 300;