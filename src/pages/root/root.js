import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import App from "../../App";
import Details from "../Details/Details";


  export default function Root() {
      return (
          <BrowserRouter>
            <Routes>
                <Route path="/" element={<App></App>}/>
                <Route path="/details/:id" element={<Details></Details>} />
            </Routes>
          </BrowserRouter>
      )
  }