import BWTComment from "@/lib/models/comment";
import dbConnect from "@/lib/mongoose";

export default async function handler(req: any, res: any) {
  await dbConnect();
  const { commentId,disLike} = req.body;
  if (commentId) {
    try {
      const comment = await BWTComment.findOne(
        { "replies._id": commentId },
        { replies: true }
      );
      if (comment) {
        if (Array.isArray(comment.replies) && comment.replies.length > 0) {
            let replyIndex  = 0
          const reply = comment.replies.find(
            (r: any,index:number) =>{
                replyIndex = index
               return r._id.toString() === commentId
            }
          );
                   //increase or decrease base on the value of like and likes
                   if( reply.disLikes > 0 ){
                   disLike ? reply.disLikes++ : reply.disLikes--
                   }else{
                    disLike && reply.disLikes++
                   }
                 
          comment.replies[replyIndex] = reply
         await comment.save();
          res.status(201).json(true);
        } else {
          res.status(201).json(false);
        }
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
