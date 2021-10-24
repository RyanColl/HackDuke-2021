import React, { useEffect, useState }  from "react";
import { animateScroll } from "react-scroll";
const ScrollButton = (props) => {
    const [height, setHeight] = useState(window.scrollY)
    useEffect(() => {
        document.addEventListener('scroll', (e) => {
            e.preventDefault()
            setHeight(window.scrollY)
        })
    }, [])
    return(
        <div onClick={animateScroll.scrollToTop} style={height < 800 ? {opacity: 0} : {}} className='scroll-button'>
                <span class="material-icons" style={{fontSize: 48}}>
                  keyboard_double_arrow_up
                </span>
        </div>  
    )
}
export default ScrollButton;