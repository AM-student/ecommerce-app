import mongoose, { Schema } from 'mongoose';

const userSchema = mongoose.Schema ({
    user_id: { type: String, required: true },
    user_firstname: { type: String, required: true },
    user_lastname: { type: String, required: true },
    user_email: { type: String, required: true },
    user_password: { type: String, required: true },
    user_avatar: { type: String, default: true },
    user_role: { type: String, required: true }
});

const users = mongoose.model('User', userSchema);

export default users;