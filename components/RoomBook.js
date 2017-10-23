import React from "react";
import moment from "moment";
import _ from "lodash";
import classNames from 'classnames';
import {View , Text ,TouchableOpacity,Image,TextInput,ScrollView, Alert} from "react-native";
import InputBoxInside from "./InputBoxInside";
import InputDropdown from "./InputDropdown";
import SubHeader from "./SubHeader";
import Styles from "./css/RoomBookStyle";
const weekDayList = ["Sun","Mon","Tus","Wed","Thu","Fri","Sut"];
const todayTemp = moment().utc("2015-10-24 20:00", "YYYY-MM-DD HH").local();
export default class RoomBook extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            roomName:null,
            date:null,
            time:null,
            duration:null,
            guest:null,
            dateSendEmpty:false,
            timeSendEmpty:false,
            durationSendEmpty:false
        };
        this.date= [];
        for(let i = 0;i<6;i++)
        {   let tempDate = moment(todayTemp, "DD-MM-YYYY").add(i, 'days');
                this.date.push(tempDate);
        }
        this.time = [{time:11,type:"am"},
                        {time:12,type:"am"},
                        {time:2,type:"pm"},
                        {time:3,type:"pm"},
                        {time:4,type:"pm"},
                        {time:5,type:"pm"}];
        this.duration = [{time:30,type:"min"},
            {time:45,type:"min"},
            {time:1,type:"hour"},
            {time:1.5,type:"hour"},
            {time:2,type:"hour"},
            {time:2.5,type:"hour"}
        ];      
    }
    renderDate(dateString, status){
        return (<TouchableOpacity style={status && moment(status).format("DD-MM-YYYY") == moment(dateString).format("DD-MM-YYYY") ? Styles.DateBodyItemSelected : Styles.DateBodyItem} 
            key={dateString}
            onPress={()=>this.fetchRoomByDate(this.state.roomName,dateString)}>
            <Text style={Styles.DateBodyItemDay}>{weekDayList[moment(dateString).day()]}</Text>
            <Text style={Styles.DateBodyItemDate}>{moment(dateString).format("DD")}</Text>
            <Text style={Styles.DateBodyItemDay}>{moment(dateString).format("MMM")}</Text>
        </TouchableOpacity>);
    }
    renderTime(time,type,status,booked){
        let bookedStatus = false;
       booked.map((item)=>{if(item.start<=time && time<item.end) bookedStatus=true});
        return (<TouchableOpacity 
            style={bookedStatus ? Styles.timeBodyItemDisabled : status && status == time ? Styles.timeBodyItemSelected : Styles.timeBodyItem} 
            key={time}
            onPress={ !bookedStatus
            ? 
            ()=>this.setState({time,timeSendEmpty:false})
            :
            null}
        >
            <Text style={Styles.DateBodyItemDate}>{time}</Text>
            <Text style={Styles.DateBodyItemDay}>{type}</Text>
        </TouchableOpacity>);
    }
    renderDuration(duration,type,status){
        return (<TouchableOpacity style={status && status == duration ? Styles.timeBodyItemSelected : Styles.timeBodyItem} 
            key={duration}
            onPress={()=>this.setState({duration,durationSendEmpty:false})}
        >
            <Text style={Styles.DateBodyItemDate}>{duration}</Text>
            <Text style={Styles.DateBodyItemDay}>{type}</Text>
        </TouchableOpacity>);
    }
    fetchRoomByDate(room,date){
        this.setState({date,dateSendEmpty:false});
        this.props.fetchRoomByDate(room,moment(date).format("DD-MM-YYYY"))
    }
    confirmBooking(){
        let status = false;
        if(this.state.roomName == null) {this.setState({roomName:"empty"});status=true}
        if(this.state.date == null) {this.setState({dateSendEmpty:true});status=true}
        if(this.state.time == null) {this.setState({timeSendEmpty:true});status=true}
        if(this.state.duration == null) {this.setState({durationSendEmpty:true});status=true}
        if(!status) Alert.alert("Thanx");
    }
    render()
    {
        
        const tempTimeBooked = [];
        if(this.props.roomByDate !== null)
        {this.props.roomByDate.map(data=>{
            if(moment(data.reserved.booking_date).format("DD-MM-YYYY") ==  moment(this.state.date).format("DD-MM-YYYY") )
            tempTimeBooked.push({
            start:data.reserved.start_time,
            end:data.reserved.end_time})});
        }
        return  <View style={Styles.RoomBook}>
                    <SubHeader title={"Book Room"} routeTo={()=>this.props.routeTo()} />
                    <ScrollView>
                        <View style={Styles.RoomBookBody}>
                            <View style={Styles.SearchBody}>
                                <Text style={Styles.subHeading}>CONFERENCE ROOM NAME</Text>
                                <InputDropdown 
                                    title={"Select"} 
                                    roomList={this.props.roomList}
                                    setRoom={(name)=>this.setState({roomName:name})} 
                                    fetchRoom={()=>this.props.getRoomList()}
                                    fetchRoomByDate={(room_id,date)=>this.fetchRoomByDate(room_id,date)}
                                    selected={this.state.roomName == "empty" ? null :this.state.roomName}
                                />
                                <Text style={Styles.subHeading}>DATE</Text>
                                <View style={[Styles.DateBody, 
                                            this.state.dateSendEmpty && Styles.borderColorRed]} >
                                    {this.date.map((date)=>
                                    this.renderDate(date,this.state.date))}
                                </View>
                                <Text style={Styles.subHeading}>TIME</Text>
                                <View style={[Styles.DateBody,
                                    this.state.timeSendEmpty && Styles.borderColorRed]}>
                                    {this.time.map((time)=>this.renderTime(time.time,time.type,this.state.time,tempTimeBooked))}
                                </View>
                                <Text style={Styles.subHeading}>DURATION</Text>
                                <View style={[Styles.DateBody,
                                    this.state.durationSendEmpty && Styles.borderColorRed]}>
                                    {this.duration.map((time)=>this.renderDuration(time.time,time.type,this.state.duration))}
                                </View>
                                <Text style={Styles.subHeading}>GUEST</Text>
                                <InputBoxInside title={"Invite"}
                                    setData={(name)=>this.setState({guest:name})} 
                                    selected={this.state.guest}/>
                            </View>
                        </View>
                    </ScrollView>
            <TouchableOpacity 
                onPress={()=>this.confirmBooking()}
                style={Styles.RoomBookSubmit}>
                <Text style={Styles.RoomBookSubmitText}>Book Room</Text>
            </TouchableOpacity>
        </View>;
    }
}