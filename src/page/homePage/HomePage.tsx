import { useIsMobile } from "@/utils/useIsMobile";

import { FeatureMenu } from "@/components/features/FeatureMenu";
import { Slide } from "@/components/slideAuto/SlideAuto";

import { Content } from "@/layout/content";

import { FEATURES, FEATURES_MOBILE, SLIDE_IMAGES_NAVBAR } from "@/const";

export const HomePage: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <>
      <Slide slideImages={SLIDE_IMAGES_NAVBAR} />
      <FeatureMenu features={isMobile ? FEATURES_MOBILE : FEATURES} />
      <Content />
    </>
  );
};
