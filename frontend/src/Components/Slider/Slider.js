import React, { useState, useEffect } from "react";
import "./Slider.css";

const Slider = () => {
  const images = [
    "https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/07/anh-phong-canh-anime-3.jpg",
    "https://i.pinimg.com/736x/6e/74/63/6e7463744c9fdf25c505adfd51902f50.jpg",
    "https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/07/anh-phong-canh-anime-2.jpg",
    "https://image.dienthoaivui.com.vn/x,webp,q90/https://dashboard.dienthoaivui.com.vn/uploads/dashboard/editor_upload/hinh-nen-anime-35.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="slider">
      <img
        src={images[currentIndex]}
        alt={`Slider Image ${currentIndex + 1}`}
        className="slider-image"
      />
    </div>
  );
};

export default Slider;
