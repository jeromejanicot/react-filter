import React from "react";
import type { ItemType } from "../../types/types";

interface Props {
  article: ItemType;
}

const ArticleCard = ({ article }: Props) => {
  return (
    <div className={"card_container"}>
      <div className="card_content">
        <h3 className={"card_title"}>{article.title}</h3>
        <div className={"card_date"}>{article.date.toISOString()}</div>
      </div>
    </div>
  );
};

export default ArticleCard;
