'use client'
import React, {useState, useEffect, useContext} from "react"
import Window from "../Window/Window"
import { GlobalContext } from "@/app/Home"
import "./turnOffModal.css"
import SystemButton from "../SystemButton/SystemButton"

const TurnOffModal = () => {
    const context = useContext(GlobalContext)

    const turnOffModalClass = "turnOffModal"

    let [turnOffModalClasses, setTurnOffModalClasses] = useState(turnOffModalClass)

    useEffect(() => {
        setTimeout(() => setTurnOffModalClasses(`${turnOffModalClass} ${context.state.showTurnOffModal ? `${turnOffModalClass}--show` : ''}`), 100)
    }, [context.state.showTurnOffModal])

    function hideTurnOffModal() {
        setTurnOffModalClasses(turnOffModalClass)
        setTimeout(() => context.mutators.setStateProperty("showTurnOffModal", false), 500)
    }
    
    function turnPageOff(){
        setTurnOffModalClasses(`${turnOffModalClasses} ${turnOffModalClass}--off`)
    }

    return (
        <div className={turnOffModalClasses}>
            <Window windowTitle="Turn Off" onClose={hideTurnOffModal}>
                <p>
                    You&#39;re about to Turn Off the website (close it)<br/>
                    Are you sure about that?
                </p>
                <div className="button-wrapper">
                    <SystemButton buttonText="Yes" modifiers="long" onTrigger={turnPageOff} />
                    <SystemButton buttonText="No"  modifiers="long" onTrigger={hideTurnOffModal} />
                </div>
            </Window>
            <div className="turnedOff">
                <h1>You can close either the tab or the browser. Thank You</h1>
            </div>
        </div>
    )
}

export default TurnOffModal