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
      <h3>Date</h3>
      <div className={"filter_section"}>
        <input
          type="radio"
          id="newest"
          name="date"
          value="newest"
          defaultChecked={true}
          onClick={() => setDate(true)}
          className={"tag"}
        />
        <label htmlFor="newest" className={"filter_button radio_s1"}>
          newest
        </label>
        <input
          type="radio"
          id="oldest"
          name="date"
          value="oldest"
          onClick={() => setDate(false)}
          className={"tag"}
        />
        <label htmlFor="oldest" className={"filter_button radio_s2"}>
          oldest
        </label>
      </div>
      <h3>Tags</h3>
      <div className={"filter_section"}>
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
            <label htmlFor={tag} className={"filter_button"}>
              {tag}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
