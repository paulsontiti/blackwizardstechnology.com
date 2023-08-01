import { Schema, model, models } from "mongoose";

const questionnaireSchema = new Schema(
  {
    fullName:{type: String,
        required: true,
        trim: true,
        lowercase: true,},
    email: {
      type: String,
      unique: true,
      trim: true,
      lowercase: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    occupation: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
      },
      state: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
      },
      city: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
      },
      category: {
        type: String,
        trim: true,
        lowercase: true,
      },
      acquintance: {
        type: String,
        trim: true,
        lowercase: true,
      },
      preferredCourse: {
        type: String,
        trim: true,
        lowercase: true,
      },
      noBackground: {
        type: String,
        trim: true,
        lowercase: true,
      },
      background: {
        type: String,
        trim: true,
        lowercase: true,
      },
      earn: {
        type: String,
        trim: true,
        lowercase: true,
      },
      considered: {
        type: String,
        trim: true,
        lowercase: true,
      },
      switch: {
        type: String,
        trim: true,
        lowercase: true,
      }, years: {
        type: String,
        trim: true,
        lowercase: true,
      },
      days: {
        type: String,
        trim: true,
        lowercase: true,
      },
      hours: {
        type: String,
        trim: true,
        lowercase: true,
      },
      classes: {
        type: String,
        trim: true,
        lowercase: true,
      },
      challenges: {
        type: String,
        trim: true,
        lowercase: true,
      },
      referal: {
        type: String,
        trim: true,
        lowercase: true,
      },
      raffleDraw: {
        type: String,
        trim: true,
        lowercase: true,
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
const Questionnaire = models.Questionnaire || model("Questionnaire", questionnaireSchema
    );
export default Questionnaire;
