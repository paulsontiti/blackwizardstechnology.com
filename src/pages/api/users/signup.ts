import BWTUser from "@/lib/models/user";
import dbConnect from "@/lib/mongoose";
import bcrypt from "bcrypt";

 const hashPassword = async (password: string) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  };
export default async function handler(req: any, res: any) {
  await dbConnect();
  const { email, phone, password,fullName,course} = req.body;

  if (email && phone && password && fullName && course) {
    try {
      const existingUserWithEmail = await BWTUser.findOne({ email: email });

      if (existingUserWithEmail) {
        res
          .status(400)
          .json({
            successful: false,
            message: "An account already exist with the email",
            user: {},
          });
      } else {
        const existingUserWithPhone = await BWTUser.findOne({ phone: phone });
        if (existingUserWithPhone) {
          res
            .status(400)
            .json({
              successful: false,
              message: "An account already exist with the phone number",
              user: {},
            });
        } else {
          const newUser = await BWTUser.create(req.body);
          newUser.password = await hashPassword(newUser.password);
          const user = await newUser.save();
          res
            .status(201)
            .json({
              successful: true,
              message: "Your account was successfully created. You will receive an SMS containing your reservation details",
              user,
            });
        }
      }
    } catch (err: any) {
      console.log(err);
      res
        .status(400)
        .json({ successful: false, message: err.message, user: {} });
    }
  } else {
    res
      .status(400)
      .json({
        successful: false,
        message: "Invalid sign up details",
        user: {},
      });
  }
}
