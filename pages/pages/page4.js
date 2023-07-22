import React from "react";
import { Button, Link } from "@mui/material";
import Style from "../Stor.module.css";



function Pages() {
  
  return (
    <>
      <div className={Style.dev}>
        <Button href="./page3" variant="contained" >page 3 </Button>
        <div  className={Style.input}>page 4</div>
        <Button variant="contained">page5</Button>
        <div>
          <Link href={"../"} variant="outlined" className={Style.back}>
            Hoom
          </Link>
        </div>
      </div>
    </>
  );
}

export default Pages;
