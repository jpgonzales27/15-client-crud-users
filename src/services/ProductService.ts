import { safeParse } from "valibot";
import { DraftProducSchema, ProductsSchema } from "../types";
import axios from "axios";

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
      const url = `${import.meta.env.VITE_API_URL}/api/products`;
      await axios.post(url, {
        name: result.output.name,
        price: result.output.price,
      });
    } else {
      throw new Error("Datos no válidos");
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getProducts() {
  try {
    const url = `${import.meta.env.VITE_API_URL}/api/products`;
    const { data } = await axios(url);
    console.log(data.data);
    const result = safeParse(ProductsSchema, data.data);

    console.log(result);
    if (result.success) {
      return result.output;
    } else {
      throw new Error("Hubo un error...");
    }
  } catch (error) {
    console.log(error);
  }
}
