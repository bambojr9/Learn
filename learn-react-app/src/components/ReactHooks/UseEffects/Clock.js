import React,{useState, useEffect} from 'react';

function Clock(props) {
    const [timeString, setTimeString] = useState('');
    useEffect(() => {
        setInterval(()=>{
            const now = new Date();
            
        })
    })
    return (
        <div>
            
        </div>
    );
}

export default Clock;