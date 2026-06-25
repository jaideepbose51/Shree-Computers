import React, {
  useState,
  useEffect,
  useContext,
} from "react";

import axios from "axios";
import { toast } from "react-toastify";

import { AppContext } from "../../context/AppContext";

const EnquiryModal = ({
  isOpen,
  onClose,
  courseId,
}) => {

    
  const { backendUrl } =
    useContext(AppContext);

  const [email, setEmail] =
    useState("");

  const [otp, setOtp] =
    useState("");

  const [name, setName] =
    useState("");

  const [phone, setPhone] =
    useState("");

  const [message, setMessage] = useState(
  "Interested in this course"
);

  const [otpSent, setOtpSent] =
    useState(false);

  const [verified, setVerified] =
    useState(false);

  const [sendingOtp, setSendingOtp] =
    useState(false);

  const [verifyingOtp, setVerifyingOtp] =
    useState(false);

  const [submitting, setSubmitting] =
    useState(false);

  const [timer, setTimer] =
    useState(60);

  const [canResend, setCanResend] =
    useState(false);

  useEffect(() => {
    if (!otpSent || canResend) return;

    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setCanResend(true);
          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [otpSent, canResend]);

  const resetForm = () => {
    setEmail("");
    setOtp("");
    setName("");
    setPhone("");
    setMessage("");

    setOtpSent(false);
    setVerified(false);

    setTimer(60);
    setCanResend(false);
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const sendOtp = async () => {
    try {
      setSendingOtp(true);

      const { data } =
        await axios.post(
          `${backendUrl}/api/otp/send`,
          {
            email,
          }
        );

      if (data.success) {
        toast.success(
          data.message
        );

        setOtpSent(true);
        setTimer(60);
        setCanResend(false);
      }
    } catch (error) {
      toast.error(
        error.response?.data
          ?.message ||
          error.message
      );
    } finally {
      setSendingOtp(false);
    }
  };

  const resendOtp = async () => {
    if (!canResend) return;

    await sendOtp();
  };

  const verifyOtp = async () => {
    try {
      setVerifyingOtp(true);

      const { data } =
        await axios.post(
          `${backendUrl}/api/otp/verify`,
          {
            email,
            otp,
          }
        );

      if (data.success) {
        toast.success(
          "Email Verified"
        );

        setVerified(true);
      }
    } catch (error) {
      toast.error(
        error.response?.data
          ?.message ||
          error.message
      );
    } finally {
      setVerifyingOtp(false);
    }
  };

  const submitEnquiry = async () => {
    try {
      setSubmitting(true);

      const { data } =
        await axios.post(
          `${backendUrl}/api/enquiries`,
          {
            name,
            email,
            phone,
            message,
            courseInterested:
              courseId,
          }
        );

      if (data.success) {
        toast.success(
          "Enquiry submitted successfully"
        );

        handleClose();
      }
    } catch (error) {
      toast.error(
        error.response?.data
          ?.message ||
          error.message
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4">

      <div className="bg-white w-full max-w-md rounded-xl shadow-xl p-6 max-h-[90vh] overflow-y-auto">

        <div className="flex justify-between items-center mb-6">

          <h2 className="text-2xl font-bold">
            Course Enquiry
          </h2>

          <button
            onClick={handleClose}
            className="text-2xl text-gray-500 hover:text-black"
          >
            ×
          </button>

        </div>

        <div className="flex justify-center gap-2 text-sm mb-5">

          <span
            className={
              verified
                ? "text-green-600 font-medium"
                : "text-blue-600 font-medium"
            }
          >
            1. Verify Email
          </span>

          <span>→</span>

          <span
            className={
              verified
                ? "text-blue-600 font-medium"
                : "text-gray-400"
            }
          >
            2. Submit Details
          </span>

        </div>

        <div className="space-y-4">

          <input
            type="email"
            placeholder="Enter Email Address"
            value={email}
            disabled={otpSent}
            onChange={(e) =>
              setEmail(
                e.target.value
              )
            }
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
          />

          {!otpSent ? (
            <button
              onClick={sendOtp}
              disabled={
                sendingOtp ||
                !email
              }
              className="w-full bg-blue-600 text-white py-3 rounded-lg disabled:opacity-50"
            >
              {sendingOtp
                ? "Sending OTP..."
                : "Send OTP"}
            </button>
          ) : (
            <>
              <input
                type="text"
                placeholder="Enter 6 Digit OTP"
                value={otp}
                maxLength={6}
                onChange={(e) =>
                  setOtp(
                    e.target.value
                  )
                }
                className="w-full border rounded-lg px-4 py-3"
              />

              <div className="text-center text-sm">

                {!canResend ? (
                  <p className="text-gray-500">
                    Resend OTP in{" "}
                    {timer}s
                  </p>
                ) : (
                  <button
                    type="button"
                    onClick={
                      resendOtp
                    }
                    className="text-blue-600 font-medium"
                  >
                    Resend OTP
                  </button>
                )}

              </div>

              {!verified ? (
                <button
                  onClick={
                    verifyOtp
                  }
                  disabled={
                    verifyingOtp ||
                    otp.length !== 6
                  }
                  className="w-full bg-green-600 text-white py-3 rounded-lg disabled:opacity-50"
                >
                  {verifyingOtp
                    ? "Verifying..."
                    : "Verify OTP"}
                </button>
              ) : (
                <div className="space-y-4">

                  <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-center text-green-700 font-medium">
                    ✓ Email Verified Successfully
                  </div>

                  <input
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) =>
                      setName(
                        e.target.value
                      )
                    }
                    className="w-full border rounded-lg px-4 py-3"
                  />

                  <input
                    type="text"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) =>
                      setPhone(
                        e.target.value
                      )
                    }
                    className="w-full border rounded-lg px-4 py-3"
                  />

                  <textarea
                    rows="4"
                    placeholder="Message (Optional)"
                    value={message}
                    onChange={(e) =>
                      setMessage(
                        e.target.value
                      )
                    }
                    className="w-full border rounded-lg px-4 py-3"
                  />

                  <button
                    onClick={
                      submitEnquiry
                    }
                    disabled={
                      submitting ||
                      !name ||
                      !phone
                    }
                    className="w-full bg-blue-600 text-white py-3 rounded-lg disabled:opacity-50"
                  >
                    {submitting
                      ? "Submitting..."
                      : "Submit Enquiry"}
                  </button>

                </div>
              )}
            </>
          )}

        </div>

      </div>

    </div>
  );
};

export default EnquiryModal;

