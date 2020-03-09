import { PROMO_CODE } from "./types";

export const handleChange = value => {
  return {
    type: PROMO_CODE,
    payload: value
  };
};
