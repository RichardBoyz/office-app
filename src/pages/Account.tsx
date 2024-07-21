import { Link } from "react-router-dom";
import PageTransition from "../PageTransition";
import { UserAuth } from "../context/AuthContext";

const Account = () => {
  const { user, logOut } = UserAuth();

  const handleLogOut = async () => {
    try {
      await logOut();
      console.log("You are logged out");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PageTransition>
      <div className="max-w-[600px] mx-auto pt-4 px-4 flex flex-col h-full">
        <h1 className="text-2xl font-bold py-4">帳戶</h1>
        <p>信箱: {user?.email}</p>
        <button className="border px-6 py-2 my-4" onClick={handleLogOut}>
          登出
        </button>
        <div className="h-full bg-slate-50">
          <Link to={"/chores-room-list"}>Go</Link>
        </div>
      </div>
    </PageTransition>
  );
};

export default Account;
