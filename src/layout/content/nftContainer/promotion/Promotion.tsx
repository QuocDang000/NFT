import { SlideAction } from "@/components/slideAction/SlideAction";
import { Title } from "@/components/title/Title";

import { PROMOTION } from "@/const";

import "./promotion.scss";

export const Promtion = () => {
  return (
    <div className="promotion">
      <Title text="PROMOTION" />
      <SlideAction slideImages={PROMOTION} />
    </div>
  );
};
