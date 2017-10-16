import { connect } from "react-redux";
import Home from "../components/Home";

const mapStateToProps = state => {
    return {
        isLogedin: state.isLogedin
    };
};

const HomeContainer = connect(mapStateToProps)(Home);
export default HomeContainer; 