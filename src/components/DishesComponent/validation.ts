import { DataToValidate, DishType, DataToTransform } from "./dish.interface";

export const validation = (values: DataToTransform) => {
  const errors: DataToValidate = {};

  if (!values.name || values.name.trim().length === 0) {
    errors.name = "This field is required";
  } else if (values.name.length < 4 || values.name.length > 128) {
    errors.name = "The name must be 4 to 128 characters long";
  }

  if (!values.preparation_time) {
    errors.preparation_time = "This field is required";
  }

  if (!values.type || values.type.trim().length === 0) {
    errors.type = "This field is required";
  }

  if (!values.no_of_slices && values.type === DishType.PIZZA) {
    errors.no_of_slices = "This field is required";
  } else {
    if (values.no_of_slices) {
      if (values.no_of_slices < 1 || values.no_of_slices > 100) {
        errors.no_of_slices = "Number of slices must be between 1-100";
      } else if (isNaN(values.no_of_slices)) {
        errors.no_of_slices = "Value is a number";
      } else if (!Number.isInteger(+values.no_of_slices)) {
        errors.no_of_slices = "Value must be integer";
      }
    }
  }

  if (!values.diameter && values.type === DishType.PIZZA) {
    errors.diameter = "This field is required";
  } else {
    if (values.diameter) {
      if (values.diameter < 1 || values.diameter > 100) {
        errors.diameter = "The diameter must be between 1-100";
      } else if (isNaN(values.diameter)) {
        errors.diameter = "Value must be a number";
      }
    }
  }

  if (!values.spiciness_scale && values.type === DishType.SOUP) {
    errors.spiciness_scale = "This field is required";
  } else {
    if (values.spiciness_scale) {
      if (values.spiciness_scale < 1 || values.spiciness_scale > 10) {
        errors.spiciness_scale = "The spiciness scale must be between 1-10";
      } else if (isNaN(values.spiciness_scale)) {
        errors.spiciness_scale = "Value must be a number";
      } else if (!Number.isInteger(+values.spiciness_scale)) {
        errors.spiciness_scale = "Value must be integer";
      }
    }
  }

  if (!values.slices_of_bread && values.type === DishType.SANDWICH) {
    errors.slices_of_bread = "This field is required";
  } else {
    if (values.slices_of_bread) {
      if (values.slices_of_bread < 1 || values.slices_of_bread > 100) {
        errors.slices_of_bread = "The spiciness scale must be between 1-100";
      } else if (isNaN(values.slices_of_bread)) {
        errors.slices_of_bread = "Value must be a number";
      } else if (!Number.isInteger(+values.slices_of_bread)) {
        errors.slices_of_bread = "Value must be integer";
      }
    }
  }

  return errors;
};
