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
      <View style={styles.View_233_1105} />
      <View style={styles.View_233_1108}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7f6822d9-0826-4b89-8d2c-7f90dc51b1b1"
          }}
          style={styles.ImageBackground_I233_1108_203_410}
        />
        <View style={styles.View_I233_1108_338_16}>
          <View style={styles.View_I233_1108_349_7250}>
            <Text style={styles.Text_I233_1108_349_7250}>open</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4c948344-10a0-4e08-bd0c-85adebaa206f"
            }}
            style={styles.ImageBackground_I233_1108_338_2219}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/820697c3-0b2a-45d3-a1ad-593aa6124d62"
            }}
            style={styles.ImageBackground_I233_1108_338_2220}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/19731811-61b9-404a-b25a-9d2585c4082e"
            }}
            style={styles.ImageBackground_I233_1108_338_2221}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/03f119ab-5853-4d2b-8c3a-d0cc6d2ee0b6"
            }}
            style={styles.ImageBackground_I233_1108_338_2222}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/64d0cd70-e2bb-48e6-903c-923904e7c819"
            }}
            style={styles.ImageBackground_I233_1108_338_2223}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f598928d-0bdd-4bf0-9649-d09c8dd3e712"
            }}
            style={styles.ImageBackground_I233_1108_338_2224}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6b2f43e4-130f-41db-8082-a8835f38e76e"
            }}
            style={styles.ImageBackground_I233_1108_338_2225}
          />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/50dda7fb-8e34-4593-a7cc-abc5c0e26d3c"
        }}
        style={styles.ImageBackground_233_1109}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cd24335e-de0c-48de-8996-f1aae241223e"
        }}
        style={styles.ImageBackground_233_1110}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/49c8eb8c-f77b-47cd-9e57-4a5dc75ac93a"
        }}
        style={styles.ImageBackground_233_1111}
      />
      <View style={styles.View_233_1112}>
        <Text style={styles.Text_233_1112}>Gift Habeshaw</Text>
      </View>
      <View style={styles.View_233_1113}>
        <Text style={styles.Text_233_1113}>52fs5ge5g45sov45a</Text>
      </View>
      <View style={styles.View_233_1114}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/db61717a-03fe-4b45-9500-fe54ab260a2c"
          }}
          style={styles.ImageBackground_I233_1114_94_1729}
        />
        <View style={styles.View_I233_1114_94_1730} />
      </View>
      <View style={styles.View_233_1115}>
        <View style={styles.View_233_1116}>
          <Text style={styles.Text_233_1116}>Contact@OpenArt.design</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fb9b8f58-cc07-4e7d-9221-4cd8c58472b3"
          }}
          style={styles.ImageBackground_233_1117}
        />
      </View>
      <View style={styles.View_233_1120}>
        <View style={styles.View_233_1121}>
          <Text style={styles.Text_233_1121}>Linked</Text>
        </View>
        <View style={styles.View_233_1122}>
          <View style={styles.View_I233_1122_94_1807} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/04daa5f9-4a18-4926-a353-f57000c5fd45"
            }}
            style={styles.ImageBackground_I233_1122_94_1808}
          />
        </View>
      </View>
      <View style={styles.View_233_1123}>
        <View style={styles.View_233_1124}>
          <Text style={styles.Text_233_1124}>(+60) 264 859 62</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c2846eb5-7eb5-488c-8a20-780d4143a525"
          }}
          style={styles.ImageBackground_233_1125}
        />
      </View>
      <View style={styles.View_233_1126}>
        <View style={styles.View_233_1127}>
          <Text style={styles.Text_233_1127}>OpenArt.design</Text>
        </View>
        <View style={styles.View_233_1128}>
          <View style={styles.View_I233_1128_94_1896}>
            <View style={styles.View_I233_1128_94_1897} />
            <View style={styles.View_I233_1128_94_1898} />
          </View>
          <View style={styles.View_I233_1128_94_1899}>
            <View style={styles.View_I233_1128_94_1900} />
            <View style={styles.View_I233_1128_94_1901} />
          </View>
        </View>
      </View>
      <View style={styles.View_233_1129}>
        <View style={styles.View_233_1130}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c3460eb1-6d98-4d6b-ba1b-9e92e113f48f"
            }}
            style={styles.ImageBackground_I233_1130_112_766}
          />
          <View style={styles.View_I233_1130_110_415}>
            <Text style={styles.Text_I233_1130_110_415}>Follow</Text>
          </View>
        </View>
        <View style={styles.View_233_1131}>
          <View style={styles.View_I233_1131_94_1774}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1b391771-78df-45f5-8654-210fc5af5ebb"
              }}
              style={styles.ImageBackground_I233_1131_94_1775}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c548eb4d-79ed-45e9-b3a3-3a7e7be49a73"
            }}
            style={styles.ImageBackground_I233_1131_94_1778}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3dc4e915-f4c7-48fc-a8c6-0b114f09d32b"
          }}
          style={styles.ImageBackground_233_1132}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/950da1a5-e3b6-45f0-a338-1f3a990b4259"
          }}
          style={styles.ImageBackground_233_1133}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/01877f21-d8fd-45c5-ae1f-3abc8b94dad3"
          }}
          style={styles.ImageBackground_233_1134}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e9a1e642-afbf-42dd-9900-36422f7070c8"
        }}
        style={styles.ImageBackground_233_1135}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/29c6fffe-e826-45a2-9169-dca5b5d3d98e"
        }}
        style={styles.ImageBackground_233_1136}
      />
      <View style={styles.View_233_1137}>
        <Text style={styles.Text_233_1137}>My Items</Text>
      </View>
      <View style={styles.View_233_1138}>
        <View style={styles.View_233_1139}>
          <View style={styles.View_233_1140}>
            <View style={styles.View_I233_1140_220_70} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b046e7b6-d56c-444b-b412-8413d0bedb91"
              }}
              style={styles.ImageBackground_I233_1140_206_424}
            />
            <View style={styles.View_I233_1140_206_425}>
              <View style={styles.View_I233_1140_206_425_106_459}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e1d87f5c-10d3-482d-9f70-fdc604171186"
                  }}
                  style={styles.ImageBackground_I233_1140_206_425_106_460}
                />
                <View style={styles.View_I233_1140_206_425_106_461}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/28c08b51-2487-4a5e-ae2a-fd1d45fa2649"
                    }}
                    style={styles.ImageBackground_I233_1140_206_425_106_462}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0d5d4116-0c0f-44bd-b4db-29802c1d1bbf"
                    }}
                    style={styles.ImageBackground_I233_1140_206_425_106_463}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a5bd2875-3f54-4ff5-8f6c-f9b7157fcaec"
                  }}
                  style={styles.ImageBackground_I233_1140_206_425_106_464}
                />
              </View>
              <View style={styles.View_I233_1140_206_425_106_465}>
                <Text style={styles.Text_I233_1140_206_425_106_465}>
                  Pawel Czerwinski
                </Text>
              </View>
              <View style={styles.View_I233_1140_206_425_106_466}>
                <Text style={styles.Text_I233_1140_206_425_106_466}>
                  Creator
                </Text>
              </View>
            </View>
            <View style={styles.View_I233_1140_206_441}>
              <Text style={styles.Text_I233_1140_206_441}>Silent Color</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/585edf61-d418-46be-a393-e8394d6f34de"
              }}
              style={styles.ImageBackground_I233_1140_220_201}
            />
          </View>
          <View style={styles.View_233_1141}>
            <View style={styles.View_233_1142} />
            <View style={styles.View_233_1143}>
              <Text style={styles.Text_233_1143}>Sold For</Text>
            </View>
            <View style={styles.View_233_1144}>
              <Text style={styles.Text_233_1144}>2.00 ETH</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_233_1145}>
          <View style={styles.View_233_1146}>
            <View style={styles.View_I233_1146_220_70} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d5b7d124-850c-4dd4-8b76-a5d886d876a7"
              }}
              style={styles.ImageBackground_I233_1146_206_424}
            />
            <View style={styles.View_I233_1146_206_425}>
              <View style={styles.View_I233_1146_206_425_106_459}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/62ae69d3-2a47-465e-9dd1-22b16b2f5108"
                  }}
                  style={styles.ImageBackground_I233_1146_206_425_106_460}
                />
                <View style={styles.View_I233_1146_206_425_106_461}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/26fa1442-0120-4762-91ce-7cfa482676e7"
                    }}
                    style={styles.ImageBackground_I233_1146_206_425_106_462}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/be28dc4f-c023-43fb-9302-e2d4c03ed071"
                    }}
                    style={styles.ImageBackground_I233_1146_206_425_106_463}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9d221d1e-ec60-4128-b1e6-16ef2668951a"
                  }}
                  style={styles.ImageBackground_I233_1146_206_425_106_464}
                />
              </View>
              <View style={styles.View_I233_1146_206_425_106_465}>
                <Text style={styles.Text_I233_1146_206_425_106_465}>
                  Pawel Czerwinski
                </Text>
              </View>
              <View style={styles.View_I233_1146_206_425_106_466}>
                <Text style={styles.Text_I233_1146_206_425_106_466}>
                  Creator
                </Text>
              </View>
            </View>
            <View style={styles.View_I233_1146_206_441}>
              <Text style={styles.Text_I233_1146_206_441}>George</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e9778cd6-8830-4e2e-a431-6b939bc5de29"
              }}
              style={styles.ImageBackground_I233_1146_220_201}
            />
          </View>
          <View style={styles.View_233_1147}>
            <View style={styles.View_233_1148} />
            <View style={styles.View_233_1149}>
              <Text style={styles.Text_233_1149}>Sold For</Text>
            </View>
            <View style={styles.View_233_1150}>
              <Text style={styles.Text_233_1150}>2.00 ETH</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_233_1151}>
          <View style={styles.View_233_1152}>
            <View style={styles.View_I233_1152_220_70} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/01e049f6-f3fd-44e2-98ca-1e0331dfb69f"
              }}
              style={styles.ImageBackground_I233_1152_206_424}
            />
            <View style={styles.View_I233_1152_206_425}>
              <View style={styles.View_I233_1152_206_425_106_459}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/526a95fe-d1de-41bb-a660-b59013c54dd8"
                  }}
                  style={styles.ImageBackground_I233_1152_206_425_106_460}
                />
                <View style={styles.View_I233_1152_206_425_106_461}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a70c8821-6989-4799-a73d-de08ec38b6f6"
                    }}
                    style={styles.ImageBackground_I233_1152_206_425_106_462}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3a41e625-482d-4ba9-819c-2e870600a9b4"
                    }}
                    style={styles.ImageBackground_I233_1152_206_425_106_463}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4ed62ffe-d66b-450c-875c-c1bfa2368051"
                  }}
                  style={styles.ImageBackground_I233_1152_206_425_106_464}
                />
              </View>
              <View style={styles.View_I233_1152_206_425_106_465}>
                <Text style={styles.Text_I233_1152_206_425_106_465}>
                  Pawel Czerwinski
                </Text>
              </View>
              <View style={styles.View_I233_1152_206_425_106_466}>
                <Text style={styles.Text_I233_1152_206_425_106_466}>
                  Creator
                </Text>
              </View>
            </View>
            <View style={styles.View_I233_1152_206_441}>
              <Text style={styles.Text_I233_1152_206_441}>Ocean</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/05dc9d4b-8d35-4b1c-b78b-c56918e4b4c3"
              }}
              style={styles.ImageBackground_I233_1152_220_201}
            />
          </View>
          <View style={styles.View_233_1153}>
            <View style={styles.View_233_1154} />
            <View style={styles.View_233_1155}>
              <Text style={styles.Text_233_1155}>Sold For</Text>
            </View>
            <View style={styles.View_233_1156}>
              <Text style={styles.Text_233_1156}>2.00 ETH</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_390_1} />
      <View style={styles.View_233_1157}>
        <View style={styles.View_I233_1157_112_149}>
          <Text style={styles.Text_I233_1157_112_149}>Load more</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1fce4b97-fc0c-4096-8a0d-5f1b3d9047db"
        }}
        style={styles.ImageBackground_243_3032}
      />
      <View style={styles.View_233_1158}>
        <View style={styles.View_I233_1158_206_942}>
          <Text style={styles.Text_I233_1158_206_942}>
            The New Creative Economy
          </Text>
        </View>
        <View style={styles.View_I233_1158_206_943}>
          <View style={styles.View_I233_1158_206_943_112_169}>
            <Text style={styles.Text_I233_1158_206_943_112_169}>Earn now</Text>
          </View>
        </View>
        <View style={styles.View_I233_1158_206_948}>
          <View style={styles.View_I233_1158_206_948_112_149}>
            <Text style={styles.Text_I233_1158_206_948_112_149}>
              Discover more
            </Text>
          </View>
        </View>
        <View style={styles.View_I233_1158_206_964}>
          <View style={styles.View_I233_1158_206_959} />
          <View style={styles.View_I233_1158_206_960}>
            <View style={styles.View_I233_1158_206_960_127_1449} />
          </View>
          <View style={styles.View_I233_1158_206_955}>
            <Text style={styles.Text_I233_1158_206_955}>
              Instagram Twitter Discord Blog
            </Text>
          </View>
          <View style={styles.View_I233_1158_206_956}>
            <Text style={styles.Text_I233_1158_206_956}>
              About Community Guidelines Terms of Service Privacy Careers Help
            </Text>
          </View>
          <View style={styles.View_I233_1158_206_957}>
            <Text style={styles.Text_I233_1158_206_957}>© 2021 Openart</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9ded7e09-577d-41ac-95fe-75b2e2cd2bf8"
          }}
          style={styles.ImageBackground_I233_1158_338_2908}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/02665ac3-0bda-4ea3-9bab-233881f2357b"
        }}
        style={styles.ImageBackground_235_0}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/40e545f3-a74c-433f-b3c9-d68b967121d9"
        }}
        style={styles.ImageBackground_235_2}
      />
      <View style={styles.View_235_5}>
        <View style={styles.View_235_3} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7e3d9dd9-fe69-4332-91a2-691f1599f7d0"
          }}
          style={styles.ImageBackground_235_4}
        />
      </View>
      <View style={styles.View_236_3703}>
        <Text style={styles.Text_236_3703}>Notification</Text>
      </View>
      <View style={styles.View_437_7639}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/11c2c102-5f54-4825-8670-038483e23961"
          }}
          style={styles.ImageBackground_I437_7639_236_3704}
        />
        <View style={styles.View_I437_7639_236_3705}>
          <Text style={styles.Text_I437_7639_236_3705}>ETH received</Text>
        </View>
        <View style={styles.View_I437_7639_236_3706}>
          <Text style={styles.Text_I437_7639_236_3706}>1.05 ETH recived</Text>
        </View>
        <View style={styles.View_I437_7639_236_3707}>
          <Text style={styles.Text_I437_7639_236_3707}>1 day ago</Text>
        </View>
      </View>
      <View style={styles.View_236_3710}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/437ee9ad-10c4-466b-bd47-1ae685656f8b"
          }}
          style={styles.ImageBackground_I236_3710_236_3704}
        />
        <View style={styles.View_I236_3710_236_3705}>
          <Text style={styles.Text_I236_3710_236_3705}>Upload success</Text>
        </View>
        <View style={styles.View_I236_3710_236_3706}>
          <Text style={styles.Text_I236_3710_236_3706}>ready to sell</Text>
        </View>
        <View style={styles.View_I236_3710_236_3707}>
          <Text style={styles.Text_I236_3710_236_3707}>1 day ago</Text>
        </View>
      </View>
      <View style={styles.View_236_3716}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5d21c49d-aad0-4bc6-91f7-fd447ec40e4b"
          }}
          style={styles.ImageBackground_I236_3716_236_3704}
        />
        <View style={styles.View_I236_3716_236_3705}>
          <Text style={styles.Text_I236_3716_236_3705}>
            Eric follow your collection
          </Text>
        </View>
        <View style={styles.View_I236_3716_236_3706}>
          <Text style={styles.Text_I236_3716_236_3706}>
            Supper wave collection
          </Text>
        </View>
        <View style={styles.View_I236_3716_236_3707}>
          <Text style={styles.Text_I236_3716_236_3707}>2 day ago</Text>
        </View>
      </View>
      <View style={styles.View_236_3722}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9c569128-67ad-46d2-be87-b8ab6fb1ed5e"
          }}
          style={styles.ImageBackground_I236_3722_236_3704}
        />
        <View style={styles.View_I236_3722_236_3705}>
          <Text style={styles.Text_I236_3722_236_3705}>ETH received</Text>
        </View>
        <View style={styles.View_I236_3722_236_3706}>
          <Text style={styles.Text_I236_3722_236_3706}>1.05 ETH recived</Text>
        </View>
        <View style={styles.View_I236_3722_236_3707}>
          <Text style={styles.Text_I236_3722_236_3707}>1 day ago</Text>
        </View>
      </View>
      <View style={styles.View_236_3728}>
        <View style={styles.View_I236_3728_110_1}>
          <Text style={styles.Text_I236_3728_110_1}>View all</Text>
        </View>
      </View>
      <View style={styles.View_237_1234}>
        <View style={styles.View_I237_1234_110_58}>
          <Text style={styles.Text_I237_1234_110_58}>Mark as all read</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fe052d49-0855-4d94-9b45-2fd29ec2576d"
        }}
        style={styles.ImageBackground_237_1218}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7d775116-5e9c-432e-b473-05338b98ffa8"
        }}
        style={styles.ImageBackground_237_1219}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/51aac31f-b75f-49bf-818c-3c79f392e6f8"
        }}
        style={styles.ImageBackground_237_1220}
      />
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(248, 248, 248, 1)" },
  View_2: { height: hp("100%") },
  View_233_1105: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("41%"),
    minHeight: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("55%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_233_1108: {
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
  ImageBackground_I233_1108_203_410: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%"),
    top: hp("3%")
  },
  View_I233_1108_338_16: {
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
  View_I233_1108_349_7250: {
    width: wp("24%"),
    top: hp("-2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%"),
    justifyContent: "flex-start"
  },
  Text_I233_1108_349_7250: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 30.409923553466797,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -2.8995864391326904,
    textTransform: "none"
  },
  ImageBackground_I233_1108_338_2219: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%")
  },
  ImageBackground_I233_1108_338_2220: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_I233_1108_338_2221: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%")
  },
  ImageBackground_I233_1108_338_2222: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%")
  },
  ImageBackground_I233_1108_338_2223: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%")
  },
  ImageBackground_I233_1108_338_2224: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%")
  },
  ImageBackground_I233_1108_338_2225: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%")
  },
  ImageBackground_233_1109: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%")
  },
  ImageBackground_233_1110: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13%"),
    resizeMode: "cover"
  },
  ImageBackground_233_1111: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("27%")
  },
  View_233_1112: {
    width: wp("38%"),
    minWidth: wp("38%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("46%"),
    justifyContent: "flex-start"
  },
  Text_233_1112: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_233_1113: {
    width: wp("34%"),
    minWidth: wp("34%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("50%"),
    justifyContent: "flex-start"
  },
  Text_233_1113: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_233_1114: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    top: hp("50%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I233_1114_94_1729: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I233_1114_94_1730: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    borderColor: "rgba(136, 136, 136, 1)",
    borderWidth: 1.1745984554290771
  },
  View_233_1115: {
    width: wp("53%"),
    minWidth: wp("53%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("59%")
  },
  View_233_1116: {
    width: wp("45%"),
    minWidth: wp("45%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_233_1116: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_233_1117: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_233_1120: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("65%")
  },
  View_233_1121: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_233_1121: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_233_1122: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I233_1122_94_1807: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(85, 85, 85, 1)",
    borderWidth: 2
  },
  ImageBackground_I233_1122_94_1808: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_233_1123: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("70%")
  },
  View_233_1124: {
    width: wp("28%"),
    minWidth: wp("28%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_233_1124: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_233_1125: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_233_1126: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("75%")
  },
  View_233_1127: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_233_1127: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_233_1128: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I233_1128_94_1896: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_I233_1128_94_1897: {
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
  View_I233_1128_94_1898: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_I233_1128_94_1899: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_I233_1128_94_1900: {
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
  View_I233_1128_94_1901: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_233_1129: {
    width: wp("67%"),
    minWidth: wp("67%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("83%")
  },
  View_233_1130: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I233_1130_112_766: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("1%")
  },
  View_I233_1130_110_415: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I233_1130_110_415: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_233_1131: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I233_1131_94_1774: {
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
  ImageBackground_I233_1131_94_1775: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I233_1131_94_1778: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  ImageBackground_233_1132: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("0%")
  },
  ImageBackground_233_1133: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("0%")
  },
  ImageBackground_233_1134: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%")
  },
  ImageBackground_233_1135: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("57%")
  },
  ImageBackground_233_1136: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%")
  },
  View_233_1137: {
    width: wp("30%"),
    minWidth: wp("30%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("106%"),
    justifyContent: "flex-start"
  },
  Text_233_1137: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.24,
    textTransform: "none"
  },
  View_233_1138: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("266%"),
    minHeight: hp("266%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("114%")
  },
  View_233_1139: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("85%"),
    minHeight: hp("85%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_233_1140: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("74%"),
    minHeight: hp("74%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I233_1140_220_70: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("74%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I233_1140_206_424: {
    flexGrow: 1,
    width: wp("85%"),
    height: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    resizeMode: "cover"
  },
  View_I233_1140_206_425: {
    flexGrow: 1,
    width: wp("58%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("64%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I233_1140_206_425_106_459: {
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
  ImageBackground_I233_1140_206_425_106_460: {
    width: wp("14%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I233_1140_206_425_106_461: {
    width: wp("13%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I233_1140_206_425_106_462: {
    width: wp("13%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I233_1140_206_425_106_463: {
    width: wp("13%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_I233_1140_206_425_106_464: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  View_I233_1140_206_425_106_465: {
    flexGrow: 1,
    width: wp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I233_1140_206_425_106_465: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I233_1140_206_425_106_466: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I233_1140_206_425_106_466: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I233_1140_206_441: {
    flexGrow: 1,
    width: wp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("59%"),
    justifyContent: "flex-start"
  },
  Text_I233_1140_206_441: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.24,
    textTransform: "none"
  },
  ImageBackground_I233_1140_220_201: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("66%")
  },
  View_233_1141: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("76%")
  },
  View_233_1142: {
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
  View_233_1143: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_233_1143: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_233_1144: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_233_1144: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.24,
    textTransform: "none"
  },
  View_233_1145: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("85%"),
    minHeight: hp("85%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("90%")
  },
  View_233_1146: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("74%"),
    minHeight: hp("74%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I233_1146_220_70: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("74%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I233_1146_206_424: {
    flexGrow: 1,
    width: wp("85%"),
    height: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    resizeMode: "cover"
  },
  View_I233_1146_206_425: {
    flexGrow: 1,
    width: wp("58%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("64%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I233_1146_206_425_106_459: {
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
  ImageBackground_I233_1146_206_425_106_460: {
    width: wp("14%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I233_1146_206_425_106_461: {
    width: wp("13%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I233_1146_206_425_106_462: {
    width: wp("13%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I233_1146_206_425_106_463: {
    width: wp("13%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_I233_1146_206_425_106_464: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  View_I233_1146_206_425_106_465: {
    flexGrow: 1,
    width: wp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I233_1146_206_425_106_465: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I233_1146_206_425_106_466: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I233_1146_206_425_106_466: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I233_1146_206_441: {
    flexGrow: 1,
    width: wp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("59%"),
    justifyContent: "flex-start"
  },
  Text_I233_1146_206_441: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.24,
    textTransform: "none"
  },
  ImageBackground_I233_1146_220_201: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("66%")
  },
  View_233_1147: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("76%")
  },
  View_233_1148: {
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
  View_233_1149: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_233_1149: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_233_1150: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_233_1150: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.24,
    textTransform: "none"
  },
  View_233_1151: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("85%"),
    minHeight: hp("85%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("181%")
  },
  View_233_1152: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("74%"),
    minHeight: hp("74%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I233_1152_220_70: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("74%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I233_1152_206_424: {
    flexGrow: 1,
    width: wp("85%"),
    height: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    resizeMode: "cover"
  },
  View_I233_1152_206_425: {
    flexGrow: 1,
    width: wp("58%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("64%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I233_1152_206_425_106_459: {
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
  ImageBackground_I233_1152_206_425_106_460: {
    width: wp("14%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I233_1152_206_425_106_461: {
    width: wp("13%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I233_1152_206_425_106_462: {
    width: wp("13%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I233_1152_206_425_106_463: {
    width: wp("13%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_I233_1152_206_425_106_464: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  View_I233_1152_206_425_106_465: {
    flexGrow: 1,
    width: wp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I233_1152_206_425_106_465: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I233_1152_206_425_106_466: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I233_1152_206_425_106_466: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I233_1152_206_441: {
    flexGrow: 1,
    width: wp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("59%"),
    justifyContent: "flex-start"
  },
  Text_I233_1152_206_441: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.24,
    textTransform: "none"
  },
  ImageBackground_I233_1152_220_201: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("66%")
  },
  View_233_1153: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("76%")
  },
  View_233_1154: {
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
  View_233_1155: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_233_1155: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_233_1156: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_233_1156: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.24,
    textTransform: "none"
  },
  View_390_1: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("102%"),
    minHeight: hp("102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_233_1157: {
    width: wp("91%"),
    height: hp("8%"),
    top: hp("386%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I233_1157_112_149: {
    flexGrow: 1,
    width: wp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I233_1157_112_149: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_243_3032: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    top: hp("4%")
  },
  View_233_1158: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("94%"),
    minHeight: hp("94%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("411%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I233_1158_206_942: {
    flexGrow: 1,
    width: wp("90%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("10%"),
    justifyContent: "flex-start"
  },
  Text_I233_1158_206_942: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 20.724939346313477,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25724939346313475,
    textTransform: "none"
  },
  View_I233_1158_206_943: {
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
  View_I233_1158_206_943_112_169: {
    flexGrow: 1,
    width: wp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I233_1158_206_943_112_169: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I233_1158_206_948: {
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
  View_I233_1158_206_948_112_149: {
    flexGrow: 1,
    width: wp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I233_1158_206_948_112_149: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I233_1158_206_964: {
    flexGrow: 1,
    width: wp("101%"),
    height: hp("44%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("50%")
  },
  View_I233_1158_206_959: {
    width: wp("100%"),
    height: hp("44%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(34, 34, 34, 1)"
  },
  View_I233_1158_206_960: {
    width: wp("100%"),
    height: hp("0%"),
    top: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I233_1158_206_960_127_1449: {
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
  View_I233_1158_206_955: {
    width: wp("23%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "flex-start"
  },
  Text_I233_1158_206_955: {
    color: "rgba(248, 248, 248, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I233_1158_206_956: {
    width: wp("49%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    justifyContent: "flex-start"
  },
  Text_I233_1158_206_956: {
    color: "rgba(248, 248, 248, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I233_1158_206_957: {
    width: wp("27%"),
    top: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "flex-start"
  },
  Text_I233_1158_206_957: {
    color: "rgba(240, 240, 240, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I233_1158_338_2908: {
    flexGrow: 1,
    width: wp("47%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("3%")
  },
  ImageBackground_235_0: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%")
  },
  ImageBackground_235_2: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("5%")
  },
  View_235_5: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("80%"),
    minHeight: hp("80%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("10%")
  },
  View_235_3: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("78%"),
    minHeight: hp("78%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_235_4: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("0%")
  },
  View_236_3703: {
    width: wp("40%"),
    minWidth: wp("40%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_236_3703: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.24,
    textTransform: "none"
  },
  View_437_7639: {
    width: wp("79%"),
    minWidth: wp("79%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("21%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I437_7639_236_3704: {
    flexGrow: 1,
    width: wp("18%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I437_7639_236_3705: {
    flexGrow: 1,
    width: wp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I437_7639_236_3705: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I437_7639_236_3706: {
    flexGrow: 1,
    width: wp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I437_7639_236_3706: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I437_7639_236_3707: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_I437_7639_236_3707: {
    color: "rgba(136, 136, 136, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_236_3710: {
    width: wp("79%"),
    minWidth: wp("79%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("33%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I236_3710_236_3704: {
    flexGrow: 1,
    width: wp("18%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I236_3710_236_3705: {
    flexGrow: 1,
    width: wp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I236_3710_236_3705: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I236_3710_236_3706: {
    flexGrow: 1,
    width: wp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I236_3710_236_3706: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I236_3710_236_3707: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_I236_3710_236_3707: {
    color: "rgba(136, 136, 136, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_236_3716: {
    width: wp("79%"),
    minWidth: wp("79%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("46%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I236_3716_236_3704: {
    flexGrow: 1,
    width: wp("18%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I236_3716_236_3705: {
    flexGrow: 1,
    width: wp("57%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I236_3716_236_3705: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I236_3716_236_3706: {
    flexGrow: 1,
    width: wp("49%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I236_3716_236_3706: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I236_3716_236_3707: {
    flexGrow: 1,
    width: wp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_I236_3716_236_3707: {
    color: "rgba(136, 136, 136, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_236_3722: {
    width: wp("79%"),
    minWidth: wp("79%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("58%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I236_3722_236_3704: {
    flexGrow: 1,
    width: wp("18%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I236_3722_236_3705: {
    flexGrow: 1,
    width: wp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I236_3722_236_3705: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I236_3722_236_3706: {
    flexGrow: 1,
    width: wp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I236_3722_236_3706: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I236_3722_236_3707: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_I236_3722_236_3707: {
    color: "rgba(136, 136, 136, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_236_3728: {
    width: wp("81%"),
    minWidth: wp("81%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("72%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I236_3728_110_1: {
    flexGrow: 1,
    width: wp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I236_3728_110_1: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_237_1234: {
    width: wp("81%"),
    minWidth: wp("81%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("80%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I237_1234_110_58: {
    flexGrow: 1,
    width: wp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I237_1234_110_58: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_237_1218: {
    width: wp("81%"),
    minWidth: wp("81%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("32%")
  },
  ImageBackground_237_1219: {
    width: wp("81%"),
    minWidth: wp("81%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("44%")
  },
  ImageBackground_237_1220: {
    width: wp("81%"),
    minWidth: wp("81%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("57%")
  }
})
const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
