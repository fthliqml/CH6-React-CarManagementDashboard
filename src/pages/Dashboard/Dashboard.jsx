import MyNavbar from "@components/Navbar/MyNavbar";
import LoadingIcon from "@components/LoadingIcon";
import { useState } from "react";

import ProductList from "./ProductList";
import Pagination from "./Pagination";
import useFetchProducts from "../../Hooks/useFetchProducts";

function Dashboard() {
  const [page, setPage] = useState(1);

  const offset = 0 + 10 * (page - 1);
  const limit = 12;

  const { totalPages, products, loading } = useFetchProducts(offset, limit);

  return (
    <>
      <MyNavbar active={"dashboard"} />
      {!products.length || loading ? (
        <div className="h-96 flex items-center">
          {loading ? (
            <LoadingIcon />
          ) : (
            <p className="mx-auto font-semibold text-xl text-black">
              Products is empty. Please comeback soon...
            </p>
          )}
        </div>
      ) : (
        <ProductList products={products} />
      )}
      <Pagination page={page} onSetPage={setPage} totalPages={totalPages} />
    </>
  );
}

export default Dashboard;
