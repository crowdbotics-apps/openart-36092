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
      <View style={styles.View_240_2}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/293e2ef8-7fed-4899-b206-4deaf119fc41"
          }}
          style={styles.ImageBackground_I240_2_203_410}
        />
        <View style={styles.View_I240_2_338_16}>
          <View style={styles.View_I240_2_349_7250}>
            <Text style={styles.Text_I240_2_349_7250}>open</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5a28f5e5-0611-4780-b84d-039b9287b774"
            }}
            style={styles.ImageBackground_I240_2_338_2219}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8d52b8a6-b111-42b6-a27b-a1dba82a4f5c"
            }}
            style={styles.ImageBackground_I240_2_338_2220}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/15f37902-f1fc-4d0a-9224-9ea98d806146"
            }}
            style={styles.ImageBackground_I240_2_338_2221}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9c207cac-4021-47d9-847d-eeacbf22a97a"
            }}
            style={styles.ImageBackground_I240_2_338_2222}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7045cae5-1dd9-4ed1-8315-1bc0de6594fe"
            }}
            style={styles.ImageBackground_I240_2_338_2223}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d92206c7-56c9-41fd-94f8-f4be8542ca96"
            }}
            style={styles.ImageBackground_I240_2_338_2224}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/24c933c9-56ff-4ed3-b97c-1883e37a2ba3"
            }}
            style={styles.ImageBackground_I240_2_338_2225}
          />
        </View>
      </View>
      <View style={styles.View_240_14}>
        <View style={styles.View_I240_14_134_606} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6b4bfc20-51db-4155-88a7-e462a0880901"
          }}
          style={styles.ImageBackground_I240_14_134_641}
        />
        <View style={styles.View_I240_14_134_608}>
          <Text style={styles.Text_I240_14_134_608}>Search item</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/523a8bd4-02db-4279-81bb-e087be430eaf"
          }}
          style={styles.ImageBackground_I240_14_134_639}
        />
      </View>
      <View style={styles.View_395_0}>
        <View style={styles.View_240_21}>
          <Text style={styles.Text_240_21}>Type</Text>
        </View>
        <View style={styles.View_240_66}>
          <View style={styles.View_240_40}>
            <View style={styles.View_I240_40_240_22}>
              <Text style={styles.Text_I240_40_240_22}>All items</Text>
            </View>
          </View>
          <View style={styles.View_240_42}>
            <View style={styles.View_I240_42_240_22}>
              <Text style={styles.Text_I240_42_240_22}>Game</Text>
            </View>
          </View>
          <View style={styles.View_240_44}>
            <View style={styles.View_I240_44_240_22}>
              <Text style={styles.Text_I240_44_240_22}>Video</Text>
            </View>
          </View>
          <View style={styles.View_240_46}>
            <View style={styles.View_I240_46_240_22}>
              <Text style={styles.Text_I240_46_240_22}>Animation</Text>
            </View>
          </View>
          <View style={styles.View_240_48}>
            <View style={styles.View_I240_48_240_22}>
              <Text style={styles.Text_I240_48_240_22}>Photography</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_395_2}>
        <View style={styles.View_240_100}>
          <Text style={styles.Text_240_100}>Chains</Text>
        </View>
        <View style={styles.View_240_128}>
          <View style={styles.View_240_117}>
            <View style={styles.View_I240_117_240_22}>
              <Text style={styles.Text_I240_117_240_22}>Ethereum</Text>
            </View>
          </View>
          <View style={styles.View_240_118}>
            <View style={styles.View_I240_118_240_22}>
              <Text style={styles.Text_I240_118_240_22}>Matic</Text>
            </View>
          </View>
          <View style={styles.View_240_119}>
            <View style={styles.View_I240_119_240_22}>
              <Text style={styles.Text_I240_119_240_22}>Klaytn</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_395_3}>
        <View style={styles.View_240_129}>
          <Text style={styles.Text_240_129}>Onsale in </Text>
        </View>
        <View style={styles.View_240_143}>
          <View style={styles.View_240_131}>
            <View style={styles.View_I240_131_240_22}>
              <Text style={styles.Text_I240_131_240_22}>ETH</Text>
            </View>
          </View>
          <View style={styles.View_240_132}>
            <View style={styles.View_I240_132_240_22}>
              <Text style={styles.Text_I240_132_240_22}>WETH</Text>
            </View>
          </View>
          <View style={styles.View_240_139}>
            <View style={styles.View_I240_139_240_22}>
              <Text style={styles.Text_I240_139_240_22}>1337</Text>
            </View>
          </View>
          <View style={styles.View_240_141}>
            <View style={styles.View_I240_141_240_22}>
              <Text style={styles.Text_I240_141_240_22}>1MT</Text>
            </View>
          </View>
          <View style={styles.View_240_133}>
            <View style={styles.View_I240_133_240_22}>
              <Text style={styles.Text_I240_133_240_22}>0xBTC</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_395_1}>
        <View style={styles.View_240_65}>
          <Text style={styles.Text_240_65}>Price range</Text>
        </View>
        <View style={styles.View_240_67}>
          <View style={styles.View_I240_67_131_741} />
          <View style={styles.View_I240_67_131_742} />
          <View style={styles.View_I240_67_131_743} />
          <View style={styles.View_I240_67_131_744} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bce25a04-efa7-4494-9d30-71c6eeebc0c4"
            }}
            style={styles.ImageBackground_I240_67_131_745}
          />
          <View style={styles.View_I240_67_131_746}>
            <View style={styles.View_I240_67_131_747}>
              <Text style={styles.Text_I240_67_131_747}>50 ETH</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_240_71}>
          <Text style={styles.Text_240_71}>0.01 ETH</Text>
        </View>
        <View style={styles.View_240_85}>
          <Text style={styles.Text_240_85}>100 ETH</Text>
        </View>
      </View>
      <View style={styles.View_240_144}>
        <View style={styles.View_240_145}>
          <View style={styles.View_240_146}>
            <View style={styles.View_I240_146_220_70} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ebac3932-97cd-46e2-a1d3-88576eae8a86"
              }}
              style={styles.ImageBackground_I240_146_206_424}
            />
            <View style={styles.View_I240_146_206_425}>
              <View style={styles.View_I240_146_206_425_106_459}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/06b93925-9195-42e1-8893-c4fdfc2741e2"
                  }}
                  style={styles.ImageBackground_I240_146_206_425_106_460}
                />
                <View style={styles.View_I240_146_206_425_106_461}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d2ccffbf-2110-4e07-b451-21bd0506a7cc"
                    }}
                    style={styles.ImageBackground_I240_146_206_425_106_462}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/61fa3b57-66b0-4827-9639-12c4f8c19232"
                    }}
                    style={styles.ImageBackground_I240_146_206_425_106_463}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3b652a64-33c0-46cd-a1aa-45005ebf3d5d"
                  }}
                  style={styles.ImageBackground_I240_146_206_425_106_464}
                />
              </View>
              <View style={styles.View_I240_146_206_425_106_465}>
                <Text style={styles.Text_I240_146_206_425_106_465}>
                  Pawel Czerwinski
                </Text>
              </View>
              <View style={styles.View_I240_146_206_425_106_466}>
                <Text style={styles.Text_I240_146_206_425_106_466}>
                  Creator
                </Text>
              </View>
            </View>
            <View style={styles.View_I240_146_206_441}>
              <Text style={styles.Text_I240_146_206_441}>Silent Color</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7facd29b-e44f-41e3-b6c6-9d4e7b1ebaaa"
              }}
              style={styles.ImageBackground_I240_146_220_201}
            />
          </View>
          <View style={styles.View_240_147}>
            <View style={styles.View_240_148} />
            <View style={styles.View_240_149}>
              <Text style={styles.Text_240_149}>Sold For</Text>
            </View>
            <View style={styles.View_240_150}>
              <Text style={styles.Text_240_150}>2.00 ETH</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_240_151}>
          <View style={styles.View_240_152}>
            <View style={styles.View_I240_152_220_70} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f7f22f62-737c-4418-b056-6d77132af946"
              }}
              style={styles.ImageBackground_I240_152_206_424}
            />
            <View style={styles.View_I240_152_206_425}>
              <View style={styles.View_I240_152_206_425_106_459}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7fcb2696-4432-4e67-93a8-6e7c8bec709e"
                  }}
                  style={styles.ImageBackground_I240_152_206_425_106_460}
                />
                <View style={styles.View_I240_152_206_425_106_461}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/60e9b08b-6534-4946-b904-b29037f7299e"
                    }}
                    style={styles.ImageBackground_I240_152_206_425_106_462}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/117d6562-68e5-42c4-a300-5f3e39c0f53c"
                    }}
                    style={styles.ImageBackground_I240_152_206_425_106_463}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6e95f001-ee78-43d9-b757-c1ef238a0310"
                  }}
                  style={styles.ImageBackground_I240_152_206_425_106_464}
                />
              </View>
              <View style={styles.View_I240_152_206_425_106_465}>
                <Text style={styles.Text_I240_152_206_425_106_465}>
                  Pawel Czerwinski
                </Text>
              </View>
              <View style={styles.View_I240_152_206_425_106_466}>
                <Text style={styles.Text_I240_152_206_425_106_466}>
                  Creator
                </Text>
              </View>
            </View>
            <View style={styles.View_I240_152_206_441}>
              <Text style={styles.Text_I240_152_206_441}>George</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fe501b6c-61b6-43ba-9c25-31460d481bd2"
              }}
              style={styles.ImageBackground_I240_152_220_201}
            />
          </View>
          <View style={styles.View_240_153}>
            <View style={styles.View_240_154} />
            <View style={styles.View_240_155}>
              <Text style={styles.Text_240_155}>Sold For</Text>
            </View>
            <View style={styles.View_240_156}>
              <Text style={styles.Text_240_156}>2.00 ETH</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_240_157}>
          <View style={styles.View_240_158}>
            <View style={styles.View_I240_158_220_70} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/17612e52-79fc-477b-8fb6-2514a33453ed"
              }}
              style={styles.ImageBackground_I240_158_206_424}
            />
            <View style={styles.View_I240_158_206_425}>
              <View style={styles.View_I240_158_206_425_106_459}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7c814376-d868-4451-a0b7-1f07e5677da5"
                  }}
                  style={styles.ImageBackground_I240_158_206_425_106_460}
                />
                <View style={styles.View_I240_158_206_425_106_461}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/38e33026-71d2-4fb0-9f72-91174d3830b1"
                    }}
                    style={styles.ImageBackground_I240_158_206_425_106_462}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3a5a14f7-0f6e-4a80-a701-81cb5fabc1ea"
                    }}
                    style={styles.ImageBackground_I240_158_206_425_106_463}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/349d16ae-92e9-4019-a462-c8b54e88a350"
                  }}
                  style={styles.ImageBackground_I240_158_206_425_106_464}
                />
              </View>
              <View style={styles.View_I240_158_206_425_106_465}>
                <Text style={styles.Text_I240_158_206_425_106_465}>
                  Pawel Czerwinski
                </Text>
              </View>
              <View style={styles.View_I240_158_206_425_106_466}>
                <Text style={styles.Text_I240_158_206_425_106_466}>
                  Creator
                </Text>
              </View>
            </View>
            <View style={styles.View_I240_158_206_441}>
              <Text style={styles.Text_I240_158_206_441}>Ocean</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/53d3daa5-2887-4625-85fe-5470fcd5e8c4"
              }}
              style={styles.ImageBackground_I240_158_220_201}
            />
          </View>
          <View style={styles.View_240_159}>
            <View style={styles.View_240_160} />
            <View style={styles.View_240_161}>
              <Text style={styles.Text_240_161}>Sold For</Text>
            </View>
            <View style={styles.View_240_162}>
              <Text style={styles.Text_240_162}>2.00 ETH</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_395_4}>
        <View style={styles.View_240_208}>
          <Text style={styles.Text_240_208}>Creator</Text>
        </View>
        <View style={styles.View_240_209}>
          <View style={styles.View_I240_209_128_546}>
            <Text style={styles.Text_I240_209_128_546}>Verified only</Text>
          </View>
          <View style={styles.View_I240_209_128_543}>
            <View style={styles.View_I240_209_128_543_128_540} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/116a8a7e-4d6f-4ca5-96b3-b01902c451e8"
              }}
              style={styles.ImageBackground_I240_209_128_543_128_541}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_240_215}>
        <View style={styles.View_I240_215_127_1455} />
      </View>
      <View style={styles.View_240_222}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6a73ac41-9e7d-42ec-967f-a3b37c9f4277"
          }}
          style={styles.ImageBackground_I240_222_112_758}
        />
        <View style={styles.View_I240_222_110_425}>
          <Text style={styles.Text_I240_222_110_425}>Reset all filter</Text>
        </View>
      </View>
      <View style={styles.View_240_237}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c32cacd5-058b-48eb-919b-e37219841a99"
          }}
          style={styles.ImageBackground_I240_237_112_822}
        />
        <View style={styles.View_I240_237_112_307}>
          <Text style={styles.Text_I240_237_112_307}>Load more</Text>
        </View>
      </View>
      <View style={styles.View_240_246}>
        <View style={styles.View_I240_246_206_942}>
          <Text style={styles.Text_I240_246_206_942}>
            The New Creative Economy
          </Text>
        </View>
        <View style={styles.View_I240_246_206_943}>
          <View style={styles.View_I240_246_206_943_112_169}>
            <Text style={styles.Text_I240_246_206_943_112_169}>Earn now</Text>
          </View>
        </View>
        <View style={styles.View_I240_246_206_948}>
          <View style={styles.View_I240_246_206_948_112_149}>
            <Text style={styles.Text_I240_246_206_948_112_149}>
              Discover more
            </Text>
          </View>
        </View>
        <View style={styles.View_I240_246_206_964}>
          <View style={styles.View_I240_246_206_959} />
          <View style={styles.View_I240_246_206_960}>
            <View style={styles.View_I240_246_206_960_127_1449} />
          </View>
          <View style={styles.View_I240_246_206_955}>
            <Text style={styles.Text_I240_246_206_955}>
              Instagram Twitter Discord Blog
            </Text>
          </View>
          <View style={styles.View_I240_246_206_956}>
            <Text style={styles.Text_I240_246_206_956}>
              About Community Guidelines Terms of Service Privacy Careers Help
            </Text>
          </View>
          <View style={styles.View_I240_246_206_957}>
            <Text style={styles.Text_I240_246_206_957}>© 2021 Openart</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bf7ac8e4-27f6-4dd1-b132-c9bcbe557887"
          }}
          style={styles.ImageBackground_I240_246_338_2908}
        />
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(248, 248, 248, 1)" },
  View_2: { height: hp("523%") },
  View_240_2: {
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
  ImageBackground_I240_2_203_410: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%"),
    top: hp("3%")
  },
  View_I240_2_338_16: {
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
  View_I240_2_349_7250: {
    width: wp("24%"),
    top: hp("-2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%"),
    justifyContent: "flex-start"
  },
  Text_I240_2_349_7250: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 30.409923553466797,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -2.8995864391326904,
    textTransform: "none"
  },
  ImageBackground_I240_2_338_2219: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%")
  },
  ImageBackground_I240_2_338_2220: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_I240_2_338_2221: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%")
  },
  ImageBackground_I240_2_338_2222: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%")
  },
  ImageBackground_I240_2_338_2223: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%")
  },
  ImageBackground_I240_2_338_2224: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%")
  },
  ImageBackground_I240_2_338_2225: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%")
  },
  View_240_14: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("14%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I240_14_134_606: {
    flexGrow: 1,
    width: wp("87%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(240, 240, 240, 1)"
  },
  ImageBackground_I240_14_134_641: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    top: hp("2%")
  },
  View_I240_14_134_608: {
    flexGrow: 1,
    width: wp("73%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I240_14_134_608: {
    color: "rgba(136, 136, 136, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I240_14_134_639: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%")
  },
  View_395_0: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("23%")
  },
  View_240_21: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_240_21: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_240_66: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%")
  },
  View_240_40: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I240_40_240_22: {
    flexGrow: 1,
    width: wp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I240_40_240_22: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_240_42: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("0%"),
    backgroundColor: "rgba(240, 240, 240, 1)"
  },
  View_I240_42_240_22: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I240_42_240_22: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_240_44: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("0%"),
    backgroundColor: "rgba(240, 240, 240, 1)"
  },
  View_I240_44_240_22: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I240_44_240_22: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_240_46: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    backgroundColor: "rgba(240, 240, 240, 1)"
  },
  View_I240_46_240_22: {
    flexGrow: 1,
    width: wp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I240_46_240_22: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_240_48: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("7%"),
    backgroundColor: "rgba(240, 240, 240, 1)"
  },
  View_I240_48_240_22: {
    flexGrow: 1,
    width: wp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I240_48_240_22: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_2: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("72%")
  },
  View_240_100: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_240_100: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_240_128: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%")
  },
  View_240_117: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I240_117_240_22: {
    flexGrow: 1,
    width: wp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I240_117_240_22: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_240_118: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("0%"),
    backgroundColor: "rgba(240, 240, 240, 1)"
  },
  View_I240_118_240_22: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I240_118_240_22: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_240_119: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("0%"),
    backgroundColor: "rgba(240, 240, 240, 1)"
  },
  View_I240_119_240_22: {
    flexGrow: 1,
    width: wp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I240_119_240_22: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_3: {
    width: wp("71%"),
    minWidth: wp("71%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("89%")
  },
  View_240_129: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_240_129: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_240_143: {
    width: wp("71%"),
    minWidth: wp("71%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%")
  },
  View_240_131: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(240, 240, 240, 1)"
  },
  View_I240_131_240_22: {
    flexGrow: 1,
    width: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I240_131_240_22: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_240_132: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("0%"),
    backgroundColor: "rgba(240, 240, 240, 1)"
  },
  View_I240_132_240_22: {
    flexGrow: 1,
    width: wp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I240_132_240_22: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_240_139: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    backgroundColor: "rgba(240, 240, 240, 1)"
  },
  View_I240_139_240_22: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I240_139_240_22: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_240_141: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("7%"),
    backgroundColor: "rgba(240, 240, 240, 1)"
  },
  View_I240_141_240_22: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I240_141_240_22: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_240_133: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%"),
    top: hp("0%"),
    backgroundColor: "rgba(240, 240, 240, 1)"
  },
  View_I240_133_240_22: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I240_133_240_22: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_395_1: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("47%")
  },
  View_240_65: {
    width: wp("30%"),
    minWidth: wp("30%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_240_65: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_240_67: {
    width: wp("74%"),
    minWidth: wp("74%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("6%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I240_67_131_741: {
    flexGrow: 1,
    width: wp("74%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%"),
    backgroundColor: "rgba(220, 220, 220, 1)"
  },
  View_I240_67_131_742: {
    flexGrow: 1,
    width: wp("39%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%")
  },
  View_I240_67_131_743: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("7%"),
    backgroundColor: "rgba(247, 247, 252, 1)",
    borderColor: "rgba(220, 220, 220, 1)",
    borderWidth: 8
  },
  View_I240_67_131_744: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("7%"),
    backgroundColor: "rgba(220, 220, 220, 1)",
    borderColor: "rgba(51, 51, 51, 1)",
    borderWidth: 2
  },
  ImageBackground_I240_67_131_745: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("4%")
  },
  View_I240_67_131_746: {
    flexGrow: 1,
    width: wp("23%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("0%"),
    backgroundColor: "rgba(220, 220, 220, 1)"
  },
  View_I240_67_131_747: {
    width: wp("14%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "center"
  },
  Text_I240_67_131_747: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_240_71: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("17%"),
    justifyContent: "center"
  },
  Text_240_71: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_240_85: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("17%"),
    justifyContent: "center"
  },
  Text_240_85: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_240_144: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("258%"),
    minHeight: hp("258%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("144%")
  },
  View_240_145: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("82%"),
    minHeight: hp("82%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_240_146: {
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
  View_I240_146_220_70: {
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
  ImageBackground_I240_146_206_424: {
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
  View_I240_146_206_425: {
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
  View_I240_146_206_425_106_459: {
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
  ImageBackground_I240_146_206_425_106_460: {
    width: wp("14%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I240_146_206_425_106_461: {
    width: wp("13%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I240_146_206_425_106_462: {
    width: wp("13%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I240_146_206_425_106_463: {
    width: wp("13%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_I240_146_206_425_106_464: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  View_I240_146_206_425_106_465: {
    flexGrow: 1,
    width: wp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I240_146_206_425_106_465: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I240_146_206_425_106_466: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I240_146_206_425_106_466: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I240_146_206_441: {
    flexGrow: 1,
    width: wp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("58%"),
    justifyContent: "flex-start"
  },
  Text_I240_146_206_441: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.24,
    textTransform: "none"
  },
  ImageBackground_I240_146_220_201: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("64%")
  },
  View_240_147: {
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
  View_240_148: {
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
  View_240_149: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_240_149: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_240_150: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_240_150: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.24,
    textTransform: "none"
  },
  View_240_151: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("82%"),
    minHeight: hp("82%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("88%")
  },
  View_240_152: {
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
  View_I240_152_220_70: {
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
  ImageBackground_I240_152_206_424: {
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
  View_I240_152_206_425: {
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
  View_I240_152_206_425_106_459: {
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
  ImageBackground_I240_152_206_425_106_460: {
    width: wp("14%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I240_152_206_425_106_461: {
    width: wp("13%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I240_152_206_425_106_462: {
    width: wp("13%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I240_152_206_425_106_463: {
    width: wp("13%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_I240_152_206_425_106_464: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  View_I240_152_206_425_106_465: {
    flexGrow: 1,
    width: wp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I240_152_206_425_106_465: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I240_152_206_425_106_466: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I240_152_206_425_106_466: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I240_152_206_441: {
    flexGrow: 1,
    width: wp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("58%"),
    justifyContent: "flex-start"
  },
  Text_I240_152_206_441: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.24,
    textTransform: "none"
  },
  ImageBackground_I240_152_220_201: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("64%")
  },
  View_240_153: {
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
  View_240_154: {
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
  View_240_155: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_240_155: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_240_156: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_240_156: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.24,
    textTransform: "none"
  },
  View_240_157: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("82%"),
    minHeight: hp("82%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("175%")
  },
  View_240_158: {
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
  View_I240_158_220_70: {
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
  ImageBackground_I240_158_206_424: {
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
  View_I240_158_206_425: {
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
  View_I240_158_206_425_106_459: {
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
  ImageBackground_I240_158_206_425_106_460: {
    width: wp("14%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I240_158_206_425_106_461: {
    width: wp("13%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I240_158_206_425_106_462: {
    width: wp("13%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I240_158_206_425_106_463: {
    width: wp("13%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_I240_158_206_425_106_464: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  View_I240_158_206_425_106_465: {
    flexGrow: 1,
    width: wp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I240_158_206_425_106_465: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I240_158_206_425_106_466: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I240_158_206_425_106_466: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I240_158_206_441: {
    flexGrow: 1,
    width: wp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("58%"),
    justifyContent: "flex-start"
  },
  Text_I240_158_206_441: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.24,
    textTransform: "none"
  },
  ImageBackground_I240_158_220_201: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("64%")
  },
  View_240_159: {
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
  View_240_160: {
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
  View_240_161: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_240_161: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_240_162: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_240_162: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.24,
    textTransform: "none"
  },
  View_395_4: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("113%")
  },
  View_240_208: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_240_208: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_240_209: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    backgroundColor: "rgba(240, 240, 240, 1)"
  },
  View_I240_209_128_546: {
    flexGrow: 1,
    width: wp("67%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I240_209_128_546: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I240_209_128_543: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I240_209_128_543_128_540: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I240_209_128_543_128_541: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%")
  },
  View_240_215: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("131%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I240_215_127_1455: {
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
  View_240_222: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("135%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I240_222_112_758: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%")
  },
  View_I240_222_110_425: {
    flexGrow: 1,
    width: wp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I240_222_110_425: {
    color: "rgba(136, 136, 136, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_240_237: {
    width: wp("91%"),
    height: hp("8%"),
    top: hp("408%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I240_237_112_822: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("2%")
  },
  View_I240_237_112_307: {
    flexGrow: 1,
    width: wp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I240_237_112_307: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_240_246: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("91%"),
    minHeight: hp("91%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("432%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I240_246_206_942: {
    flexGrow: 1,
    width: wp("90%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("10%"),
    justifyContent: "flex-start"
  },
  Text_I240_246_206_942: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 20.724939346313477,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25724939346313475,
    textTransform: "none"
  },
  View_I240_246_206_943: {
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
  View_I240_246_206_943_112_169: {
    flexGrow: 1,
    width: wp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I240_246_206_943_112_169: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I240_246_206_948: {
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
  View_I240_246_206_948_112_149: {
    flexGrow: 1,
    width: wp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I240_246_206_948_112_149: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I240_246_206_964: {
    flexGrow: 1,
    width: wp("101%"),
    height: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("48%")
  },
  View_I240_246_206_959: {
    width: wp("100%"),
    height: hp("42%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(34, 34, 34, 1)"
  },
  View_I240_246_206_960: {
    width: wp("100%"),
    height: hp("0%"),
    top: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I240_246_206_960_127_1449: {
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
  View_I240_246_206_955: {
    width: wp("23%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "flex-start"
  },
  Text_I240_246_206_955: {
    color: "rgba(248, 248, 248, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I240_246_206_956: {
    width: wp("49%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    justifyContent: "flex-start"
  },
  Text_I240_246_206_956: {
    color: "rgba(248, 248, 248, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I240_246_206_957: {
    width: wp("27%"),
    top: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "flex-start"
  },
  Text_I240_246_206_957: {
    color: "rgba(240, 240, 240, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I240_246_338_2908: {
    flexGrow: 1,
    width: wp("47%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("3%")
  }
})
const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
