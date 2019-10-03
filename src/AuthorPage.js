import React from 'react';
import { getUserData } from './RedditApi';
import './App.css';
import AnimalPost from './AnimalPost';

export default class AuthorPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			author: []
		};
	}
	componentDidMount = async() => {
		const author = await getUserData(this.props.match.params.user);
		this.setState({ author });
	}
	componentDidUpdate = async(previousProps) => {
		if (previousProps.match.params.user !== this.props.match.params.user) {
			const author = await getUserData(this.props.match.params.user);
			this.setState({ author });
		}
	}
	render() {
		return (
			<div className="animal-page">
			{
				this.state.author.map((post) => {
					return (
						<AnimalPost
							key={post.data.id}
							title={post.data.title || post.data.link_title}
							score={post.data.score}
							url={post.data.url || post.data.link_url}
							author={post.data.author}
							thumbnail={post.data.thumbnail_height ? post.data.thumbnail : null}
						/>
					);
				})
			}
			</div>
		);
	}
}