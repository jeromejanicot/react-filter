import React from "react";
import type { ItemType } from "../../types/types";

interface Props {
  article: ItemType;
}

const ArticleCard = ({ article }: Props) => {
  return (
    <div className={"card_container"}>
      <div className="card_content">
        <h2 className={"card_title"}>{article.title}</h2>
        <div className={"card_tags_container"}>
          {article.tags.map((tag, idx) => (
            <div className={"card_tag"} key={idx}>
              {tag}
            </div>
          ))}
        </div>
      </div>
      <div className={"card_date"}>
        {article.date.toISOString().substring(0, 10)}
      </div>
    </div>
  );
};

export default ArticleCard;
