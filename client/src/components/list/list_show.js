import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import { fetchPosts } from '../../actions/index';
import axios from 'axios';

const ROOT_URL = 'http://localhost:3000';

const config = {
	headers: { authorization: localStorage.getItem('token')}
}
class ListShow extends Component {
	constructor(props) {
		super(props);

		this.state = {
			post: {}
		}
	}
	componentWillMount() {
		//todo add the axios call here
		//this.props.fetchPost(this.props.params.id);
		axios.get(ROOT_URL + '/items/' + this.props.params.id, config)
		.then( (response) => {
			console.log("Response", response)
			this.setState({
				post: response.data
			})
		});
	}

	render(){
		const post = this.state.post;
		if(!post) {
			return(
				<div>
					Create a New Post  
					<Link to="/newitem" className="btn btn-primary">New Item</Link>
				</div>
			);
		} 

		return(
			<div>
				<input type="checkbox"></input>
				<h3>{post.title}</h3>
				<div id="space"></div>
				<h6>Course: {post.category}</h6>
				<div id="space"></div>
				<h6>Ingredients:</h6>
				<p>{post.ingredients}</p>
				<div id="space"></div>
				<h6>Directions:</h6>
				<p>{post.directions}</p>
				<Link to="/items" className="btn btn-primary"> Back to Post List</Link>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { post: state.posts.post };
}

export default connect(mapStateToProps, { fetchPosts: fetchPosts })(ListShow);