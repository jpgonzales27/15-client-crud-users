import { array, boolean, InferOutput, number, object, pipe, string, transform } from "valibot";

export const DraftProducSchema = object({
  name: string(),
  price: number(),
});

export const ProductSchema = object({
  id: number(),
  name: string(),
  price: number(),
  availability: boolean(),
});
export const ProductsSchema = array(ProductSchema);
export type Product = InferOutput<typeof ProductSchema>;

export const NumberSchema = pipe(string(), transform(Number), number());
