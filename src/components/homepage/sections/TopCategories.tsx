import Image from "next/image";
import React from "react";
import styles from "./style.module.css";
import Button from "@/components/shared/Button";
import Link from "next/link";
import { TProduct } from "@/app/types/type";

const TopCategories = async () => {
  const res = await fetch("https://ocean-server.vercel.app/api/categories", {
    cache: "no-store",
  });
  const data = await res.json();
  return (
    <div className="my-[100px] mt-[170px] w-[90%] mx-auto border">
      <div className="text-center">
        <h1 className="text-[36px] font-bold mt-3">Top Categories</h1>
        <p className="my-3 text-[grey]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, minus.
          Nam esse in aut pariatur sunt eius,
          <br /> modi quae quaerat odio a rem iste, nulla asperiores perferendis
          accusamus impedit reiciendis.
        </p>
      </div>
      <div className="grid grid-cols-3 grid-rows-2 gap-4 px-8 mt-8">
        <div
          className={`${styles["parent-container"]} w-full row-span-2 relative`}
        >
          <Link href={`fish?category=${data?.data[0]._id}`}>
            <Image
              className="rounded-xl hover:opacity-50"
              src={data?.data[0].items[0].imageURL}
              alt="image"
              width={400}
              height={400}
            />{" "}
          </Link>
          <span className="absolute w-full left-[0] bottom-[0] text-white text-[22px]">
            <div className="">
              <div className="group opacity-60 relative px-2 py-2 rounded-br-md rounded-bl-md border bg-slate-300 text-black  shadow-lg transition-all duration-200 ease-in-out">
                <h3 className="uppercase text-[16px] font-bold text-black">
                  {data?.data[0].total} Items
                </h3>
                <p className="mt-2 font-sans text-3xl font-bold">
                  {data?.data[0]._id}
                </p>
                <p className="mt-4">
                  {data?.data[0].items.map((item: TProduct) => (
                    <span className="mr-2 font-bold" key={item.id}>
                      {item.title}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </span>
        </div>
        <div
          className={`${styles["parent-container"]} w-full row-span-1 relative`}
        >
          <Link href={`fish?category=${data?.data[1]._id}`}>
            <Image
              className="rounded-xl hover:opacity-50"
              width={400}
              height={400}
              src={data?.data[1].items[0].imageURL}
              alt="image"
            />
          </Link>

          <span className="absolute w-full left-[0] bottom-[0] text-white text-[22px]">
            <div className="">
              <div className="group opacity-60 relative px-2 py-2 rounded-br-md rounded-bl-md border bg-slate-300 text-black  shadow-lg transition-all duration-200 ease-in-out">
                <h3 className="uppercase text-[16px] font-bold text-black">
                  {data?.data[1].total} Items
                </h3>
                <p className="mt-2 font-sans text-3xl font-bold">
                  {data?.data[1]._id}
                </p>
                <p className="mt-4">
                  {data?.data[1].items.map((item: TProduct) => (
                    <span className="mr-2 font-bold" key={item.id}>
                      {item.title}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </span>
        </div>
        <div
          className={`${styles["parent-container"]} w-full row-span-2 relative`}
        >
          {" "}
          <Link href={`fish?category=${data?.data[2]._id}`}>
            <Image
              className="rounded-xl hover:opacity-50"
              width={400}
              height={400}
              src={data?.data[2].items[0].imageURL}
              alt="image"
            />
          </Link>
          <span className="absolute w-full left-[0] bottom-[0] text-white text-[22px]">
            <div className="">
              <div className="group opacity-60 relative px-2 py-2 rounded-br-md rounded-bl-md border bg-slate-300 text-black  shadow-lg transition-all duration-200 ease-in-out">
                <h3 className="uppercase text-[16px] font-bold text-black">
                  {data?.data[2].total} Items
                </h3>
                <p className="mt-2 font-sans text-3xl font-bold">
                  {data?.data[2]._id}
                </p>
                <p className="mt-4">
                  {data?.data[2].items.map((item: TProduct) => (
                    <span className="mr-2 font-bold" key={item.id}>
                      {item.title}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </span>
        </div>
        <div className={`${styles["parent-container"]} w-full row-span-1`}>
          <Link href={`fish?category=${data?.data[3]._id}`}>
            <Image
              className="rounded-xl hover:opacity-50"
              width={400}
              height={400}
              src={data?.data[3].items[0].imageURL}
              alt="image"
            />
          </Link>
          <span className="absolute w-full left-[0] bottom-[0] text-white text-[22px]">
            <div className="">
              <div className="group opacity-60 relative px-2 py-2 rounded-br-md rounded-bl-md border bg-slate-300 text-black  shadow-lg transition-all duration-200 ease-in-out">
                <h3 className="uppercase text-[16px] font-bold text-black">
                  {data?.data[3].total} Items
                </h3>
                <p className="mt-2 font-sans text-3xl font-bold">
                  {data?.data[3]._id}
                </p>
                <p className="mt-4">
                  {data?.data[3].items.map((item: TProduct) => (
                    <span className="mr-2 font-bold" key={item.id}>
                      {item.title}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </span>
        </div>
      </div>
      <div className="mt-[68px] mx-auto text-center mb-[10px]">
        <Link href="/categories">
          <Button text="View All" />
        </Link>
      </div>
    </div>
  );
};

export default TopCategories;
