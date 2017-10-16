import React from "react";
import {View , Text ,TouchableOpacity } from "react-native";
import Styles from "./css/InputDropdownStyle";
export default class InputDropdown extends React.Component{
    constructor(){
        super();
        this.state = {
            data:null
        }
    }
    render(){   let data = [{
        value: 'Banana',
      }, {
        value: 'Mango',
      }, {
        value: 'Pear',
      }];
        return <View style={Styles.InputBoxBody}>
                 <View  style={Styles.InputBox}> 
                     <View>
                         <Text onPress={()=>this.setState({data:!this.state.data}) }>Header</Text>
                        {this.state.data && <View >
                         <Text>Header</Text>
                         <Text>Header</Text>
                         <Text>Header</Text>
                         <Text>Header</Text>             
                        </View>}
                         </View>
                </View>
                        <View style={Styles.statusOfInput}>{this.props.selected !== null && <Text >&#x2714;</Text>}</View>
                    <TouchableOpacity style={Styles.InputBoxBodyButtonDiv} 
                        onPress={()=>this.props.setData(this.state.data) }>
                        <Text style={Styles.InputBoxBodyButton}>{this.props.title}</Text>
                    </TouchableOpacity>
    </View>;
    }
} 