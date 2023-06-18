import React, {useState, useEffect} from 'react'

const Pagination = (props) => {
  const initialValue = 1;
  const [currPage = initialValue, setCurrPage] = useState();
  const [checkCID, setCID] = useState(true);
  const [dataSource, setDataSource] = useState();
  const recordsOnPage = 7;
  const lastIndex = currPage * recordsOnPage;
  const firstIndex = lastIndex - recordsOnPage;
  const myRecords = dataSource && dataSource.slice(firstIndex, lastIndex);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setDataSource(data);
      })
      .catch(() => {
        console.log("Unable to fetch user list");
      });
  }, []);


  useEffect(() => {
    myRecords &&
      myRecords.forEach((customer) => {
        if (customer.id < 20) {
          setCID(true);
        } else setCID(false);
      });
  });

  const onPageNext = () => {
    setCurrPage(currPage + 1);
  };

   const onPagePrev = () => {
    if (currPage !== 1) {setCurrPage(currPage - 1);}
  };

  useEffect(() => {
    props.passData(currPage);
  })

  return (
    <>
    <nav>
    <ul className="flex justify-around mt-2 text-[20px] rounded-lg bg-gray-400 text-white">
      {checkCID && currPage === 1
        ? [
            <li className="page-item">
              {" "}
              <a href="/#" className="page-link" onClick={onPageNext}>
                Next
              </a>
            </li>,
          ]
        : checkCID && currPage <= 21 ? [
            <li className="page-item rounded-lg">
              <a href="/#" className="page-link" onClick={onPagePrev}>
                Prev
              </a>
            </li>,
            <li className="page-item rounded-lg">
              <a href="/#" className="page-link" onClick={onPageNext}>
                Next
              </a>
            </li>,
          ] :  <li className="page-item rounded-lg">
          <a href="/#" className="page-link" onClick={onPagePrev}>
            Prev
          </a>
        </li>}
    </ul>
  </nav>
  </>
  )
}

export default Pagination