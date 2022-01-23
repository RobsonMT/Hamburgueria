export const formatPrice = (value: number) => {
  const valueInReais = Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);

  return valueInReais;
};
