'use client';
import React,  {useState, useEffect} from 'react';
import './LoadingBar.css'

const LoadingBar = ({waitTime = 0, loadTime = 1000}) => {


    let [loadedPercent,setLoadedPercent] = useState(0)
    let [timeCounter,setTimeCounter] = useState(waitTime * -1)
    let refreshRate = loadTime / 100

    useEffect( () => {
        if(timeCounter <= loadTime){
            let timer = setInterval(()=>{
                setTimeCounter(timeCounter + refreshRate)
                if(timeCounter > 0){
                    setLoadedPercent(loadedPercent+1)
                }
            }, refreshRate)
            return () => clearInterval(timer);
        } else if(loadedPercent < 100) {
            setLoadedPercent(100)
        }
    }, [timeCounter, loadTime])

  return (
    <div className="loadingBar">
        <div className='loadingBar__content' style={{["width" as any]: `${loadedPercent}%`}}>
            <span>{loadedPercent}%</span>
        </div>
    </div>
    );
};

export default LoadingBar;