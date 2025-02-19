import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Loading from "./pages/Loading.jsx";
import NotFound from "./pages/NotFound.jsx"
import Login from "./auth/Login.jsx"

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); // Hide Loading after 6 seconds
    }, 6000);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading /> // Show Loading first
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      )}
    </>
  );
}

export default App;

