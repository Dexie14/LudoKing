import OpenCard from "../components/openCard";

const topBar = () => {
  return (
    <div className="bg-[#0F002B] px-6 py-4 flex justify-between h-full">
      <section className="w-1/2">
        <p className="font-inter text-xl text-white font-normal">
          live open <span className="font-semibold">challenge</span>
        </p>
        <div className="w-11/12 mx-auto mt-7">
          <OpenCard />
          <OpenCard />
          <OpenCard />
        </div>
      </section>

      <section className="w-1/2">
        <p className="font-inter text-xl text-white font-normal">
          sort <span className="font-semibold">battle</span>
        </p>
        <div className="w-11/12 mx-auto mt-7 ">
          <div
            className="bg-white rounded-xl flex gap-5  px-4 py-3 items-center w-9/12"
            style={{ boxShadow: "0px 0px 2px 0px rgba(0, 0, 0, 0.25);" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M18.125 17.2413L13.405 12.5213C14.5393 11.1596 15.1049 9.41302 14.9842 7.64494C14.8635 5.87686 14.0658 4.22337 12.757 3.02845C11.4483 1.83353 9.72922 1.18917 7.95748 1.22943C6.18574 1.26969 4.49773 1.99145 3.2446 3.24459C1.99147 4.49772 1.2697 6.18573 1.22944 7.95747C1.18918 9.72921 1.83354 11.4483 3.02846 12.757C4.22338 14.0658 5.87687 14.8635 7.64495 14.9842C9.41303 15.1049 11.1596 14.5392 12.5213 13.405L17.2413 18.125L18.125 17.2413ZM2.50001 8.125C2.50001 7.01248 2.82991 5.92494 3.44799 4.99992C4.06608 4.07489 4.94458 3.35392 5.97242 2.92818C7.00025 2.50243 8.13125 2.39104 9.22239 2.60808C10.3135 2.82512 11.3158 3.36085 12.1025 4.14752C12.8892 4.93419 13.4249 5.93647 13.6419 7.02762C13.859 8.11876 13.7476 9.24976 13.3218 10.2776C12.8961 11.3054 12.1751 12.1839 11.2501 12.802C10.3251 13.4201 9.23753 13.75 8.12501 13.75C6.63368 13.7483 5.2039 13.1552 4.14936 12.1006C3.09483 11.0461 2.50167 9.61633 2.50001 8.125Z"
                fill="#0F002B"
              />
            </svg>
            <input className="border-none " placeholder="Search Battle" />
          </div>
        </div>
        <div className="w-11/12 mx-auto mt-7 ">
          <div className="bg-white flex justify-between items-center px-14 py-5 rounded-xl w-9/12">
            <p>
              ₹ <span className="ml-3 text-black text-opacity-[57%]">From</span>
            </p>
            <div
              className=" flex justify-center items-center border rounded-full border-[#bdbdbd] h-[40px] w-[40px]"
              style={{ boxShadow: " 0px 0px 2px 0px rgba(0, 0, 0, 0.40)" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M3.33333 2.5H16.6667C16.8877 2.5 17.0996 2.5878 17.2559 2.74408C17.4122 2.90036 17.5 3.11232 17.5 3.33333V4.655C17.5 4.876 17.4121 5.08792 17.2558 5.24417L11.91 10.5892C11.754 10.7455 11.6665 10.9575 11.6667 11.1783V16.4325C11.6667 16.5592 11.6378 16.6842 11.5822 16.798C11.5267 16.9118 11.4459 17.0115 11.346 17.0894C11.2461 17.1674 11.1298 17.2215 11.0059 17.2477C10.882 17.274 10.7537 17.2716 10.6308 17.2408L8.96417 16.8242C8.78396 16.779 8.62401 16.675 8.50971 16.5285C8.39542 16.3821 8.33334 16.2016 8.33333 16.0158V11.1783C8.33329 10.9573 8.24546 10.7454 8.08917 10.5892L2.74333 5.24417C2.58735 5.08779 2.49983 4.87588 2.5 4.655V3.33333C2.5 3.11232 2.5878 2.90036 2.74408 2.74408C2.90036 2.5878 3.11232 2.5 3.33333 2.5Z"
                  stroke="#0F002B"
                />
              </svg>
            </div>
            <p>
              ₹ <span className="ml-3 text-black text-opacity-[57%]">To</span>
            </p>
          </div>
        </div>
        <div className="w-11/12 mt-7 mx-auto">
          <div className="flex flex-wrap gap-5">
            <div className="bg-white flex gap-8 justify-between items-center px-8 py-5 rounded-xl">
              <div
                className=" flex justify-center items-center border rounded-full border-[#bdbdbd] h-[40px] w-[40px]"
                style={{ boxShadow: " 0px 0px 2px 0px rgba(0, 0, 0, 0.40)" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M15.8334 14.1667H18.3334L15 17.5L11.6667 14.1667H14.1667V2.5H15.8334M1.66669 14.1667H10V15.8333H1.66669M5.00002 4.16667V5.83333H1.66669V4.16667M1.66669 9.16667H7.50002V10.8333H1.66669V9.16667Z"
                    fill="#0F002B"
                  />
                </svg>
              </div>
              <div>
                <p>Low to High</p>
              </div>
            </div>
            <div className="bg-white flex gap-8 justify-between items-center px-8 py-5 rounded-xl">
              <div
                className=" flex justify-center items-center border rounded-full border-[#bdbdbd] h-[40px] w-[40px]"
                style={{ boxShadow: " 0px 0px 2px 0px rgba(0, 0, 0, 0.40)" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M11.25 13.75L12.1337 12.8663L14.375 15.1075V2.5H15.625V15.1075L17.8663 12.8663L18.75 13.75L15 17.5L11.25 13.75ZM1.25 3.75H10V5H1.25V3.75ZM3.75 7.5H10V8.75H3.75V7.5ZM6.25 11.25H10V12.5H6.25V11.25Z"
                    fill="#0F002B"
                  />
                </svg>
              </div>
              <div>
                <p>High to Low</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default topBar;
