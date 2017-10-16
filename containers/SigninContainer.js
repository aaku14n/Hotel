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

const mapStateToProps = state =>{
    return {
        isLogedin:state.isLogedin
    };
};
const SigninContainer = connect(mapStateToProps,mapDispatchToProps)(Signin);
export default SigninContainer; 