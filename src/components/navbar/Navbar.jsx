import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AiOutlineSearch } from "react-icons/ai";

import { TailSpin } from "react-loader-spinner";

const Navbar = () => {
  const { register, handleSubmit } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = (data) => {
    console.log(data);
    setIsLoading(true);
    async function f() {
      let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), 1000);
      });

      let result = await promise; // 等待，直到 promise resolve (*)

      if (result) {
        setIsLoading(false);
      }
    }
    f();
  };

  return (
    <>
      <div
        className="flex bg-theme-black text-white items-center gap-x-3 md:gap-x-5
        pl-[10px] md:pl-10
        pt-[10px] md:pt-[20px] 
        h-[80px]  md:h-[100px]
        "
      >
        <Link to={"/"} className="tracking-[8px] font-bold  text-lg">
          RAWG
        </Link>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex items-center justify-center relative">
            <AiOutlineSearch className="absolute left-3" />
            <input
              className="text-white bg-[#3b3b3b]  rounded-2xl
                py-[5px] px-[35px] w-[200px] md:w-[500px] lg:w-[700px] transition-all duration-500 
                hover:bg-white
                active:bg-white
                focus:bg-white
              "
              placeholder="Search Games"
              {...register("searchTerm")}
            />
            {isLoading ? (
              <TailSpin
                // className="absolute right-3 px-2"
                height="15"
                width="15"
                color="#6d926d"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperClass="absolute right-3 px-2"
                visible={true}
              />
            ) : (
              <input
                type="submit"
                value="🚀"
                className="absolute right-3 px-2 rounded-2xl cursor-pointer"
              />
            )}
          </div>
        </form>
      </div>
      {/* <Outlet /> */}
    </>
  );
};

export default Navbar;
