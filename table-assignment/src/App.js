
import { useEffect, useState } from "react";
import axios from "axios";
import Button from "./components/Button";
import CandidateCard from "./components/CandidateCard";
import "./styles.css";
import { Searchbox } from "./components/Searchbox";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
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
      url: "http://localhost:8080/info",
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
        
        

        
      

      
       
      </div>
       <br />
      <div className="container">
      <div className="search_box">
      <SearchIcon/> <input type="text"  placeholder="  Search Box" />
      </div>
      <div className="buttons">
        <button>View</button>
        <button>Edit</button>
        <button>Status<KeyboardArrowDownIcon/></button>
        <button>Send</button>
        <button><MoreHorizIcon/></button>
        <button onClick={() => setPage(page-1)}> <ChevronLeftIcon /></button>
        <button onClick={() => setPage(page+1)}><ChevronRightIcon/></button>

      </div>
      </div>
      <div className="header">
        <div className="name">Name</div>
        <div className="email">Email</div>
        <div className="phone_no">Phone No</div>
        <div className="status">Status</div>
        <div className="Option">Option</div>
        <div className="date_added">Date Added</div>
      </div>






      {data.map((item) => (
        <CandidateCard key={item.id} {...item} />
      ))}
      <div className="footer">
      <PaginationComponent currentPage={page} lastPage={5} onPageChange={setPage}/>
      </div>
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