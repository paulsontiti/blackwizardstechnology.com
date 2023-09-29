import { Schema, model, models } from "mongoose";

const courseSchema = new Schema(
  {
  
    name: {
      type: String,
      required: true,
      trim: true,
    },
    noOfSeasons: {
      type: Number,
      required: true,
      
    },
    noOfEpisodes: {
      type: Number,
      required: true,
      
    },
    studentCommitedTime: {
      type: Number,
      default:1
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
// userSchema.pre('save',async function(next){
//     try{
//         const salt = await bcrypt.genSalt(10)
//         const hashedPassword = await bcrypt.hash(this.password,salt)
//         this.password = hashedPassword
//         next()
//     }catch(error:any){
//         next(error)
//     }
// })
const CourseModel =
  models.CourseModel || model("CourseModel", courseSchema);
export default CourseModel;
