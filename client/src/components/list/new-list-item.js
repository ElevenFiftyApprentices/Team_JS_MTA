
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../../actions/index';
import { Link } from 'react-router';
 
class ListItem extends Component {
	handleFormSubmit(formProps) {
		this.props.createPost(formProps)

		console.log(formProps);
		//need to do something to log user in
	}
	render(){
		const { fields: { title, category, color }, handleSubmit }=this.props;
		return(
			<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
				<h3>Create a New Post</h3>
				<fieldset className="form-group">
					<label>Name:</label>
					<input type="text" {...title} className="form-control" />
				</fieldset>
				<fieldset className="form-group">
					<label>Notes:</label>
					<input type="text" {...category} className="form-control" />
				</fieldset>
				<fieldset className="form-group">
					<label>Color:</label>
					<input type="text" {...color} className="form-control" />
				</fieldset>
				
				<button action="submit" className="btn btn-primary">Submit</button>
				<Link to='/' className='btn btn-danger'>Cancel</Link>
			</form>
		);


	}
}



export default reduxForm({
	form: 'PostsNewForm',
	fields: ['title', 'category', 'color']
}, null, { createPost })(ListItem);