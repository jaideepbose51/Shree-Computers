import React, {
  useContext,
  useEffect,
  useState,
} from "react";

import axios from "axios";

import Footer from "../../components/student/Footer";
import Loading from "../../components/student/Loading";
import { AppContext } from "../../context/AppContext";

const Contact = () => {
  const { backendUrl } =
    useContext(AppContext);

  const [settings, setSettings] =
    useState(null);

  const [
    showFullAbout,
    setShowFullAbout,
  ] = useState(false);

  const fetchSettings =
    async () => {
      try {
        const { data } =
          await axios.get(
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
    fetchSettings();
  }, []);

  if (!settings)
    return <Loading />;

  return (
    <>
      <div className="bg-gray-50 min-h-screen">

        {/* Hero */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <div className="max-w-7xl mx-auto px-6 py-20 text-center">

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Contact Us
            </h1>

            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              {settings.tagline ||
                "We are here to help you choose the right course and build a successful career."}
            </p>

          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-16">

          {/* Contact Cards */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">

            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition text-center">
              <h3 className="font-bold text-lg mb-2">
                Institute
              </h3>

              <p className="text-gray-600">
                {settings.instituteName}
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition text-center">
              <h3 className="font-bold text-lg mb-2">
                Phone
              </h3>

              <a
                href={`tel:${settings.phone}`}
                className="text-blue-600 font-medium"
              >
                {settings.phone}
              </a>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition text-center">
              <h3 className="font-bold text-lg mb-2">
                Email
              </h3>

              <a
                href={`mailto:${settings.email}`}
                className="text-blue-600 font-medium break-all"
              >
                {settings.email}
              </a>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition text-center">
              <h3 className="font-bold text-lg mb-2">
                WhatsApp
              </h3>

              <a
                href={`https://wa.me/91${settings.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="text-green-600 font-medium"
              >
                Chat Now
              </a>
            </div>

          </div>

          {/* Main Section */}
          <div className="grid lg:grid-cols-2 gap-10">

            {/* Contact Details */}
            <div className="bg-white rounded-2xl shadow-sm p-8">

              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Visit Our Institute
              </h2>

              <div className="space-y-6">

                <div>
                  <h3 className="font-semibold text-gray-800">
                    Address
                  </h3>

                  <p className="text-gray-600">
                    {settings.address}
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800">
                    Contact Number
                  </h3>

                  <p className="text-gray-600">
                    {settings.phone}
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800">
                    Email Address
                  </h3>

                  <p className="text-gray-600 break-all">
                    {settings.email}
                  </p>
                </div>

              </div>

              <div className="flex flex-wrap gap-4 mt-8">

                <a
                  href={`tel:${settings.phone}`}
                  className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-3 rounded-lg font-medium"
                >
                  Call Now
                </a>

                <a
                  href={`https://wa.me/91${settings.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-green-600 hover:bg-green-700 transition text-white px-6 py-3 rounded-lg font-medium"
                >
                  WhatsApp
                </a>

              </div>

            </div>

            {/* About */}
            <div className="bg-white rounded-2xl shadow-sm p-8">

              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                About {settings.instituteName}
              </h2>

              <p className="text-gray-600 leading-8 whitespace-pre-line">
                {showFullAbout
                  ? settings.aboutInstitute
                  : `${(
                      settings.aboutInstitute ||
                      ""
                    ).slice(0, 250)}...`}
              </p>

              {settings.aboutInstitute
                ?.length > 250 && (
                <button
                  onClick={() =>
                    setShowFullAbout(
                      !showFullAbout
                    )
                  }
                  className="mt-4 text-blue-600 font-medium hover:text-blue-700"
                >
                  {showFullAbout
                    ? "Read Less"
                    : "Read More"}
                </button>
              )}

              <div className="mt-8 pt-6 border-t">

                <div className="grid grid-cols-2 gap-4">

                  <div>
                    <p className="text-sm text-gray-500">
                      Established
                    </p>
                    <p className="font-semibold">
                      1997
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">
                      Accreditation
                    </p>
                    <p className="font-semibold">
                      O1476
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">
                      Courses
                    </p>
                    <p className="font-semibold">
                      O Level, CCC, BCC
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">
                      Location
                    </p>
                    <p className="font-semibold">
                      Katras
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* Google Map */}
          <div className="mt-12 bg-white rounded-2xl shadow-sm p-8">

            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Find Us On Map
            </h2>

            {settings.googleMapsLink ? (
              <iframe
                src={settings.googleMapsLink}
                className="w-full h-[450px] rounded-xl"
                loading="lazy"
                allowFullScreen
              />
            ) : (
              <div className="h-[300px] flex items-center justify-center bg-gray-100 rounded-xl text-gray-500">
                Google Map Not Added Yet
              </div>
            )}

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
};

export default Contact;