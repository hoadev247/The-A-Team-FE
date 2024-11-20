import React from "react";
import "./Home.css";
import Header from "../../Components/Header/Header";
import Slider from "../../Components/Slider/Slider";
import ProductList from "../../Components/ProductList/ProductList";

const Home = () => {
  const featuredProducts = [
    {
      name: "Product 1",
      price: 99,
      image:
        "https://file.hstatic.net/200000201143/file/chup-anh-san-pham-voi-nen-trang_a77c2502a0d744b398322e958f05f915_grande.jpg",
    },
    {
      name: "Product 2",
      price: 199,
      image:
        "https://atinproduction.com/wp-content/uploads/2021/07/AWP07080.jpg.webp",
    },
  ];

  const discountedProducts = [
    {
      name: "Product 3",
      price: 49,
      image:
        "https://studiovietnam.com/wp-content/uploads/2023/03/chup-anh-san-pham-01.jpg",
    },
    {
      name: "Product 4",
      price: 79,
      image:
        "https://studiovietnam.com/wp-content/uploads/0202/09/ung-dung-chup-anh-san-pham-dep.jpg",
    },
  ];

  const allProducts = [
    ...featuredProducts,
    ...discountedProducts,
    {
      name: "Product 5",
      price: 129,
      image:
        "https://thuvien.hocviennhiepanh.com/wp-content/uploads/2022-05-09-02-41-10-BRadius8Smoothing10.jpeg",
    },
  ];

  return (
    <div>
      <Header />
      <Slider />
      <ProductList title="Featured Products" products={featuredProducts} />
      <ProductList title="Discounted Products" products={discountedProducts} />
      <ProductList title="All Products" products={allProducts} />
    </div>
  );
};

export default Home;
