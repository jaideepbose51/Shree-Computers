import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    courseName: {
      type: String,
      required: [true, "Course name is required"],
      trim: true,
      maxlength: 100,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },

    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
      maxlength: 3000,
    },

    duration: {
      type: String,
      required: [true, "Duration is required"],
      trim: true,
    },

    fees: {
      type: Number,
      required: [true, "Course fees is required"],
      min: 0,
    },

    eligibility: {
      type: String,
      required: [true, "Eligibility is required"],
      trim: true,
    },

    careerOpportunities: [
      {
        type: String,
        trim: true,
      },
    ],

    image: {
      type: String,
      default: "",
    },

    isPublished: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

// Search optimization
courseSchema.index({
  courseName: "text",
  description: "text",
  eligibility: "text",
});

const Course = mongoose.model("Course", courseSchema);

export default Course;