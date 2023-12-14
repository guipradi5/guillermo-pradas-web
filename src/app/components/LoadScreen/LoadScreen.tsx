"use client"
import React, {useState, useEffect} from 'react';
import LoadingBar from '../LoadingBar/LoadingBar';
import './LoadScreen.css'

const LoadScreen = () =>  {
    const className = "startup"
    let [loadingBarTime,setLoadingBarTime] = useState(2000)
    let [startupClasses,setStratupClasses] = useState(className)
    
    const pathName = window.location.pathname
    let effectFirstRun = true
    useEffect(() => {
        if(effectFirstRun){
            let outTimeout = loadingBarTime
            const visited = localStorage.getItem('visited')
            console.log(pathName);  
            if(pathName !== '/'){
                setLoadingBarTime(1)
                outTimeout = 1
            } else if(visited){
                setLoadingBarTime(500)
                outTimeout = 500
            } else {
                localStorage.setItem('visited', 'true')
            }
            effectFirstRun = false
            setTimeout(() => {
                setStratupClasses(`${className} ${className}--out`)
                setTimeout(() =>  setStratupClasses(`${className} ${className}--out ${className}--hide`), 400)
            }, outTimeout+400)
        }
    }, [])

    return (
    <div className={startupClasses}>
        <div className="startup__logo">
            <img src="/icons/logo_red_trans.png" />
        </div>
        <LoadingBar loadTime={loadingBarTime}/>
    </div>
    )
}

export default LoadScreen;