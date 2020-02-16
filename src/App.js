import { add } from "./modules/add";

export const total = (shipping, subTotal) => {
  return `$${add(shipping, subTotal)}`;
};
