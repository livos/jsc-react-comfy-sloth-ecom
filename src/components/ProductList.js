import React from "react";
import { useFilterContext } from "../context/filter_context";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductList = () => {
  const { filtered_products: products } = useFilterContext();
  console.log(products);

  return <GridView products={products}>products list</GridView>;
};

export default ProductList;
