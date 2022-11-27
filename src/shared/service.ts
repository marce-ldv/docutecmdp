import productsData from "./data";

export const useProducts = () => {
  return { productsData };
};

// getById(id: string): TProduct | null {
// 	if (!Object.prototype.hasOwnProperty.call(allData, id)) {
// 		return null
// 	}
//
// 	const entry = allData[id]
// 	return entry
// }
