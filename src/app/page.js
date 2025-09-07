import Image from "next/image";
import styles from "./page.module.css";
import ProductListWrapper from "@/components/ProductListWrapper";
import ProductBanner from "@/components/ProductBanner";
import LogoSlider from "@/components/LogoSlider";
export default function Home() {
  return (
    <div className="h-full min-h-screen bg-white">
      <header className="h-16"></header>
      <div className="mx-auto max-w-[1312px] px-4">
        <ProductBanner />
        <ProductListWrapper />
      </div>
      <LogoSlider className="mt-6" />

      <footer className={styles.footer}></footer>
    </div>
  );
}
