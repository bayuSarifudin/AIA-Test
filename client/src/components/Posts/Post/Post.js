import React from 'react';
import { Card, CardContent, CardMedia, Button, Typography } from '@mui/material';
import { CardActions } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import { deletePost } from '../../../actions/posts';

import './styles.css';

const Post = ({ post, setCurrentId }) => {
	const dispatch = useDispatch();

	return (
		<Card className="card">
			<CardMedia className="media" image={post.selectedFile} title={post.title} />
			<div className="overlay">
				<Typography variant="h6">{post.creator}</Typography>
				<Typography variant="body2">
					{moment(post.createdAt).fromNow()}
				</Typography>
			</div>
			<div className="overlay2">
				<Button
					style={{ color: 'white' }}
					size="small"
					onClick={() => setCurrentId(post._id)}
				>
					<MoreHorizIcon fontSize="default" />
				</Button>
			</div>
			<Typography className="title" variant="h5" gutterBottom>
				{post.title}
			</Typography>
			<CardContent>
				<Typography variant="body2" color="textSecondary" component="p">
					{post.message}
				</Typography>
			</CardContent>
			<CardActions className="cardAction">
				<Button
					size="small"
					color="error"
					onClick={() => dispatch(deletePost(post._id))}
				>
					<DeleteIcon fontSize="small" />
					Delete
				</Button>
			</CardActions>
		</Card>
	);
};

export default Post;
