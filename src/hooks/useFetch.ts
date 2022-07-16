import { useEffect, useRef, useState } from "react";

type ParamsType = Record<string, string>;

export function useFetch<T = unknown>(url: string, params?: ParamsType) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    if (!url) return;
    setLoading(true);
    const fetchData = async () => {
      //criando a url com seus parâmetros são fixos pois será a única api utilizado no projeto
      const fullUrl = new URL(`https://fakestoreapi.com${url}?`);
      fullUrl.search = new URLSearchParams({ ...params }).toString();

      const response = await fetch(fullUrl.href);
      const data = await response.json();
      console.log("Requisição");

      setData(data);
      setLoading(false);
    };

    fetchData();
  }, [url, params]);
  return { data, loading };
}
