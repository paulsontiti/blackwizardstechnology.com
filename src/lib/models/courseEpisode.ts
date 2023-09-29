import { Schema, model, models } from "mongoose";

const courseEpisodeSchema = new Schema(
  {
    courseId: {
        type: Schema.Types.ObjectId,
        ref: "Course",
        required: true,
      },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    courseTitle: {
      type: String,
      required: true,
    },
    episodeNumber: {
      type: Number,
      required: true,
    },
    duration: {
        type: Number,
        required: true,
      },
    downloadablePdf: {
      type: String,
      required: true,
      trim: true,
    },
    studentsPersonalQuestions: [
      { studentId: {
        type: Schema.Types.ObjectId,
        ref: "User",
      },question:{
        type: String,
        trim: true,
      },
      answer:{
        type:String,
        trim:true
      }
    }
    ],
    feedbacks:[{
      studentId: {
        type: Schema.Types.ObjectId,
        ref: "User",
      }, feedback:{
        type: String,
        trim: true,
      }
    }],
    assignment: {
      type: String,
      required:true,
      trim: true,
    },
    quickTest: {
      duration: {
        type: Number,
        required: true,
      },
      repeatableTimes: {
        type: Number,
        required: true,
      },
      passMark: {
        type: Number,
        required: true,
      },
      questions:[ {
        question:{
            type: String,
            required: true,
            trim: true,
          },
          answer:{
            type: String,
            required: true,
            trim: true,
          },answerOptions:[{
            type: String,
            required: true,
            trim: true,
          }],
          mark:{
            type: Number,
            required: true,
            trim: true,
          },
        }
      ],
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
const CourseEpisodeModel =
  models.CourseEpisodeModel || model("CourseEpisodeModel", courseEpisodeSchema);
export default CourseEpisodeModel;
