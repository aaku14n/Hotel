import { connect } from "react-redux";
import UserChoice from "../components/UserChoice";
import { userChoice } from "../actions/Index";

const mapDispatchToProps = dispatch => {
    return {
        login: userData => {
            dispatch(userChoice(userData));
        }
    };
};
const SigninContainer = connect(null,mapDispatchToProps)(UserChoice);
export default SigninContainer; 