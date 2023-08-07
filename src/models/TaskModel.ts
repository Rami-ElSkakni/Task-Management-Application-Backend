import mongoose, { Schema, Document } from 'mongoose';

interface ITask extends Document {
  title: string;
  description: string;
  dueDate: Date;
}

const taskSchema = new Schema<ITask>({
  title: {
    type: String,
    required: [true, "A task must have a title"],
  },
  description: {
    type: String,
    required: [true, "A task must have a description"],
  },
  dueDate: {
    type: Date,
    required: [true, "A task must have a date"],
  },
});

const Task = mongoose.model<ITask>('Task', taskSchema);

export default Task;