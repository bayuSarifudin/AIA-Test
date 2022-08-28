import React from 'react';
import { useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import EmptyPost from '../home/EmptyPost';
import Post from './Post/Post';

const Posts = ({ setCurrentId }) => {
	const posts = useSelector((state) => state.posts);
	console.log(posts);
	return !posts.length ? (
		<EmptyPost />
	) : (
		<Grid className="container" container alignItems="stretch" spacing={3}>
			{posts.map((post) => (
				<Grid key={post._id} item xs={12} sm={12} md={6}>
					<Post post={post} setCurrentId={setCurrentId} />
				</Grid>
			))}
		</Grid>
	);
};

export default Posts;
