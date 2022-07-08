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
      <View style={styles.View_437_7831} />
      <View style={styles.View_437_7832}>
        <Text style={styles.Text_437_7832}>Light mode</Text>
      </View>
      <View style={styles.View_437_7835}>
        <Text style={styles.Text_437_7835}>Home</Text>
      </View>
      <View style={styles.View_437_7836}>
        <Text style={styles.Text_437_7836}>Home</Text>
      </View>
      <View style={styles.View_437_7837}>
        <Text style={styles.Text_437_7837}>Items detail</Text>
      </View>
      <View style={styles.View_437_7838}>
        <Text style={styles.Text_437_7838}>Items detail</Text>
      </View>
      <View style={styles.View_437_7839}>
        <Text style={styles.Text_437_7839}>Profile</Text>
      </View>
      <View style={styles.View_437_7840}>
        <Text style={styles.Text_437_7840}>Profile</Text>
      </View>
      <View style={styles.View_437_7841}>
        <Text style={styles.Text_437_7841}>Discover</Text>
      </View>
      <View style={styles.View_437_7842}>
        <Text style={styles.Text_437_7842}>Discover</Text>
      </View>
      <View style={styles.View_437_7843}>
        <Text style={styles.Text_437_7843}>Search</Text>
      </View>
      <View style={styles.View_437_7844}>
        <Text style={styles.Text_437_7844}>Search</Text>
      </View>
      <View style={styles.View_437_7845}>
        <Text style={styles.Text_437_7845}>Place a bid</Text>
      </View>
      <View style={styles.View_437_7846}>
        <Text style={styles.Text_437_7846}>Place a bid</Text>
      </View>
      <View style={styles.View_437_7847}>
        <Text style={styles.Text_437_7847}>Profile</Text>
      </View>
      <View style={styles.View_437_7848}>
        <Text style={styles.Text_437_7848}>Profile</Text>
      </View>
      <View style={styles.View_437_7849}>
        <Text style={styles.Text_437_7849}>Upload artwork</Text>
      </View>
      <View style={styles.View_437_7850}>
        <Text style={styles.Text_437_7850}>Upload artwork</Text>
      </View>
      <View style={styles.View_437_7851}>
        <Text style={styles.Text_437_7851}>Connect wallet</Text>
      </View>
      <View style={styles.View_437_7852}>
        <Text style={styles.Text_437_7852}>Connect wallet</Text>
      </View>
      <View style={styles.View_437_7853}>
        <Text style={styles.Text_437_7853}>Process</Text>
      </View>
      <View style={styles.View_437_7854}>
        <Text style={styles.Text_437_7854}>Process</Text>
      </View>
      <View style={styles.View_437_7855}>
        <Text style={styles.Text_437_7855}>Success</Text>
      </View>
      <View style={styles.View_437_7856}>
        <Text style={styles.Text_437_7856}>Success</Text>
      </View>
      <View style={styles.View_437_7859}>
        <Text style={styles.Text_437_7859}>Dark mode</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/492cd95a-b42c-4784-8a57-7c8c4612beaa"
        }}
        style={styles.ImageBackground_437_7860}
      />
      <View style={styles.View_437_7949}>
        <Text style={styles.Text_437_7949}>For user</Text>
      </View>
      <View style={styles.View_437_7950}>
        <Text style={styles.Text_437_7950}>For user</Text>
      </View>
      <View style={styles.View_437_7951}>
        <Text style={styles.Text_437_7951}>For creator</Text>
      </View>
      <View style={styles.View_437_7952}>
        <Text style={styles.Text_437_7952}>For creator</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("145%") },
  View_437_7831: {
    width: wp("48%"),
    minWidth: wp("48%"),
    height: hp("129%"),
    minHeight: hp("129%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    top: hp("6%"),
    backgroundColor: "rgba(42, 42, 46, 1)"
  },
  View_437_7832: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("10%"),
    justifyContent: "center"
  },
  Text_437_7832: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 38,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.9999998807907104,
    textTransform: "none"
  },
  View_437_7835: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("29%"),
    justifyContent: "center"
  },
  Text_437_7835: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_437_7836: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("29%"),
    justifyContent: "center"
  },
  Text_437_7836: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_437_7837: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("36%"),
    justifyContent: "center"
  },
  Text_437_7837: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_437_7838: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("36%"),
    justifyContent: "center"
  },
  Text_437_7838: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_437_7839: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("44%"),
    justifyContent: "center"
  },
  Text_437_7839: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_437_7840: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("44%"),
    justifyContent: "center"
  },
  Text_437_7840: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_437_7841: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("52%"),
    justifyContent: "center"
  },
  Text_437_7841: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_437_7842: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("52%"),
    justifyContent: "center"
  },
  Text_437_7842: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_437_7843: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("59%"),
    justifyContent: "center"
  },
  Text_437_7843: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_437_7844: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("59%"),
    justifyContent: "center"
  },
  Text_437_7844: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_437_7845: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("67%"),
    justifyContent: "center"
  },
  Text_437_7845: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_437_7846: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("67%"),
    justifyContent: "center"
  },
  Text_437_7846: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_437_7847: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("91%"),
    justifyContent: "center"
  },
  Text_437_7847: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_437_7848: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("91%"),
    justifyContent: "center"
  },
  Text_437_7848: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_437_7849: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("98%"),
    justifyContent: "center"
  },
  Text_437_7849: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_437_7850: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("98%"),
    justifyContent: "center"
  },
  Text_437_7850: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_437_7851: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("106%"),
    justifyContent: "center"
  },
  Text_437_7851: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_437_7852: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("106%"),
    justifyContent: "center"
  },
  Text_437_7852: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_437_7853: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("114%"),
    justifyContent: "center"
  },
  Text_437_7853: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_437_7854: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("114%"),
    justifyContent: "center"
  },
  Text_437_7854: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_437_7855: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("121%"),
    justifyContent: "center"
  },
  Text_437_7855: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_437_7856: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("121%"),
    justifyContent: "center"
  },
  Text_437_7856: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_437_7859: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("10%"),
    justifyContent: "center"
  },
  Text_437_7859: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 38,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.9999998807907104,
    textTransform: "none"
  },
  ImageBackground_437_7860: {
    width: wp("3%"),
    height: hp("4%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%")
  },
  View_437_7949: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("21%"),
    justifyContent: "center"
  },
  Text_437_7949: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.9999998807907104,
    textTransform: "none"
  },
  View_437_7950: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("21%"),
    justifyContent: "center"
  },
  Text_437_7950: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.9999998807907104,
    textTransform: "none"
  },
  View_437_7951: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("82%"),
    justifyContent: "center"
  },
  Text_437_7951: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.9999998807907104,
    textTransform: "none"
  },
  View_437_7952: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("82%"),
    justifyContent: "center"
  },
  Text_437_7952: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.9999998807907104,
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
