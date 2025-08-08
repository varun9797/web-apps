export default function ProgressBar({ progress }: { progress: number }) {



    return (
        <div>
            <div className="progress-bar">
                <div className="progress" style={{ transform: `translateX(-${100 - progress}%)`, width: `${progress}%` }}
                role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}
                >
                    <div>{progress}%</div></div>

            </div>
        </div>
    )
}