export interface TFilter {
  filmTitles: string[];
  genders: string[];
  page: string;
}

export interface TFilterState {
  queryParams: TFilter;
}

export interface TFiltersActionsPayload {
  key: keyof TFilter;
  value: string;
}
