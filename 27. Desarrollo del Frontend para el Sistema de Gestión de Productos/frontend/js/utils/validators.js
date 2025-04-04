export function validateRequired(value) {
  return value.trim() !== "";
}

export function validatePrice(value) {
  const price = parseFloat(value);
  return !isNaN(price) && price > 0;
}

export function validateStock(value) {
  const stock = parseInt(value, 10);
  return Number.isInteger(stock) && stock >= 0;
}

export function validateProductCode(value) {
  const regex = /^[A-Z0-9-]+$/i;
  return regex.test(value);
}

export function validateForm(data) {
  return {
    name: validateRequired(data.name),
    price: validatePrice(data.price),
    stock: validateStock(data.stock),
    productCode: validateProductCode(data.productCode),
  };
}
