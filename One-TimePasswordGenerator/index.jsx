const { useState, useEffect, useRef } = React;

export const OTPGenerator = () => {
  const [otp, setOtp] = useState(null);
  const [timeLeft, setTimeLeft] = useState(0);

  // Countdown updates every second
  useEffect(() => {
    if (timeLeft <= 0) return;

    const intervalId = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    // Stop updates when component rerenders or timer ends
    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const generateOtp = () => {
    const newOtp = Math.floor(100000 + Math.random() * 900000); // 6 digits
    setOtp(newOtp);
    setTimeLeft(5);
  };

  return (
    <div className="container">
      <h1 id="otp-title">OTP Generator</h1>

      <h2 id="otp-display">
        {otp === null
          ? "Click 'Generate OTP' to get a code"
          : otp}
      </h2>

      <p id="otp-timer" aria-live="polite">
        {timeLeft > 0
          ? `Expires in: ${timeLeft} seconds`
          : otp !== null
          ? "OTP expired. Click the button to generate a new OTP."
          : ""}
      </p>

      <button
        id="generate-otp-button"
        onClick={generateOtp}
        disabled={timeLeft > 0}
      >
        Generate OTP
      </button>
    </div>
  );
};
