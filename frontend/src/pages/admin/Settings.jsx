import React, {
  useContext,
  useEffect,
  useState,
} from "react";

import axios from "axios";
import { toast } from "react-toastify";

import { AppContext } from "../../context/AppContext";

const Settings = () => {
  const {
    backendUrl,
    fetchSettings,
  } = useContext(AppContext);

  const [loading, setLoading] =
    useState(false);

  const [formData, setFormData] =
    useState({
      instituteName: "",
      address: "",
      phone: "",
      email: "",
      whatsapp: "",
      facebook: "",
      instagram: "",
      youtube: "",
      googleMapsLink: "",
      aboutInstitute: "",
    });

  const changeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const fetchInstituteSettings =
    async () => {
      try {
        const { data } =
          await axios.get(
            `${backendUrl}/api/settings`
          );

        if (
          data.success &&
          data.data
        ) {
          setFormData({
            instituteName:
              data.data
                .instituteName ||
              "",
            address:
              data.data.address ||
              "",
            phone:
              data.data.phone ||
              "",
            email:
              data.data.email ||
              "",
            whatsapp:
              data.data
                .whatsapp || "",
            facebook:
              data.data
                .facebook || "",
            instagram:
              data.data
                .instagram || "",
            youtube:
              data.data.youtube ||
              "",
            googleMapsLink:
              data.data
                .googleMapsLink ||
              "",
            aboutInstitute:
              data.data
                .aboutInstitute ||
              "",
          });
        }
      } catch (error) {
        toast.error(
          error?.response?.data
            ?.message ||
            error.message
        );
      }
    };

  const submitHandler =
    async (e) => {
      e.preventDefault();

      try {
        setLoading(true);

        const token =
          localStorage.getItem(
            "adminToken"
          );

        const { data } =
          await axios.put(
            `${backendUrl}/api/settings`,
            formData,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

        if (data.success) {
          toast.success(
            "Settings updated successfully"
          );

          fetchSettings();
        }
      } catch (error) {
        toast.error(
          error?.response?.data
            ?.message ||
            error.message
        );
      } finally {
        setLoading(false);
      }
    };

  useEffect(() => {
    fetchInstituteSettings();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">
        Institute Settings
      </h1>

      <form
        onSubmit={
          submitHandler
        }
        className="bg-white border rounded-lg p-6 max-w-4xl"
      >
        <div className="grid md:grid-cols-2 gap-5">

          <div>
            <label className="block mb-2 font-medium">
              Institute Name
            </label>

            <input
              type="text"
              name="instituteName"
              value={
                formData.instituteName
              }
              onChange={
                changeHandler
              }
              className="w-full border rounded px-4 py-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Phone
            </label>

            <input
              type="text"
              name="phone"
              value={
                formData.phone
              }
              onChange={
                changeHandler
              }
              className="w-full border rounded px-4 py-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={
                formData.email
              }
              onChange={
                changeHandler
              }
              className="w-full border rounded px-4 py-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              WhatsApp
            </label>

            <input
              type="text"
              name="whatsapp"
              value={
                formData.whatsapp
              }
              onChange={
                changeHandler
              }
              className="w-full border rounded px-4 py-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Facebook
            </label>

            <input
              type="text"
              name="facebook"
              value={
                formData.facebook
              }
              onChange={
                changeHandler
              }
              className="w-full border rounded px-4 py-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Instagram
            </label>

            <input
              type="text"
              name="instagram"
              value={
                formData.instagram
              }
              onChange={
                changeHandler
              }
              className="w-full border rounded px-4 py-3"
            />
          </div>

        </div>

        <div className="mt-5">
          <label className="block mb-2 font-medium">
            Address
          </label>

          <textarea
            rows="3"
            name="address"
            value={
              formData.address
            }
            onChange={
              changeHandler
            }
            className="w-full border rounded px-4 py-3"
          />
        </div>

        <div className="mt-5">
          <label className="block mb-2 font-medium">
            Google Maps Link
          </label>

          <input
            type="text"
            name="googleMapsLink"
            value={
              formData.googleMapsLink
            }
            onChange={
              changeHandler
            }
            className="w-full border rounded px-4 py-3"
          />
        </div>

        <div className="mt-5">
          <label className="block mb-2 font-medium">
            About Institute
          </label>

          <textarea
            rows="6"
            name="aboutInstitute"
            value={
              formData.aboutInstitute
            }
            onChange={
              changeHandler
            }
            className="w-full border rounded px-4 py-3"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="mt-6 bg-blue-600 text-white px-8 py-3 rounded"
        >
          {loading
            ? "Saving..."
            : "Save Settings"}
        </button>
      </form>
    </div>
  );
};

export default Settings;