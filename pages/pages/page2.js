import React from "react";
import { Button, Link } from "@mui/material";
import Style from "../Stor.module.css";



function Pages() {
  
  return (
    <>
      <div className={Style.dev}>
        <Button href="./pages" variant="contained" >page 1 </Button>
        <div  className={Style.input}>page 2</div>
        <Button href={"./page3"} variant="contained">page3</Button>
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
