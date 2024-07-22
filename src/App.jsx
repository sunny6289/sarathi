import { Outlet, useLocation, useParams } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearToast } from "./redux/slices/toastSlice";
import Loader from "./components/Loader";
import Sidebar from "./components/sidebar/Sidebar";
import Button from "./components/reusable/Button";

function App() {
  const responseToast = useSelector((state) => state.toast.responseToast);
  const status = useSelector((state) => state.toast.status);
  const message = useSelector((state) => state.toast.message);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.toast.loading);
  useEffect(() => {
    if (responseToast) {
      const toastOptions = {
        className: "custom-toast",
        bodyClassName:
          status === "success" ? "custom-toast-success" : "custom-toast-error",
        progressClassName: "toast-progress",
        autoClose: 5000,
      };
      if (status === "success") {
        toast.success(message, toastOptions);
      } else {
        toast.error(message, toastOptions);
      }
      dispatch(clearToast());
    }
  }, [responseToast, status, message]);

  return (
    <>
      <ToastContainer />
      {loading && <Loader isLoading={loading} />}
      <Navbar />

      <Sidebar />
      <div className="flex pt-[55px] min-h-screen flex-col">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
