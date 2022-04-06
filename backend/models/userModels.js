import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        name: {type:String, required:true},
        email: {type:String, required:true, unique: true},
        password: {type:String, required:true,},
        isAdmin: {type: Boolean, required:true, default:false},
        
    },
    {
        timestamps: true
    }
);

// model prend 2 param le premier c'est le nom et le 2éme schéma
const User = mongoose.model('User', userSchema);
export default User;