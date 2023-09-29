import { Schema, model, models } from "mongoose";

const studentCourseDetailsdeModelSchema = new Schema(
  {
    studentId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
        unique:true
      },
    coursesTaken: [
        {
            courseId: {
                type: Schema.Types.ObjectId,
                ref: "Course",
                required: true,
              },
              episodes:[
                {
                    episodeNumber:Number,
                    completed:Boolean,
                    assignment:String,
                    score:Number
                }
              ]
        }
    ],
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
const StudentCourseDetailsdeModel =
  models.StudentCourseDetailsdeModel || model("StudentCourseDetailsdeModel", studentCourseDetailsdeModelSchema);
export default StudentCourseDetailsdeModel;
