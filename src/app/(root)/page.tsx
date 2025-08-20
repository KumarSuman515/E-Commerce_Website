import React from "react";
import ProductList from "../components/product/product_list";
import sampleData from "../../../db/sample-data";
export default async function HomePage() {
  // const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
  
  // await delay(2000); // wait for 2 seconds
  console.log(sampleData);
  return (
  <>
  <ProductList data={sampleData.products} title="Newest Arrivals" />
  </>
  );
}
