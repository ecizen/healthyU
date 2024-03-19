import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import CalendarPicker from "react-native-calendar-picker";
import Back from "../img/backnavigator.png";
import { useNavigation } from "@react-navigation/native";

export default class Habbit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
    };
    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date) {
    this.setState({
      selectedStartDate: date,
    });
  }

  render() {
    const { selectedStartDate } = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : "";

    const GoHome = () => {
      this.props.navigation.navigate("Home");
    };

    return (
      <View style={styles.container}>
        <View style={{ flexDirection: "row", marginTop: 50, margin: 20, alignItems: "center" }}>
          <TouchableOpacity onPress={GoHome}>
            <Image source={Back} style={{ width: 20, height: 20 }} />
          </TouchableOpacity>
          <Text style={{ marginLeft: 140, fontSize: 16 }}>Kalender</Text>
        </View>

        <CalendarPicker onDateChange={this.onDateChange}
        locale={"id"}
         />

        <View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
});
