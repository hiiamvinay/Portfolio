import { Height } from '@mui/icons-material';
import { border, height, width } from '@mui/system';
import React from 'react'


const SkillCard = ({card}) => {
    const styleimg={
        height:"100px",
        paddingTop:"15px",
        backgroundColor:"white"
        
    }
    const stylecard = {
        border: "2px solid black",
        height: "180px",
        width: "180px",
        boxShadow: "2 4px 8px rgba(0, 0, 0, 0.2)", // Add box shadow
        borderRadius: "8px", // Optional: add rounded corners
        padding: "10px", // Optional: add some padding
        backgroundColor: "#fff", // Optional: set a background color
        textAlign: "center", // Center text horizontally
        alignItems:"center",
        justifyContent: "center",
        display: "block", // Ensure the card is a block element
        margin: "20px auto" // Center the card horizontally in its container
    };
    
    
    
  return (
    <div className='card' style={stylecard}>
        <img src={card.url} style={styleimg}/>
        <h3>{card.name}</h3>
    </div>
  )
}

export default SkillCard;