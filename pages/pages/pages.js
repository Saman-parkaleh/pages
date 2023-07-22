import React from "react";
import { Button, Link } from "@mui/material";
import Style from "../Stor.module.css";



function Pages() {
  
  return (
    <>
      <div className={Style.dev}>
        <Button href="../" variant="contained" >hoom </Button>
        <div  className={Style.input}>page 1</div>
        <Button href={"./page2"} variant="contained">page2</Button>
        <div>
         
        </div>
      </div>
    </>
  );
}

export default Pages;
