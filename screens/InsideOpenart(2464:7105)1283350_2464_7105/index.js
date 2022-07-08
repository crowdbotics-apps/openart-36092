import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2f300d19-adab-4890-9ca0-9259ad7e09c1"
        }}
        style={styles.ImageBackground_2464_7106}
      />
      <View style={styles.View_2464_7111}>
        <Text style={styles.Text_2464_7111}> Inside Open Art</Text>
      </View>
      <View style={styles.View_2464_7112} />
      <View style={styles.View_2464_7113} />
      <View style={styles.View_2464_7114} />
      <View style={styles.View_2464_7115} />
      <View style={styles.View_2464_7116} />
      <View style={styles.View_2464_7117} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fe93fb2c-ea25-47de-9974-d9127088979d"
        }}
        style={styles.ImageBackground_2464_7118}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4709c402-f946-4616-8e14-1d52fbfe667c"
        }}
        style={styles.ImageBackground_2464_7120}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fc20f50a-73ec-4378-beb5-6dcd22fe34aa"
        }}
        style={styles.ImageBackground_2464_7122}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a9d766d1-3a43-41e2-ac5c-d33409f873fa"
        }}
        style={styles.ImageBackground_2464_7124}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/29a82295-d42b-4435-b822-b10cb5215d9d"
        }}
        style={styles.ImageBackground_2464_7126}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/699032ae-85fc-468c-a1a8-59e6795506b5"
        }}
        style={styles.ImageBackground_2464_7128}
      />
      <View style={styles.View_2464_7130}>
        <Text style={styles.Text_2464_7130}>4pt grid system</Text>
      </View>
      <View style={styles.View_2464_7131}>
        <Text style={styles.Text_2464_7131}>Darkmode avaiable</Text>
      </View>
      <View style={styles.View_2464_7132}>
        <Text style={styles.Text_2464_7132}>Easy to customize</Text>
      </View>
      <View style={styles.View_2464_7133}>
        <Text style={styles.Text_2464_7133}>Variant components</Text>
      </View>
      <View style={styles.View_2464_7134}>
        <Text style={styles.Text_2464_7134}>Color style</Text>
      </View>
      <View style={styles.View_2464_7135}>
        <Text style={styles.Text_2464_7135}>Free font</Text>
      </View>
      <View style={styles.View_2464_7136}>
        <Text style={styles.Text_2464_7136}>
          OpenArt use Epilogue font family Available with open licence in
          gooogle font
        </Text>
      </View>
      <View style={styles.View_2464_7137}>
        <Text style={styles.Text_2464_7137}>
          All color in OpenArt are styled. You can change all design color with
          one click
        </Text>
      </View>
      <View style={styles.View_2464_7138}>
        <Text style={styles.Text_2464_7138}>
          Base on 4pt grid system. Our UI kit help you create perfect white
          space
        </Text>
      </View>
      <View style={styles.View_2464_7139}>
        <Text style={styles.Text_2464_7139}>
          Our UI Kit support darkmode Chage your design to dark mode with one
          click
        </Text>
      </View>
      <View style={styles.View_2464_7140}>
        <Text style={styles.Text_2464_7140}>
          Create any design with OpenArt UI kits{" "}
        </Text>
      </View>
      <View style={styles.View_2464_7141}>
        <Text style={styles.Text_2464_7141}>
          All component art variant, easy to design, easy to control
        </Text>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("123%") },
  ImageBackground_2464_7106: {
    width: wp("82%"),
    minWidth: wp("82%"),
    height: hp("120%"),
    minHeight: hp("120%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-7%")
  },
  View_2464_7111: {
    width: wp("28%"),
    minWidth: wp("28%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("16%"),
    justifyContent: "flex-start"
  },
  Text_2464_7111: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 45,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2464_7112: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("37%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_2464_7113: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("69%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_2464_7114: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("37%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_2464_7115: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("69%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_2464_7116: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("37%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_2464_7117: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("69%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_2464_7118: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_2464_7120: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%")
  },
  ImageBackground_2464_7122: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%")
  },
  ImageBackground_2464_7124: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("72%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_2464_7126: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("72%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%")
  },
  ImageBackground_2464_7128: {
    width: wp("3%"),
    height: hp("6%"),
    top: hp("71%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%")
  },
  View_2464_7130: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("49%"),
    justifyContent: "flex-start"
  },
  Text_2464_7130: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2464_7131: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("79%"),
    justifyContent: "flex-start"
  },
  Text_2464_7131: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2464_7132: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("79%"),
    justifyContent: "flex-start"
  },
  Text_2464_7132: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2464_7133: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("79%"),
    justifyContent: "flex-start"
  },
  Text_2464_7133: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2464_7134: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("49%"),
    justifyContent: "flex-start"
  },
  Text_2464_7134: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2464_7135: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("49%"),
    justifyContent: "flex-start"
  },
  Text_2464_7135: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2464_7136: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("54%"),
    justifyContent: "flex-start"
  },
  Text_2464_7136: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2464_7137: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("54%"),
    justifyContent: "flex-start"
  },
  Text_2464_7137: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2464_7138: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("54%"),
    justifyContent: "flex-start"
  },
  Text_2464_7138: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2464_7139: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("84%"),
    justifyContent: "flex-start"
  },
  Text_2464_7139: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2464_7140: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("84%"),
    justifyContent: "flex-start"
  },
  Text_2464_7140: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2464_7141: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("84%"),
    justifyContent: "flex-start"
  },
  Text_2464_7141: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
