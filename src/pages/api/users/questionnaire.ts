import Questionnaire from "@/lib/models/questionnaire";
import dbConnect from "@/lib/mongoose";


export default async function handler(req: any, res: any) {
  await dbConnect();
  const { phone,fullName,occupation,state,city } = req.body;

  if (occupation && phone && fullName && state && city) {
    try {
        await Questionnaire.create(req.body);
        res
          .status(201)
          .json({
            successful: true,
            message: "Thank you for taking time to do this survey. We appreciate your opinions. You will be redirected to the next page",
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
