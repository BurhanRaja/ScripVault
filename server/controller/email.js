import User from "../model/User";
import transporter from "../utils/emailSend";
import template from "../utils/emailTemplate";
import { encodeCipher } from "../utils/encryptDescypt";

export const sendEmailLogin = async (req, res) => {
  let success = false;

  try {
    const { id } = req.params;

    let user = await User.findOne({ _id: id });

    let token = encodeCipher(user._id);

    await transporter.sendMail({
      from: "burhanraja02@yahoo.com",
      to: user.basic.email,
      subject: "Verify your account with ScripVault",
      html: template(
        "Thank you for choosing <b>ScripVault</b> as your Investment Partner. Please Veridy the account to login and start investing today.",
        `http://localhost:3001/api/verify/login/${token}`
      ),
    });

    success = true;

    return res.status(200).send({
      success,
      message: "Email Successfully Sent.",
    });
  } catch (err) {
    return res.status(500).send({
      success,
      message: "Internal Server Error.",
    });
  }
};
