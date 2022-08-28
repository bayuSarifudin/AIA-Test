import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const postSchema = Schema({
	title: String,
	message: String,
	creator: String,
	selectedFile: String,
	createdAt: {
		type: Date,
		default: new Date(),
	},
});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;
