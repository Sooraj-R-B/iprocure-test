"use client";
import Image from "next/image";

const ProductCard = ({ image, title, unspc, category, buttonText }) => {
  return (
    <div className="max-w-xs rounded-2xl border border-gray-200 bg-white shadow-md overflow-hidden">
      <div className="flex items-center justify-center p-4">
        <Image
          src={image}
          alt={title}
          width={200}
          height={200}
          className="object-contain"
        />
      </div>
      <div className="px-[18px] py-[34px] bg-[#BDBDBD33]">
        <h2 className="text-lg font-semibold text-gray-800 truncate max-w-48">
          {title}
        </h2>
        {unspc && <p className="text-sm text-gray-500">UNSPC: {unspc}</p>}
        <p className="text-sm text-[#6A6A6A]">
          Category :
          <span className="font-medium text-[#3A3D4F]"> {category}</span>
        </p>
        <hr className="my-3 text-[#BDBDBD33]" />
        <button className="w-full rounded-xl bg-blue-600 px-4 py-2 text-white font-medium hover:bg-blue-700 transition cursor-pointer">
          {buttonText}
        </button>
      </div>
    </div>
  );
};
export default ProductCard;
