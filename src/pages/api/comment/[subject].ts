import BWTComment from "@/lib/models/comment";
import dbConnect from "@/lib/mongoose";


export default async function handler(req: any, res: any) {
  await dbConnect();
  const { subject} = req.query;
  if (subject) {
    try {
       const comments = await BWTComment.find({subject});
        res
          .status(201)
          .json(comments);
      
    } catch (err: any) {
      console.log(err);
      res
        .status(400)
        .json(err);
    }
  } else {
    res
      .status(400)
      .json('Invalid request. No subject');
  }
}
