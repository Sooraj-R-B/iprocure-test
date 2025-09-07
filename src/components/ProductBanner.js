"use client";
import Image from "next/image";
import bannerImg from "../../public/images/banner.jpg";

const ProductBanner = () => {
  return (
    <section className="relative bg-black rounded-2xl overflow-hidden mb-5 mt-11">
      <div className="relative z-10 flex flex-col justify-center h-full px-6 py-12 md:px-12 lg:px-20">
        <h2 className="text-white text-xl md:text-2xl lg:text-3xl font-medium max-w-2xl">
          Durable Construction: The 3M 6200 half face respirator, ensuring a
          durable and long-lasting product.
        </h2>
        <button className="cursor-pointer mt-6 w-fit rounded-lg bg-blue-600 px-6 py-2 text-white font-medium shadow hover:bg-blue-700 transition">
          Buy Now
        </button>
      </div>

      <div className="absolute inset-y-0 right-0 w-1/2 hidden md:block">
        <Image
          src={bannerImg}
          alt="3M respirator"
          fill
          className="object-cover object-center"
        />
      </div>
    </section>
  );
};
export default ProductBanner;
