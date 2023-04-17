import React from "react";
import type { ItemType } from "../../types/types";

interface Props {
  article: ItemType;
}

const ArticleCard = ({ article }: Props) => {
  return (
    <div className={"card"}>
      <div className={"card_content"}>
        <div>
          <h3 className={"article_card_title"}>{article.title}</h3>
        </div>
        <div className={"article_card_date"}>{article.date.toUTCString()}</div>
        <div className={"article_card_preview"}>{article.description}</div>
      </div>
      <span className={"divider"}></span>
    </div>
  );
};

export default ArticleCard;
