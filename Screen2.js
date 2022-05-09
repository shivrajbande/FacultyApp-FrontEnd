import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Pressable,
  ImageBackground,
} from "react-native";
import { RadioButton } from "react-native-paper";

import axios from "axios";

export default function Screen2({ navigation ,route}) {
  const [name, setName] = useState("");
  const [radiovalue, setRadiovalue] = useState(0);
  const [reason,setReason] = useState("");

  const teacher = route.params.teacherName;
  // const teacher = "Test9";

  const onPressHandler = () => {
    navigation.navigate("Screen-A");
  };

  const validateName = (userName) => {
    if (userName == "") return false;
    var regex = /^[0-9]{2}[a-z A-Z]{2}[0-9]{1}[a-z A-Z]{1}[0-9]{4}/;

    return regex.test(userName);
  };

  const handlePush = async () => {
    const da = new Date();
    // console.log(da);
    const res = validateName(name);

    if (res == true) {
      const uri = "https://securitygaurd.herokuapp.com/Push";

      console.log(name+" "+radiovalue+" "+da+" "+teacher+" "+reason);
      const result = await axios.post(uri, {
        name: name,
        value: radiovalue,
        date: da,
        teacherName: teacher,
        reason:reason,
      });

      if (result.data.Value == 0) {
        alert("Permission Granted Already!!");
      } else if (result.data.Value == 1) {
        alert("Successfully granted permission");
      } else alert("Error!! check connectivity");
    } else {
      alert("Invalid Format of Number");
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/app2.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.smallcontainer}>
          <View style={styles.smalls}>
            <Text style={styles.text1}>Enter Roll Number</Text>
            <Text>{"\n"}</Text>
            <TextInput
              onChangeText={(text) => setName(text)}
              placeholder="19BD1A0500"
              style={styles.textinput}
            ></TextInput>
            <Text>{"\n"}</Text>

            <View>
              <Text style={styles.text3}>Reason </Text>
              <TextInput style={styles.input1} placeholder="Reason...."

              onChangeText={(text) => setReason(text)}
              
              
              ></TextInput>
            </View>

            <Text style={styles.text2}>Select Pass Mode</Text>

            <View style={styles.group}>
              <View style={styles.boxi}>
                <RadioButton
                  value="1"
                  onPress={() => {
                    setRadiovalue(1);
                  }}
                  status={radiovalue === 1 ? "checked" : "unchecked"}
                ></RadioButton>
                <Text>Lunch Pass</Text>
              </View>

              <View style={styles.boxi}>
                <RadioButton
                  value="0"
                  onPress={() => {
                    setRadiovalue(0);
                  }}
                  status={radiovalue === 0 ? "checked" : "unchecked"}
                ></RadioButton>
                <Text>Gate Pass</Text>
              </View>
            </View>

            <TouchableOpacity onPress={handlePush}>
              <View style={styles.btn}>
                <Text style={styles.btntext}>Add Number</Text>
              </View>
            </TouchableOpacity>

            <Pressable onPress={onPressHandler}>
              <Text style={styles.text6}>Go back</Text>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",

    // backgroundColor: '#D6EFFD',
    // ImageBackground:{uri : {image}}
  },
  smallcontainer: {
    marginTop: 60,
    width: 270,
    height: 500,
    borderWidth: 1,
    borderColor: "rgb(0,0,0)",
    borderRadius: 20,
    backgroundColor: "#eafcf6",
  },
  smalls: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  boxi: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  box: {
    height: 300,
    width: 100,
    borderRadius: 10,
    // marginVertical: 40,
    backgroundColor: "#61dafb",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 100,
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
    margin: 8,
    color: "#000",
    textAlign: "center",
  },

  click: {},

  text1: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "400",
    marginTop: 30,
  },

  text2: {
    textAlign: "left",
    fontSize: 20,
    fontWeight: "400",
    marginTop: 20,
    marginBottom: 15,
  },

  textinput: {
    textAlign: "center",
    padding: 10,
    backgroundColor: "rgb(255,255,255)",
    borderRadius: 20,
    color: "rgb(0,0,0)",
    fontSize: 20,
    // width: 300,
  },

  input1: {
    textAlign: "center",
    padding: 7,
    backgroundColor: "rgb(255,255,255)",
    borderRadius: 20,
    color: "rgb(0,0,0)",
    fontSize: 14,
    width: 250,
    marginTop: 10,
    marginBottom: 10,
  },
  rbtn1: {
    backgroundColor: "rgb(255,255,0)",
    padding: 20,
  },

  text3: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "400",
    marginTop: 10,
  },

  btntext: {
    padding: 8,
    fontSize: 15,

    backgroundColor: "rgb(252, 168, 13)",
    borderRadius: 10,
    marginTop: 17,
    color: "rgb(0,0,0)",
  },

  text6: {
    padding: 8,
    fontSize: 15,
    backgroundColor: "rgb(46, 46, 76)",
    color:"rgb(255,255,255)",
    borderRadius: 10,
    marginTop: 10,
  },

  click1: {
    fontSize: 25,
    textAlign: "left",
    marginLeft: 30,
  },

  click2: {
    fontSize: 25,
    textAlign: "left",
  },

  te1: {
    marginLeft: 5,
    marginRight: 15,
    fontSize: 15,
    textAlign: "left",
  },

  te2: {
    marginLeft: 9,
    marginRight: 17,
  },
  firstdiv: {
    width: 100,
    height: 80,
    // borderRadius: 50,
    backgroundColor: "rgb(255,255,25)",
    position: "absolute",
    top: 30,
    left: 0,

    transform: [{ rotateX: "-25turn" }],
    //  transform: rotateX('133.73deg'),
    opacity: 0.8,
  },
});
