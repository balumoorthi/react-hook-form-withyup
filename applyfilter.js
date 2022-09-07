import { get, lowerCase } from "lodash";

const selectFilter = (events, filter) => {
  if (!events || events.length === 0) return [];

  return events.filter((event) => {
    const matchCategory = lowerCase(
      get(event, ["event_json", "organization"], ""),
    ).includes(lowerCase(filter.category === "all" ? "" : filter.category));

    return matchCategory;
  });
};

export default selectFilter;
