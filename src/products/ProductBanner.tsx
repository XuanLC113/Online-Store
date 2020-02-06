import React, { useEffect, useState } from "react";

interface Props {
  images: string[];
}

const ProductBanner = ({ images }: Props) => {
  console.log(images);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevState => (prevState + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images]);
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
