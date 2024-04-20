import { State } from "../interfaces/stateInterface";

export const stateDataFormat = (stateData: State[]) => {
  return stateData.map(({ name, abbreviation }) => ({
    value: abbreviation,
    label: name,
  }));
};
