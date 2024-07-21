import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PageTransition from "../PageTransition";
import ErrorMessageField from "../components/ErrorMessageField";
import InputField from "../components/InputField";
import { DISPLAYNAME_LENGTH, PASSWORD_LENGTH } from "../constants/authenticate";
import { UserAuth } from "../context/AuthContext";

const Signup = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [displayName, setDisplayName] = useState<string>("");

  const [errorMessages, setErrorMessages] = useState<string[]>([]);
  const [firebaseErrorMessage, setFirebaseErrorMessage] = useState<string>("");
  const { createUser } = UserAuth();
  const navigate = useNavigate();

  const isFormInputValid = (formElement: HTMLFormElement) => {
    formElement.reportValidity();
    console.log("hello");
    const messages: string[] = [];
    if (!email) {
      messages.push("請輸入信箱");
    }
    if (!password) {
      messages.push("請輸入密碼");
    }
    if (password.length < PASSWORD_LENGTH) {
      messages.push("密碼至少需 6 個字元");
    }
    if (!displayName) {
      messages.push("請輸入暱稱");
    }
    if (displayName.length < DISPLAYNAME_LENGTH) {
      messages.push("暱稱請輸入至少兩個字元");
    }

    if (messages.length !== 0) {
      setErrorMessages((pre) => messages);
      return false;
    }
    setErrorMessages(() => []);
    return true;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isInputValid = isFormInputValid(event.currentTarget);
    if (!isInputValid) return;
    setFirebaseErrorMessage("");
    try {
      await createUser({ email, password, displayName });
      navigate("/account");
    } catch (error: any) {
      setFirebaseErrorMessage(error.message);
      console.log(error.message);
    }
  };

  return (
    <PageTransition>
      <div className="max-w-[700px] mx-auto my-16 p-4">
        <div>
          <h1 className="text-2xl font-bold py-2">註冊</h1>
          <p className="py-2">
            已有帳號？{" "}
            <Link className="underline" to="/">
              登入
            </Link>{" "}
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <InputField
            type="email"
            label="信箱"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputField
            type="password"
            label="密碼"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputField
            label="暱稱"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
          <button
            // onClick={clickSignupHandler}
            className="border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white"
          >
            註冊
          </button>
          <ErrorMessageField messages={errorMessages} />
          {/* <ErrorMessageField messages={} /> */}
        </form>
      </div>
    </PageTransition>
  );
};

export default Signup;
