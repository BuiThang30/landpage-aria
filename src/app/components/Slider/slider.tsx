// components/Slider/slider.js
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./slider.module.css"; 

export default function Slider() {
  const [startIndex, setStartIndex] = useState(0);
  
  const images = [
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg", 
    "/images/5.jpg",
    "/images/6.jpg",
    "/images/7.jpg",
    "/images/8.jpg",
    "/images/9.jpg",
  ];

  // Hàm chuyển slide tiếp theo
  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % images.length);
  };

  // Hàm lùi lại slide trước
  const prevSlide = () => {
    setStartIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // 3 giây đổi ảnh
    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images.length]);

  const displayImages = [
    images[startIndex],
    images[(startIndex + 1) % images.length],
    images[(startIndex + 2) % images.length],
  ];

  return (
    <div className={styles.sliderContainer}>
      {/* Nút lùi */}
      <button className={`${styles.navButton} ${styles.prevButton}`} onClick={prevSlide}>
        &#10094;
      </button>

      <div className={styles.cardsWrapper}>
        <div className={styles.cards}>
          {displayImages.map((src, idx) => (
            <Image
              key={`${startIndex}-${idx}`} 
              src={src}
              alt={`Slide ${idx + 1}`}
              width={994}
              height={663}
              className={styles.cardImage}
            />
          ))}
        </div>
      </div>

      {/* Nút tiến */}
      <button className={`${styles.navButton} ${styles.nextButton}`} onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
}