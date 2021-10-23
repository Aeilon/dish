import moment from "moment";

export enum DishType {
  PIZZA = "pizza",
  SANDWICH = "sandwich",
  SOUP = "soup",
}

export interface Base {
  name: string;
  preparation_time: string;
  type: DishType;
}

export interface Pizza extends Base {
  type: DishType.PIZZA;
  no_of_slices: number;
  diameter: number;
}

export interface Soup extends Base {
  type: DishType.SOUP;
  spiciness_scale: number;
}

export interface Sandwich extends Base {
  type: DishType.SANDWICH;
  slices_of_bread: number;
}

export interface DataToTransform {
  name: string;
  preparation_time: moment.Moment;
  type: DishType;
  no_of_slices?: number;
  diameter?: number;
  spiciness_scale?: number;
  slices_of_bread?: number;
}

export interface DataToValidate {
  name?: string;
  preparation_time?: string;
  type?: string;
  no_of_slices?: string;
  diameter?: string;
  spiciness_scale?: string;
  slices_of_bread?: string;
}
