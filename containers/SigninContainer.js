import { connect } from "react-redux";
import Signin from "../components/Signin";
import { userLogin } from "../actions/Index";

const mapDispatchToProps = dispatch => {
    return {
        login: userData => {
            dispatch(userLogin(userData));
        }
    };
};
const SigninContainer = connect(null,mapDispatchToProps)(Signin);
export default SigninContainer; 