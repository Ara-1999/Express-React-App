import mongoose from 'mongoose';

const MemberSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
    type: String,
    required: true
    },
    age: {
        type: Number,
        required: true
    }
})

const Member = mongoose.model('Member', MemberSchema);
export default Member;