export const applyCommission = (price: number, commission: number = 4) => {
  return parseFloat((price - commission).toFixed(2));
};