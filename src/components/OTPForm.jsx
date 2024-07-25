// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import OtpInput from 'react-otp-input';
import ChaiCode from './ChaiCode';
import Header from './Header';

const OTPForm = () => {
    const [otpValue, setOtpValue] = useState(NaN)
    const [verificationStatus, setVerificationStatus] = useState({
        msg: "Verify Account",
        color: "#112D4E"
    })

    const verifyOTP = () => {
        if (otpValue == 1234) {
            setVerificationStatus({
                msg: "Verified",
                color: "#23CF9B"
            })
        }
        else {
            setVerificationStatus({
                msg: "Verification failed",
                color: "#EB2D5B"
            })
        }
    }

    useEffect(() => {
        setVerificationStatus({
            msg: "Verify Account",
            color: "#112D4E"
        })
    }, [otpValue])


    return (
        <>
            <div className='bg-[#3F72AF] h-screen w-screen flex flex-col items-center justify-center'>
            <Header textColor={"white"} />
                <div className='bg-white w-[90%] md:w-[70%] lg:w-[40%] max-w-[600px] rounded-2xl flex flex-col items-center justify-center p-6'>
                    <h1 className='text-2xl'>Mobile Phone Verification</h1>
                    <p className='text-center pt-2 text-gray-400 mx-8'>Enter the 4-digit verification code that was sent to your phone number.</p>

                    <div>
                        <OtpInput
                            value={otpValue}
                            onChange={setOtpValue}
                            numInputs={4}
                            renderSeparator={<span>&nbsp;</span>}
                            containerStyle={{ paddingTop: 12 }}
                            renderInput={(props) => <input {...props} />}
                            inputStyle={{ width: "45px", height: "55px", outline: "none", border: verificationStatus.msg == "Verify Account" ? "none" : "1px solid", backgroundColor: "#DBE2EF", borderRadius: "8px", fontSize: 30, borderColor: verificationStatus.color }}
                        />
                        <button
                            onClick={verifyOTP}
                            className='w-full py-2 my-2 text-white rounded outline-none'
                            style={{ backgroundColor: verificationStatus.color }}
                        >
                            {verificationStatus.msg}
                        </button>
                    </div>

                    <span className='text-sm text-gray-400 mt-2 mb-6'>Didn’t receive code? <strong className='text-[#112D4E] cursor-pointer'>Resend</strong> </span>
                </div>
            </div>
            <ChaiCode />
        </>
    )
}

export default OTPForm