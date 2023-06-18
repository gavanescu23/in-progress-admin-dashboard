import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import Pagination from "./Pagination";

const RecentOrders = () => {
  const [dataSource, setDataSource] = useState();
  const [loadingScreen, setLoadingScreen] = useState(false);
  
  useEffect(() => {
    setLoadingScreen(true);
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setDataSource(data);
        setLoadingScreen(false);
      })
      .catch(() => {
        console.log("Unable to fetch user list");
      });
  }, []);

  const [currPage, setCurrPage] = useState();
  const recordsOnPage = 7;
  const lastIndex = currPage * recordsOnPage;
  const firstIndex = lastIndex - recordsOnPage;
  const myRecords = dataSource && dataSource.slice(firstIndex, lastIndex);

const passData = (d) => {
  setCurrPage(d);
}

  return (
    <>
      {!loadingScreen ? (
        <div className="flex flex-col m-auto">
          <div className="flex rounded-t-lg bg-gray-700 text-gray-200 text-bold text-[35px] justify-center">
            Recent orders
          </div>
          <div className="w-[300px] rounded-b-lg relative overflow-x-auto xl:w-full md:w-[700px] ">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Image
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Product name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                {myRecords &&
                  myRecords.map((product) => {
                    return [
                      <>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                          <td className="flex justify-center px-6 py-4">
                            <img
                              className="h-[40px] scale-125 hover:scale-150 ease-in duration-500"
                              src={product.image}
                              alt="/#"
                            />
                          </td>
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            {product.title}
                          </th>
                          <td className="px-6 py-4">{product.category}</td>
                          <td className="px-6 py-4">${product.price}</td>
                        </tr>
                      </>,
                    ];
                  })}
              </tbody>
              <tfoot>
                <tr className="bg-gray-400 font-semibold text-gray-200 dark:text-black">
                  <th scope="row" className="px-6 py-3 text-base">
                    Total
                  </th>
                  <td></td>
                  <td></td>
                  <td className="flex justify-end px-6 py-4">
                    $
                    {myRecords &&
                      myRecords
                        .map((product) => product.price)
                        .reduce((acc, amount) => acc + amount)}
                  </td>
                </tr>
              </tfoot>
            </table>
            <Pagination passData={passData}></Pagination>
          </div>
        </div>
      ) : (
        <div className="flex items-center m-auto">
          <ReactLoading type="spin" color="#718096" height={100} width={100} />
        </div>
      )}
    </>
  );
};

export default RecentOrders;
