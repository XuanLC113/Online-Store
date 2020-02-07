import React, { useState } from "react";

interface Props {
  images: string[];
}

const ProductBanner = ({ images }: Props) => {
  const [index, setIndex] = useState(0);
  return (
    <div className="product-banner">
      {images.length === 0 ? null : (
        <img
          className="banner-image"
          src={require(`../data/images/${images[index]}`)}
          alt="banner"
        />
      )}
      <div className="banner-image-container">
        {images.map((image, index) => (
          <img
            className="banner-image-selector"
            src={require(`../data/images/${image}`)}
            alt="banner"
            onClick={() => setIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductBanner;
