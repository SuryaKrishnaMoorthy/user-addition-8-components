import React, { useState } from 'react';

import Card from '../../UI/Card/Card';
import ErrorModal from '../../UI/Card/ErrorModal';
import Button from '../../UI/Card/Button';
import classes from './AddUser.module.css';


const AddUser = (props) => {
	const [ enteredUsername, setEnteredUsername ] = useState("");
	const [ enteredAge, setEnteredAge ] = useState("");

	const usernameChangeHandler = (event) => {
		setEnteredUsername(event.target.value);
	}

	const userAgeChangeHandler = (event) => {
		setEnteredAge(event.target.value);
	}

	const addUserHandler = (event) => {
		event.preventDefault();
		if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) return;
		if(+enteredAge < 1) return;
		
		props.onAddUser(enteredUsername, enteredAge)

		setEnteredUsername('');
		setEnteredAge('');
	}

		return (
			<div>
				<ErrorModal title={"An error occured!"} message={" Something went wrong!"} />
				<Card className={ classes.input }>
					<form onSubmit={ addUserHandler }>
							<label htmlFor="userName">User name</label>
							<input id="userName" type="text" value={ enteredUsername } onChange={ usernameChangeHandler }/>
							<label htmlFor="age">Age (Years) </label>
							<input id="age" type="number" value={ enteredAge } onChange={ userAgeChangeHandler }/>
							<Button type="submit">Add User</Button>
					</form>
				</Card>
			</div> 
		)
}

export default AddUser;