import React from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import ItemDisplay from "../../components/ItemDisplay";

const fetcher = (url) => fetch(url).then((res) => res.json());

const filterData = () => {};

export default function Product() {
  const router = useRouter();
  const { product } = router.query;

  const { data, error } = useSWR(`/api/data/${product}`, fetcher);

  return (
    <div
      className={"px-6 md:px-12 bg-gray-100 w-screen h-screen box-border pt-24"}
    >
      <ItemDisplay products={data?.slice(1)} />
      {console.log(data)}
    </div>
  );
}
