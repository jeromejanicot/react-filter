import React from "react";
import { Filters } from "../types/types";

type Props = {
  setDate: (arg: boolean) => void;
  filtersList: Filters[];
  activeFilters: Filters[];
  addTags: (arg: Filters) => void;
  rmTags: (arg: Filters) => void;
};

export default function FilterComponent({
  setDate,
  filtersList,
  activeFilters,
  addTags,
  rmTags,
}: Props) {
  return (
    <div className={"filter_section_container"}>
      <div className={"filter_section"}>
        <h3>Date</h3>
        <input
          type="radio"
          id="newest"
          name="date"
          value="newest"
          defaultChecked={true}
          onClick={() => setDate(true)}
          className={"tag"}
        />
        <label htmlFor="newest" className={"radio_ns styles.radio_s1"}>
          newest
        </label>
        <input
          onClick={() => setDate(false)}
          type="radio"
          id="oldest"
          name="date"
          value="oldest"
          className={"tag"}
        />
        <label htmlFor="oldest" className={"radio_ns radio_s1"}>
          oldest
        </label>
      </div>
      <div className={"filter_section"}>
        <h3>Tags</h3>
        <>
          {filtersList.map((tag, index) => (
            <div key={index}>
              <input
                onClick={() =>
                  activeFilters.includes(tag) ? rmTags(tag) : addTags(tag)
                }
                type="checkbox"
                id={tag}
                name="tags"
                value={tag}
                className={"tag"}
              />
              <label htmlFor={tag} className={"filter_checkbox"}>
                {tag}
              </label>
            </div>
          ))}
        </>
      </div>
    </div>
  );
}
