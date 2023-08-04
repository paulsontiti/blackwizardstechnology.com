import BWTComment from "@/lib/models/comment";
import dbConnect from "@/lib/mongoose";


export default async function handler(req: any, res: any) {
  await dbConnect();
  const { comment,subject,rating,fullName} = req.body;
  if (comment && subject && rating) {
    try {
        await BWTComment.create({comment,subject,rating,fullName});
        res
          .status(201)
          .json({
            successful: true,
            message: "Thank you for feedback. We appreciate your opinions.",
          });
      
    } catch (err: any) {
      console.log(err);
      res
        .status(400)
        .json({ successful: false, message: err.message});
    }
  } else {
    res
      .status(400)
      .json({
        successful: false,
        message: "Please fill in the required fields",
      });
  }
}
