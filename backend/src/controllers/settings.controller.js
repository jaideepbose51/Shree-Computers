import InstituteSettings from "../models/InstituteSettings.js";
import asyncHandler from "../utils/asyncHandler.js";

export const getSettings = asyncHandler(
  async (req, res) => {
    const settings =
      await InstituteSettings.findOne();

    res.status(200).json({
      success: true,
      data: settings,
    });
  }
);

export const updateSettings =
  asyncHandler(async (req, res) => {
    let settings =
      await InstituteSettings.findOne();

    if (!settings) {
      settings =
        await InstituteSettings.create(
          req.body
        );
    } else {
      Object.assign(
        settings,
        req.body
      );

      await settings.save();
    }

    res.status(200).json({
      success: true,
      message:
        "Settings updated successfully",
      data: settings,
    });
  });