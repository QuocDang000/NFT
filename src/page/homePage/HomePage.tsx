import { FeatureMenu } from "@/components/features/FeatureMenu";
import { Slide } from "@/components/slide/Slide";

import { Content } from "@/layout/content";

import { FEATURES, SLIDE_IMAGES_NAVBAR } from "@/const";

export const HomePage: React.FC = () => {
  return (
    <>
      <Slide slideImages={SLIDE_IMAGES_NAVBAR} />
      <FeatureMenu features={FEATURES} />
      <Content />
    </>
  );
};
