import "./nftContainer.scss";

import { HotNFT } from "./hotNFT/HotNFT";
import { NFTDropsCalendar } from "./nftDropsCalendar/NFTDropsCalendar";
import { Promtion } from "./promotion/Promotion";

export const NFTContainer = () => {
  return (
    <div className="nft-container">
      <NFTDropsCalendar />
      <HotNFT />
      <Promtion />
    </div>
  );
};
