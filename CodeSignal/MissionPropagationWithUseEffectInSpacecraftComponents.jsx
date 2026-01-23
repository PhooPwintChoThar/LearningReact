import { useState, useEffect } from 'react';

// TODO: Create a MissionControl component that accepts a missionName prop
//  Alert the mission name change effects
function MissionControl({missionName}){
    useEffect(()=>{
        alert(`Current mission name is ${missionName}`)
    },[missionName])
}

// TODO: Create the Spacecraft function component and initialize mission name state
function Spacecraft(){
    const [missionName, setMissionName]=useState('Apollo');
    return <div>
            <button onClick={()=>{
                setMissionName(name => name=='Apollo' ? 'Challenger' : 'Apollo')
            }}>Toggle</button>
            <MissionControl missionName={missionName}/>
            </div>
}
export default Spacecraft;
// TODO: Return a button element to toggle the mission name by changing from 'Apollo' to 'Challenger' and back with conditional state update
// Additionally, return the MissionControl child component

// TODO: Export the Spacecraft component as default
