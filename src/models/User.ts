import mongoose, { Schema, Document } from 'mongoose';

interface IUser extends Document {
  name: string;
  hobbies: Array<mongoose.Types.ObjectId>;
}

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  hobbies: [{ type: Schema.Types.ObjectId, ref: 'Hobby' }],
});

export default mongoose.model<IUser>('User', UserSchema);
