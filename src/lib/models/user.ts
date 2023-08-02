import { Schema, model, models } from "mongoose";

const userSchema = new Schema(
  {
    fullName:{type: String,
        required: true,
        trim: true,
        lowercase: true,},
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    course: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    dpFileName: String,
    active: { type: Boolean, default: true },
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
const BWTUser = models.BWTUser || model("BWTUser", userSchema);
export default BWTUser;
