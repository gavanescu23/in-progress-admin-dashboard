import React, { useState, useEffect } from "react";
import ReactLoading from "react-loading";

const Customers = () => {
  const [theCustomer, setTheCustomer] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [checkCustomerID, setCustomerID] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://fakestoreapi.com/users")
      .then((res) => res.json())
      .then((cData) => {
        // console.log(cData);
        setTheCustomer(cData);
        setIsLoading(false);
      })
      .catch(() => {
        console.log("Unable to fetch customer list");
      });
  }, []);

  useEffect(() => {
    currentRecords &&
      currentRecords.forEach((customerCheck) => {
        if (customerCheck.id < 10) setCustomerID(true);
        else setCustomerID(false);
      });
  });

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords =
    theCustomer && theCustomer.slice(indexOfFirstRecord, indexOfLastRecord);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  return (
    <>
      {!isLoading ? (
        <div className="flex m-auto">
          <div className="w-full rounded-lg relative overflow-x-auto text-[32px] text-center">
            <div className="bg-gray-700 text-gray-200 ">Customers</div>
            <table className="w-full text-sm text-left dark:text-gray-400">
              <thead className="text-xs uppercase dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th className="text-center px-6 py-3" scope="col">
                    Email
                  </th>
                  <th className="text-center px-6 py-3" scope="col">
                    Username
                  </th>
                  <th className="text-center px-6 py-3" scope="col">
                    First Name
                  </th>
                  <th className="text-center px-6 py-3" scope="col">
                    Last Name
                  </th>
                  <th className="text-center px-6 py-3" scope="col">
                    Phone
                  </th>
                  <th className="text-center px-6 py-3" scope="col">
                    Zip Code
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentRecords &&
                  currentRecords.map((customer) => {
                    return [
                      <>
                        <tr className="dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                          <td className="text-white text-center px-6 py-3">
                            {customer.email}
                          </td>
                          <td className="text-white text-center px-6 py-3">
                            {customer.username}
                          </td>
                          <td className="text-white text-center px-6 py-3">
                            {customer.name.firstname}
                          </td>
                          <td className="text-white text-center px-6 py-3">
                            {customer.name.lastname}
                          </td>
                          <td className="text-white text-center px-6 py-3">
                            {customer.phone}
                          </td>
                          <td className="text-white text-center px-6 py-3">
                            {customer.address.zipcode}
                          </td>
                        </tr>
                      </>,
                    ];
                  })}
              </tbody>
            </table>

            <nav currentPage={currentPage} setCurrentPage={setCurrentPage}>
              <ul className="flex justify-around mt-2 text-[20px] rounded-lg bg-gray-400 text-white">
                {checkCustomerID && currentPage === 1 ? (
                  <li className="page-item">
                    <a href="/#" className="page-link" onClick={nextPage}>
                      Next
                    </a>
                  </li>
                ) : !checkCustomerID && indexOfLastRecord === 10 ? (
                  <li className="page-item rounded-lg">
                    <a href="/#" className="page-link" onClick={prevPage}>
                      Prev
                    </a>
                  </li>
                ) : <></>}
              </ul>
            </nav>
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

export default Customers;
