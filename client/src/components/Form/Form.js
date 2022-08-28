import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@mui/material';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';

import './styles.css';
import { createPost, updatePost } from '../../actions/posts';

const Form = ({ currentId, setCurrentId }) => {
	const post = useSelector((state) =>
		currentId ? state.posts.find((p) => p._id === currentId) : null
	);

	const [postData, setPostData] = useState({
		creator: '',
		title: '',
		message: '',
		selectedFile: '',
	});

	const dispatch = useDispatch();

	useEffect(() => {
		if (post) setPostData(post);
	}, [post]);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (currentId) {
			dispatch(updatePost(currentId, postData));
		} else {
			dispatch(createPost(postData));
		}

		clear();
	};

	const clear = () => {
		setCurrentId(null);
		setPostData({ creator: '', title: '', message: '', selectedFile: '' });
	};

	return (
		<Paper className="paper">
			<form autoComplete="off" noValidate className="form" onSubmit={handleSubmit}>
				<Typography className="form_title" variant="h6">
					{currentId ? 'Edit' : 'Create'} Note
				</Typography>
				<div className="text_field">
					<TextField
						name="creator"
						variant="outlined"
						label="Creator"
						fullWidth
						value={postData.creator}
						onChange={(e) =>
							setPostData({ ...postData, creator: e.target.value })
						}
					/>
				</div>
				<div className="text_field">
					<TextField
						name="title"
						variant="outlined"
						label="Title"
						fullWidth
						value={postData.title}
						onChange={(e) =>
							setPostData({ ...postData, title: e.target.value })
						}
					/>
				</div>
				<div className="text_field">
					<TextField
						name="message"
						variant="outlined"
						label="Message"
						fullWidth
						value={postData.message}
						onChange={(e) =>
							setPostData({ ...postData, message: e.target.value })
						}
					/>
				</div>

				<div className="fileInput">
					<FileBase
						type="file"
						multiple={false}
						onDone={({ base64 }) =>
							setPostData({ ...postData, selectedFile: base64 })
						}
					/>
				</div>

				<div className="buttonSubmit">
					<Button
						variant="contained"
						color="primary"
						size="large"
						type="submit"
						fullWidth
					>
						Submit
					</Button>
				</div>
				<Button
					variant="contained"
					color="secondary"
					size="large"
					onClick={clear}
					fullWidth
				>
					Clear
				</Button>
			</form>
		</Paper>
	);
};

export default Form;
