import React from "react";
import './Notifications.css';
import { getLatestNotification } from "./utils";


export default function Notifications() {
    return (
    <div className="Notifications">
                <button style={{
                position: "absolute",
                top: "8px",
                right: "8px",
                border: "none",
                fontSize: "18px",
                cursor: "pointer",
                background: "transparent",
                color: "brown"}} onClick={()=> { console.log('Close button has been clicked') }}>x</button>
    <p>Here is the list of notifications</p>
    <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li data-priority="urgent" dangerouslySetInnerHTML={{__html: getLatestNotification()}}></li>

    </ul>
    </div>
)}
