import { signup, submitSignup } from '../actions/index'
import { connect } from 'react-redux';
import { SignUp } from '../components/SignUp';

const mapDispatchToProps = dispatch => ({
    signup: () => dispatch(signup()),
    userSignup: (username, password, email) => dispatch(submitSignup(username,password,email))
});

export default connect(
    null,
    mapDispatchToProps
)(SignUp)