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
import axios from "axios";


export default function Screen3({ navigation,route }) {
 
  const [oldpassword,setOldpassword] = useState("");
  const [newpassword,setNewpassword] = useState("");
  const [cpassword,setCpassword] = useState("");
  const [name,setName] = useState("");
  

  // const password  = route.params.password;

//   const image = { uri: "" };
  const onPressHandler = () => {
    navigation.navigate("Screen-A");
  };

  const validateName = () => {

    if(newpassword != cpassword)
    return false;

    return true;
    
  };

 
  const handleChange = async () => {

    // console.log(new Date());

    
     const ress = validateName();

    if (ress == true) {
      const uri = "https://securitygaurd.herokuapp.com/Login1";
      const result = await axios.post(uri, {
        
        teachername: name,
        oldpassword : oldpassword,
        newpassword : newpassword,
    });

      
      alert("Valid format");
      // console.log(result);
      
      if (result.data.Value == 1)
      {
        alert("Successfully changed password!!");
      }
      else if(result.data.Value == 0)
      {
        alert("User Not exist!!")

      }
     
  
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
        <Text style={styles.text9}>Change Password</Text>

        <View style={styles.new}>
          <Text style={styles.text5}>Name :</Text>
          <Text>{"  "}</Text>
          <TextInput
            onChangeText={(text) => setName(text)}
            style={styles.textinput}
            
          ></TextInput>
        </View>

        <Text>{"\n"}</Text>

        <View style={styles.new}>
          <Text style={styles.text4}>Old Password :</Text>
          <Text>{"  "}</Text>
          <TextInput
            onChangeText={(text) => setOldpassword(text)}
            style={styles.textinput}
            // secureTextEntry={true}
          ></TextInput>
        </View>

       
        <Text>{"\n"}</Text>

        <View style={styles.new}>
          <Text style={styles.text4}>New Password :</Text>
          <Text>{"  "}</Text>
          <TextInput
            onChangeText={(text) => setNewpassword(text)}
            style={styles.textinput}
            // secureTextEntry={true}
          ></TextInput>
        </View>

       
        <Text>{"\n"}</Text>

        <View style={styles.new}>
          <Text style={styles.text4}>Confirm Password :</Text>
          <Text>{"  "}</Text>
          <TextInput
            onChangeText={(text) => setCpassword(text)}
            style={styles.textinput2}
            // secureTextEntry={true}
          ></TextInput>
        </View>

        <Text>{"\n"}</Text>

        <View style={styles.bottom}>
          <TouchableOpacity onPress={handleChange}>
            <View style={styles.btn}>
              <Text style={styles.btntext}>Add Number</Text>
            </View>
          </TouchableOpacity>

          <Pressable onPress={onPressHandler}>
            <Text style={styles.text6}>Go back</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text2: {
    backgroundColor: "#FC6C85",
    width: 250,
    height: 45,
    borderRadius: 9,
    padding: 12,
    textAlign: "center",
    fontSize: 18,
  },
  bottom: {
    marginTop: 20,
  },
  text9: {
    marginBottom: 50,
    marginTop: 125,
    fontSize: 20,
    fontWeight: "600",
  },

  boxi: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  new: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  box: {
    height: 300,
    width: 100,
    borderRadius: 10,
    // marginVertical: 40,
    backgroundColor: "#61d",
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

  text4: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "400",
    // marginRight: 15,
  },
  text5: {
    textAlign: "left",
    fontSize: 15,
    fontWeight: "400",
    marginRight: 60,
  },

  textinput: {
    textAlign: "center",
    padding: 6,
    backgroundColor: "#91E",
    borderRadius: 20,
    color: "rgb(255,255,255)",
    fontSize: 16,
    width: 180,
    marginLeft: 30,
  },
  textinput2: {
    textAlign: "center",
    padding: 6,
    backgroundColor: "#91E",
    borderRadius: 20,
    color: "rgb(255,255,255)",
    fontSize: 16,
    width: 180,
    marginLeft: 10,
  },

  btntext: {
    padding: 10,
    fontSize: 15,
    backgroundColor: "#EC9706",
    borderRadius: 10,
    marginTop: 20,
    color: "rgb(255,255,255)",
  },

  text6: {
    padding: 10,
    fontSize: 15,
    backgroundColor: "#90EE90",
    borderRadius: 10,
    marginTop: 30,
    textAlign: "center",
  },
});
