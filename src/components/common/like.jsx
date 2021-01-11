import React from 'react';

const Like= (props) => {
        let classes = "";
        if (props.liked) classes  = "fas fa-heart"
        else classes  = "far fa-heart"
        return (
            <i style={{cursor:'pointer'}} onClick={props.onClick} className={classes}></i> 
    )
}
export default Like;
