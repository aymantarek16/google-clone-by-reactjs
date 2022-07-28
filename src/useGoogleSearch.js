import { useState, useEffect } from "react";

const API_KEY = 'AIzaSyBn5yn9pOGqLAZtaw3VA8amRyBtVkjiXiE';
const CONTEXT_KEY = "b29feabbd1f8f3f1f";

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);



  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
        .then((response) => response.json())
        .then((result) => {
          setData(result);
        })
        .catch((error) => {
          console.log("something went wrong", error);
        });
    };
    fetchData();
  }, [term]);

  return { data };
};

export default useGoogleSearch;
