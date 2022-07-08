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
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/51a33b66-4522-4e6c-bacd-6bf54179cd5e"
        }}
        style={styles.ImageBackground_398_7580}
      />
      <View style={styles.View_398_7582}>
        <Text style={styles.Text_398_7582}>Silent Color</Text>
      </View>
      <View style={styles.View_398_7583}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/73a5845f-2e5f-4b0a-b264-8d8de1c887a5"
          }}
          style={styles.ImageBackground_398_7584}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2978f4b3-a14c-4ad5-8f02-6e2674e00f8f"
          }}
          style={styles.ImageBackground_398_7585}
        />
      </View>
      <View style={styles.View_398_7586}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fb079c53-501b-4232-9c35-21f9f75f6bb8"
          }}
          style={styles.ImageBackground_398_7587}
        />
        <View style={styles.View_398_7588}>
          <View style={styles.View_I398_7588_94_1774}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a08d1ce2-b9e3-47b3-80d8-df2be9fd581b"
              }}
              style={styles.ImageBackground_I398_7588_94_1775}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/75be883f-55e2-45c8-a5c0-9ec3022a4924"
            }}
            style={styles.ImageBackground_I398_7588_94_1778}
          />
        </View>
      </View>
      <View style={styles.View_398_7589}>
        <Text style={styles.Text_398_7589}>
          Together with my design team, we designed this futuristic Cyberyacht
          concept artwork. We wanted to create something that has not been
          created yet, so we started to collect ideas of how we imagine the
          Cyberyacht could look like in the future.
        </Text>
      </View>
      <View style={styles.View_398_7590}>
        <View style={styles.View_398_7591}>
          <View style={styles.View_I398_7591_243_3087}>
            <Text style={styles.Text_I398_7591_243_3087}>#color</Text>
          </View>
        </View>
        <View style={styles.View_398_7592}>
          <View style={styles.View_I398_7592_243_3087}>
            <Text style={styles.Text_I398_7592_243_3087}>#circle</Text>
          </View>
        </View>
        <View style={styles.View_398_7593}>
          <View style={styles.View_I398_7593_243_3087}>
            <Text style={styles.Text_I398_7593_243_3087}>#black</Text>
          </View>
        </View>
        <View style={styles.View_398_7594}>
          <View style={styles.View_I398_7594_243_3087}>
            <Text style={styles.Text_I398_7594_243_3087}>#art</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_398_7595}>
        <Text style={styles.Text_398_7595}>Activity</Text>
      </View>
      <View style={styles.View_398_7596}>
        <View style={styles.View_I398_7596_346_371}>
          <Text style={styles.Text_I398_7596_346_371}>
            The New Creative Economy
          </Text>
        </View>
        <View style={styles.View_I398_7596_346_372}>
          <View style={styles.View_I398_7596_346_372_112_169}>
            <Text style={styles.Text_I398_7596_346_372_112_169}>Earn now</Text>
          </View>
        </View>
        <View style={styles.View_I398_7596_346_373}>
          <View style={styles.View_I398_7596_346_373_112_149}>
            <Text style={styles.Text_I398_7596_346_373_112_149}>
              Discover more
            </Text>
          </View>
        </View>
        <View style={styles.View_I398_7596_346_374}>
          <View style={styles.View_I398_7596_346_375} />
          <View style={styles.View_I398_7596_346_376}>
            <View style={styles.View_I398_7596_346_376_127_1449} />
          </View>
          <View style={styles.View_I398_7596_346_377}>
            <Text style={styles.Text_I398_7596_346_377}>
              Instagram Twitter Discord Blog
            </Text>
          </View>
          <View style={styles.View_I398_7596_346_378}>
            <Text style={styles.Text_I398_7596_346_378}>
              About Community Guidelines Terms of Service Privacy Careers Help
            </Text>
          </View>
          <View style={styles.View_I398_7596_346_379}>
            <Text style={styles.Text_I398_7596_346_379}>© 2021 Openart</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d4b81246-90b1-449a-aba6-e05cabf87d7c"
          }}
          style={styles.ImageBackground_I398_7596_346_380}
        />
      </View>
      <View style={styles.View_398_7597} />
      <View style={styles.View_398_7598}>
        <View style={styles.View_I398_7598_106_153}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ec050a46-8c76-49fd-ae38-612b2344cdad"
            }}
            style={styles.ImageBackground_I398_7598_106_154}
          />
          <View style={styles.View_I398_7598_106_155}>
            <Text style={styles.Text_I398_7598_106_155}>H</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_398_7599}>
        <Text style={styles.Text_398_7599}>@openart</Text>
      </View>
      <View style={styles.View_398_7600}>
        <View style={styles.View_398_7601}>
          <View style={styles.View_I398_7601_273_60}>
            <Text style={styles.Text_I398_7601_273_60}>View on Etherscan</Text>
          </View>
          <View style={styles.View_I398_7601_273_62}>
            <View style={styles.View_I398_7601_273_62_140_45} />
            <View style={styles.View_I398_7601_273_62_140_44}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/382e2997-1af2-4038-ac2d-a0d7fe76c1f3"
                }}
                style={styles.ImageBackground_I398_7601_273_62_140_37}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/725fede9-6c60-4353-9c36-011149b8733f"
                }}
                style={styles.ImageBackground_I398_7601_273_62_140_38}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2c9acd5b-7ff7-44b6-bd98-762a26d41958"
                }}
                style={styles.ImageBackground_I398_7601_273_62_140_42}
              />
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/29eeb27b-db36-49b6-93d3-3da5acc8cf1e"
            }}
            style={styles.ImageBackground_I398_7601_273_91}
          />
        </View>
        <View style={styles.View_398_7602}>
          <View style={styles.View_I398_7602_273_60}>
            <Text style={styles.Text_I398_7602_273_60}>View on IPFS</Text>
          </View>
          <View style={styles.View_I398_7602_273_62}>
            <View style={styles.View_I398_7602_273_62_140_45} />
            <View style={styles.View_I398_7602_273_62_140_44}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/245973ae-8638-42c6-9e60-f2922aa9f66c"
                }}
                style={styles.ImageBackground_I398_7602_273_62_140_37}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/250b770a-b0ee-42a1-a8a9-6d12b9700c9a"
                }}
                style={styles.ImageBackground_I398_7602_273_62_140_38}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/479b5a93-7351-47bc-84d5-557da84e0a9b"
                }}
                style={styles.ImageBackground_I398_7602_273_62_140_42}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_398_7603}>
          <View style={styles.View_I398_7603_273_60}>
            <Text style={styles.Text_I398_7603_273_60}>View IPFS Metadata</Text>
          </View>
          <View style={styles.View_I398_7603_273_62}>
            <View style={styles.View_I398_7603_273_62_140_45} />
            <View style={styles.View_I398_7603_273_62_140_44}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8f319b8b-d700-438a-8780-b3110002de2d"
                }}
                style={styles.ImageBackground_I398_7603_273_62_140_37}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e9a5901e-c17f-4163-a4b1-31b602704e5b"
                }}
                style={styles.ImageBackground_I398_7603_273_62_140_38}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/80f19524-ff20-4b1c-b6de-542ef1df774b"
                }}
                style={styles.ImageBackground_I398_7603_273_62_140_42}
              />
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8525b7d4-3bbf-4128-b9fe-1c526b62f071"
          }}
          style={styles.ImageBackground_398_7604}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/80e6f8d7-8f8f-4de6-8fe8-5aca6550f70b"
          }}
          style={styles.ImageBackground_398_7605}
        />
      </View>
      <View style={styles.View_398_7606}>
        <View style={styles.View_398_7607} />
        <View style={styles.View_398_7608}>
          <Text style={styles.Text_398_7608}>Sold for</Text>
        </View>
        <View style={styles.View_398_7609}>
          <Text style={styles.Text_398_7609}>Owner by</Text>
        </View>
        <View style={styles.View_398_7610}>
          <View style={styles.View_398_7611}>
            <Text style={styles.Text_398_7611}>1.50 ETH</Text>
          </View>
          <View style={styles.View_398_7612}>
            <Text style={styles.Text_398_7612}>$2,683.73</Text>
          </View>
        </View>
        <View style={styles.View_398_7613} />
        <View style={styles.View_398_7614}>
          <View style={styles.View_I398_7614_106_153}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7f5337da-0f6b-4d70-80a0-0d30c5f90823"
              }}
              style={styles.ImageBackground_I398_7614_106_154}
            />
            <View style={styles.View_I398_7614_106_155}>
              <Text style={styles.Text_I398_7614_106_155}>D</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_398_7615}>
          <Text style={styles.Text_398_7615}>@david</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7c143054-7fca-43bb-a499-8efcbe597cdc"
        }}
        style={styles.ImageBackground_398_7616}
      />
      <View style={styles.View_398_7619}>
        <View style={styles.View_I398_7619_243_3113} />
        <View style={styles.View_I398_7619_243_3114}>
          <View style={styles.View_I398_7619_243_3114_106_132}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fd1fd169-2585-4e55-a1ac-01785eb5cf00"
              }}
              style={styles.ImageBackground_I398_7619_243_3114_106_133}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/13474da1-cde7-4121-b492-be83926253a9"
              }}
              style={styles.ImageBackground_I398_7619_243_3114_106_134}
            />
          </View>
        </View>
        <View style={styles.View_I398_7619_243_3140}>
          <Text style={styles.Text_I398_7619_243_3140}>
            Bid place by @pawel09
          </Text>
        </View>
        <View style={styles.View_I398_7619_243_3144}>
          <Text style={styles.Text_I398_7619_243_3144}>
            June 06, 2021 at 12:00am
          </Text>
        </View>
        <View style={styles.View_I398_7619_243_3141}>
          <View style={styles.View_I398_7619_243_3142}>
            <Text style={styles.Text_I398_7619_243_3142}>1.50 ETH</Text>
          </View>
          <View style={styles.View_I398_7619_243_3143}>
            <Text style={styles.Text_I398_7619_243_3143}>$2,683.73</Text>
          </View>
        </View>
        <View style={styles.View_I398_7619_243_3145}>
          <View style={styles.View_I398_7619_243_3145_140_45} />
          <View style={styles.View_I398_7619_243_3145_140_44}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1c036655-549c-4b28-80b4-f5f0aa3f537e"
              }}
              style={styles.ImageBackground_I398_7619_243_3145_140_37}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3916f9ea-db60-4368-8e1f-b36cc148da59"
              }}
              style={styles.ImageBackground_I398_7619_243_3145_140_38}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a48f7d8a-c061-4b76-b4fe-bc15ff8ee423"
              }}
              style={styles.ImageBackground_I398_7619_243_3145_140_42}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_398_7620}>
        <View style={styles.View_I398_7620_243_3113} />
        <View style={styles.View_I398_7620_243_3114}>
          <View style={styles.View_I398_7620_243_3114_106_132}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6a1303ef-9e0f-46c4-a250-ce6b899c97f3"
              }}
              style={styles.ImageBackground_I398_7620_243_3114_106_133}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bc049ea9-5f7f-4a48-8719-a99aef074023"
              }}
              style={styles.ImageBackground_I398_7620_243_3114_106_134}
            />
          </View>
        </View>
        <View style={styles.View_I398_7620_243_3140}>
          <Text style={styles.Text_I398_7620_243_3140}>Listing by @han152</Text>
        </View>
        <View style={styles.View_I398_7620_243_3144}>
          <Text style={styles.Text_I398_7620_243_3144}>
            June 04, 2021 at 12:00am
          </Text>
        </View>
        <View style={styles.View_I398_7620_243_3141}>
          <View style={styles.View_I398_7620_243_3142}>
            <Text style={styles.Text_I398_7620_243_3142}>1.00 ETH</Text>
          </View>
          <View style={styles.View_I398_7620_243_3143}>
            <Text style={styles.Text_I398_7620_243_3143}>$2,683.73</Text>
          </View>
        </View>
        <View style={styles.View_I398_7620_243_3145}>
          <View style={styles.View_I398_7620_243_3145_140_45} />
          <View style={styles.View_I398_7620_243_3145_140_44}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d19aa9d3-788a-4578-9af0-8bd1cdfff43f"
              }}
              style={styles.ImageBackground_I398_7620_243_3145_140_37}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c4404042-b855-423e-8851-2268d4b78f66"
              }}
              style={styles.ImageBackground_I398_7620_243_3145_140_38}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/086f38ea-b2d9-4fa1-a3fd-72638e07f0c3"
              }}
              style={styles.ImageBackground_I398_7620_243_3145_140_42}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_398_7621}>
        <View style={styles.View_I398_7621_243_3113} />
        <View style={styles.View_I398_7621_243_3114}>
          <View style={styles.View_I398_7621_243_3114_106_153}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/31b8c33a-97eb-4e2d-9058-975c9a28234f"
              }}
              style={styles.ImageBackground_I398_7621_243_3114_106_154}
            />
            <View style={styles.View_I398_7621_243_3114_106_155}>
              <Text style={styles.Text_I398_7621_243_3114_106_155}>D</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I398_7621_243_3140}>
          <Text style={styles.Text_I398_7621_243_3140}>
            Auction won by David
          </Text>
        </View>
        <View style={styles.View_I398_7621_243_3144}>
          <Text style={styles.Text_I398_7621_243_3144}>
            June 04, 2021 at 12:00am
          </Text>
        </View>
        <View style={styles.View_I398_7621_243_3141}>
          <View style={styles.View_I398_7621_243_3142}>
            <Text style={styles.Text_I398_7621_243_3142}>
              Sold for 1.50 ETH
            </Text>
          </View>
        </View>
        <View style={styles.View_I398_7621_243_3145}>
          <View style={styles.View_I398_7621_243_3145_140_45} />
          <View style={styles.View_I398_7621_243_3145_140_44}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/78141a3a-f359-4f8b-a024-bfb1effec8b0"
              }}
              style={styles.ImageBackground_I398_7621_243_3145_140_37}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fe066b84-2ee5-41b8-aa25-75d7d4769c78"
              }}
              style={styles.ImageBackground_I398_7621_243_3145_140_38}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bb73497e-69a6-4050-935f-001a9a34960e"
              }}
              style={styles.ImageBackground_I398_7621_243_3145_140_42}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_398_7622}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f6c1de29-feca-49b2-8ba0-49c04f96919d"
          }}
          style={styles.ImageBackground_I398_7622_346_183}
        />
        <View style={styles.View_I398_7622_346_200}>
          <View style={styles.View_I398_7622_349_7602}>
            <Text style={styles.Text_I398_7622_349_7602}>open</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9eee7401-77ba-4451-9fd8-f99dec52682a"
            }}
            style={styles.ImageBackground_I398_7622_346_202}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4039e0ad-40a1-4c75-9b11-a4c78350056a"
            }}
            style={styles.ImageBackground_I398_7622_346_203}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/06668684-2c72-45b2-93f0-229668892993"
            }}
            style={styles.ImageBackground_I398_7622_346_204}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/900e5f66-f606-4060-8a29-864a670c688c"
            }}
            style={styles.ImageBackground_I398_7622_346_205}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4609e1b2-67d5-4623-9865-b1e777c888fe"
            }}
            style={styles.ImageBackground_I398_7622_346_206}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/20b0ca9b-e27e-4389-9217-ef5e25a33fdd"
            }}
            style={styles.ImageBackground_I398_7622_346_207}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2efa8bf7-eb45-4319-ae70-71b17e0e1a8b"
            }}
            style={styles.ImageBackground_I398_7622_346_208}
          />
        </View>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(34, 34, 34, 1)" },
  View_2: { height: hp("320%") },
  ImageBackground_398_7580: {
    width: wp("91%"),
    height: hp("58%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    resizeMode: "cover"
  },
  View_398_7582: {
    width: wp("39%"),
    top: hp("77%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    justifyContent: "flex-start"
  },
  Text_398_7582: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.24,
    textTransform: "none"
  },
  View_398_7583: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("77%")
  },
  ImageBackground_398_7584: {
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
  ImageBackground_398_7585: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_398_7586: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("77%")
  },
  ImageBackground_398_7587: {
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
  View_398_7588: {
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
  View_I398_7588_94_1774: {
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
  ImageBackground_I398_7588_94_1775: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I398_7588_94_1778: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_398_7589: {
    width: wp("84%"),
    minWidth: wp("84%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("90%"),
    justifyContent: "center"
  },
  Text_398_7589: {
    color: "rgba(248, 248, 248, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_398_7590: {
    width: wp("69%"),
    minWidth: wp("69%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("108%")
  },
  View_398_7591: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I398_7591_243_3087: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I398_7591_243_3087: {
    color: "rgba(248, 248, 248, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_398_7592: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I398_7592_243_3087: {
    flexGrow: 1,
    width: wp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I398_7592_243_3087: {
    color: "rgba(248, 248, 248, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_398_7593: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I398_7593_243_3087: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I398_7593_243_3087: {
    color: "rgba(248, 248, 248, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_398_7594: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I398_7594_243_3087: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I398_7594_243_3087: {
    color: "rgba(248, 248, 248, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_398_7595: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("171%"),
    justifyContent: "center"
  },
  Text_398_7595: {
    color: "rgba(248, 248, 248, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_398_7596: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("91%"),
    minHeight: hp("91%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("229%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I398_7596_346_371: {
    flexGrow: 1,
    width: wp("90%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("10%"),
    justifyContent: "flex-start"
  },
  Text_I398_7596_346_371: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 20.724939346313477,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25724939346313475,
    textTransform: "none"
  },
  View_I398_7596_346_372: {
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
  View_I398_7596_346_372_112_169: {
    flexGrow: 1,
    width: wp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I398_7596_346_372_112_169: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I398_7596_346_373: {
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
  View_I398_7596_346_373_112_149: {
    flexGrow: 1,
    width: wp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I398_7596_346_373_112_149: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I398_7596_346_374: {
    flexGrow: 1,
    width: wp("101%"),
    height: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("48%")
  },
  View_I398_7596_346_375: {
    width: wp("100%"),
    height: hp("42%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(51, 51, 51, 1)"
  },
  View_I398_7596_346_376: {
    width: wp("100%"),
    height: hp("0%"),
    top: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I398_7596_346_376_127_1449: {
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
  View_I398_7596_346_377: {
    width: wp("23%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "flex-start"
  },
  Text_I398_7596_346_377: {
    color: "rgba(248, 248, 248, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I398_7596_346_378: {
    width: wp("49%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    justifyContent: "flex-start"
  },
  Text_I398_7596_346_378: {
    color: "rgba(248, 248, 248, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I398_7596_346_379: {
    width: wp("27%"),
    top: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "flex-start"
  },
  Text_I398_7596_346_379: {
    color: "rgba(240, 240, 240, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I398_7596_346_380: {
    flexGrow: 1,
    width: wp("47%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("3%")
  },
  View_398_7597: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("83%"),
    backgroundColor: "rgba(51, 51, 51, 1)"
  },
  View_398_7598: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("84%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I398_7598_106_153: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I398_7598_106_154: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I398_7598_106_155: {
    width: wp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    justifyContent: "flex-start"
  },
  Text_I398_7598_106_155: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.9999998807907104,
    textTransform: "none"
  },
  View_398_7599: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("84%"),
    justifyContent: "flex-start"
  },
  Text_398_7599: {
    color: "rgba(248, 248, 248, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_398_7600: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("28%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("115%")
  },
  View_398_7601: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(51, 51, 51, 1)"
  },
  View_I398_7601_273_60: {
    flexGrow: 1,
    width: wp("51%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I398_7601_273_60: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I398_7601_273_62: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I398_7601_273_62_140_45: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I398_7601_273_62_140_44: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I398_7601_273_62_140_37: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I398_7601_273_62_140_38: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I398_7601_273_62_140_42: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I398_7601_273_91: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%")
  },
  View_398_7602: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10%"),
    backgroundColor: "rgba(51, 51, 51, 1)"
  },
  View_I398_7602_273_60: {
    flexGrow: 1,
    width: wp("51%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I398_7602_273_60: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I398_7602_273_62: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I398_7602_273_62_140_45: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I398_7602_273_62_140_44: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I398_7602_273_62_140_37: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I398_7602_273_62_140_38: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I398_7602_273_62_140_42: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_398_7603: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20%"),
    backgroundColor: "rgba(51, 51, 51, 1)"
  },
  View_I398_7603_273_60: {
    flexGrow: 1,
    width: wp("51%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I398_7603_273_60: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I398_7603_273_62: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I398_7603_273_62_140_45: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I398_7603_273_62_140_44: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I398_7603_273_62_140_37: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I398_7603_273_62_140_38: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I398_7603_273_62_140_42: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_398_7604: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_398_7605: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_398_7606: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("148%")
  },
  View_398_7607: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(51, 51, 51, 1)"
  },
  View_398_7608: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_398_7608: {
    color: "rgba(248, 248, 248, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_398_7609: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("11%"),
    justifyContent: "center"
  },
  Text_398_7609: {
    color: "rgba(248, 248, 248, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_398_7610: {
    width: wp("50%"),
    minWidth: wp("50%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("3%")
  },
  View_398_7611: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_398_7611: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.24,
    textTransform: "none"
  },
  View_398_7612: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_398_7612: {
    color: "rgba(240, 240, 240, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_398_7613: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("10%"),
    backgroundColor: "rgba(85, 85, 85, 1)"
  },
  View_398_7614: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("10%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I398_7614_106_153: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I398_7614_106_154: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I398_7614_106_155: {
    width: wp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    justifyContent: "flex-start"
  },
  Text_I398_7614_106_155: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.9999998807907104,
    textTransform: "none"
  },
  View_398_7615: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_398_7615: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  ImageBackground_398_7616: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("149%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%")
  },
  View_398_7619: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("193%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I398_7619_243_3113: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(51, 51, 51, 1)"
  },
  View_I398_7619_243_3114: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I398_7619_243_3114_106_132: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I398_7619_243_3114_106_133: {
    width: wp("13%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I398_7619_243_3114_106_134: {
    width: wp("13%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I398_7619_243_3140: {
    flexGrow: 1,
    width: wp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I398_7619_243_3140: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I398_7619_243_3144: {
    flexGrow: 1,
    width: wp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I398_7619_243_3144: {
    color: "rgba(220, 220, 220, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I398_7619_243_3141: {
    flexGrow: 1,
    width: wp("34%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("8%")
  },
  View_I398_7619_243_3142: {
    width: wp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I398_7619_243_3142: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I398_7619_243_3143: {
    width: wp("16%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    justifyContent: "flex-start"
  },
  Text_I398_7619_243_3143: {
    color: "rgba(240, 240, 240, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I398_7619_243_3145: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I398_7619_243_3145_140_45: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I398_7619_243_3145_140_44: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I398_7619_243_3145_140_37: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I398_7619_243_3145_140_38: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I398_7619_243_3145_140_42: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_398_7620: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("208%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I398_7620_243_3113: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(51, 51, 51, 1)"
  },
  View_I398_7620_243_3114: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I398_7620_243_3114_106_132: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I398_7620_243_3114_106_133: {
    width: wp("13%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I398_7620_243_3114_106_134: {
    width: wp("13%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I398_7620_243_3140: {
    flexGrow: 1,
    width: wp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I398_7620_243_3140: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I398_7620_243_3144: {
    flexGrow: 1,
    width: wp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I398_7620_243_3144: {
    color: "rgba(220, 220, 220, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I398_7620_243_3141: {
    flexGrow: 1,
    width: wp("34%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("8%")
  },
  View_I398_7620_243_3142: {
    width: wp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I398_7620_243_3142: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I398_7620_243_3143: {
    width: wp("16%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    justifyContent: "flex-start"
  },
  Text_I398_7620_243_3143: {
    color: "rgba(240, 240, 240, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I398_7620_243_3145: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I398_7620_243_3145_140_45: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I398_7620_243_3145_140_44: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I398_7620_243_3145_140_37: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I398_7620_243_3145_140_38: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I398_7620_243_3145_140_42: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_398_7621: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("178%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I398_7621_243_3113: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(51, 51, 51, 1)"
  },
  View_I398_7621_243_3114: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I398_7621_243_3114_106_153: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I398_7621_243_3114_106_154: {
    width: wp("13%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I398_7621_243_3114_106_155: {
    width: wp("6%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_I398_7621_243_3114_106_155: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.9999998807907104,
    textTransform: "none"
  },
  View_I398_7621_243_3140: {
    flexGrow: 1,
    width: wp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I398_7621_243_3140: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I398_7621_243_3144: {
    flexGrow: 1,
    width: wp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I398_7621_243_3144: {
    color: "rgba(220, 220, 220, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I398_7621_243_3141: {
    flexGrow: 1,
    width: wp("35%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("8%")
  },
  View_I398_7621_243_3142: {
    width: wp("35%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I398_7621_243_3142: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I398_7621_243_3145: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I398_7621_243_3145_140_45: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I398_7621_243_3145_140_44: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I398_7621_243_3145_140_37: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I398_7621_243_3145_140_38: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I398_7621_243_3145_140_42: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_398_7622: {
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
  ImageBackground_I398_7622_346_183: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%"),
    top: hp("3%")
  },
  View_I398_7622_346_200: {
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
  View_I398_7622_349_7602: {
    width: wp("24%"),
    top: hp("-2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%"),
    justifyContent: "flex-start"
  },
  Text_I398_7622_349_7602: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 30.409923553466797,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -2.8995864391326904,
    textTransform: "none"
  },
  ImageBackground_I398_7622_346_202: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%")
  },
  ImageBackground_I398_7622_346_203: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_I398_7622_346_204: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%")
  },
  ImageBackground_I398_7622_346_205: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%")
  },
  ImageBackground_I398_7622_346_206: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%")
  },
  ImageBackground_I398_7622_346_207: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%")
  },
  ImageBackground_I398_7622_346_208: {
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
