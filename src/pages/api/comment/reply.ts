import BWTComment from "@/lib/models/comment";
import dbConnect from "@/lib/mongoose";


export default async function handler(req: any, res: any) {
  await dbConnect();
  const { commentId,reply} = req.body;
  if (commentId && reply) {
    try {
       const comment = await BWTComment.findById(commentId);
       if(comment){
        if(Array.isArray(comment.replies)){
            comment.replies.push({comment:reply})
        }else{
            comment.replies = [{comment:reply}]
        }
        await comment.save()
        res
          .status(201)
          .json({
            successful: true,
            message: "Thank you for feedback. We appreciate your opinions.",
          });
       }else{
        res
          .status(201)
          .json({
            successful: false,
            message: "Comment to reply not found",
          });
       }
        
      
    } catch (err: any) {
      console.log(err);
      res
        .status(400)
        .json({ successful: false, message: err.message});
    }
  } else {
    res
      .status(201)
      .json({
        successful: false,
        message: "Please fill in the required fields",
      });
  }
}
