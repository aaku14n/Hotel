import { connect } from "react-redux";
import UserChoice from "../components/UserChoice";
import { userChoice,getRoomList } from "../actions/Index";

const mapDispatchToProps = dispatch => {
    return {
        login: userData => {
            dispatch(userChoice(userData));
        },
        getRoomList: ()=>{
            dispatch(getRoomList());
        }
    };
};
const mapStateToProps = state => {
    return {
        roomList:state.roomList.roomList
    };
};
const SigninContainer = connect(mapStateToProps,mapDispatchToProps)(UserChoice);
export default SigninContainer; 