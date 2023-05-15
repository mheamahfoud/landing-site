import React from 'react';
import './linkHeader.css'
//menu-active
const LinkHeader = ({ ...props }) => {
  const {active, title, onClick , value } = props;
  return (
    <div className="MenuItemContainer clearfix " style={{fontSize:'13px'}} onClick={()=>onClick(value)}>
      <a
        onClick={onClick}
        
        className={`nonblock nontext MenuItem  clearfix `}
      >
        <div className={`MenuItemLabel NoWrap clearfix grpelem taglinkcontent ${active  ?  'menu-active' :  ''}`} >
          <p >
            <span >{title}</span>
          </p>
        </div>
      </a>
    </div>
  );
};
export default LinkHeader;
