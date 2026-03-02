import React, { useState, useEffect, useRef, useCallback } from 'react';
import { FaChevronLeft, FaChevronRight, FaStar, FaQuoteLeft } from 'react-icons/fa';
import { reviews } from '../data/reviews';

const ReviewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const carouselRef = useRef(null);
  
  // Determine how many cards to show based on screen size
  const getCardsPerView = () => {
    if (typeof window === 'undefined') return 1;
    if (window.innerWidth >= 1024) return 3; // lg screens
    if (window.innerWidth >= 640) return 2;  // sm screens
    return 1; // mobile
  };

  const [cardsPerView, setCardsPerView] = useState(getCardsPerView());

  useEffect(() => {
    const handleResize = () => {
      setCardsPerView(getCardsPerView());
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, reviews.length - cardsPerView);

  const nextReview = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= maxIndex ? 0 : prevIndex + 1
    );
  }, [maxIndex]);


  const prevReview = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? maxIndex : prevIndex - 1
    );
  };

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(nextReview, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, currentIndex, cardsPerView, nextReview]);

  return (
    <section
      id="reviews"
      className="w-full flex justify-center items-center py-16 relative overflow-hidden animate-fade-in-up"
    >
      <div className="w-full flex flex-col items-center z-10">
        <h2 className="section-heading text-3xl sm:text-5xl mb-4 text-center animate-fade-in-up px-4">
          Client Reviews
        </h2>
        <p
          className="text-lg mb-12 max-w-2xl text-center px-4"
          style={{ color: "var(--text-secondary)" }}
        >
          Don't just take my word for it - here's what my clients have to say
        </p>

        {/* Carousel Container */}
        <div className="relative w-full overflow-hidden">
          <div
            ref={carouselRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
            }}
          >
            {reviews.map((review) => (
              <div
                key={review.id}
                className="flex-shrink-0 px-4 md:px-6"
                style={{
                  width: `${100 / cardsPerView}%`,
                }}
              >
                <div
                  className="card p-6 md:p-8 rounded-2xl h-full flex flex-col relative overflow-hidden hover:cursor-pointer"
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                  }}
                >
                  {/* Quote Icon */}
                  <FaQuoteLeft
                    className="absolute top-4 right-4 text-3xl opacity-10"
                    style={{ color: "var(--accent)" }}
                  />

                  {/* Avatar */}
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0"
                      style={{
                        background: "var(--accent)",
                        color: "#000000",
                      }}
                    >
                      {review.avatar}
                    </div>
                    <div className="text-left">
                      <h4
                        className="text-lg font-bold"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {review.name}
                      </h4>
                      <p
                        className="text-xs"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {review.role}
                      </p>
                      <p
                        className="text-xs"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {review.company}
                      </p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <FaStar
                        key={i}
                        className="text-lg"
                        style={{ color: "var(--accent)" }}
                      />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p
                    className="text-sm md:text-base leading-relaxed flex-grow text-left"
                    style={{ color: "var(--text-primary)" }}
                  >
                    "{review.text}"
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          {currentIndex > 0 && (
            <button
              onClick={() => {
                prevReview();
                setIsAutoPlaying(false);
              }}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 p-3 rounded-full transition-all hover:scale-110 z-20 shadow-lg"
              style={{
                background: "var(--bg-card)",
                border: "2px solid var(--border)",
                color: "var(--text-primary)",
              }}
              aria-label="Previous review"
            >
              <FaChevronLeft className="text-xl" />
            </button>
          )}
          {currentIndex < maxIndex && (
            <button
              onClick={() => {
                nextReview();
                setIsAutoPlaying(false);
              }}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 p-3 rounded-full transition-all hover:scale-110 z-20 shadow-lg"
              style={{
                background: "var(--bg-card)",
                border: "2px solid var(--border)",
                color: "var(--text-primary)",
              }}
              aria-label="Next review"
            >
              <FaChevronRight className="text-xl" />
            </button>
          )}
        </div>

        {/* Dots Indicator */}
        <div className="flex gap-2 mt-8">
          {[...Array(maxIndex + 1)].map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setIsAutoPlaying(false);
              }}
              className={`transition-all rounded-full ${
                index === currentIndex ? 'w-8 h-3' : 'w-3 h-3'
              }`}
              style={{
                background: index === currentIndex ? "var(--accent)" : "var(--border)",
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
