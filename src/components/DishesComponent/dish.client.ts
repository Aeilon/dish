import {
  Base,
  DishType,
  Pizza,
  Sandwich,
  Soup,
  DataToTransform,
} from "./dish.interface";

export const buildRequestBody = (
  values: DataToTransform
): Pizza | Soup | Sandwich => {
  const {
    name,
    preparation_time,
    type,
    no_of_slices,
    diameter,
    spiciness_scale,
    slices_of_bread,
  } = values;

  const baseRequestBody: Pick<Base, "name" | "preparation_time"> = {
    name: name,
    preparation_time: preparation_time.format("hh:mm:ss"),
  };

  switch (type) {
    case DishType.PIZZA:
      if (!no_of_slices || !diameter) {
        throw new Error("asd");
      }

      return {
        ...baseRequestBody,
        no_of_slices: +no_of_slices,

        diameter: +diameter,
        type: DishType.PIZZA,
      };

    case DishType.SOUP:
      if (!spiciness_scale) {
        throw new Error("asd");
      }

      return {
        ...baseRequestBody,
        spiciness_scale: +spiciness_scale,
        type: DishType.SOUP,
      };

    case DishType.SANDWICH:
      if (!slices_of_bread) {
        throw new Error("asd");
      }

      return {
        ...baseRequestBody,
        slices_of_bread: +slices_of_bread,
        type: DishType.SANDWICH,
      };
    default:
      throw new Error(`${type} is not supported`);
  }
};
