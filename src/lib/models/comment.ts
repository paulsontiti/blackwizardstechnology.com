import { Schema, model, models } from "mongoose";

const commentSchema = new Schema(
  {
    comment: { type: String, required: true },

    subject: {
      type: String,
      required: true,
    },
    fullName: {
        type: String,
        required: true,
      },
    rating: {
      type: Number,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "BWTUser",
    },
    replies: [
      {
        comment: { type: String },
        likes: { type: Number ,default:0 },
        disLikes: { type: Number,default:0  },
        userId: {
          type: Schema.Types.ObjectId,
          ref: "BWTUser",
        },
      },
    ],
    likes: { type: Number,default:0 },
    disLikes: { type: Number,default:0  },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
const BWTComment = models.BWTComment || model("BWTComment", commentSchema);
export default BWTComment;
