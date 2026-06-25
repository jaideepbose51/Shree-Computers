import mongoose from "mongoose";

const enquirySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      maxlength: 100,
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      index: true,
    },

    phone: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
      index: true,
    },

    courseInterested: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: [true, "Course is required"],
    },

    message: {
      type: String,
      trim: true,
      maxlength: 1000,
      default: "",
    },

    emailVerified: {
      type: Boolean,
      default: false,
    },

    emailVerifiedAt: {
      type: Date,
      default: null,
    },

    status: {
      type: String,
      enum: [
        "NEW",
        "CONTACTED",
        "FOLLOW_UP",
        "ADMITTED",
        "REJECTED",
      ],
      default: "NEW",
    },

    adminNotes: {
      type: String,
      trim: true,
      maxlength: 2000,
      default: "",
    },

    source: {
      type: String,
      enum: [
        "WEBSITE",
        "WHATSAPP",
        "PHONE_CALL",
        "WALK_IN",
        "SOCIAL_MEDIA",
      ],
      default: "WEBSITE",
    },
  },
  {
    timestamps: true,
  }
);

// Indexes
enquirySchema.index({
  email: 1,
  phone: 1,
});

enquirySchema.index({
  status: 1,
  createdAt: -1,
});

const Enquiry = mongoose.model(
  "Enquiry",
  enquirySchema
);

export default Enquiry;