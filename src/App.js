import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect,useState } from "react";
import './App.css';

function App() {

const apikey = "e50bfdb8d308f6eea59e8d553d132d23"
const [data ,setdata]=useState({})
const [input,setinput]= useState("")


const getwetherdetails = (cityName) => {
  if(!cityName) return
  const apiurl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apikey 
  axios.get(apiurl).then((res)=>{
    console.log("response",res.data)
setdata(res.data)

  }).catch((err)=>{
    console.log("err",err)
  })
}

const handlechangeinput = (e) =>{
setinput(e.target.value)
}
const handlesearch = () => {
  getwetherdetails(input)
}

// useEffect(() => {
// getwetherdetails("lahore")
// }, [])

  return (
    <div className="col-md-12">

      <div className="wetherBG">
        <h1 className="heading">Weather App  </h1>

        <div className="d-grid gap-3 col-4 mt-4">
          <input type="text" className="form-control" 
          value={input}
          onChange={handlechangeinput} />
          <button className="btn btn-primary" type="button"
          onClick={handlesearch}>Search</button>
        </div>
      </div>

{Object.keys(data).length>0 &&

      <div className="col-md-12 text-center mt-5 bbb">
        <div className="shadow rounded wetherresultbox">
          <img className="wicon" src={require("./qqq.jpg")} />
          <h1 className="wcity">{data?.name}</h1>
          <h6 className="wt">{((data?.main?.temp)-273.15).toFixed(2)} °C</h6>
          <h6 className="wt"> Feels like {((data?.main?.feels_like)-273.15).toFixed(2)} °C</h6>
          <h6 className="wt"> Pressure {data?.main?.pressure} mb</h6>
        </div>
      </div>
      }

    </div>
  );
}

export default App;
