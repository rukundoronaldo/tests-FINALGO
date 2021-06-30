import Classes from './css/Section.module.css'
import React, { useEffect, useState } from "react";

function Section({title, children})
{
    const [Opacity, setOpacity] = useState('0.5');
    let changeOpacity = () => {
        setOpacity('1')
    }
    return (
        <div data-testid="section-1" style={{width : '100%'}} className={Classes.smallSection}>
            <h5>{title}</h5>
            <div onClick={changeOpacity} className={Classes.colors} style={{opacity: Opacity}}>
                {children}
            </div>
        </div>
    )
}

export default Section;