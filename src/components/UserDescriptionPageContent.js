import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Topbar from './Topbar';
import { useState } from 'react';
import dataImage from "../store/data.json";

function ProductDescription()
{
  const {id} = useParams();
  const item = dataImage.find( p =>
    p.id === id);

  if (!item) {
    return <div>Product not found</div>;
  };

  const [goToHome , setGoToHome] = useState(false);
  if(goToHome)
  {
    return (<Navigate to = "/home" />);
  }
  const handleHome = (e) => {
    e.preventDefault();
    return (setGoToHome(true));
  }

  return (
    <>
      <Topbar />
      <button className = "button" style = {{cursor : "pointer"}} onClick = {handleHome} ><i className = "fa-solid fa-arrow-left" ></i></button> 
      <div style = {{display : "grid", margin : "5vw"}}>
          <div style = {{gridArea : "1/1/1/1"}}>
              <h2>{item.title}</h2>
              <br />
              <small>{item.subtitle}</small>
              <br /><br /><br />
              <h2>Plant Care Guide</h2>
              <br />
              <hr />
              <br />
              <small>Water : {item.careGuide.water}</small>
              <br /><br />
              <hr />
              <br />
              <small>Light : {item.careGuide.light}</small>
              <br /><br />
              <hr />
              <br />
              <small>Tips : {item.careGuide.tips}</small>
              <br /><br />
              <hr />
              <br /><br /><br />
              <h2>Description</h2>
              <br />
              <hr />
              <br />
              <small>{item.description}</small>
              <br/><br/>
              <small>Plants images depicted are solely for illustration purposes only</small>
          </div>
          <div style = {{gridArea : "1/2/1/2"}}>
              <img src={item.pic} alt="pic" style = {{height:"70vh", width : "100%"}}/>
          </div>
      </div>
    </>
  );
};

export default ProductDescription;
