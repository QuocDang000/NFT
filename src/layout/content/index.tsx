import "./index.scss";

import { NFTCollections } from "./nftCollections/NFTCollections";
import { NFTContainer } from "./nftContainer/NFTContainer";

export const Content = () => {
  return (
    <div className="content">
      <NFTCollections />
      <NFTContainer />
    </div>
  );
};
