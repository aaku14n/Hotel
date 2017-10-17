import { connect } from "react-redux";
import UserChoice from "../components/UserChoice";
import { userChoice,getRoomList, fetchRoomByDate } from "../actions/Index";

const mapDispatchToProps = dispatch => {
    return {
        login: userData => {
            dispatch(userChoice(userData));
        },
        getRoomList: ()=>{
            dispatch(getRoomList());
        },
        fetchRoomByDate: (room_id,date) =>{
            dispatch(fetchRoomByDate(room_id,date));
        }
    };
};
const mapStateToProps = state => {
    return {
        roomList:state.roomList.roomList,
        roomByDate:state.roomByDate.roomByDate
    };
};
const SigninContainer = connect(mapStateToProps,mapDispatchToProps)(UserChoice);
export default SigninContainer; 