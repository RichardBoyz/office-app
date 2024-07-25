import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import ProtectRoute from "./components/ProtectRoute";
import { AuthContextProvider } from "./context/AuthContext";
import Account from "./pages/Account";
import ChoresRoomList from "./pages/ChoresRoomList";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

function App() {
  const location = useLocation();

  const navigate = useNavigate();

  const handleClickHome = () => {
    navigate("/account");
  };

  return (
    <div className="h-dvh flex flex-col">
      <h1 className="text-center cursor-pointer" onClick={handleClickHome}>
        OFFICE
      </h1>

      <AuthContextProvider>
        <AnimatePresence mode="wait">
          <Routes key={location.pathname} location={location}>
            <Route path="/" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route element={<ProtectRoute />}>
              <Route path="account" element={<Account />} />
              <Route path="chores-room-list" element={<ChoresRoomList />} />
            </Route>
          </Routes>
        </AnimatePresence>
      </AuthContextProvider>
    </div>
  );
}

export default App;
