import React from "react";
import { Button, Link } from "@mui/material";
import Style from "../Stor.module.css";



function Pages() {
  
  return (
    <>
      <div className={Style.dev}>
        <Button href="./page2" variant="contained" >page 2 </Button>
        <div  className={Style.input}>page 3</div>
        <Button href={"./page4"} variant="contained">page4</Button>
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
