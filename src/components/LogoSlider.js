"use client";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import { useEffect } from "react";
import "keen-slider/keen-slider.min.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const LogoSlider = ({ className }) => {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 2,
      spacing: 16
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 3, spacing: 24 }
      },
      "(min-width: 1024px)": {
        slides: { perView: 5, spacing: 24 }
      }
    }
  });

  useEffect(() => {
    let timeout;
    let mouseOver = false;

    const clearNextTimeout = () => clearTimeout(timeout);
    const nextTimeout = () => {
      clearTimeout(timeout);
      if (mouseOver) return;
      timeout = setTimeout(() => {
        instanceRef.current?.next();
      }, 2000);
    };

    const slider = instanceRef.current?.container;
    if (slider) {
      slider.addEventListener("mouseover", () => {
        mouseOver = true;
        clearNextTimeout();
      });
      slider.addEventListener("mouseout", () => {
        mouseOver = false;
        nextTimeout();
      });
    }

    nextTimeout();
    return () => clearTimeout(timeout);
  }, [instanceRef]);
  const logos = [
    { src: "/images/three-m.png", alt: "3M" },
    { src: "/images/amentum.png", alt: "Amentum" },
    { src: "/images/daikin.png", alt: "Daikin" },
    { src: "/images/general.png", alt: "GE" },
    { src: "/images/air-wheel.png", alt: "Airwheel" }
  ];
  return (
    <section className={`bg-gray-50 py-12 ${className ? className : ""}`}>
      <div className="max-w-[1312px] mx-auto px-4">
        <h2 className="text-center text-4xl mb-8 text-[#000000] font-normal">
          Trusted by leading Clients
        </h2>

        <div className="relative mx-auto max-w-[700px] px-4">
          {/* Slider */}
          <div ref={sliderRef} className="keen-slider">
            {logos.map((logo, i) => (
              <div
                key={i}
                className="keen-slider__slide  max-w-[150px] flex items-center justify-center h-32 rounded-lg border bg-white shadow-sm"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={150}
                  height={150}
                  className="object-contain grayscale"
                />
              </div>
            ))}
          </div>

          <button
            onClick={() => instanceRef.current?.prev()}
            className="absolute -left-5 top-1/2 -translate-y-1/2 bg-transparent border-none p-2"
          >
            <ChevronLeft className="w-6 h-6" color="#3A3D4F" />
          </button>

          <button
            onClick={() => instanceRef.current?.next()}
            className="absolute -right-5 top-1/2 -translate-y-1/2 bg-transparent border-none p-2"
          >
            <ChevronRight className="w-6 h-6" color="#3A3D4F" />
          </button>
        </div>
      </div>
    </section>
  );
};
export default LogoSlider;
