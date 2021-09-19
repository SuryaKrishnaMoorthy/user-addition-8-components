import Card from '../../UI/Card/Card';
import classes from './AddUser.module.css';

const AddUser = (props) => {

	const addUserHandler = (event) => {
		event.preventDefault();

	}

		return (
			<Card className={ classes.input }>
				<form onSubmit={ addUserHandler }>
						<label htmlFor="userName">User name</label>
						<input id="userName" type="text" />
						<label htmlFor="age">Age (Years) </label>
						<input id="age" type="number" />
						<button type="submit">Add User</button>
				</form>
			</Card>
		)
}

export default AddUser;