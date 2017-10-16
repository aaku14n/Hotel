import React from "react";
import _ from "lodash";
import {View , Text ,TouchableOpacity } from "react-native";
import Styles from "./css/InputDropdownStyle";
// const today = new Date(); 
export default class InputDropdown extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data:false,
            selectedRoom:null,
            room:null
        };
        this.room = [];  
         
    }
    setRoom(room){
        this.setState({selectedRoom:room,data:false});
    }
    render(){ 
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; //January is 0!
        
        var yyyy = today.getFullYear();
        if(dd<10){
            dd='0'+dd;
        } 
        if(mm<10){
            mm='0'+mm;
        } 
        var today_1 = dd+'-'+mm+'-'+yyyy;
        console.log(today_1,today.getDay());
        this.room = []; 
        if(this.props.roomList && this.props.roomList.length) 
            this.props.roomList.map(roomName=>this.room.push({name:roomName.room_name,id:roomName.room_id}));
        return <View style={Styles.InputBoxBody}>
            <View  style={Styles.InputBox}> 
                <Text 
                    onPress={()=>this.setState({data:!this.state.data})}
                    style={Styles.DropdownHeader}>
                    {this.state.selectedRoom ? 
                        this.room[_.findIndex(this.room,item=>item.id==this.state.selectedRoom)].name : this.props.roomList ? this.props.roomList[0].room_name : "Choose Room"}
                </Text>
                <View style={Styles.DropdownBody}>
                    {this.state.data && this.room.map(room =><Text 
                        key={room.id} 
                        style={Styles.DropdownBodyItem}
                        onPress={()=>this.setRoom(room.id)}
                    >{room.name}</Text>)}
                </View>
                
            </View>
            <View style={Styles.statusOfInput}>{this.props.selected !== null && <Text >&#x2714;</Text>}</View>
            <TouchableOpacity style={Styles.InputBoxBodyButtonDiv} 
                onPress={()=>this.props.fetchRoom() }>
                <Text style={Styles.InputBoxBodyButton}>{this.props.title}</Text>
            </TouchableOpacity>
        </View>;
    }
} 