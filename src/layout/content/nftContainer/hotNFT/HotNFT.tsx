import { SlideAction } from "@/components/slideAction/SlideAction";
import { Title } from "@/components/title/Title";

import { HOT_NFT } from "@/const";

import "./hotNFT.scss";

export const HotNFT = () => {
  return (
    <div className="hot-nft">
      <Title text="HOT NFT" />
      <SlideAction slideImages={HOT_NFT} />
    </div>
  );
};
