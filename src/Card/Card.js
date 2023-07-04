import React from 'react';
import  "./Card.css"

const Card = (props) => {
  return (
    <div className="card">
      <div className='imgg' ><img src='https://th.bing.com/th/id/OIP.OVbXAzYhwj5E6ztxXnvCqgAAAA?pid=ImgDet&w=191&h=223&c=7&dpr=1.5' height={10}  />
      </div>
      <div>
      <h3>Aman</h3>
      <p>UI/UX designer</p>
     <div><span>Follower:32</span> <span>Following:50</span></div> 
     </div>
    </div>
  );
};
 
export default Card;
