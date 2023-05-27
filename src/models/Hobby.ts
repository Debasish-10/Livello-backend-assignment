import mongoose, { Schema, Document } from 'mongoose';

interface IHobby extends Document {
  passionLevel: string;
  name: string;
  year: number;
}

const HobbySchema: Schema = new Schema({
  passionLevel: { type: String, required: true },
  name: { type: String, required: true },
  year: { type: Number, required: true },
});

export default mongoose.model<IHobby>('Hobby', HobbySchema);
