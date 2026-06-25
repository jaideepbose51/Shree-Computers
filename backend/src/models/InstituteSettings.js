import mongoose from "mongoose";

const instituteSettingsSchema = new mongoose.Schema(
  {
    instituteName: {
      type: String,
      required: true,
      trim: true,
    },

    logo: {
      type: String,
      default: "",
    },

    address: {
      type: String,
      required: true,
      trim: true,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    whatsapp: {
      type: String,
      default: "",
    },

    facebook: {
      type: String,
      default: "",
    },

    instagram: {
      type: String,
      default: "",
    },

    youtube: {
      type: String,
      default: "",
    },

    googleMapsLink: {
      type: String,
      default: "",
    },

    aboutInstitute: {
      type: String,
      default: "",
    }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model(
  "InstituteSettings",
  instituteSettingsSchema
);