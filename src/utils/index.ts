export function formatCurrency(quantity: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(quantity);
}

export function toBoolean(str: string) {
  return str.toLowerCase() === "true";
}
