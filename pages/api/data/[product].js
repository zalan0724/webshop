import { db } from "/firebase";
import { collection, getDocs } from "firebase/firestore";

function capitalizeFirstLetter(string) {
  return string[0].toUpperCase() + string.slice(1);
}

const getAllProducts = () => {
  return ["motherboards", "graphicscards", "processors", "memories"];
};

const getData = async (product) => {
  const products = [];
  const docs = await getDocs(collection(db, capitalizeFirstLetter(product)));
  docs.forEach((product) => {
    products.push({ id: product.id, ...product.data() });
  });

  return products;
};

const getMinMaxPrices = (products) => {
  const minPrice = Math.min(...products.map((product) => product.price));
  const maxPrice = Math.max(...products.map((product) => product.price));
  return { minPrice, maxPrice };
};

export default async function handler(req, res) {
  const { product } = req.query;

  const products = [];
  if (product === "allproducts") {
    for (const productName of getAllProducts()) {
      products.push(...(await getData(productName)));
    }
  } else {
    products.push(...(await getData(product)));
  }
  const metadata = { ...getMinMaxPrices(products) };
  res.status(200).json([metadata, ...products]);
}
