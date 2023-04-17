import { useMemo, useEffect } from "react";
import { paginateData } from "./getPagination";
import { ItemType, Filters } from "../types/types";

export function checkboxClean() {
  const checkbox = document.getElementsByTagName("input");
  for (const elem of checkbox) {
    if (elem.type === "checkbox") {
      elem.checked = false;
    }
  }
}

export function dateSorter(sourceArray: ItemType[], date: boolean): ItemType[] {
  if (date) {
    return [
      ...sourceArray.sort(
        (article1, article2) =>
          article2.date.valueOf() - article1.date.valueOf()
      ),
    ];
  } else {
    return [
      ...sourceArray.sort(
        (article1, article2) =>
          article1.date.valueOf() - article2.date.valueOf()
      ),
    ];
  }
}

export const useFilter = (
  allItems: ItemType[],
  date: boolean,
  filters: Filters[],
  perPage: number,
  setPageData: (arg: any) => void,
  setLength: (arg: number) => void
) => {
  const memoFilterSorted = useMemo(
    () =>
      allItems.filter((project) =>
        filters.every((filter) => project.tags.includes(filter))
      ),
    [allItems, filters]
  );

  const memoDateSorted = useMemo(
    () => dateSorter(memoFilterSorted, date),
    [memoFilterSorted, date]
  );

  const memoPages = useMemo(
    () => Math.ceil(memoFilterSorted.length / perPage),
    [memoFilterSorted, perPage]
  );

  useEffect(() => {
    window.addEventListener("beforeunload", checkboxClean);
    setPageData(paginateData(memoDateSorted, perPage));
    setLength(memoPages);
  }, [memoDateSorted, perPage, memoPages]);
};
