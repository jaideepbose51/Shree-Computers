import "dotenv/config";

import {
  SESClient,
  SendEmailCommand,
} from "@aws-sdk/client-ses";

const ses = new SESClient({
  region: process.env.AWS_REGION,

  credentials: {
    accessKeyId:
      process.env.AWS_ACCESS_KEY_ID,

    secretAccessKey:
      process.env.AWS_SECRET_ACCESS_KEY,
  },
});

export const sendOTPEmail = async (
  email,
  otp
) => {
  const command =
    new SendEmailCommand({
      Source:
        process.env.SES_FROM_EMAIL,

      Destination: {
        ToAddresses: [email],
      },

      Message: {
        Subject: {
          Data: "Email Verification OTP",
        },

        Body: {
          Html: {
            Data: `
            <div style="font-family:Arial,sans-serif;padding:25px">

              <h2 style="color:#2563eb">
                Shree Computers
              </h2>

              <p>
                Your Email Verification OTP is
              </p>

              <h1
                style="
                  font-size:42px;
                  color:#2563eb;
                  letter-spacing:8px;
                "
              >
                ${otp}
              </h1>

              <p>
                This OTP is valid for
                <b>10 minutes</b>.
              </p>

              <hr>

              <p
                style="
                  color:#777;
                  font-size:13px;
                "
              >
                Please do not share this OTP with anyone.
              </p>

            </div>
            `,
          },
        },
      },
    });

  await ses.send(command);
};

export default ses;