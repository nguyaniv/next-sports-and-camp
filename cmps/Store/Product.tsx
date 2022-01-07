import React, { FunctionComponent } from "react";
import Image from "next/image";
import { addItem } from "../../utills/utills";
import { product } from "./store-products";
import { onGetItems } from "../../features/cart/cartSlice";
import { useAppDispatch } from "../../app/hooks";
interface Product {
  product: product;
}
const Product: FunctionComponent<Product> = ({ product }) => {
  const dispatch = useAppDispatch();

  return (
    <div className="store__product">
      <span className="badge">badge</span>
      <Image
        src={product.imgURL}
        layout="fixed"
        width={90}
        height={90}
        unoptimized={true}
        placeholder="blur"
        blurDataURL={product.imgURL}
        alt={product.name}
      />
      <h6>{product.category}</h6>
      <h3 className="store__product--name">{product.name}</h3>
      <div className="store__product--action">
        <span>${product.price}</span>{" "}
        <button
          onClick={async () => {
            await addItem(product);
            await dispatch(onGetItems());
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Product;
