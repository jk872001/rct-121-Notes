
import { useEffect, useState } from "react";
import axios from "axios";
import Button from "./components/Button";
import CandidateCard from "./components/CandidateCard";
import "./styles.css";

export default function App() {
  
  const [loading, setLoading] = useState(true);         
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);               
  const [page, setPage] = useState(1);
  const [rating, setRating] = useState("asc");          
  const [costOrder , setCostOrder] = useState("asc")
  useEffect(() => {
    fetchData({page, rating, costOrder,})   
  }, [page,rating,costOrder]);

  const fetchData = async({page, rating, costOrder}) => {
    setLoading(true);
    const paramsForPayment = {}
   
    await axios({
      method: "GET",
      url: "http://localhost:8000/candidates",
      params : {
        _page : page,
        _limit : 5,
       _sort : "rating,costOrder",
        _order : `${rating}, ${costOrder}`,
         
        ...paramsForPayment
      }
    })
      .then((res) => {
        setData(res.data);
        setLoading(false); 
        // console.log(res);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });

  }

  return (
    <div className="App">
      <div>
      {loading && <div id="loading-container">...Loading</div> }
        
        <Button id="SORT_BUTTON" title={`Sort by Ascending Salary`} />

        <div>
          <button id="SORT_BUTTON" disabled={rating==="desc"} onClick={()=>setRating("desc")}>
            Cost by desc
            </button>
          <button id="SORT_BUTTON" disabled={rating==="asc"} onClick={()=>setRating("asc")}>
            Cost by asc
            </button>
        </div>

        
      

      
        <Button title="PREV" id="PREV" />
        <Button id="NEXT" title="NEXT" />
        <button id="PREV" disabled={page===1} onClick={() => setPage(page-1)}>prev</button>
      <button id="NEXT" onClick={() => setPage(page+1)}>next</button>
      </div>
      <PaginationComponent currentPage={page} lastPage={5} onPageChange={setPage}/> <br />
      {data.map((item) => (
        <CandidateCard key={item.id} {...item} />
      ))}
    </div>
  );
}

const PaginationComponent = ({
  currentPage,
  lastPage,
  onPageChange
}) => {
  const arr = new Array(lastPage).fill(0);
  return (
    <div>
      {
        arr.map( (item, page) => (<button onClick={()=>onPageChange(page+1)} disabled={(page+1)===currentPage}> {page+1} </button>))
      }
    </div>
  )
}