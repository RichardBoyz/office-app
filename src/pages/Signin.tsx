import { FirebaseError } from "firebase/app";
import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import PageTransition from "../PageTransition";
import ErrorMessageField from "../components/ErrorMessageField";
import InputField from "../components/InputField";
import Loading from "../components/Loading";
import UsageChart from "../components/UsageChart";
import { PASSWORD_LENGTH } from "../constants/authenticate";
import { UserAuth } from "../context/AuthContext";
const Signin = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessages, setErrorMessages] = useState<string[]>([]);
  const { logIn } = UserAuth();
  const navigate = useNavigate();
  const { user, isAuthLoading } = UserAuth();

  if (isAuthLoading) return <Loading />;

  if (!isAuthLoading && user) {
    return <Navigate to="/account" />;
  }

  const isFormInputValid = () => {
    let messages: string[] = [];
    if (!email) {
      messages.push("請輸入信箱");
    }
    if (!password) {
      messages.push("請輸入密碼");
    }
    if (password.length < PASSWORD_LENGTH) {
      messages.push("密碼至少需 6 個字元");
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
    event.currentTarget.reportValidity();
    const isValidInput = isFormInputValid();
    if (!isValidInput) return;
    try {
      await logIn({ email, password });
      navigate("/account");
    } catch (error) {
      if (error instanceof FirebaseError) {
        setErrorMessages((pre) => [...pre, "信箱或密碼錯誤"]);
        console.log(error.code);
      }
    }
  };

  return (
    <PageTransition>
      <div className="max-w-[700px] mx-auto my-16 p-4">
        <div>
          <h1 className="text-2xl font-bold py-2">登入</h1>
          <p className="py-2">
            沒有帳號？{" "}
            <Link className="underline" to="/signup">
              註冊
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
          <button className="border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white">
            登入
          </button>
          <ErrorMessageField messages={errorMessages} />
        </form>

        <UsageChart />
      </div>
    </PageTransition>
  );
};

export default Signin;
