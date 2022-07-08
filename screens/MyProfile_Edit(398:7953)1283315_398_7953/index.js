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
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/54439c2d-b09d-408c-9969-4c07979752b5"
        }}
        style={styles.ImageBackground_398_7954}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5e01741d-db08-4d40-82bd-23dd1ebce7aa"
        }}
        style={styles.ImageBackground_398_7955}
      />
      <View style={styles.View_398_7956}>
        <Text style={styles.Text_398_7956}>Gift Habeshaw</Text>
      </View>
      <View style={styles.View_398_7957}>
        <View style={styles.View_398_7958}>
          <Text style={styles.Text_398_7958}>52fs5ge5g45sov45a</Text>
        </View>
        <View style={styles.View_398_7959}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/66b09528-4511-43f1-8ef2-ccc8eb6cf72a"
            }}
            style={styles.ImageBackground_I398_7959_94_1729}
          />
          <View style={styles.View_I398_7959_94_1730} />
        </View>
      </View>
      <View style={styles.View_398_7960}>
        <View style={styles.View_I398_7960_346_371}>
          <Text style={styles.Text_I398_7960_346_371}>
            The New Creative Economy
          </Text>
        </View>
        <View style={styles.View_I398_7960_346_372}>
          <View style={styles.View_I398_7960_346_372_112_169}>
            <Text style={styles.Text_I398_7960_346_372_112_169}>Earn now</Text>
          </View>
        </View>
        <View style={styles.View_I398_7960_346_373}>
          <View style={styles.View_I398_7960_346_373_112_149}>
            <Text style={styles.Text_I398_7960_346_373_112_149}>
              Discover more
            </Text>
          </View>
        </View>
        <View style={styles.View_I398_7960_346_374}>
          <View style={styles.View_I398_7960_346_375} />
          <View style={styles.View_I398_7960_346_376}>
            <View style={styles.View_I398_7960_346_376_127_1449} />
          </View>
          <View style={styles.View_I398_7960_346_377}>
            <Text style={styles.Text_I398_7960_346_377}>
              Instagram Twitter Discord Blog
            </Text>
          </View>
          <View style={styles.View_I398_7960_346_378}>
            <Text style={styles.Text_I398_7960_346_378}>
              About Community Guidelines Terms of Service Privacy Careers Help
            </Text>
          </View>
          <View style={styles.View_I398_7960_346_379}>
            <Text style={styles.Text_I398_7960_346_379}>© 2021 Openart</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5e533d9e-ff69-48b3-aae5-4bfacb9e96bb"
          }}
          style={styles.ImageBackground_I398_7960_346_380}
        />
      </View>
      <View style={styles.View_398_7961}>
        <View style={styles.View_398_7962}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/21ff9a99-bbdb-4123-99a8-f2ddf984739a"
            }}
            style={styles.ImageBackground_398_7963}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/948b950b-b252-42b2-9bd6-e529c6b16420"
            }}
            style={styles.ImageBackground_398_7964}
          />
        </View>
        <View style={styles.View_398_7965}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2308f0f5-2851-4287-9c25-7916d28ffd88"
            }}
            style={styles.ImageBackground_398_7966}
          />
          <View style={styles.View_398_7967}>
            <View style={styles.View_I398_7967_94_1774}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b576867f-958a-4f83-8eea-342239d866df"
                }}
                style={styles.ImageBackground_I398_7967_94_1775}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/80473502-83da-4d74-8642-bc30550cd3fe"
              }}
              style={styles.ImageBackground_I398_7967_94_1778}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_398_7968}>
        <Text style={styles.Text_398_7968}>Enter your details</Text>
      </View>
      <View style={styles.View_398_7969}>
        <View style={styles.View_398_7970}>
          <View style={styles.View_I398_7970_113_372} />
          <View style={styles.View_I398_7970_114_3}>
            <View style={styles.View_I398_7970_113_373}>
              <View style={styles.View_I398_7970_113_363}>
                <Text style={styles.Text_I398_7970_113_363}>Name</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_398_7971}>
          <View style={styles.View_I398_7971_113_372} />
          <View style={styles.View_I398_7971_114_3}>
            <View style={styles.View_I398_7971_113_373}>
              <View style={styles.View_I398_7971_113_363}>
                <Text style={styles.Text_I398_7971_113_363}>User Name</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_398_7972}>
        <View style={styles.View_398_7973}>
          <Text style={styles.Text_398_7973}>Enter your email</Text>
        </View>
        <View style={styles.View_398_7974}>
          <View style={styles.View_I398_7974_114_71} />
          <View style={styles.View_I398_7974_114_74}>
            <View style={styles.View_I398_7974_114_76}>
              <View style={styles.View_I398_7974_114_78}>
                <Text style={styles.Text_I398_7974_114_78}>Email</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I398_7974_114_83}>
            <Text style={styles.Text_I398_7974_114_83}>
              Add your email address to receive notifications about your
              activity on Foundation. This will not be shown on your profile.
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_398_7975}>
        <View style={styles.View_398_7976}>
          <Text style={styles.Text_398_7976}>Enter your bio</Text>
        </View>
        <View style={styles.View_398_7977}>
          <View style={styles.View_I398_7977_115_465}>
            <Text style={styles.Text_I398_7977_115_465}>
              Enter your bio here
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0853bf95-6447-4056-b5e0-c8a2e4b22a30"
            }}
            style={styles.ImageBackground_I398_7977_119_5}
          />
        </View>
      </View>
      <View style={styles.View_398_7978}>
        <View style={styles.View_398_7979}>
          <Text style={styles.Text_398_7979}>Upload a profile image.</Text>
        </View>
        <View style={styles.View_398_7980}>
          <View style={styles.View_398_7981} />
          <View style={styles.View_398_7982}>
            <View style={styles.View_398_7983}>
              <Text style={styles.Text_398_7983}>
                Drag and drop or browce a file
              </Text>
            </View>
            <View style={styles.View_398_7984}>
              <Text style={styles.Text_398_7984}>
                Recommended size: JPG, PNG, GIF (1500x1500px, Max 10mb)
              </Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6b763b1b-e12f-4a82-be27-bbc22885c4c3"
              }}
              style={styles.ImageBackground_398_7985}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_398_7986}>
        <Text style={styles.Text_398_7986}>Verify your profile</Text>
      </View>
      <View style={styles.View_398_7987}>
        <Text style={styles.Text_398_7987}>
          Add links to your social media profiles.
        </Text>
      </View>
      <View style={styles.View_398_7988}>
        <Text style={styles.Text_398_7988}>
          Show the Foundation community that your profile is authentic.
        </Text>
      </View>
      <View style={styles.View_398_7989}>
        <View style={styles.View_I398_7989_112_826}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2bfc881f-26a4-4f6c-a0d8-9913f12f4479"
            }}
            style={styles.ImageBackground_I398_7989_112_826_293_379}
          />
        </View>
        <View style={styles.View_I398_7989_112_349}>
          <Text style={styles.Text_I398_7989_112_349}>Verify via Twitter</Text>
        </View>
      </View>
      <View style={styles.View_398_7990}>
        <View style={styles.View_I398_7990_112_826}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f2738511-93df-4453-b6cf-541a3683ba4b"
            }}
            style={styles.ImageBackground_I398_7990_112_826_293_382}
          />
        </View>
        <View style={styles.View_I398_7990_112_349}>
          <Text style={styles.Text_I398_7990_112_349}>
            Verify via Instagram
          </Text>
        </View>
      </View>
      <View style={styles.View_398_7991}>
        <View style={styles.View_I398_7991_114_302} />
        <View style={styles.View_I398_7991_114_305}>
          <View style={styles.View_I398_7991_114_306}>
            <View style={styles.View_I398_7991_114_306_94_1896}>
              <View style={styles.View_I398_7991_114_306_94_1897} />
              <View style={styles.View_I398_7991_114_306_94_1898} />
            </View>
            <View style={styles.View_I398_7991_114_306_94_1899}>
              <View style={styles.View_I398_7991_114_306_94_1900} />
              <View style={styles.View_I398_7991_114_306_94_1901} />
            </View>
          </View>
          <View style={styles.View_I398_7991_114_307}>
            <View style={styles.View_I398_7991_114_309}>
              <Text style={styles.Text_I398_7991_114_309}>Website</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_398_7992}>
        <View style={styles.View_I398_7992_114_302} />
        <View style={styles.View_I398_7992_114_305}>
          <View style={styles.View_I398_7992_114_306}>
            <View style={styles.View_I398_7992_114_306_293_405} />
            <View style={styles.View_I398_7992_114_306_293_401}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3ce78cdb-dbf0-4059-b038-b30e1a5e3995"
                }}
                style={styles.ImageBackground_I398_7992_114_306_293_402}
              />
            </View>
          </View>
          <View style={styles.View_I398_7992_114_307}>
            <View style={styles.View_I398_7992_114_309}>
              <Text style={styles.Text_I398_7992_114_309}>Discord</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_398_7993}>
        <View style={styles.View_I398_7993_114_302} />
        <View style={styles.View_I398_7993_114_305}>
          <View style={styles.View_I398_7993_114_306}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/558a4856-5e9f-4fe8-bf80-0121d03cdcb0"
              }}
              style={styles.ImageBackground_I398_7993_114_306_293_382}
            />
          </View>
          <View style={styles.View_I398_7993_114_307}>
            <View style={styles.View_I398_7993_114_309}>
              <Text style={styles.Text_I398_7993_114_309}>Instagram</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_398_7994}>
        <View style={styles.View_I398_7994_114_302} />
        <View style={styles.View_I398_7994_114_305}>
          <View style={styles.View_I398_7994_114_306}>
            <View style={styles.View_I398_7994_114_306_293_398}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/adb19b90-5c32-4444-830d-ff277d41323a"
                }}
                style={styles.ImageBackground_I398_7994_114_306_293_399}
              />
            </View>
          </View>
          <View style={styles.View_I398_7994_114_307}>
            <View style={styles.View_I398_7994_114_309}>
              <Text style={styles.Text_I398_7994_114_309}>Youtube chanel</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_398_7995}>
        <View style={styles.View_I398_7995_114_302} />
        <View style={styles.View_I398_7995_114_305}>
          <View style={styles.View_I398_7995_114_306}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/347da340-7940-4149-b151-c310836a2b8b"
              }}
              style={styles.ImageBackground_I398_7995_114_306_293_391}
            />
          </View>
          <View style={styles.View_I398_7995_114_307}>
            <View style={styles.View_I398_7995_114_309}>
              <Text style={styles.Text_I398_7995_114_309}>Facebook</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_398_7996}>
        <View style={styles.View_I398_7996_114_302} />
        <View style={styles.View_I398_7996_114_305}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a54032e9-4998-4875-96a6-3cd8e6ffc27a"
            }}
            style={styles.ImageBackground_I398_7996_114_306}
          />
          <View style={styles.View_I398_7996_114_307}>
            <View style={styles.View_I398_7996_114_309}>
              <Text style={styles.Text_I398_7996_114_309}>Tiktok</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_398_7997}>
        <View style={styles.View_I398_7997_112_169}>
          <Text style={styles.Text_I398_7997_112_169}>Save</Text>
        </View>
      </View>
      <View style={styles.View_398_7998}>
        <View style={styles.View_I398_7998_127_1455} />
      </View>
      <View style={styles.View_398_7999}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3077cdf4-552f-4f53-aeaf-15c1cdee2f88"
          }}
          style={styles.ImageBackground_I398_7999_346_183}
        />
        <View style={styles.View_I398_7999_346_200}>
          <View style={styles.View_I398_7999_349_7602}>
            <Text style={styles.Text_I398_7999_349_7602}>open</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ead55906-bc4f-48be-b908-4dfce3d987af"
            }}
            style={styles.ImageBackground_I398_7999_346_202}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dcb8d4fe-ed40-4736-ae16-3dbcbe2408bc"
            }}
            style={styles.ImageBackground_I398_7999_346_203}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ee882b3c-7468-4a4f-b28b-8d728971b830"
            }}
            style={styles.ImageBackground_I398_7999_346_204}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/eee61d1e-e871-4779-ae4b-e3e30872bc24"
            }}
            style={styles.ImageBackground_I398_7999_346_205}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b61b4fbd-35d0-4daf-a98d-19efcd65c635"
            }}
            style={styles.ImageBackground_I398_7999_346_206}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f3a02640-b6a2-428d-9635-8bcf88451d28"
            }}
            style={styles.ImageBackground_I398_7999_346_207}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/43d991e2-0ddd-4643-bb8e-4c53f053a97f"
            }}
            style={styles.ImageBackground_I398_7999_346_208}
          />
        </View>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(34, 34, 34, 1)" },
  View_2: { height: hp("402%") },
  ImageBackground_398_7954: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13%"),
    resizeMode: "cover"
  },
  ImageBackground_398_7955: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("26%")
  },
  View_398_7956: {
    width: wp("38%"),
    minWidth: wp("38%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("45%"),
    justifyContent: "flex-start"
  },
  Text_398_7956: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_398_7957: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("49%")
  },
  View_398_7958: {
    width: wp("34%"),
    minWidth: wp("34%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_398_7958: {
    color: "rgba(248, 248, 248, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_398_7959: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I398_7959_94_1729: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I398_7959_94_1730: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    borderColor: "rgba(248, 248, 248, 1)",
    borderWidth: 1.1745984554290771
  },
  View_398_7960: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("91%"),
    minHeight: hp("91%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("312%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I398_7960_346_371: {
    flexGrow: 1,
    width: wp("90%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("10%"),
    justifyContent: "flex-start"
  },
  Text_I398_7960_346_371: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 20.724939346313477,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25724939346313475,
    textTransform: "none"
  },
  View_I398_7960_346_372: {
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
  View_I398_7960_346_372_112_169: {
    flexGrow: 1,
    width: wp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I398_7960_346_372_112_169: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I398_7960_346_373: {
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
  View_I398_7960_346_373_112_149: {
    flexGrow: 1,
    width: wp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I398_7960_346_373_112_149: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I398_7960_346_374: {
    flexGrow: 1,
    width: wp("101%"),
    height: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("48%")
  },
  View_I398_7960_346_375: {
    width: wp("100%"),
    height: hp("42%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(51, 51, 51, 1)"
  },
  View_I398_7960_346_376: {
    width: wp("100%"),
    height: hp("0%"),
    top: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I398_7960_346_376_127_1449: {
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
  View_I398_7960_346_377: {
    width: wp("23%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "flex-start"
  },
  Text_I398_7960_346_377: {
    color: "rgba(248, 248, 248, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I398_7960_346_378: {
    width: wp("49%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    justifyContent: "flex-start"
  },
  Text_I398_7960_346_378: {
    color: "rgba(248, 248, 248, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I398_7960_346_379: {
    width: wp("27%"),
    top: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "flex-start"
  },
  Text_I398_7960_346_379: {
    color: "rgba(240, 240, 240, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I398_7960_346_380: {
    flexGrow: 1,
    width: wp("47%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("3%")
  },
  View_398_7961: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    top: hp("14%")
  },
  View_398_7962: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_398_7963: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_398_7964: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_398_7965: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%")
  },
  ImageBackground_398_7966: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_398_7967: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I398_7967_94_1774: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I398_7967_94_1775: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I398_7967_94_1778: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_398_7968: {
    width: wp("46%"),
    minWidth: wp("46%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("57%"),
    justifyContent: "center"
  },
  Text_398_7968: {
    color: "rgba(248, 248, 248, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_398_7969: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("63%")
  },
  View_398_7970: {
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
  View_I398_7970_113_372: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(51, 51, 51, 1)"
  },
  View_I398_7970_114_3: {
    flexGrow: 1,
    width: wp("17%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I398_7970_113_373: {
    width: wp("17%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I398_7970_113_363: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I398_7970_113_363: {
    color: "rgba(248, 248, 248, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_398_7971: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I398_7971_113_372: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(51, 51, 51, 1)"
  },
  View_I398_7971_114_3: {
    flexGrow: 1,
    width: wp("28%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I398_7971_113_373: {
    width: wp("28%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I398_7971_113_363: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I398_7971_113_363: {
    color: "rgba(248, 248, 248, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_398_7972: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("85%")
  },
  View_398_7973: {
    width: wp("42%"),
    minWidth: wp("42%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_398_7973: {
    color: "rgba(248, 248, 248, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_398_7974: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I398_7974_114_71: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(51, 51, 51, 1)"
  },
  View_I398_7974_114_74: {
    flexGrow: 1,
    width: wp("15%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I398_7974_114_76: {
    width: wp("15%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I398_7974_114_78: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I398_7974_114_78: {
    color: "rgba(248, 248, 248, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I398_7974_114_83: {
    flexGrow: 1,
    width: wp("83%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_I398_7974_114_83: {
    color: "rgba(136, 136, 136, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_398_7975: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("113%")
  },
  View_398_7976: {
    width: wp("36%"),
    minWidth: wp("36%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_398_7976: {
    color: "rgba(248, 248, 248, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_398_7977: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    backgroundColor: "rgba(51, 51, 51, 1)"
  },
  View_I398_7977_115_465: {
    flexGrow: 1,
    width: wp("81%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I398_7977_115_465: {
    color: "rgba(248, 248, 248, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  ImageBackground_I398_7977_119_5: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%"),
    top: hp("19%")
  },
  View_398_7978: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("29%"),
    minHeight: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("145%")
  },
  View_398_7979: {
    width: wp("60%"),
    minWidth: wp("60%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_398_7979: {
    color: "rgba(248, 248, 248, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_398_7980: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%")
  },
  View_398_7981: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(51, 51, 51, 1)"
  },
  View_398_7982: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("6%")
  },
  View_398_7983: {
    width: wp("83%"),
    minWidth: wp("83%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_398_7983: {
    color: "rgba(248, 248, 248, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_398_7984: {
    width: wp("80%"),
    minWidth: wp("80%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("8%"),
    justifyContent: "center"
  },
  Text_398_7984: {
    color: "rgba(240, 240, 240, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_398_7985: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%")
  },
  View_398_7986: {
    width: wp("46%"),
    minWidth: wp("46%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("180%"),
    justifyContent: "center"
  },
  Text_398_7986: {
    color: "rgba(248, 248, 248, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_398_7987: {
    width: wp("61%"),
    minWidth: wp("61%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("217%"),
    justifyContent: "center"
  },
  Text_398_7987: {
    color: "rgba(248, 248, 248, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_398_7988: {
    width: wp("84%"),
    minWidth: wp("84%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("185%"),
    justifyContent: "flex-start"
  },
  Text_398_7988: {
    color: "rgba(240, 240, 240, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_398_7989: {
    width: wp("91%"),
    height: hp("8%"),
    top: hp("195%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I398_7989_112_826: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I398_7989_112_826_293_379: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I398_7989_112_349: {
    flexGrow: 1,
    width: wp("46%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I398_7989_112_349: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_398_7990: {
    width: wp("91%"),
    height: hp("8%"),
    top: hp("204%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I398_7990_112_826: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I398_7990_112_826_293_382: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_I398_7990_112_349: {
    flexGrow: 1,
    width: wp("54%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I398_7990_112_349: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_398_7991: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("227%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I398_7991_114_302: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(51, 51, 51, 1)"
  },
  View_I398_7991_114_305: {
    flexGrow: 1,
    width: wp("31%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I398_7991_114_306: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I398_7991_114_306_94_1896: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  View_I398_7991_114_306_94_1897: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(20, 20, 43, 1)",
    borderWidth: 2
  },
  View_I398_7991_114_306_94_1898: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_I398_7991_114_306_94_1899: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_I398_7991_114_306_94_1900: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(20, 20, 43, 1)",
    borderWidth: 2
  },
  View_I398_7991_114_306_94_1901: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_I398_7991_114_307: {
    width: wp("22%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I398_7991_114_309: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I398_7991_114_309: {
    color: "rgba(248, 248, 248, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_398_7992: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("236%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I398_7992_114_302: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(51, 51, 51, 1)"
  },
  View_I398_7992_114_305: {
    flexGrow: 1,
    width: wp("30%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I398_7992_114_306: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I398_7992_114_306_293_405: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I398_7992_114_306_293_401: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I398_7992_114_306_293_402: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I398_7992_114_307: {
    width: wp("21%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I398_7992_114_309: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I398_7992_114_309: {
    color: "rgba(248, 248, 248, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_398_7993: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("246%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I398_7993_114_302: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(51, 51, 51, 1)"
  },
  View_I398_7993_114_305: {
    flexGrow: 1,
    width: wp("36%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I398_7993_114_306: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I398_7993_114_306_293_382: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_I398_7993_114_307: {
    width: wp("26%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I398_7993_114_309: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I398_7993_114_309: {
    color: "rgba(248, 248, 248, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_398_7994: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("255%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I398_7994_114_302: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(51, 51, 51, 1)"
  },
  View_I398_7994_114_305: {
    flexGrow: 1,
    width: wp("48%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I398_7994_114_306: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I398_7994_114_306_293_398: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I398_7994_114_306_293_399: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I398_7994_114_307: {
    width: wp("38%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I398_7994_114_309: {
    width: wp("34%"),
    minWidth: wp("34%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I398_7994_114_309: {
    color: "rgba(248, 248, 248, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_398_7995: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("265%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I398_7995_114_302: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(51, 51, 51, 1)"
  },
  View_I398_7995_114_305: {
    flexGrow: 1,
    width: wp("35%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I398_7995_114_306: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I398_7995_114_306_293_391: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_I398_7995_114_307: {
    width: wp("26%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I398_7995_114_309: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I398_7995_114_309: {
    color: "rgba(248, 248, 248, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_398_7996: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("274%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I398_7996_114_302: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(51, 51, 51, 1)"
  },
  View_I398_7996_114_305: {
    flexGrow: 1,
    width: wp("27%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I398_7996_114_306: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I398_7996_114_307: {
    width: wp("17%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I398_7996_114_309: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I398_7996_114_309: {
    color: "rgba(248, 248, 248, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_398_7997: {
    width: wp("91%"),
    height: hp("8%"),
    top: hp("288%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I398_7997_112_169: {
    flexGrow: 1,
    width: wp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I398_7997_112_169: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_398_7998: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("299%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I398_7998_127_1455: {
    flexGrow: 1,
    width: wp("87%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(220, 220, 220, 1)"
  },
  View_398_7999: {
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
  ImageBackground_I398_7999_346_183: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%"),
    top: hp("3%")
  },
  View_I398_7999_346_200: {
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
  View_I398_7999_349_7602: {
    width: wp("24%"),
    top: hp("-2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%"),
    justifyContent: "flex-start"
  },
  Text_I398_7999_349_7602: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 30.409923553466797,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -2.8995864391326904,
    textTransform: "none"
  },
  ImageBackground_I398_7999_346_202: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%")
  },
  ImageBackground_I398_7999_346_203: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_I398_7999_346_204: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%")
  },
  ImageBackground_I398_7999_346_205: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%")
  },
  ImageBackground_I398_7999_346_206: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%")
  },
  ImageBackground_I398_7999_346_207: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%")
  },
  ImageBackground_I398_7999_346_208: {
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
