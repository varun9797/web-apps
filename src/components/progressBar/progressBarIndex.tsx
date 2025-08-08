import { useState } from "react";
import ProgressBar from "./progressBar"

export default function ProgressBarIndex() {
    const [progress, setProgress] = useState(50); // Example progress value
    return (
        <div>
            <h1>Progress Bar Index Component</h1>
            <ProgressBar progress={progress}/>
            <div>
                <button onClick={() => setProgress((prev)=>prev + 40 > 100? prev: prev + 40)}>Increase Progress</button>
                <button onClick={() => setProgress((prev)=>prev - 40 < 0? prev: prev - 40)}>Decrease Progress</button>
            </div>
        </div>
    )
}
