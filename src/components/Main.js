import { addToCart, remove_from_cart } from "../redux/action";
import { useDispatch } from "react-redux";
import { productList } from "../redux/productAction";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Button, Grid, Box } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import Mycorousel from "./Mycorousel";
import DeleteIcon from '@mui/icons-material/Delete';
import './main.css'
import './main-mobile.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Videocorousel from "./Videocorousel";
import Mainbanner from "./Mainbanner";















function Main() {
  const dispatch = useDispatch();
  let data = useSelector((state) => state.productData);
  console.log("data in main component from saga", data)

  useEffect(() => {
    dispatch(productList())
  }, [])

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 320, min: 0 },
      items: 0
    }
  };











  return (
    <div>
    
    <div className="main-container">


      <Mycorousel />
      <div className="round-img-1"><img src='images/1.png' alt='img' />  </div>
    
     <Mainbanner/>
 

  
  
      <div className="corousel-container">
        <Carousel responsive={responsive}>
          <div className="corousel-item"> <img src="images/oil.png" alt="" width={"200px"} height={"200px"} /> 
          <div className="corousel-text">

            <div>Name: Soya Health</div>
            <div>Color : Green</div>
            <div>Price : 150</div>
            <div>Category : Fortune oil</div>
            <div>Brand : Fortune</div>
          </div>
          </div>

          <div className="corousel-item"> <img src="images/besan.png" alt="" width={"200px"} height={"200px"} />
          <div className="corousel-text">
            <div>Name: Besan</div>
            <div>Color : Yellow</div>
            <div>Price : 125</div>
            <div>Category : Fortune Foods</div>
            <div>Brand : Fortunes</div>
            </div>
          </div>
          <div className="corousel-item"> <img src="images/ChanaSattu.png" alt="" width={"200px"} height={"200px"} />
          <div className="corousel-text">
            <div>Name: Chana Sattu</div>
            <div>Color : Yellow</div>
            <div>Price : 200</div>
            <div>Category : Foods</div>
            <div>Brand : Fortunes</div>
            </div>
          </div>
          <div className="corousel-item"> <img src="images/Cotton-Lite.png" alt="" width={"200px"} height={"200px"} />
          <div className="corousel-text">
            <div>Name: Cotton Lite</div>
            <div>Color : Green</div>
            <div>Price : 320</div>
            <div>Category : oil</div>
            <div>Brand : Fortunes</div>
            </div>
          </div>
          <div className="corousel-item"> <img src="images/Kings.png" alt="" width={"200px"} height={"200px"} />
          <div className="corousel-text">
            
            <div>Name: Kings Pizza</div>
            <div>Color : White</div>
            <div>Price : 125</div>
            <div>Category : Foods</div>
            <div>Brand : Fortunes</div>
          </div>
          </div>
          <div className="corousel-item"> <img src="images/PavBhaji.png" alt="" width={"200px"} height={"200px"} />
          <div className="corousel-text">
            <div>Name: Pav Bhaji</div>
            <div>Color : Green</div>
            <div>Price : 151</div>
            <div>Category : Foods</div>
            <div>Brand : Fortunes</div>
          </div>  
          </div>
        </Carousel>
      </div>


      <div className="product-container">

   


      </div>



    </div>

    <Videocorousel />
    
</div>



  )
}

export default Main;