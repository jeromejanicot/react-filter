import React, { useState, useEffect, useMemo } from "react";
import FilterComponent from "../components/Filters";
import ArticleCard from "../components/articles/ArticleCard";
import PageNav from "../components/PageNav";
import { dateSorter, checkboxClean } from "../lib/filterUtils";
import { paginateData } from "../lib/getPagination";
import { articleStore } from "../components/articles/ArticlesStore";
import { filler } from "../const";
import type { Filters, ItemType } from "../types/types";

const filtersList: Filters[] = ["web", "design", "engineering"];

export default function ArticlesView() {
  const [fillerData] = useState<ItemType[]>(filler);
  const [pageData, setPageData] = useState<ItemType[][]>();
  const [length, setLength] = useState<number>(0);
  const {
    date,
    setDate,
    page,
    setPage,
    perPage,
    increasePage,
    decreasePage,
    addTags,
    rmTags,
    filters,
  } = articleStore();

  const memoDateSorted = useMemo(
    () => dateSorter(fillerData, date),
    [fillerData, date]
  );

  const memoFilterSorted = useMemo(
    () =>
      memoDateSorted.filter((article) =>
        filters.every((filter) => article.tags.includes(filter))
      ),
    [memoDateSorted, filters]
  );

  const memoPages = useMemo(
    () => Math.ceil(memoFilterSorted.length / perPage),
    [memoFilterSorted, perPage]
  );

  useEffect(() => {
    window.addEventListener("beforeunload", checkboxClean);
    setPageData(paginateData(memoFilterSorted, perPage));
    setLength(memoPages);
  }, [memoFilterSorted, perPage, memoPages]);

  return pageData && pageData[page] ? (
    <div>
      <div className={"filter_navigation_container"}>
        <FilterComponent
          setDate={setDate}
          filtersList={filtersList}
          activeFilters={filters}
          addTags={addTags}
          rmTags={rmTags}
        />
      </div>
      <div className="item_container">
        <div className={"article_card_container"}>
          {pageData[page]?.map((article, index) => (
            <div key={index}>
              <ArticleCard article={article} />
            </div>
          ))}
        </div>
        <PageNav
          length={length}
          page={page}
          setPage={setPage}
          increasePage={increasePage}
          decreasePage={decreasePage}
        />
      </div>
    </div>
  ) : (
    <div>
      <div className={"filter_navigation_container"}>
        <FilterComponent
          setDate={setDate}
          filtersList={filtersList}
          activeFilters={filters}
          addTags={addTags}
          rmTags={rmTags}
        />
      </div>
      <div className={"article_card_container"}>
        <h1>No articles matching specified filters</h1>
      </div>
      <PageNav
        length={length}
        page={page}
        setPage={setPage}
        increasePage={increasePage}
        decreasePage={decreasePage}
      />
    </div>
  );
}
