import Image from "next/image";
import AgeGate from "@/components/AgeGate";
import NewsletterPopup from "@/components/NewsletterPopup";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import ProductShowcase from "@/components/ProductShowcase";
import DeviceInfo from "@/components/DeviceInfo";
import About from "@/components/About";
import Newsletter from "@/components/Newsletter";
import StoreLocator from "@/components/StoreLocator";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <AgeGate />
      <NewsletterPopup />
      <Header />
      <main>
        <Hero />
        <div className="flex justify-center py-6 bg-ivory">
          <Image
            src="/images/drip-mark.png"
            alt=""
            width={80}
            height={100}
            className="w-[35px] sm:w-[45px] h-auto opacity-30 mix-blend-multiply"
          />
        </div>
        <Marquee text="Hi Bubbs" bgColor="bg-periwinkle" textColor="text-ivory" />
        <ProductShowcase />
        <DeviceInfo />
        <About />
        <Marquee
          text="We Love Bubbs"
          reverse
          bgColor="bg-coral"
          textColor="text-white"
        />
        <Newsletter />
        <StoreLocator />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
