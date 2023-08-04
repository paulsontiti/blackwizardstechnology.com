import BWTComment from "@/lib/models/comment";
import dbConnect from "@/lib/mongoose";

export default async function handler(req: any, res: any) {
  await dbConnect();
  const { commentId, like } = req.body;
  if (commentId) {
    try {
      const comment = await BWTComment.findOne({ _id: commentId });

      //increase or decrease base on the value of like and likes
      if (comment.likes > 0) {
        like ? comment.likes++ : comment.likes--;
      } else {
        like && comment.likes++;
      }
      const newComment = await comment.save();
      if (newComment) {
        res.status(201).json(true);
      } else {
        res.status(201).json(false);
      }
    } catch (err: any) {
      console.log(err);
      res.status(201).json(false);
    }
  } else {
    res.status(201).json(false);
  }
}
