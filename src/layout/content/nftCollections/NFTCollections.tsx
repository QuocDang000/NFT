import { SlideAction } from "@/components/slideAction/SlideAction";
import { Title } from "@/components/title/Title";

import { SLIDE_IMAGES } from "@/const";

export const NFTCollections = () => {
  return (
    <div className="nft-collections">
      <Title text="New NFT Collections" />
      <SlideAction
        slideImages={SLIDE_IMAGES}
        slidesPerLargeView={5.9}
        slidesPerSmallView={3.5}
      />
    </div>
  );
};
