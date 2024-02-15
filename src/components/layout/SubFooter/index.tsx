import GoToTop from "@/components/icons/GoToTop";

const SubFooter = () => {
  const handleToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div
      
      className="flex justify-center items-center  py-12 text-xl bg-main text-other-4 max-md:px-5 max-md:max-w-full"
    >
      <div onClick={handleToTop} className="flex gap-2 cursor-pointer">
        <GoToTop />
        <div className="grow">برگشت به بالا</div>
      </div>
    </div>
  );
};

export default SubFooter;
