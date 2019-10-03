import React from 'react';
import { getRedditData } from './RedditApi';
import AnimalPost from './AnimalPost';
import './App.css';

export default class AnimalPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			animal: []
		};
	}
	componentDidMount = async() => {
		const animal = await getRedditData(this.props.match.params.animal);
		this.setState({ animal });
	}
	componentDidUpdate = async(previousProps) => {
		if (previousProps.match.params.animal !== this.props.match.params.animal) {
			const animal = await getRedditData(this.props.match.params.animal);
			this.setState({ animal });
		}
	}
	render() {
		return (
			<div className="animal-page">
				{
					this.state.animal.map((post) => {
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
		)
	}
}