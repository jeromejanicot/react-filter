export interface ItemType {
  slug: string;
  title: string;
  description: string;
  date: Date;
  tags: Filters[];
}

export type Filters = "web" | "design" | "engineering";

export interface FilterType {
  page: number;
  perPage: number;
  date: boolean;
  filters: Array<Filters>;
  addTags: (input: Filters) => void;
  rmTags: (input: Filters) => void;
  setDate: (input: boolean) => void;
  setPage: (page: number) => void;
  increasePage: () => void;
  decreasePage: () => void;
  setPerPage: (perPage: number) => void;
}
