import React from 'react';
import './Notifications.css';
import closeIcon from './close-icon.png';
import { getLatestNotification } from './utils';


function Notifications() {
	return (<div className='Notifications'>
		<button style={{display: 'inline', transform: 'translate(1285px, -25px)', right: '0px', background: 'none', border: 'none'}}
		aria-label="Close" onClick={() => console.log('Close button has been clicked')}>
		<img src={closeIcon} style={{width: '12px', height: '12px'}} />
		</button>
		<p style={{transform: 'translate(-20px, -50px)'}}>Here is the list of notifications</p>
		<ul style={{transform: 'translate(-20px, -50px)'}}>
			<li data-priority="default">New course available</li>
			<li data-priority="urgent">New resume available</li>
			<li data-priority="urgent" dangerouslySetInnerHTML={{__html: getLatestNotification()}}></li>
		</ul>
	</div>)
}

export default Notifications;
