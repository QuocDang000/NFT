import { SlideAction } from "@/components/slideAction/SlideAction";
import { Title } from "@/components/title/Title";

import { NFT_DROP_CALENDARS } from "@/const";

import "./nftDropsCalendar.scss";

export const NFTDropsCalendar = () => {
  return (
    <div className="nft-drops-calendar">
      <Title text="NFT Drops Calendar" />
      <SlideAction slideImages={NFT_DROP_CALENDARS} />
    </div>
  );
};
