import { toggleCheck, signup, login } from '../actions/index'
import { connect } from 'react-redux';
import { Login } from '../components/Login';

const mapStateToProps = state => ({
    state
})

const mapDispatchToProps = dispatch => ({
    toggleCheck: () => dispatch(toggleCheck()),
    signup: () => dispatch(signup()),
    login: (username, password) => dispatch(login(username, password))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)