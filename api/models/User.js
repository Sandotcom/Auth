import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true},
  password: { type: String, required: true },
  image: String,  
}, { timestamps: true })

export default User = mongoose.model('User', UserSchema);