import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import React, { useEffect, useState } from "react";
import { MdGrade } from "react-icons/md";
import "./css/Circle.css";
import {useRef} from 'react';

function Circle(props) {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('#EFECF0');
  

  let handleClick = () => {
    setCount(count + 10);
    setColor('orange')
  };

  useEffect(() => {
    if (count > 90) setCount(0);
    if (count === 0) setColor('#EFECF0')
  }, [count]);

  return (
    <div
      
      onClick={handleClick}
      style={{ width: 150, height: 150, cursor: 'pointer', margin: " 10px auto",}}
    >
      <MdGrade className="star" style={{color: color}} />
      <CircularProgressbar background="red" value={count} styles={buildStyles({
            rotation: 0.37,
            pathColor: `rgba(255, 165, 0, 100)`,
            textColor: '',
            trailColor: '#EFECF0',
            backgroundColor: props.colar,
        })} /> 
    </div>
  );
}

export default Circle