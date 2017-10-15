import { SUCCESS } from "../actions/config";
const isLogedin = (state= { isLogedin:false }, action) => {
    switch(action.type)
    {
        case SUCCESS:
            return Object.assign({},state,{isLogedin:action.payload});
        default:
            return state;
    }
};
export default isLogedin;