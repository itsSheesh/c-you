/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

const Hero = () => {
  return (
    <div className="flex overflow-hidden relative z-10 flex-col items-end px-20 py-12 w-full text-3xl text-right shadow-xl min-h-[660px] max-md:px-5 max-md:max-w-full">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f46e335d52803f819f34a187a9c51748d67480cb71b2b8727c5d5e9add09d95a?apiKey=a13b76bdd53248da93c20679904a2a60&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f46e335d52803f819f34a187a9c51748d67480cb71b2b8727c5d5e9add09d95a?apiKey=a13b76bdd53248da93c20679904a2a60&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f46e335d52803f819f34a187a9c51748d67480cb71b2b8727c5d5e9add09d95a?apiKey=a13b76bdd53248da93c20679904a2a60&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f46e335d52803f819f34a187a9c51748d67480cb71b2b8727c5d5e9add09d95a?apiKey=a13b76bdd53248da93c20679904a2a60&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f46e335d52803f819f34a187a9c51748d67480cb71b2b8727c5d5e9add09d95a?apiKey=a13b76bdd53248da93c20679904a2a60&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f46e335d52803f819f34a187a9c51748d67480cb71b2b8727c5d5e9add09d95a?apiKey=a13b76bdd53248da93c20679904a2a60&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f46e335d52803f819f34a187a9c51748d67480cb71b2b8727c5d5e9add09d95a?apiKey=a13b76bdd53248da93c20679904a2a60&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f46e335d52803f819f34a187a9c51748d67480cb71b2b8727c5d5e9add09d95a?apiKey=a13b76bdd53248da93c20679904a2a60&"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="relative mt-40 text-stone-300 max-md:mt-10">
          لبتاب های متناسب با کارت رو <br />
          اینجا پیدا میکنی !
        </div>
        <div className="relative justify-center px-12 py-2 mt-12 mb-44 text-white rounded-xl border border-solid shadow-2xl bg-neutral-900 border-[color:var(--supplement-02,#E2D5C5)] max-md:px-5 max-md:my-10">
          خرید سریع‏
        </div>
      </div>
  );
};
export default Hero;
