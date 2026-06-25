import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();

  const backendUrl =
    import.meta.env.VITE_BACKEND_URL ||
    "http://localhost:5000";

  const [allCourses, setAllCourses] = useState([]);
  const [settings, setSettings] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch Courses
  const fetchAllCourses = async () => {
    try {
      setLoading(true);

      const { data } = await axios.get(
        `${backendUrl}/api/courses`
      );

      if (data.success) {
        setAllCourses(data.data);
      }
    } catch (error) {
      toast.error(
        error?.response?.data?.message ||
          error.message
      );
    } finally {
      setLoading(false);
    }
  };

  // Fetch Institute Settings
  const fetchSettings = async () => {
    try {
      console.log("BACKEND URL:", backendUrl);
      console.log(
  `${backendUrl}/api/settings`
);
      const { data } = await axios.get(
        `${backendUrl}/api/settings`
      );

      if (data.success) {
        setSettings(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllCourses();
    fetchSettings();
  }, []);

  const value = {
    backendUrl,

    loading,

    allCourses,
    setAllCourses,

    settings,
    setSettings,

    fetchAllCourses,
    fetchSettings,

    navigate,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;