import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { api } from "../Admin/api";
import "swiper/css";
import "swiper/css/navigation";
import "./Destination.css";

export default function DestinationSlider() {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTopDestinations = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await api.listTopDestinations();

        const list = Array.isArray(data?.destinations)
          ? data.destinations
          : Array.isArray(data)
          ? data
          : [];

        const fetchedDestinations = list.map((item) => ({
          id: item.id,
          title: item.name,
          image:
            Array.isArray(item.hero_slider_images) &&
            item.hero_slider_images.length > 0
              ? item.hero_slider_images[0]
              : item.image ||
                "https://placehold.co/600x400?text=Destination",
          capital: item.capital || "",
          climate: item.climate || "",
        }));

        setDestinations(fetchedDestinations);
      } catch (err) {
        console.error("Error fetching top destinations:", err);
        setError("Unable to load top destinations. Please try again.");
        setDestinations([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTopDestinations();
  }, []);

  return (
    <section className="destination-section">
      {/* =====================================================
          RESPONSIVE HEADER
      ===================================================== */}
      <div className="destination-header-container mb-4">
        <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-end gap-3">
          {/* Titles & Accent */}
          <div className="dest-heading-group flex-grow-1">
            <h2 className="top-trending-title fw-bold m-0 mb-2">
              Top Trending Destinations
            </h2>

            <div className="d-flex align-items-center gap-2">
              <span className="gold-accent-line"></span>
              <p className="text-muted top-trending-subtitle m-0">
                Explore our handpicked top travel destinations.
              </p>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="slider-buttons-group d-flex align-items-center gap-2 align-self-end align-self-sm-auto mt-2 mt-sm-0">
            <button
              type="button"
              className="custom-prev dest-nav-btn"
              aria-label="Previous destination"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <button
              type="button"
              className="custom-next dest-nav-btn"
              aria-label="Next destination"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* =====================================================
          LOADING
      ===================================================== */}
      {loading && (
        <div className="text-center py-5">
          <div className="spinner-border text-primary me-2" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <span>Loading top destinations...</span>
        </div>
      )}

      {/* =====================================================
          ERROR
      ===================================================== */}
      {!loading && error && (
        <div className="text-center py-5">
          <div className="text-danger mb-2">{error}</div>
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={() => window.location.reload()}
          >
            Try Again
          </button>
        </div>
      )}

      {/* =====================================================
          NO DESTINATIONS
      ===================================================== */}
      {!loading && !error && destinations.length === 0 && (
        <div className="text-center py-5 text-muted">
          <h5 className="fw-bold mb-2">No Top Destinations Found</h5>
          <p className="mb-0">
            Mark destinations as <strong>Top Destination</strong> from the Admin
            Panel to display them here.
          </p>
        </div>
      )}

      {/* =====================================================
          DESTINATION SLIDER
      ===================================================== */}
      {!loading && !error && destinations.length > 0 && (
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          loop={destinations.length > 5}
          spaceBetween={16}
          slidesPerView={1.15}
          breakpoints={{
            480: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            992: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
            1200: {
              slidesPerView: 5,
              spaceBetween: 24,
            },
          }}
          className="destination-swiper"
        >
          {destinations.map((item, index) => (
            <SwiperSlide key={item.id || index}>
              <Link
                to={`/destination-details?id=${item.id}`}
                className="text-decoration-none"
              >
                <div className="destination-card">
                  <div className="destination-image-container position-relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src =
                          "https://placehold.co/600x400?text=Destination";
                      }}
                    />

                    {item.capital && (
                      <span className="badge dest-capital-badge position-absolute top-0 end-0 m-2">
                        {item.capital}
                      </span>
                    )}
                  </div>

                  <h5 className="fw-bold mt-2 destination-title mb-1">
                    {item.title}
                  </h5>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  );
}