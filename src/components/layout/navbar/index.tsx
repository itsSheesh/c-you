/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import CartIcon from "@/components/icons/CartIcon";
import UserIcon from "@/components/icons/UserIcon";
import SearchIcon from "@/components/icons/SearchIcon";
import logo from "@/assets/logo.svg";
import Image from "next/image";
const Navbar = () => {
  return (
    <div className="flex z-10 gap-5 justify-between items-start px-20 w-full bg-slate-200 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <div className="flex gap-2 justify-between items-center self-start text-xl text-center max-md:flex-wrap max-md:max-w-full">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/89927bd703977d8c1b66e526d1bb5710b43c88e6297bf1b97d0c752fefed8862?apiKey=a13b76bdd53248da93c20679904a2a60&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/89927bd703977d8c1b66e526d1bb5710b43c88e6297bf1b97d0c752fefed8862?apiKey=a13b76bdd53248da93c20679904a2a60&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/89927bd703977d8c1b66e526d1bb5710b43c88e6297bf1b97d0c752fefed8862?apiKey=a13b76bdd53248da93c20679904a2a60&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/89927bd703977d8c1b66e526d1bb5710b43c88e6297bf1b97d0c752fefed8862?apiKey=a13b76bdd53248da93c20679904a2a60&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/89927bd703977d8c1b66e526d1bb5710b43c88e6297bf1b97d0c752fefed8862?apiKey=a13b76bdd53248da93c20679904a2a60&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/89927bd703977d8c1b66e526d1bb5710b43c88e6297bf1b97d0c752fefed8862?apiKey=a13b76bdd53248da93c20679904a2a60&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/89927bd703977d8c1b66e526d1bb5710b43c88e6297bf1b97d0c752fefed8862?apiKey=a13b76bdd53248da93c20679904a2a60&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/89927bd703977d8c1b66e526d1bb5710b43c88e6297bf1b97d0c752fefed8862?apiKey=a13b76bdd53248da93c20679904a2a60&"
            className="self-stretch shadow-lg aspect-[1.27] w-[81px]"
          />
          <div className="self-stretch my-auto font-bold text-zinc-950">
            C-YOU{" "}
          </div>
          <div className="flex gap-5 justify-between self-stretch my-auto text-stone-700 max-md:flex-wrap max-md:max-w-full">
            <div className="grow">کامپیوتر</div>
            <div>لپتاپ </div>
            <div className="flex-auto">قطعات کامپیوتر</div>
            <div>لوازم جانبی</div>
            <div>مانیتور</div>
            <div className="grow whitespace-nowrap">درباره سی یو</div>
          </div>
        </div>
        <div className="flex gap-4 my-auto">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b16cb18d6751410cc431b899b497adbdf57a6f53ca04667f28a3711727008f3?apiKey=a13b76bdd53248da93c20679904a2a60&"
            className="aspect-[1.06] w-[50px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/40100a60fa967f5019f2055d31714784d8cc955f0d9fd55ba6bb052931bd374a?apiKey=a13b76bdd53248da93c20679904a2a60&"
            className="aspect-[1.06] w-[50px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/475f7f022a83919c21a14640e0cc441df887d94a93f68abf6c63ebe704896730?apiKey=a13b76bdd53248da93c20679904a2a60&"
            className="aspect-[1.06] w-[50px]"
          />
        </div>
      </div>
  );
};
export default Navbar;
