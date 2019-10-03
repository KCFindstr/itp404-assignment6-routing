import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

export default class AnimalPost extends React.Component {
	render() {
		return (
			<div className="animal-post">
				{this.props.thumbnail ? <img className="image" src={this.props.thumbnail} alt={this.props.title}/> : <div className="image">No Image.</div>}
				<strong>Title: </strong>
				<a href={this.props.url} target="_blank" rel="noopener noreferrer">
					{this.props.title}
				</a>
				<br/>
				<strong>Score: </strong>{this.props.score}
				<br/>
				<strong>Author: </strong>
				<Link to={`/author/${this.props.author}`}>
					{this.props.author}
				</Link>
			</div>
		);
	}
}