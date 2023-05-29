import { useState } from 'react';

const generateRandomCaptcha = () => {
    const captchaLength = 6;
    const captchaChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let captcha = '';

    for (let i = 0; i < captchaLength; i++) {
        const randomIndex = Math.floor(Math.random() * captchaChars.length);
        captcha += captchaChars[randomIndex];
    }
    return captcha;
};

interface Props {
    isCaptchaValid: boolean,
    setIsCaptchaValid: React.Dispatch<React.SetStateAction<boolean>>,
    setCaptchaValue: (value: string) => void
}

export const CustomCaptcha: React.FC<Props> = ({
    setCaptchaValue,
    setIsCaptchaValid,
    isCaptchaValid
}) => {
    const [captchaValue, setCaptcha] = useState(generateRandomCaptcha());

    const generateCaptcha = () => {
        const captcha = generateRandomCaptcha();
        setCaptcha(captcha);
        setCaptchaValue(captcha);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const userInput = event.target.value.toLowerCase();
        setIsCaptchaValid(userInput === captchaValue.toLowerCase());
    };

    return (
        <div>
            <button onClick={generateCaptcha} >Generate New CAPTCHA</button>
            <div className='d-flex gap-2 m-2'>
                <label htmlFor="captcha">Enter CAPTCHA</label>
                <input
                    type="text"
                    id="captcha"
                    name="captcha"
                    onChange={handleInputChange}

                />
                {captchaValue}
            </div>

            {/* {isCaptchaValid && <div>CAPTCHA is valid!</div>} */}
        </div>
    );
};