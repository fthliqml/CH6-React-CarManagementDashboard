import { useState, useEffect, useRef } from "react";
import axios from "axios";

const useFetchProducts = (offset, limit) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(null);

  // Avoid re-render component
  const isTotalPagesFetched = useRef(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${limit}`
        );
        if (res.status === 200) {
          const data = res.data;
          setProducts(data);
        }

        // get total pages
        if (!isTotalPagesFetched.current) {
          console.log("total");
          const totalRes = await axios.get(
            "https://api.escuelajs.co/api/v1/products"
          );
          const totalProducts = totalRes.data.length;
          setTotalPages(Math.ceil(totalProducts / limit));
          isTotalPagesFetched.current = true;
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [offset, limit]);

  return { loading, totalPages, products };
};

export default useFetchProducts;
