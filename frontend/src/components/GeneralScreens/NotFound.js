import React from "react";
import "../../Css/NotFound.css"
import { Link } from "react-router-dom";
const NotFound = () => (
  <>
    <div className="notFound">

      <div className='stars'></div>
      <div className='stars2'></div>
      <div className='stars3'></div>
      <div className='title'>
        <span className="text404">
          404
        </span>
        <br />
        <span>
          PAGE NOT FOUND
        </span><br />
        <Link to='/'>GO HOME</Link>
      </div>
    </div>

  </>

);

export default NotFound;