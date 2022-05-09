import { useState } from 'react';
import { StyleSheet, Text, TextInput, View ,TouchableOpacity, ImageBackground} from 'react-native';


import axios from 'axios';




export default function Screen1({navigation}){

    const [name,setName] = useState("197981723");
    const [pass,setPass] = useState("092973094");  
    


    const handleSubmit = async() =>{
       const  url = 'https://securitygaurd.herokuapp.com/Login'
       const responsee = await axios.post(url,{
            name : name,
            password:pass,
        })

        if(responsee.data.Value == 1){
          navigation.navigate("Screen-B", { teacherName: name });

        }

        else{
          alert("Invalid credentials!!");
        }
        // console.log(responsee);
       
       
    }

    const handleChange = () =>{
         
       navigation.navigate('Screen-C',{teacherName:name});
    }


   

      return (
        <View style={styles.container}>
          <ImageBackground
            source={require("./assets/app7.jpg")}
            resizeMode="cover"
            style={styles.image}
          >
            {/* <View style={styles.smallcontainer}>
              <View style={styles.smalls}> */}
                <Text style={styles.text1}>Log in</Text>
                <Text>{"\n"}</Text>
                <TextInput
                  placeholder="Enter Name"
                  style={styles.text2}
                  onChangeText={(text) => setName(text)}
                ></TextInput>
                <Text>{"\n"}</Text>

                <TextInput
                  placeholder="Password"
                  style={styles.text2}
                  onChangeText={(pass) => setPass(pass)}
                  secureTextEntry={true}
                ></TextInput>

                <Text>{"\n"}</Text>
                <Text>{"\n"}</Text>
                <TouchableOpacity onPress={handleSubmit}>
                  <View style={styles.btn}>
                    <Text style={styles.btntext}>Log in</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleChange}>
                  <View>
                    <Text style={styles.btntext1}>Change Password?</Text>
                  </View>
                </TouchableOpacity>
              {/* </View>
            </View> */}
          </ImageBackground>
        </View>
      );


  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    // backgroundColor: "#F5F878",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  smallcontainer: {
    marginTop: 60,
    width: 270,
    height: 500,
    borderWidth: 1,
    borderColor: "rgb(0,0,0)",
    borderRadius: 20,
    backgroundColor: "#FFB6C1",
  },
  smalls: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  text1: {
    textAlign: "center",
    fontSize: 32,
  },
  text2: {
    backgroundColor: "#A6F3C0",
    width: 250,
    height: 45,
    borderRadius: 9,
    padding: 12,
  },

  btn: {
    backgroundColor: "#F26F25",
    borderRadius: 20,
    width: 120,
    height: 40,
  },

  btntext: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "600",
    padding: 7,
  },

  input: {
    margin: 25,
    borderRadius: 25,
    borderColor: "#FF8484",
    textAlign: "center",
    backgroundColor: "#FF8484",
    width: 250,
    height: 60,
    fontSize: 20,
    padding: 9,
  },

  btntext1: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "600",
    padding: 7,
    marginTop: 30,
  },
});
