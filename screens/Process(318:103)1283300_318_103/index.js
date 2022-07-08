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
      <View style={styles.View_318_104}>
        <View style={styles.View_318_105}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0dfce824-265e-47eb-874b-fc083348f29e"
            }}
            style={styles.ImageBackground_I318_105_203_410}
          />
          <View style={styles.View_I318_105_338_16}>
            <View style={styles.View_I318_105_349_7250}>
              <Text style={styles.Text_I318_105_349_7250}>open</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bedce35e-7d3e-422d-87d8-efd52f72ce33"
              }}
              style={styles.ImageBackground_I318_105_338_2219}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1dbd5e86-ac25-4d73-be24-c41d52998fc5"
              }}
              style={styles.ImageBackground_I318_105_338_2220}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ba1a368d-9748-4e1c-8949-277128420c21"
              }}
              style={styles.ImageBackground_I318_105_338_2221}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1de1dd0c-877b-4582-b5c0-ca4626c17e50"
              }}
              style={styles.ImageBackground_I318_105_338_2222}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f90ea72a-e433-40bb-9692-48f59bb70489"
              }}
              style={styles.ImageBackground_I318_105_338_2223}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/54f832e9-2a91-45e2-81c4-4413872e5f0a"
              }}
              style={styles.ImageBackground_I318_105_338_2224}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bc355c1f-a39c-4685-904a-7da4ff0abe45"
              }}
              style={styles.ImageBackground_I318_105_338_2225}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/045f0805-132a-42bd-a11c-cd54596941b5"
          }}
          style={styles.ImageBackground_318_106}
        />
      </View>
      <View style={styles.View_318_107}>
        <Text style={styles.Text_318_107}>Your NFT has been listed!</Text>
      </View>
      <View style={styles.View_318_108}>
        <View style={styles.View_I318_108_206_942}>
          <Text style={styles.Text_I318_108_206_942}>
            The New Creative Economy
          </Text>
        </View>
        <View style={styles.View_I318_108_206_943}>
          <View style={styles.View_I318_108_206_943_112_169}>
            <Text style={styles.Text_I318_108_206_943_112_169}>Earn now</Text>
          </View>
        </View>
        <View style={styles.View_I318_108_206_948}>
          <View style={styles.View_I318_108_206_948_112_149}>
            <Text style={styles.Text_I318_108_206_948_112_149}>
              Discover more
            </Text>
          </View>
        </View>
        <View style={styles.View_I318_108_206_964}>
          <View style={styles.View_I318_108_206_959} />
          <View style={styles.View_I318_108_206_960}>
            <View style={styles.View_I318_108_206_960_127_1449} />
          </View>
          <View style={styles.View_I318_108_206_955}>
            <Text style={styles.Text_I318_108_206_955}>
              Instagram Twitter Discord Blog
            </Text>
          </View>
          <View style={styles.View_I318_108_206_956}>
            <Text style={styles.Text_I318_108_206_956}>
              About Community Guidelines Terms of Service Privacy Careers Help
            </Text>
          </View>
          <View style={styles.View_I318_108_206_957}>
            <Text style={styles.Text_I318_108_206_957}>© 2021 Openart</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/07d6e29b-cd5b-42e9-bff5-f0de611e562e"
          }}
          style={styles.ImageBackground_I318_108_338_2908}
        />
      </View>
      <View style={styles.View_318_109}>
        <Text style={styles.Text_318_109}>
          Your NFT has been successfully listed on our marketplace.
        </Text>
      </View>
      <View style={styles.View_318_111}>
        <View style={styles.View_318_112}>
          <View style={styles.View_I318_112_220_70} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e0f16a1b-6f35-448a-9721-0516c48d2e18"
            }}
            style={styles.ImageBackground_I318_112_206_424}
          />
          <View style={styles.View_I318_112_206_425}>
            <View style={styles.View_I318_112_206_425_106_459}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/63e3c737-f003-4741-92e4-e11054e61628"
                }}
                style={styles.ImageBackground_I318_112_206_425_106_460}
              />
              <View style={styles.View_I318_112_206_425_106_461}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/764677d9-4f76-4787-bfa4-1b445f7910de"
                  }}
                  style={styles.ImageBackground_I318_112_206_425_106_462}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/202831d5-026f-419a-af37-897d6183ca26"
                  }}
                  style={styles.ImageBackground_I318_112_206_425_106_463}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/df18e746-0205-4d6a-a8f1-4d1511c25d45"
                }}
                style={styles.ImageBackground_I318_112_206_425_106_464}
              />
            </View>
            <View style={styles.View_I318_112_206_425_106_465}>
              <Text style={styles.Text_I318_112_206_425_106_465}>
                Pawel Czerwinski
              </Text>
            </View>
            <View style={styles.View_I318_112_206_425_106_466}>
              <Text style={styles.Text_I318_112_206_425_106_466}>Creator</Text>
            </View>
          </View>
          <View style={styles.View_I318_112_206_441}>
            <Text style={styles.Text_I318_112_206_441}>Silent Color</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e21f840d-01bf-4392-afe9-b8d04a3bcc61"
            }}
            style={styles.ImageBackground_I318_112_220_201}
          />
        </View>
        <View style={styles.View_318_113}>
          <View style={styles.View_318_114} />
          <View style={styles.View_318_115}>
            <Text style={styles.Text_318_115}>Reserve price</Text>
          </View>
          <View style={styles.View_318_116}>
            <Text style={styles.Text_318_116}>2.00 ETH</Text>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/89779f5e-3004-4796-86e1-926e6a60ee77"
        }}
        style={styles.ImageBackground_318_158}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ba339690-7f7f-4d9a-a23b-f45bdf733c21"
        }}
        style={styles.ImageBackground_318_167}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/48d10a6e-3819-472d-9956-614416609ab8"
        }}
        style={styles.ImageBackground_318_170}
      />
      <View style={styles.View_318_173}>
        <View style={styles.View_I318_173_112_112}>
          <Text style={styles.Text_I318_173_112_112}>Share</Text>
        </View>
      </View>
      <View style={styles.View_318_180}>
        <View style={styles.View_I318_180_112_112}>
          <Text style={styles.Text_I318_180_112_112}>View in marketplace</Text>
        </View>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(248, 248, 248, 1)" },
  View_2: { height: hp("278%") },
  View_318_104: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%")
  },
  View_318_105: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I318_105_203_410: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%"),
    top: hp("3%")
  },
  View_I318_105_338_16: {
    flexGrow: 1,
    width: wp("37%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I318_105_349_7250: {
    width: wp("24%"),
    top: hp("-2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%"),
    justifyContent: "flex-start"
  },
  Text_I318_105_349_7250: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 30.409923553466797,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -2.8995864391326904,
    textTransform: "none"
  },
  ImageBackground_I318_105_338_2219: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%")
  },
  ImageBackground_I318_105_338_2220: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_I318_105_338_2221: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%")
  },
  ImageBackground_I318_105_338_2222: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%")
  },
  ImageBackground_I318_105_338_2223: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%")
  },
  ImageBackground_I318_105_338_2224: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%")
  },
  ImageBackground_I318_105_338_2225: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%")
  },
  ImageBackground_318_106: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%")
  },
  View_318_107: {
    width: wp("84%"),
    minWidth: wp("84%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("43%"),
    justifyContent: "flex-start"
  },
  Text_318_107: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.32,
    textTransform: "none"
  },
  View_318_108: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("91%"),
    minHeight: hp("91%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("187%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I318_108_206_942: {
    flexGrow: 1,
    width: wp("90%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("10%"),
    justifyContent: "flex-start"
  },
  Text_I318_108_206_942: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 20.724939346313477,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25724939346313475,
    textTransform: "none"
  },
  View_I318_108_206_943: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("19%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I318_108_206_943_112_169: {
    flexGrow: 1,
    width: wp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I318_108_206_943_112_169: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I318_108_206_948: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("29%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I318_108_206_948_112_149: {
    flexGrow: 1,
    width: wp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I318_108_206_948_112_149: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I318_108_206_964: {
    flexGrow: 1,
    width: wp("101%"),
    height: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("48%")
  },
  View_I318_108_206_959: {
    width: wp("100%"),
    height: hp("42%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(34, 34, 34, 1)"
  },
  View_I318_108_206_960: {
    width: wp("100%"),
    height: hp("0%"),
    top: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I318_108_206_960_127_1449: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(220, 220, 220, 1)"
  },
  View_I318_108_206_955: {
    width: wp("23%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "flex-start"
  },
  Text_I318_108_206_955: {
    color: "rgba(248, 248, 248, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I318_108_206_956: {
    width: wp("49%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    justifyContent: "flex-start"
  },
  Text_I318_108_206_956: {
    color: "rgba(248, 248, 248, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I318_108_206_957: {
    width: wp("27%"),
    top: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "flex-start"
  },
  Text_I318_108_206_957: {
    color: "rgba(240, 240, 240, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I318_108_338_2908: {
    flexGrow: 1,
    width: wp("47%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("3%")
  },
  View_318_109: {
    width: wp("80%"),
    minWidth: wp("80%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("54%"),
    justifyContent: "flex-start"
  },
  Text_318_109: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_318_111: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("82%"),
    minHeight: hp("82%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("64%")
  },
  View_318_112: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("72%"),
    minHeight: hp("72%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I318_112_220_70: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("72%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I318_112_206_424: {
    flexGrow: 1,
    width: wp("85%"),
    height: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    resizeMode: "cover"
  },
  View_I318_112_206_425: {
    flexGrow: 1,
    width: wp("58%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("62%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I318_112_206_425_106_459: {
    flexGrow: 1,
    width: wp("15%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I318_112_206_425_106_460: {
    width: wp("14%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I318_112_206_425_106_461: {
    width: wp("13%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I318_112_206_425_106_462: {
    width: wp("13%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I318_112_206_425_106_463: {
    width: wp("13%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_I318_112_206_425_106_464: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  View_I318_112_206_425_106_465: {
    flexGrow: 1,
    width: wp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I318_112_206_425_106_465: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I318_112_206_425_106_466: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I318_112_206_425_106_466: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I318_112_206_441: {
    flexGrow: 1,
    width: wp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("58%"),
    justifyContent: "flex-start"
  },
  Text_I318_112_206_441: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.24,
    textTransform: "none"
  },
  ImageBackground_I318_112_220_201: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("64%")
  },
  View_318_113: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("73%")
  },
  View_318_114: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 252, 1)"
  },
  View_318_115: {
    width: wp("37%"),
    minWidth: wp("37%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_318_115: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_318_116: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_318_116: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.24,
    textTransform: "none"
  },
  ImageBackground_318_158: {
    width: wp("46%"),
    minWidth: wp("46%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("18%"),
    resizeMode: "cover"
  },
  ImageBackground_318_167: {
    width: wp("15%"),
    height: hp("7%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%")
  },
  ImageBackground_318_170: {
    width: wp("9%"),
    height: hp("5%"),
    top: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%")
  },
  View_318_173: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("151%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I318_173_112_112: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I318_173_112_112: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_318_180: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("160%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I318_180_112_112: {
    flexGrow: 1,
    width: wp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I318_180_112_112: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 16,
    fontWeight: "700",
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
