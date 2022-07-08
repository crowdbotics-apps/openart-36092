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
      <View style={styles.View_300_5}>
        <View style={styles.View_300_6}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a9f9ec33-9e51-4e7a-b58b-eb900cf5e4fb"
            }}
            style={styles.ImageBackground_I300_6_203_410}
          />
          <View style={styles.View_I300_6_338_16}>
            <View style={styles.View_I300_6_349_7250}>
              <Text style={styles.Text_I300_6_349_7250}>open</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a6d9e619-cc9d-4d2c-9d2e-0538315fddf7"
              }}
              style={styles.ImageBackground_I300_6_338_2219}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0d334cd2-caee-4906-8d68-1207da57cd03"
              }}
              style={styles.ImageBackground_I300_6_338_2220}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0302405d-78b2-4aec-a9f1-30b4e73a75f6"
              }}
              style={styles.ImageBackground_I300_6_338_2221}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/43ad7a17-adb8-45f2-aa5e-7732f6d4a1df"
              }}
              style={styles.ImageBackground_I300_6_338_2222}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/17be06bf-3997-4f20-a643-9b7236027984"
              }}
              style={styles.ImageBackground_I300_6_338_2223}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/29a95277-cb49-4a0a-8502-7758c8078938"
              }}
              style={styles.ImageBackground_I300_6_338_2224}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5d051388-9648-4142-bd19-378061551c8b"
              }}
              style={styles.ImageBackground_I300_6_338_2225}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/06ee0ef8-bd09-4570-8fa0-46edde741fab"
          }}
          style={styles.ImageBackground_300_7}
        />
      </View>
      <View style={styles.View_300_8}>
        <Text style={styles.Text_300_8}>Discover creator</Text>
      </View>
      <View style={styles.View_300_20}>
        <View style={styles.View_I300_20_206_942}>
          <Text style={styles.Text_I300_20_206_942}>
            The New Creative Economy
          </Text>
        </View>
        <View style={styles.View_I300_20_206_943}>
          <View style={styles.View_I300_20_206_943_112_169}>
            <Text style={styles.Text_I300_20_206_943_112_169}>Earn now</Text>
          </View>
        </View>
        <View style={styles.View_I300_20_206_948}>
          <View style={styles.View_I300_20_206_948_112_149}>
            <Text style={styles.Text_I300_20_206_948_112_149}>
              Discover more
            </Text>
          </View>
        </View>
        <View style={styles.View_I300_20_206_964}>
          <View style={styles.View_I300_20_206_959} />
          <View style={styles.View_I300_20_206_960}>
            <View style={styles.View_I300_20_206_960_127_1449} />
          </View>
          <View style={styles.View_I300_20_206_955}>
            <Text style={styles.Text_I300_20_206_955}>
              Instagram Twitter Discord Blog
            </Text>
          </View>
          <View style={styles.View_I300_20_206_956}>
            <Text style={styles.Text_I300_20_206_956}>
              About Community Guidelines Terms of Service Privacy Careers Help
            </Text>
          </View>
          <View style={styles.View_I300_20_206_957}>
            <Text style={styles.Text_I300_20_206_957}>© 2021 Openart</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/21af6918-17cd-49fc-bf38-e01d6804f16b"
          }}
          style={styles.ImageBackground_I300_20_338_2908}
        />
      </View>
      <View style={styles.View_300_49}>
        <Text style={styles.Text_300_49}>
          Follow at least five creators to build your feed…
        </Text>
      </View>
      <View style={styles.View_301_3}>
        <View style={styles.View_I301_3_300_54} />
        <View style={styles.View_I301_3_300_55}>
          <Text style={styles.Text_I301_3_300_55}>Holly Herndon</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/63c56fe8-ca06-4284-8e3c-8c96a25ad3dd"
          }}
          style={styles.ImageBackground_I301_3_300_50}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c1ac5c04-20ee-453a-9e83-517a955e6dc8"
          }}
          style={styles.ImageBackground_I301_3_300_53}
        />
        <View style={styles.View_I301_3_300_56}>
          <Text style={styles.Text_I301_3_300_56}>
            A family of artists in Ethiopia making art in the style of tizita-
            nostalgia and longing for the past. 📍 Addis Ababa …
          </Text>
        </View>
        <View style={styles.View_I301_3_300_62}>
          <View style={styles.View_I301_3_300_57}>
            <Text style={styles.Text_I301_3_300_57}>Followers</Text>
          </View>
          <View style={styles.View_I301_3_300_58}>
            <Text style={styles.Text_I301_3_300_58}>1024</Text>
          </View>
        </View>
        <View style={styles.View_I301_3_300_59}>
          <View style={styles.View_I301_3_300_59_110_32}>
            <Text style={styles.Text_I301_3_300_59_110_32}>Follow</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_302_0}>
        <View style={styles.View_I302_0_300_54} />
        <View style={styles.View_I302_0_300_55}>
          <Text style={styles.Text_I302_0_300_55}>Addie Wagenknecht</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1d339e0d-b4c3-4ef3-9662-24a8b8de51e7"
          }}
          style={styles.ImageBackground_I302_0_300_50}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7bcba0b9-1a96-46b7-9b8e-91a80893e620"
          }}
          style={styles.ImageBackground_I302_0_300_53}
        />
        <View style={styles.View_I302_0_300_56}>
          <Text style={styles.Text_I302_0_300_56}>
            Addie Wagenknecht and Aiala Hernando. Documentation of the End of
            the Worlds.
          </Text>
        </View>
        <View style={styles.View_I302_0_300_62}>
          <View style={styles.View_I302_0_300_57}>
            <Text style={styles.Text_I302_0_300_57}>Followers</Text>
          </View>
          <View style={styles.View_I302_0_300_58}>
            <Text style={styles.Text_I302_0_300_58}>1099</Text>
          </View>
        </View>
        <View style={styles.View_I302_0_300_59}>
          <View style={styles.View_I302_0_300_59_110_32}>
            <Text style={styles.Text_I302_0_300_59_110_32}>Follow</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_302_14}>
        <View style={styles.View_I302_14_300_54} />
        <View style={styles.View_I302_14_300_55}>
          <Text style={styles.Text_I302_14_300_55}>Kinlaw</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/949307d2-b07c-4383-8e48-9a67ca86164a"
          }}
          style={styles.ImageBackground_I302_14_300_50}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/41bcbc58-d150-49ba-a843-5a885a7e9901"
          }}
          style={styles.ImageBackground_I302_14_300_53}
        />
        <View style={styles.View_I302_14_300_56}>
          <Text style={styles.Text_I302_14_300_56}>
            Audio Composer, Choreographer,Vocalist + Scientist ~Sigh of My Hand
            (1/3) is listed now ~ made in partnersh…
          </Text>
        </View>
        <View style={styles.View_I302_14_300_62}>
          <View style={styles.View_I302_14_300_57}>
            <Text style={styles.Text_I302_14_300_57}>Followers</Text>
          </View>
          <View style={styles.View_I302_14_300_58}>
            <Text style={styles.Text_I302_14_300_58}>1099</Text>
          </View>
        </View>
        <View style={styles.View_I302_14_300_59}>
          <View style={styles.View_I302_14_300_59_110_32}>
            <Text style={styles.Text_I302_14_300_59_110_32}>Follow</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_302_28}>
        <View style={styles.View_I302_28_300_54} />
        <View style={styles.View_I302_28_300_55}>
          <Text style={styles.Text_I302_28_300_55}>Jennifer Mehigan</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d9553f22-f7b8-4908-8ff4-c02fcc5e92ae"
          }}
          style={styles.ImageBackground_I302_28_300_50}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/671116e1-e8aa-4a50-aaf8-cbdce8800ae7"
          }}
          style={styles.ImageBackground_I302_28_300_53}
        />
        <View style={styles.View_I302_28_300_56}>
          <Text style={styles.Text_I302_28_300_56}>
            LOW POLY GODDESS / Jennifer Mehigan is an interdisciplinary artist
            whose work engages with abstract manifestations of de…
          </Text>
        </View>
        <View style={styles.View_I302_28_300_62}>
          <View style={styles.View_I302_28_300_57}>
            <Text style={styles.Text_I302_28_300_57}>Followers</Text>
          </View>
          <View style={styles.View_I302_28_300_58}>
            <Text style={styles.Text_I302_28_300_58}>1099</Text>
          </View>
        </View>
        <View style={styles.View_I302_28_300_59}>
          <View style={styles.View_I302_28_300_59_110_32}>
            <Text style={styles.Text_I302_28_300_59_110_32}>Follow</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_302_45}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f69d7941-1267-4470-992c-2c6a04b663dc"
          }}
          style={styles.ImageBackground_I302_45_112_822}
        />
        <View style={styles.View_I302_45_112_307}>
          <Text style={styles.Text_I302_45_112_307}>Load more</Text>
        </View>
      </View>
      <View style={styles.View_303_0}>
        <View style={styles.View_303_1}>
          <View style={styles.View_I303_1_240_22}>
            <Text style={styles.Text_I303_1_240_22}>Feature Creatior</Text>
          </View>
        </View>
        <View style={styles.View_303_3}>
          <View style={styles.View_I303_3_240_22}>
            <Text style={styles.Text_I303_3_240_22}>All Creator</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_347_315}>
        <View style={styles.View_I347_315_300_54} />
        <View style={styles.View_I347_315_300_55}>
          <Text style={styles.Text_I347_315_300_55}>Kennedy Yanko</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bbefc1ca-d735-4a68-b16b-1ac1a65d4e15"
          }}
          style={styles.ImageBackground_I347_315_300_50}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/88b396dc-1b77-42b2-8436-dd0ee64dd25f"
          }}
          style={styles.ImageBackground_I347_315_300_53}
        />
        <View style={styles.View_I347_315_300_56}>
          <Text style={styles.Text_I347_315_300_56}>
            Kennedy Yanko is an artist working in found metal and paint skin.
            Her methods reflect a dual abstract expressionist-surr…
          </Text>
        </View>
        <View style={styles.View_I347_315_300_62}>
          <View style={styles.View_I347_315_300_57}>
            <Text style={styles.Text_I347_315_300_57}>Followers</Text>
          </View>
          <View style={styles.View_I347_315_300_58}>
            <Text style={styles.Text_I347_315_300_58}>2024</Text>
          </View>
        </View>
        <View style={styles.View_I347_315_300_59}>
          <View style={styles.View_I347_315_300_59_110_32}>
            <Text style={styles.Text_I347_315_300_59_110_32}>Follow</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(248, 248, 248, 1)" },
  View_2: { height: hp("450%") },
  View_300_5: {
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
  View_300_6: {
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
  ImageBackground_I300_6_203_410: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%"),
    top: hp("3%")
  },
  View_I300_6_338_16: {
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
  View_I300_6_349_7250: {
    width: wp("24%"),
    top: hp("-2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%"),
    justifyContent: "flex-start"
  },
  Text_I300_6_349_7250: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 30.409923553466797,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -2.8995864391326904,
    textTransform: "none"
  },
  ImageBackground_I300_6_338_2219: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%")
  },
  ImageBackground_I300_6_338_2220: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_I300_6_338_2221: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%")
  },
  ImageBackground_I300_6_338_2222: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%")
  },
  ImageBackground_I300_6_338_2223: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%")
  },
  ImageBackground_I300_6_338_2224: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%")
  },
  ImageBackground_I300_6_338_2225: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%")
  },
  ImageBackground_300_7: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%")
  },
  View_300_8: {
    width: wp("46%"),
    minWidth: wp("46%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("13%"),
    justifyContent: "flex-start"
  },
  Text_300_8: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_300_20: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("91%"),
    minHeight: hp("91%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("360%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I300_20_206_942: {
    flexGrow: 1,
    width: wp("90%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("10%"),
    justifyContent: "flex-start"
  },
  Text_I300_20_206_942: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 20.724939346313477,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25724939346313475,
    textTransform: "none"
  },
  View_I300_20_206_943: {
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
  View_I300_20_206_943_112_169: {
    flexGrow: 1,
    width: wp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I300_20_206_943_112_169: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I300_20_206_948: {
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
  View_I300_20_206_948_112_149: {
    flexGrow: 1,
    width: wp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I300_20_206_948_112_149: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I300_20_206_964: {
    flexGrow: 1,
    width: wp("101%"),
    height: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("48%")
  },
  View_I300_20_206_959: {
    width: wp("100%"),
    height: hp("42%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(34, 34, 34, 1)"
  },
  View_I300_20_206_960: {
    width: wp("100%"),
    height: hp("0%"),
    top: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I300_20_206_960_127_1449: {
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
  View_I300_20_206_955: {
    width: wp("23%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "flex-start"
  },
  Text_I300_20_206_955: {
    color: "rgba(248, 248, 248, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I300_20_206_956: {
    width: wp("49%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    justifyContent: "flex-start"
  },
  Text_I300_20_206_956: {
    color: "rgba(248, 248, 248, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I300_20_206_957: {
    width: wp("27%"),
    top: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "flex-start"
  },
  Text_I300_20_206_957: {
    color: "rgba(240, 240, 240, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I300_20_338_2908: {
    flexGrow: 1,
    width: wp("47%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("3%")
  },
  View_300_49: {
    width: wp("62%"),
    minWidth: wp("62%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("19%"),
    justifyContent: "flex-start"
  },
  Text_300_49: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_301_3: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("54%"),
    minHeight: hp("54%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("100%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I301_3_300_54: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18%"),
    backgroundColor: "rgba(252, 252, 252, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24
  },
  View_I301_3_300_55: {
    flexGrow: 1,
    width: wp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("27%"),
    justifyContent: "flex-start"
  },
  Text_I301_3_300_55: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.24,
    textTransform: "none"
  },
  ImageBackground_I301_3_300_50: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  ImageBackground_I301_3_300_53: {
    flexGrow: 1,
    width: wp("27%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("13%")
  },
  View_I301_3_300_56: {
    flexGrow: 1,
    width: wp("83%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("33%"),
    justifyContent: "flex-start"
  },
  Text_I301_3_300_56: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I301_3_300_62: {
    flexGrow: 1,
    width: wp("43%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("47%")
  },
  View_I301_3_300_57: {
    width: wp("21%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    justifyContent: "center"
  },
  Text_I301_3_300_57: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I301_3_300_58: {
    width: wp("20%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I301_3_300_58: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.32,
    textTransform: "none"
  },
  View_I301_3_300_59: {
    flexGrow: 1,
    width: wp("30%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("46%"),
    backgroundColor: "rgba(252, 252, 252, 1)"
  },
  View_I301_3_300_59_110_32: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I301_3_300_59_110_32: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_302_0: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("54%"),
    minHeight: hp("54%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("159%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I302_0_300_54: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18%"),
    backgroundColor: "rgba(252, 252, 252, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24
  },
  View_I302_0_300_55: {
    flexGrow: 1,
    width: wp("66%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("27%"),
    justifyContent: "flex-start"
  },
  Text_I302_0_300_55: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.24,
    textTransform: "none"
  },
  ImageBackground_I302_0_300_50: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  ImageBackground_I302_0_300_53: {
    flexGrow: 1,
    width: wp("27%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("13%")
  },
  View_I302_0_300_56: {
    flexGrow: 1,
    width: wp("83%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("33%"),
    justifyContent: "flex-start"
  },
  Text_I302_0_300_56: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I302_0_300_62: {
    flexGrow: 1,
    width: wp("43%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("47%")
  },
  View_I302_0_300_57: {
    width: wp("21%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    justifyContent: "center"
  },
  Text_I302_0_300_57: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I302_0_300_58: {
    width: wp("20%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I302_0_300_58: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.32,
    textTransform: "none"
  },
  View_I302_0_300_59: {
    flexGrow: 1,
    width: wp("30%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("46%"),
    backgroundColor: "rgba(252, 252, 252, 1)"
  },
  View_I302_0_300_59_110_32: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I302_0_300_59_110_32: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_302_14: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("54%"),
    minHeight: hp("54%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("218%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I302_14_300_54: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18%"),
    backgroundColor: "rgba(252, 252, 252, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24
  },
  View_I302_14_300_55: {
    flexGrow: 1,
    width: wp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("27%"),
    justifyContent: "flex-start"
  },
  Text_I302_14_300_55: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.24,
    textTransform: "none"
  },
  ImageBackground_I302_14_300_50: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  ImageBackground_I302_14_300_53: {
    flexGrow: 1,
    width: wp("27%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("13%")
  },
  View_I302_14_300_56: {
    flexGrow: 1,
    width: wp("83%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("33%"),
    justifyContent: "flex-start"
  },
  Text_I302_14_300_56: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I302_14_300_62: {
    flexGrow: 1,
    width: wp("43%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("47%")
  },
  View_I302_14_300_57: {
    width: wp("21%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    justifyContent: "center"
  },
  Text_I302_14_300_57: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I302_14_300_58: {
    width: wp("20%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I302_14_300_58: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.32,
    textTransform: "none"
  },
  View_I302_14_300_59: {
    flexGrow: 1,
    width: wp("30%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("46%"),
    backgroundColor: "rgba(252, 252, 252, 1)"
  },
  View_I302_14_300_59_110_32: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I302_14_300_59_110_32: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_302_28: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("54%"),
    minHeight: hp("54%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("277%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I302_28_300_54: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18%"),
    backgroundColor: "rgba(252, 252, 252, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24
  },
  View_I302_28_300_55: {
    flexGrow: 1,
    width: wp("58%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("27%"),
    justifyContent: "flex-start"
  },
  Text_I302_28_300_55: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.24,
    textTransform: "none"
  },
  ImageBackground_I302_28_300_50: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  ImageBackground_I302_28_300_53: {
    flexGrow: 1,
    width: wp("27%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("13%")
  },
  View_I302_28_300_56: {
    flexGrow: 1,
    width: wp("83%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("33%"),
    justifyContent: "flex-start"
  },
  Text_I302_28_300_56: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I302_28_300_62: {
    flexGrow: 1,
    width: wp("43%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("47%")
  },
  View_I302_28_300_57: {
    width: wp("21%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    justifyContent: "center"
  },
  Text_I302_28_300_57: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I302_28_300_58: {
    width: wp("20%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I302_28_300_58: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.32,
    textTransform: "none"
  },
  View_I302_28_300_59: {
    flexGrow: 1,
    width: wp("30%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("46%"),
    backgroundColor: "rgba(252, 252, 252, 1)"
  },
  View_I302_28_300_59_110_32: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I302_28_300_59_110_32: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_302_45: {
    width: wp("81%"),
    height: hp("8%"),
    top: hp("337%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I302_45_112_822: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("2%")
  },
  View_I302_45_112_307: {
    flexGrow: 1,
    width: wp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I302_45_112_307: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_303_0: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("31%")
  },
  View_303_1: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I303_1_240_22: {
    flexGrow: 1,
    width: wp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I303_1_240_22: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_303_3: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("0%"),
    backgroundColor: "rgba(240, 240, 240, 1)"
  },
  View_I303_3_240_22: {
    flexGrow: 1,
    width: wp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I303_3_240_22: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_347_315: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("54%"),
    minHeight: hp("54%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("40%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I347_315_300_54: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18%"),
    backgroundColor: "rgba(252, 252, 252, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24
  },
  View_I347_315_300_55: {
    flexGrow: 1,
    width: wp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("27%"),
    justifyContent: "flex-start"
  },
  Text_I347_315_300_55: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.24,
    textTransform: "none"
  },
  ImageBackground_I347_315_300_50: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  ImageBackground_I347_315_300_53: {
    flexGrow: 1,
    width: wp("27%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("13%")
  },
  View_I347_315_300_56: {
    flexGrow: 1,
    width: wp("83%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("33%"),
    justifyContent: "flex-start"
  },
  Text_I347_315_300_56: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I347_315_300_62: {
    flexGrow: 1,
    width: wp("43%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("47%")
  },
  View_I347_315_300_57: {
    width: wp("21%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    justifyContent: "center"
  },
  Text_I347_315_300_57: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I347_315_300_58: {
    width: wp("21%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I347_315_300_58: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.32,
    textTransform: "none"
  },
  View_I347_315_300_59: {
    flexGrow: 1,
    width: wp("30%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("46%"),
    backgroundColor: "rgba(252, 252, 252, 1)"
  },
  View_I347_315_300_59_110_32: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I347_315_300_59_110_32: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 13,
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
