import React, { useState } from "react";
import { placeholder } from "../constants/variables";

export default function ({ imgFile, name }) {
  var srcProduct = `https://images.bringbring.com/qa/assets/imgs/products/${imgFile}.png`;
  var [src, setImage] = useState(srcProduct);

  return (
    <img
      src={src}
      alt={name}
      className="w-100 db outline black-10"
      onError={() => setImage(placeholder)}
    />
  );
}
