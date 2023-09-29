import { Schema, model, models } from "mongoose";

const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    referralCode: {
      type: String,
      trim: true,
    },
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
const User = models.User || model("User", userSchema);
export default User;
