

import MiniMap from "@/components/MiniMap";

import InstagramLogo from "@/components/icons/InstagramLogo";
import PhoneLogo from "@/components/icons/PhoneLogo";
import Image from "next/image";
import CyouFooter from "../../../../public/CyouFooter.png"

const Footer = () => {
  return (
    <div className="flex px-[250px] py-[34px] text-other-3 gap-2xl">
      <div className="flex flex-col">
        <div className=" flex mb-2 items-center">
          <div className="">
            <Image width={50}  className="" src={CyouFooter} alt="" />
          </div>
          <div className="ml-2">C YOU</div>
        </div>
        <div className="flex flex-col gap-xs">
          <div className="flex items-center gap-2">
            <InstagramLogo />
            <p>cyou_shopp</p>
          </div>
          <div className="flex items-center gap-2">
            <PhoneLogo />
            <p>+989009680092</p>
          </div>
        </div>
      </div>
      <div>
        <MiniMap />
      </div>
      <div dir="rtl" className="flex flex-col gap-xs">
        <p className="text-xl">میانبر</p>
        <div></div>
        <p className="">لپتاپ ها</p>
        <p className="">کامپیوتر ها</p>
        <p className="">قطعات کامپیوتر</p>
        <p className="">لوازم جانبی</p>
      </div>
      <div dir="rtl" className="flex flex-col gap-xs">
        <p className="text-xl">میانبر</p>
        <div></div>
        <p className="">صفحه اصلی</p>
        <p>درباره ما</p>
        <p>تماس با ما</p>
        <p>قوانین و مقررات</p>
      </div>
      <div dir="rtl" className="flex flex-col gap-2xs">
        <h1 className="text-xl text-other-3">فروشگاه سی یو</h1>
        <p className="w-[260px]">
          {" "}
          به فروشگاه سی یو خوش آمدید! بهترین لپتاپ ، کامپیوتر ولوازم جانبی با
          بهترین قیمت را اینجا پیدا کنید. با ما بهترین هارا تجربه کنید.
        </p>
      </div>
    </div>
  );
};

export default Footer;
