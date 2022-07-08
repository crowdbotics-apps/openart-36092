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
      <View style={styles.View_398_8010}>
        <Text style={styles.Text_398_8010}>Discover creator</Text>
      </View>
      <View style={styles.View_398_8011}>
        <View style={styles.View_I398_8011_346_371}>
          <Text style={styles.Text_I398_8011_346_371}>
            The New Creative Economy
          </Text>
        </View>
        <View style={styles.View_I398_8011_346_372}>
          <View style={styles.View_I398_8011_346_372_112_169}>
            <Text style={styles.Text_I398_8011_346_372_112_169}>Earn now</Text>
          </View>
        </View>
        <View style={styles.View_I398_8011_346_373}>
          <View style={styles.View_I398_8011_346_373_112_149}>
            <Text style={styles.Text_I398_8011_346_373_112_149}>
              Discover more
            </Text>
          </View>
        </View>
        <View style={styles.View_I398_8011_346_374}>
          <View style={styles.View_I398_8011_346_375} />
          <View style={styles.View_I398_8011_346_376}>
            <View style={styles.View_I398_8011_346_376_127_1449} />
          </View>
          <View style={styles.View_I398_8011_346_377}>
            <Text style={styles.Text_I398_8011_346_377}>
              Instagram Twitter Discord Blog
            </Text>
          </View>
          <View style={styles.View_I398_8011_346_378}>
            <Text style={styles.Text_I398_8011_346_378}>
              About Community Guidelines Terms of Service Privacy Careers Help
            </Text>
          </View>
          <View style={styles.View_I398_8011_346_379}>
            <Text style={styles.Text_I398_8011_346_379}>© 2021 Openart</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3e169b4b-741f-4cd3-80ca-8381e6daa5af"
          }}
          style={styles.ImageBackground_I398_8011_346_380}
        />
      </View>
      <View style={styles.View_398_8012}>
        <Text style={styles.Text_398_8012}>
          Follow at least five creators to build your feed…
        </Text>
      </View>
      <View style={styles.View_398_8013}>
        <View style={styles.View_I398_8013_347_286} />
        <View style={styles.View_I398_8013_347_287}>
          <Text style={styles.Text_I398_8013_347_287}>Kennedy Yanko</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bcd10df1-1a82-46ef-8ec3-31178ce66ce5"
          }}
          style={styles.ImageBackground_I398_8013_347_288}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1b3f7a51-49dc-4f98-a790-61d50f6fc7c7"
          }}
          style={styles.ImageBackground_I398_8013_347_289}
        />
        <View style={styles.View_I398_8013_347_292}>
          <Text style={styles.Text_I398_8013_347_292}>
            Kennedy Yanko is an artist working in found metal and paint skin.
            Her methods reflect a dual abstract expressionist-surr…
          </Text>
        </View>
        <View style={styles.View_I398_8013_347_293}>
          <View style={styles.View_I398_8013_347_294}>
            <Text style={styles.Text_I398_8013_347_294}>Followers</Text>
          </View>
          <View style={styles.View_I398_8013_347_295}>
            <Text style={styles.Text_I398_8013_347_295}>2024</Text>
          </View>
        </View>
        <View style={styles.View_I398_8013_347_296}>
          <View style={styles.View_I398_8013_347_296_110_32}>
            <Text style={styles.Text_I398_8013_347_296_110_32}>Follow</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_398_8014}>
        <View style={styles.View_I398_8014_347_286} />
        <View style={styles.View_I398_8014_347_287}>
          <Text style={styles.Text_I398_8014_347_287}>Holly Herndon</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6846f2b9-3e74-4fd7-a290-fa0c1a4a3027"
          }}
          style={styles.ImageBackground_I398_8014_347_288}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2d3c3a28-fdc4-49e6-8c31-97d544430ece"
          }}
          style={styles.ImageBackground_I398_8014_347_289}
        />
        <View style={styles.View_I398_8014_347_292}>
          <Text style={styles.Text_I398_8014_347_292}>
            A family of artists in Ethiopia making art in the style of tizita-
            nostalgia and longing for the past. 📍 Addis Ababa …
          </Text>
        </View>
        <View style={styles.View_I398_8014_347_293}>
          <View style={styles.View_I398_8014_347_294}>
            <Text style={styles.Text_I398_8014_347_294}>Followers</Text>
          </View>
          <View style={styles.View_I398_8014_347_295}>
            <Text style={styles.Text_I398_8014_347_295}>1024</Text>
          </View>
        </View>
        <View style={styles.View_I398_8014_347_296}>
          <View style={styles.View_I398_8014_347_296_110_32}>
            <Text style={styles.Text_I398_8014_347_296_110_32}>Follow</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_398_8015}>
        <View style={styles.View_I398_8015_347_286} />
        <View style={styles.View_I398_8015_347_287}>
          <Text style={styles.Text_I398_8015_347_287}>Addie Wagenknecht</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5341f612-78f4-40eb-ba4b-da62108feb88"
          }}
          style={styles.ImageBackground_I398_8015_347_288}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a9ba713e-84c8-4007-8398-a151e37d9989"
          }}
          style={styles.ImageBackground_I398_8015_347_289}
        />
        <View style={styles.View_I398_8015_347_292}>
          <Text style={styles.Text_I398_8015_347_292}>
            Addie Wagenknecht and Aiala Hernando. Documentation of the End of
            the Worlds.
          </Text>
        </View>
        <View style={styles.View_I398_8015_347_293}>
          <View style={styles.View_I398_8015_347_294}>
            <Text style={styles.Text_I398_8015_347_294}>Followers</Text>
          </View>
          <View style={styles.View_I398_8015_347_295}>
            <Text style={styles.Text_I398_8015_347_295}>1099</Text>
          </View>
        </View>
        <View style={styles.View_I398_8015_347_296}>
          <View style={styles.View_I398_8015_347_296_110_32}>
            <Text style={styles.Text_I398_8015_347_296_110_32}>Follow</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_398_8016}>
        <View style={styles.View_I398_8016_347_286} />
        <View style={styles.View_I398_8016_347_287}>
          <Text style={styles.Text_I398_8016_347_287}>Kinlaw</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9d8d99ad-7069-4377-afcd-2219b414bd0f"
          }}
          style={styles.ImageBackground_I398_8016_347_288}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2b093c3a-f26d-43a7-a85c-8b413b9dc2a6"
          }}
          style={styles.ImageBackground_I398_8016_347_289}
        />
        <View style={styles.View_I398_8016_347_292}>
          <Text style={styles.Text_I398_8016_347_292}>
            Audio Composer, Choreographer,Vocalist + Scientist ~Sigh of My Hand
            (1/3) is listed now ~ made in partnersh…
          </Text>
        </View>
        <View style={styles.View_I398_8016_347_293}>
          <View style={styles.View_I398_8016_347_294}>
            <Text style={styles.Text_I398_8016_347_294}>Followers</Text>
          </View>
          <View style={styles.View_I398_8016_347_295}>
            <Text style={styles.Text_I398_8016_347_295}>1099</Text>
          </View>
        </View>
        <View style={styles.View_I398_8016_347_296}>
          <View style={styles.View_I398_8016_347_296_110_32}>
            <Text style={styles.Text_I398_8016_347_296_110_32}>Follow</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_398_8017}>
        <View style={styles.View_I398_8017_347_286} />
        <View style={styles.View_I398_8017_347_287}>
          <Text style={styles.Text_I398_8017_347_287}>Jennifer Mehigan</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/837920a1-5d52-4f3f-89c9-380e121195f4"
          }}
          style={styles.ImageBackground_I398_8017_347_288}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/03450568-d2e6-4358-854b-0ca2db2b8c32"
          }}
          style={styles.ImageBackground_I398_8017_347_289}
        />
        <View style={styles.View_I398_8017_347_292}>
          <Text style={styles.Text_I398_8017_347_292}>
            LOW POLY GODDESS / Jennifer Mehigan is an interdisciplinary artist
            whose work engages with abstract manifestations of de…
          </Text>
        </View>
        <View style={styles.View_I398_8017_347_293}>
          <View style={styles.View_I398_8017_347_294}>
            <Text style={styles.Text_I398_8017_347_294}>Followers</Text>
          </View>
          <View style={styles.View_I398_8017_347_295}>
            <Text style={styles.Text_I398_8017_347_295}>1099</Text>
          </View>
        </View>
        <View style={styles.View_I398_8017_347_296}>
          <View style={styles.View_I398_8017_347_296_110_32}>
            <Text style={styles.Text_I398_8017_347_296_110_32}>Follow</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_398_8018}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c581f95d-7a3f-4a80-8b45-8eea0dd43b74"
          }}
          style={styles.ImageBackground_I398_8018_112_822}
        />
        <View style={styles.View_I398_8018_112_307}>
          <Text style={styles.Text_I398_8018_112_307}>Load more</Text>
        </View>
      </View>
      <View style={styles.View_398_8019}>
        <View style={styles.View_398_8020}>
          <View style={styles.View_I398_8020_240_22}>
            <Text style={styles.Text_I398_8020_240_22}>Feature Creatior</Text>
          </View>
        </View>
        <View style={styles.View_398_8021}>
          <View style={styles.View_I398_8021_240_22}>
            <Text style={styles.Text_I398_8021_240_22}>All Creator</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_398_8022}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f16302c2-97a5-4e7a-b0cc-0de6339f0a50"
          }}
          style={styles.ImageBackground_I398_8022_346_183}
        />
        <View style={styles.View_I398_8022_346_200}>
          <View style={styles.View_I398_8022_349_7602}>
            <Text style={styles.Text_I398_8022_349_7602}>open</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/94c0d7e5-6719-4a6f-a445-a82421a2a6be"
            }}
            style={styles.ImageBackground_I398_8022_346_202}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/81b4c075-b0d1-4c39-a496-8b42b8f4d45f"
            }}
            style={styles.ImageBackground_I398_8022_346_203}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dc4ab048-fd03-46af-8837-8518d53ce845"
            }}
            style={styles.ImageBackground_I398_8022_346_204}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9dc79c8b-bb0d-497d-9190-a24ad8dad7a9"
            }}
            style={styles.ImageBackground_I398_8022_346_205}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/acba410b-2f68-4739-b928-c17ff9afcf64"
            }}
            style={styles.ImageBackground_I398_8022_346_206}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5b01b46d-5179-4a8e-b984-15ce58225c6a"
            }}
            style={styles.ImageBackground_I398_8022_346_207}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ae17479c-984a-4d25-b21a-e3df4134ed5b"
            }}
            style={styles.ImageBackground_I398_8022_346_208}
          />
        </View>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(34, 34, 34, 1)" },
  View_2: { height: hp("450%") },
  View_398_8010: {
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
  Text_398_8010: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_398_8011: {
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
  View_I398_8011_346_371: {
    flexGrow: 1,
    width: wp("90%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("10%"),
    justifyContent: "flex-start"
  },
  Text_I398_8011_346_371: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 20.724939346313477,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25724939346313475,
    textTransform: "none"
  },
  View_I398_8011_346_372: {
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
  View_I398_8011_346_372_112_169: {
    flexGrow: 1,
    width: wp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I398_8011_346_372_112_169: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I398_8011_346_373: {
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
  View_I398_8011_346_373_112_149: {
    flexGrow: 1,
    width: wp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I398_8011_346_373_112_149: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I398_8011_346_374: {
    flexGrow: 1,
    width: wp("101%"),
    height: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("48%")
  },
  View_I398_8011_346_375: {
    width: wp("100%"),
    height: hp("42%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(51, 51, 51, 1)"
  },
  View_I398_8011_346_376: {
    width: wp("100%"),
    height: hp("0%"),
    top: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I398_8011_346_376_127_1449: {
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
  View_I398_8011_346_377: {
    width: wp("23%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "flex-start"
  },
  Text_I398_8011_346_377: {
    color: "rgba(248, 248, 248, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I398_8011_346_378: {
    width: wp("49%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    justifyContent: "flex-start"
  },
  Text_I398_8011_346_378: {
    color: "rgba(248, 248, 248, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I398_8011_346_379: {
    width: wp("27%"),
    top: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "flex-start"
  },
  Text_I398_8011_346_379: {
    color: "rgba(240, 240, 240, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I398_8011_346_380: {
    flexGrow: 1,
    width: wp("47%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("3%")
  },
  View_398_8012: {
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
  Text_398_8012: {
    color: "rgba(248, 248, 248, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_398_8013: {
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
  View_I398_8013_347_286: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18%"),
    backgroundColor: "rgba(51, 51, 51, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24
  },
  View_I398_8013_347_287: {
    flexGrow: 1,
    width: wp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("27%"),
    justifyContent: "flex-start"
  },
  Text_I398_8013_347_287: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.24,
    textTransform: "none"
  },
  ImageBackground_I398_8013_347_288: {
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
  ImageBackground_I398_8013_347_289: {
    flexGrow: 1,
    width: wp("27%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("13%")
  },
  View_I398_8013_347_292: {
    flexGrow: 1,
    width: wp("83%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("33%"),
    justifyContent: "flex-start"
  },
  Text_I398_8013_347_292: {
    color: "rgba(248, 248, 248, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I398_8013_347_293: {
    flexGrow: 1,
    width: wp("43%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("47%")
  },
  View_I398_8013_347_294: {
    width: wp("21%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    justifyContent: "center"
  },
  Text_I398_8013_347_294: {
    color: "rgba(248, 248, 248, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I398_8013_347_295: {
    width: wp("21%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I398_8013_347_295: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.32,
    textTransform: "none"
  },
  View_I398_8013_347_296: {
    flexGrow: 1,
    width: wp("30%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("46%"),
    backgroundColor: "rgba(34, 34, 34, 1)"
  },
  View_I398_8013_347_296_110_32: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I398_8013_347_296_110_32: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_398_8014: {
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
  View_I398_8014_347_286: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18%"),
    backgroundColor: "rgba(51, 51, 51, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24
  },
  View_I398_8014_347_287: {
    flexGrow: 1,
    width: wp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("27%"),
    justifyContent: "flex-start"
  },
  Text_I398_8014_347_287: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.24,
    textTransform: "none"
  },
  ImageBackground_I398_8014_347_288: {
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
  ImageBackground_I398_8014_347_289: {
    flexGrow: 1,
    width: wp("27%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("13%")
  },
  View_I398_8014_347_292: {
    flexGrow: 1,
    width: wp("83%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("33%"),
    justifyContent: "flex-start"
  },
  Text_I398_8014_347_292: {
    color: "rgba(248, 248, 248, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I398_8014_347_293: {
    flexGrow: 1,
    width: wp("43%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("47%")
  },
  View_I398_8014_347_294: {
    width: wp("21%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    justifyContent: "center"
  },
  Text_I398_8014_347_294: {
    color: "rgba(248, 248, 248, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I398_8014_347_295: {
    width: wp("20%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I398_8014_347_295: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.32,
    textTransform: "none"
  },
  View_I398_8014_347_296: {
    flexGrow: 1,
    width: wp("30%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("46%"),
    backgroundColor: "rgba(34, 34, 34, 1)"
  },
  View_I398_8014_347_296_110_32: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I398_8014_347_296_110_32: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_398_8015: {
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
  View_I398_8015_347_286: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18%"),
    backgroundColor: "rgba(51, 51, 51, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24
  },
  View_I398_8015_347_287: {
    flexGrow: 1,
    width: wp("66%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("27%"),
    justifyContent: "flex-start"
  },
  Text_I398_8015_347_287: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.24,
    textTransform: "none"
  },
  ImageBackground_I398_8015_347_288: {
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
  ImageBackground_I398_8015_347_289: {
    flexGrow: 1,
    width: wp("27%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("13%")
  },
  View_I398_8015_347_292: {
    flexGrow: 1,
    width: wp("83%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("33%"),
    justifyContent: "flex-start"
  },
  Text_I398_8015_347_292: {
    color: "rgba(248, 248, 248, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I398_8015_347_293: {
    flexGrow: 1,
    width: wp("43%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("47%")
  },
  View_I398_8015_347_294: {
    width: wp("21%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    justifyContent: "center"
  },
  Text_I398_8015_347_294: {
    color: "rgba(248, 248, 248, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I398_8015_347_295: {
    width: wp("20%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I398_8015_347_295: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.32,
    textTransform: "none"
  },
  View_I398_8015_347_296: {
    flexGrow: 1,
    width: wp("30%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("46%"),
    backgroundColor: "rgba(34, 34, 34, 1)"
  },
  View_I398_8015_347_296_110_32: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I398_8015_347_296_110_32: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_398_8016: {
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
  View_I398_8016_347_286: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18%"),
    backgroundColor: "rgba(51, 51, 51, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24
  },
  View_I398_8016_347_287: {
    flexGrow: 1,
    width: wp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("27%"),
    justifyContent: "flex-start"
  },
  Text_I398_8016_347_287: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.24,
    textTransform: "none"
  },
  ImageBackground_I398_8016_347_288: {
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
  ImageBackground_I398_8016_347_289: {
    flexGrow: 1,
    width: wp("27%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("13%")
  },
  View_I398_8016_347_292: {
    flexGrow: 1,
    width: wp("83%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("33%"),
    justifyContent: "flex-start"
  },
  Text_I398_8016_347_292: {
    color: "rgba(248, 248, 248, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I398_8016_347_293: {
    flexGrow: 1,
    width: wp("43%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("47%")
  },
  View_I398_8016_347_294: {
    width: wp("21%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    justifyContent: "center"
  },
  Text_I398_8016_347_294: {
    color: "rgba(248, 248, 248, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I398_8016_347_295: {
    width: wp("20%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I398_8016_347_295: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.32,
    textTransform: "none"
  },
  View_I398_8016_347_296: {
    flexGrow: 1,
    width: wp("30%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("46%"),
    backgroundColor: "rgba(34, 34, 34, 1)"
  },
  View_I398_8016_347_296_110_32: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I398_8016_347_296_110_32: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_398_8017: {
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
  View_I398_8017_347_286: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18%"),
    backgroundColor: "rgba(51, 51, 51, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24
  },
  View_I398_8017_347_287: {
    flexGrow: 1,
    width: wp("58%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("27%"),
    justifyContent: "flex-start"
  },
  Text_I398_8017_347_287: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.24,
    textTransform: "none"
  },
  ImageBackground_I398_8017_347_288: {
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
  ImageBackground_I398_8017_347_289: {
    flexGrow: 1,
    width: wp("27%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("13%")
  },
  View_I398_8017_347_292: {
    flexGrow: 1,
    width: wp("83%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("33%"),
    justifyContent: "flex-start"
  },
  Text_I398_8017_347_292: {
    color: "rgba(248, 248, 248, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I398_8017_347_293: {
    flexGrow: 1,
    width: wp("43%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("47%")
  },
  View_I398_8017_347_294: {
    width: wp("21%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    justifyContent: "center"
  },
  Text_I398_8017_347_294: {
    color: "rgba(248, 248, 248, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I398_8017_347_295: {
    width: wp("20%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I398_8017_347_295: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.32,
    textTransform: "none"
  },
  View_I398_8017_347_296: {
    flexGrow: 1,
    width: wp("30%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("46%"),
    backgroundColor: "rgba(34, 34, 34, 1)"
  },
  View_I398_8017_347_296_110_32: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I398_8017_347_296_110_32: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_398_8018: {
    width: wp("81%"),
    height: hp("8%"),
    top: hp("337%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I398_8018_112_822: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("2%")
  },
  View_I398_8018_112_307: {
    flexGrow: 1,
    width: wp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I398_8018_112_307: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_398_8019: {
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
  View_398_8020: {
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
  View_I398_8020_240_22: {
    flexGrow: 1,
    width: wp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I398_8020_240_22: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_398_8021: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("0%"),
    backgroundColor: "rgba(51, 51, 51, 1)"
  },
  View_I398_8021_240_22: {
    flexGrow: 1,
    width: wp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I398_8021_240_22: {
    color: "rgba(248, 248, 248, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_398_8022: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I398_8022_346_183: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%"),
    top: hp("3%")
  },
  View_I398_8022_346_200: {
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
  View_I398_8022_349_7602: {
    width: wp("24%"),
    top: hp("-2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%"),
    justifyContent: "flex-start"
  },
  Text_I398_8022_349_7602: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 30.409923553466797,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -2.8995864391326904,
    textTransform: "none"
  },
  ImageBackground_I398_8022_346_202: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%")
  },
  ImageBackground_I398_8022_346_203: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_I398_8022_346_204: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%")
  },
  ImageBackground_I398_8022_346_205: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%")
  },
  ImageBackground_I398_8022_346_206: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%")
  },
  ImageBackground_I398_8022_346_207: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%")
  },
  ImageBackground_I398_8022_346_208: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%")
  }
})
const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
