import React from "react";
import PropTypes from "prop-types";

function Profile (props){
    const{name, handleName}=props;
    return(
        <div className='ele' >
            <div className='Pic'>
            <img style = {{height:'500px',width:'500px',display:'flex',justifyContent:'center'}} src={props.img} alt="anonymous"/>
            </div>
            <h2 style= {{display:'flex',justifyContent:'center'}}>{props.name}</h2>
            <h2 style= {{display:'flex',justifyContent:'center'}}>{props.job}</h2>
            <h2 style= {{display:'flex',justifyContent:'center'}}>{props.address}</h2>
            <h2 style= {{display:'flex',justifyContent:'center'}}>{props.age}</h2>
            <div className='btn'>
            <button onClick={() => handleName(name)}>Name</button>
            </div>
        </div>
    )
}
Profile.defaultProps = {
    img:'unfound' , name:'unfound' , job:'unfound' , address:'unfound' , age:'unfound'
}


Profile.prototype = {
    name : PropTypes.string,
    job : PropTypes.string,
    address : PropTypes.string,
    address : PropTypes.string,
    age : PropTypes.string,
    handleName : PropTypes.func
}
export default Profile;