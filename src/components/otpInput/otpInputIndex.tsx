import { useEffect, useRef, useState, type ChangeEvent } from "react";

export default function OtpInputIndex() {
    const [otpDigits, setOtpDigits] = useState(new Array(4).fill('')); // Example OTP digits
    const ref = useRef<Array<HTMLInputElement | null>>([])

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
        if (isNaN(Number(e.target.value)) || e.target.value.length > 1) {
            return;
        }
        setOtpDigits((prev) => {
            let arr = [...prev]
            arr[index] = e.target.value
            return arr
        })
        if (e.target.value && ref.current[index + 1]) {
            ref.current[index + 1]?.focus();
        }
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        console.log(event.key);
        if (!event.currentTarget.value && event.key == 'Backspace') {
            if (ref.current[index - 1]) {
                ref.current[index - 1]?.focus();
            }
        }

    }

    useEffect(() => {
        ref.current[0]?.focus();
    }, [])

    return (
        <div className="otp-input-section">
            {
                otpDigits.map((digit, index) => {
                    return <input onKeyDown={(e) => handleKeyDown(e, index)} key={index} ref={el => ref.current[index] = el} value={otpDigits[index]} className="otp-input" type="text" onChange={(e) => handleInputChange(e, index)}></input>
                })
            }
        </div>
    )
}