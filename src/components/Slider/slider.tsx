// components/Slider/slider.tsx
"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import styles from "./slider.module.css";

const AUTOPLAY_DELAY = 3000;

export default function Slider() {
  const images: string[] = [
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

  const [visible, setVisible] = useState<number>(3);
  const [index, setIndex] = useState<number>(0);
  const [withTransition, setWithTransition] = useState<boolean>(true);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Đọc trực tiếp --visible từ CSS thay vì tự đoán breakpoint trong JS
  // => CSS là nguồn sự thật DUY NHẤT, JS luôn khớp với layout thực tế
  useEffect(() => {
    const readVisibleFromCSS = () => {
      if (!containerRef.current) return;
      const value = getComputedStyle(containerRef.current)
        .getPropertyValue("--visible")
        .trim();
      const parsed = parseInt(value, 10);
      if (!Number.isNaN(parsed) && parsed > 0) {
        setVisible(parsed);
      }
    };
    readVisibleFromCSS();
    window.addEventListener("resize", readVisibleFromCSS);
    return () => window.removeEventListener("resize", readVisibleFromCSS);
  }, []);

  const [prevVisible, setPrevVisible] = useState<number>(visible);
  if (visible !== prevVisible) {
    setPrevVisible(visible);
    setWithTransition(false);
    setIndex(0);
  }

  const extendedImages: string[] = [...images, ...images.slice(0, visible)];

  const nextSlide = useCallback(() => {
    setWithTransition(true);
    setIndex((prev) => prev + 1);
  }, []);

  const prevSlide = useCallback(() => {
    setWithTransition(true);
    setIndex((prev) => prev - 1);
  }, []);

  const restartAutoplay = useCallback(() => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(nextSlide, AUTOPLAY_DELAY);
  }, [nextSlide]);

  useEffect(() => {
    restartAutoplay();
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [restartAutoplay]);

  const handleNextClick = () => {
    nextSlide();
    restartAutoplay();
  };

  const handlePrevClick = () => {
    prevSlide();
    restartAutoplay();
  };

  useEffect(() => {
    if (index === images.length) {
      const timeout = setTimeout(() => {
        setWithTransition(false);
        setIndex(0);
      }, 600);
      return () => clearTimeout(timeout);
    }
    if (index < 0) {
      const timeout = setTimeout(() => {
        setWithTransition(false);
        setIndex(images.length - 1);
      }, 600);
      return () => clearTimeout(timeout);
    }
  }, [index, images.length]);

  return (
    <div className={styles.sliderContainer} ref={containerRef}>
      <button
        className={`${styles.navButton} ${styles.prevButton}`}
        onClick={handlePrevClick}
        aria-label="Previous slide"
      >
        &#10094;
      </button>

      <div className={styles.cardsWrapper}>
        <div
          className={styles.cards}
          style={{
            transform: `translateX(-${index * (100 / visible)}%)`,
            transition: withTransition ? "transform 0.6s ease-in-out" : "none",
          }}
        >
          {extendedImages.map((src, idx) => (
            <div className={styles.cardItem} key={idx}>
              <Image
                src={src}
                alt={`Slide ${idx + 1}`}
                width={994}
                height={663}
                className={styles.cardImage}
              />
            </div>
          ))}
        </div>
      </div>

      <button
        className={`${styles.navButton} ${styles.nextButton}`}
        onClick={handleNextClick}
        aria-label="Next slide"
      >
        &#10095;
      </button>
    </div>
  );
}