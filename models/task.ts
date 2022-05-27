import mongoose,{Schema} from 'mongoose';

const TaskSchema: Schema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    date: {
        type: Date,
        default: Date.now
    },
    status: String
});

export default mongoose.model('Task', TaskSchema);