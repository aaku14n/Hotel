import React from "react";
import {View , Text ,TouchableOpacity,Image,TextInput,ScrollView} from "react-native";
import InputBoxInside from "./InputBoxInside";
import InputDropdown from "./InputDropdown";
import SubHeader from "./SubHeader";
import Styles from "./css/RoomBookStyle";
export default class RoomBook extends React.Component{
    constructor()
    {
        super();
        this.date = [   {date:26,day:"Mon",month:"Oct"},
            {date:27,day:"Tus",month:"Oct"},
            {date:28,day:"Wed",month:"Oct"},
            {date:29,day:"Thu",month:"Oct"},
            {date:30,day:"Fri",month:"Oct"}];
        this.time = [{time:1,type:"am"},
            {time:2,type:"am"},
            {time:3,type:"am"},
            {time:4,type:"am"},
            {time:5,type:"am"},
            {time:6,type:"am"}];
        this.duration = [{time:30,type:"min"},
            {time:45,type:"min"},
            {time:1,type:"hour"},
            {time:1.5,type:"hour"},
            {time:2,type:"hour"},
            {time:2.5,type:"hour"}
        ];
        this.state = {
            roomName:null,
            date:null,
            time:null,
            duration:null,
            guest:null
        };
    }
    renderDate(date,day,month,status){
        return (<TouchableOpacity style={status && status == date ? Styles.DateBodyItemSelected : Styles.DateBodyItem} 
            key={date}
            onPress={()=>this.setState({date})}>
            <Text style={Styles.DateBodyItemDay}>{day}</Text>
            <Text style={Styles.DateBodyItemDate}>{date}</Text>
            <Text style={Styles.DateBodyItemDay}>{month}</Text>
        </TouchableOpacity>);
    }
    renderTime(time,type,status){
        return (<TouchableOpacity style={status && status == time ? Styles.timeBodyItemSelected : Styles.timeBodyItem} 
            key={time}
            onPress={()=>this.setState({time})}
        >
            <Text style={Styles.DateBodyItemDate}>{time}</Text>
            <Text style={Styles.DateBodyItemDay}>{type}</Text>
        </TouchableOpacity>);
    }
    renderDuration(duration,type,status){
        return (<TouchableOpacity style={status && status == duration ? Styles.timeBodyItemSelected : Styles.timeBodyItem} 
            key={duration}
            onPress={()=>this.setState({duration})}
        >
            <Text style={Styles.DateBodyItemDate}>{duration}</Text>
            <Text style={Styles.DateBodyItemDay}>{type}</Text>
        </TouchableOpacity>);
    }

    render()
    {
        return  <View style={Styles.RoomBook}>
            <SubHeader title={"Book Room"} routeTo={()=>this.props.routeTo()} />
            <ScrollView>
                <View style={Styles.RoomBookBody}>
                    <View style={Styles.SearchBody}>
                        <Text style={Styles.subHeading}>CONFERANCE ROOM NAME</Text>
                        <InputDropdown 
                            title={"Change"} 
                            roomList={this.props.roomList}
                            setData={(name)=>this.setState({roomName:name})} 
                            fetchRoom={()=>this.props.getRoomList()}
                            selected={this.state.roomName}
                        />
                        <Text style={Styles.subHeading}>DATE</Text>
                        <View style={Styles.DateBody}>
                            {this.date.map((date)=>this.renderDate(date.date,date.day,date.month,this.state.date))}
                        </View>
                        <Text style={Styles.subHeading}>TIME</Text>
                        <View style={Styles.DateBody}>
                            {this.time.map((time)=>this.renderTime(time.time,time.type,this.state.time))}
                        </View>
                        <Text style={Styles.subHeading}>DURATION</Text>
                        <View style={Styles.DateBody}>
                            {this.duration.map((time)=>this.renderDuration(time.time,time.type,this.state.duration))}
                        </View>
                        <Text style={Styles.subHeading}>GUEST</Text>
                        <InputBoxInside title={"Envite"}
                            setData={(name)=>this.setState({guest:name})} 
                            selected={this.state.guest}/>
                    </View>
                </View>
            </ScrollView>
            <TouchableOpacity 
                onPress={()=>this.props.routeTo()}
                style={Styles.RoomBookSubmit}>
                <Text style={Styles.RoomBookSubmitText}>Book Room</Text>
            </TouchableOpacity>
        </View>;
    }
}