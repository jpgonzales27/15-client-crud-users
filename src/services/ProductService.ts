import { safeParse } from "valibot";
import { DraftProducSchema } from "../types";

type ProductData = {
  [k: string]: FormDataEntryValue;
};

export async function addProduct(data: ProductData) {
  console.log(data);
  try {
    const result = safeParse(DraftProducSchema, {
      name: data.name,
      price: +data.price,
    });
    if (result.success) {
      console.log("Resultado bien");
    } else {
      throw new Error("Datos no válidos");
    }
  } catch (error) {
    console.log(error);
  }
}
