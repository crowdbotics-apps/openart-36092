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
      <View style={styles.View_255_1951}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c1f4d393-5d16-41ec-b414-1344e5448119"
          }}
          style={styles.ImageBackground_I255_1951_203_410}
        />
        <View style={styles.View_I255_1951_338_16}>
          <View style={styles.View_I255_1951_349_7250}>
            <Text style={styles.Text_I255_1951_349_7250}>open</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dbb92dec-22b5-4210-8cf2-e7781a3cb9af"
            }}
            style={styles.ImageBackground_I255_1951_338_2219}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/84ba4837-29ea-49e2-8b17-15f22ba8f31f"
            }}
            style={styles.ImageBackground_I255_1951_338_2220}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/79f0f85e-5c05-4f7d-af6f-7dfa645eda1b"
            }}
            style={styles.ImageBackground_I255_1951_338_2221}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dbd549b2-4873-4a3e-8a16-8c94e42dac33"
            }}
            style={styles.ImageBackground_I255_1951_338_2222}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f6408a8d-e961-4fd6-9549-bc82f1b873a4"
            }}
            style={styles.ImageBackground_I255_1951_338_2223}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/45938d5e-5663-4c26-bfca-c928a7143fae"
            }}
            style={styles.ImageBackground_I255_1951_338_2224}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/af205fc6-61f1-4f9a-b180-264a009a92fb"
            }}
            style={styles.ImageBackground_I255_1951_338_2225}
          />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1332b1ba-1918-49b7-947e-17785591ae81"
        }}
        style={styles.ImageBackground_255_1952}
      />
      <View style={styles.View_255_1953}>
        <View style={styles.View_255_1954} />
        <View style={styles.View_255_1955}>
          <View style={styles.View_255_1956}>
            <Text style={styles.Text_255_1956}>
              Drag and drop or browce a file
            </Text>
          </View>
          <View style={styles.View_255_1957}>
            <Text style={styles.Text_255_1957}>
              PNG, GIF, WEBP, MP4 or MP3. (Max 1Gb)
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/571d96ed-2ecd-4671-b9b0-1aa194878904"
            }}
            style={styles.ImageBackground_255_1958}
          />
        </View>
      </View>
      <View style={styles.View_255_1959}>
        <Text style={styles.Text_255_1959}>Upload File</Text>
      </View>
      <View style={styles.View_255_1960}>
        <View style={styles.View_255_1961} />
        <View style={styles.View_255_1962}>
          <View style={styles.View_I255_1962_94_1774}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/97e56cdc-dffc-4e15-ade8-1a3a524d5d9c"
              }}
              style={styles.ImageBackground_I255_1962_94_1775}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/061da17b-6300-4e13-a39a-d4d73af86a7c"
            }}
            style={styles.ImageBackground_I255_1962_94_1778}
          />
        </View>
        <View style={styles.View_255_1963} />
        <View style={styles.View_255_1964} />
        <View style={styles.View_255_1965} />
      </View>
      <View style={styles.View_255_1966}>
        <Text style={styles.Text_255_1966}>Information</Text>
      </View>
      <View style={styles.View_255_1967}>
        <View style={styles.View_I255_1967_114_19} />
        <View style={styles.View_I255_1967_114_22}>
          <View style={styles.View_I255_1967_114_24}>
            <View style={styles.View_I255_1967_114_25}>
              <Text style={styles.Text_I255_1967_114_25}>Item name</Text>
            </View>
            <View style={styles.View_I255_1967_114_26}>
              <Text style={styles.Text_I255_1967_114_26}>Awesome wave</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_255_1968}>
        <View style={styles.View_I255_1968_113_372} />
        <View style={styles.View_I255_1968_114_3}>
          <View style={styles.View_I255_1968_113_373}>
            <View style={styles.View_I255_1968_113_363}>
              <Text style={styles.Text_I255_1968_113_363}>Tag</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_255_1969}>
        <View style={styles.View_I255_1969_115_465}>
          <Text style={styles.Text_I255_1969_115_465}>Description</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a69fa6af-b19d-48af-bb45-ff545737a66b"
          }}
          style={styles.ImageBackground_I255_1969_119_5}
        />
      </View>
      <View style={styles.View_255_1970}>
        <View style={styles.View_255_1971}>
          <Text style={styles.Text_255_1971}>Sale this item</Text>
        </View>
        <View style={styles.View_255_1972}>
          <Text style={styles.Text_255_1972}>
            You’ll receive bids on this item
          </Text>
        </View>
        <View style={styles.View_255_1973}>
          <View style={styles.View_I255_1973_127_1317} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/233f20ac-bde8-46ff-8ebe-51e1c0bfaaeb"
            }}
            style={styles.ImageBackground_I255_1973_127_1318}
          />
        </View>
      </View>
      <View style={styles.View_255_1974}>
        <View style={styles.View_255_1975}>
          <Text style={styles.Text_255_1975}>Add to collection</Text>
        </View>
        <View style={styles.View_255_1976}>
          <Text style={styles.Text_255_1976}>
            Choose an exiting collection or create a new one
          </Text>
        </View>
        <View style={styles.View_255_1977}>
          <View style={styles.View_I255_1977_127_1317} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b6d961a0-ef63-47ba-9dcf-78d8f23418bf"
            }}
            style={styles.ImageBackground_I255_1977_127_1318}
          />
        </View>
      </View>
      <View style={styles.View_255_1978}>
        <View style={styles.View_255_1979}>
          <Text style={styles.Text_255_1979}>Instant sale price</Text>
        </View>
        <View style={styles.View_255_1980}>
          <Text style={styles.Text_255_1980}>
            Enter the price for which the item will be instantly sold
          </Text>
        </View>
        <View style={styles.View_255_1981}>
          <View style={styles.View_I255_1981_127_1317} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b78576ef-828d-4aac-90a5-adc3ca53a1f0"
            }}
            style={styles.ImageBackground_I255_1981_127_1318}
          />
        </View>
      </View>
      <View style={styles.View_255_1982}>
        <View style={styles.View_255_1983}>
          <Text style={styles.Text_255_1983}>Unlock once purchased</Text>
        </View>
        <View style={styles.View_255_1984}>
          <Text style={styles.Text_255_1984}>
            Content will be unlocked after successful transaction
          </Text>
        </View>
        <View style={styles.View_255_1985}>
          <View style={styles.View_I255_1985_127_1329} />
        </View>
      </View>
      <View style={styles.View_255_1986} />
      <View style={styles.View_255_1987}>
        <View style={styles.View_I255_1987_112_812}>
          <View style={styles.View_I255_1987_112_812_94_1774}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/225f8e31-2828-4031-a291-c6ccd7485850"
              }}
              style={styles.ImageBackground_I255_1987_112_812_94_1775}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/97283807-3edd-40cf-af1e-28f0a37c3259"
            }}
            style={styles.ImageBackground_I255_1987_112_812_94_1778}
          />
        </View>
        <View style={styles.View_I255_1987_112_322}>
          <Text style={styles.Text_I255_1987_112_322}>Upload</Text>
        </View>
      </View>
      <View style={styles.View_255_1988}>
        <View style={styles.View_I255_1988_206_942}>
          <Text style={styles.Text_I255_1988_206_942}>
            The New Creative Economy
          </Text>
        </View>
        <View style={styles.View_I255_1988_206_943}>
          <View style={styles.View_I255_1988_206_943_112_169}>
            <Text style={styles.Text_I255_1988_206_943_112_169}>Earn now</Text>
          </View>
        </View>
        <View style={styles.View_I255_1988_206_948}>
          <View style={styles.View_I255_1988_206_948_112_149}>
            <Text style={styles.Text_I255_1988_206_948_112_149}>
              Discover more
            </Text>
          </View>
        </View>
        <View style={styles.View_I255_1988_206_964}>
          <View style={styles.View_I255_1988_206_959} />
          <View style={styles.View_I255_1988_206_960}>
            <View style={styles.View_I255_1988_206_960_127_1449} />
          </View>
          <View style={styles.View_I255_1988_206_955}>
            <Text style={styles.Text_I255_1988_206_955}>
              Instagram Twitter Discord Blog
            </Text>
          </View>
          <View style={styles.View_I255_1988_206_956}>
            <Text style={styles.Text_I255_1988_206_956}>
              About Community Guidelines Terms of Service Privacy Careers Help
            </Text>
          </View>
          <View style={styles.View_I255_1988_206_957}>
            <Text style={styles.Text_I255_1988_206_957}>© 2021 Openart</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b24afbef-cb0f-4632-805c-445afdd928fb"
          }}
          style={styles.ImageBackground_I255_1988_338_2908}
        />
      </View>
      <View style={styles.View_255_1989}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/148269bb-dd9d-438a-892b-42b17832ad06"
          }}
          style={styles.ImageBackground_I255_1989_112_822}
        />
        <View style={styles.View_I255_1989_112_307}>
          <Text style={styles.Text_I255_1989_112_307}>Preview</Text>
        </View>
      </View>
      <View style={styles.View_255_1990} />
      <View style={styles.View_255_1991}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d8174df3-d5b3-48db-87d7-d0d72ecb7d1d"
          }}
          style={styles.ImageBackground_255_1992}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/29adad47-2081-4a1f-861e-776d518f75e1"
          }}
          style={styles.ImageBackground_255_1993}
        />
      </View>
      <View style={styles.View_255_1994}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/92d36938-3257-417e-aa51-ddd2098c8371"
          }}
          style={styles.ImageBackground_255_1995}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4193380e-13bf-4d9b-840d-ee17b26d387a"
          }}
          style={styles.ImageBackground_255_1996}
        />
      </View>
      <View style={styles.View_255_1997}>
        <Text style={styles.Text_255_1997}>Create new collection</Text>
      </View>
      <View style={styles.View_255_1998}>
        <View style={styles.View_I255_1998_127_1455} />
      </View>
      <View style={styles.View_255_1999}>
        <View style={styles.View_255_2000}>
          <Text style={styles.Text_255_2000}>Multi-file</Text>
        </View>
        <View style={styles.View_255_2001}>
          <View style={styles.View_I255_2001_127_1329} />
        </View>
      </View>
      <View style={styles.View_255_2002}>
        <View style={styles.View_I255_2002_134_558}>
          <Text style={styles.Text_I255_2002_134_558}>9:41</Text>
        </View>
        <View style={styles.View_I255_2002_134_559}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/03cc2778-8728-40fc-ba1e-fc575f0e6d71"
            }}
            style={styles.ImageBackground_I255_2002_134_560}
          />
        </View>
        <View style={styles.View_I255_2002_134_565}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/67a3e39f-0385-4d93-8a4a-89cc13952f04"
            }}
            style={styles.ImageBackground_I255_2002_134_566}
          />
        </View>
        <View style={styles.View_I255_2002_134_570}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f864aadf-7247-4819-8a86-a978948de95d"
            }}
            style={styles.ImageBackground_I255_2002_134_571}
          />
        </View>
      </View>
      <View style={styles.View_255_2003} />
      <View style={styles.View_255_2004} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cd1e0b76-4e62-48b7-ba0e-a2a67d056dee"
        }}
        style={styles.ImageBackground_255_2005}
      />
      <View style={styles.View_255_2006}>
        <View style={styles.View_I255_2006_112_169}>
          <Text style={styles.Text_I255_2006_112_169}>Place a bid</Text>
        </View>
      </View>
      <View style={styles.View_255_2007}>
        <View style={styles.View_I255_2007_112_149}>
          <Text style={styles.Text_I255_2007_112_149}>Cancel</Text>
        </View>
      </View>
      <View style={styles.View_255_2008}>
        <Text style={styles.Text_255_2008}>
          You must bid at least 0.825 ETH
        </Text>
      </View>
      <View style={styles.View_255_2136}>
        <Text style={styles.Text_255_2136}>Your bid</Text>
      </View>
      <View style={styles.View_255_2137}>
        <Text style={styles.Text_255_2137}>Enter bid</Text>
      </View>
      <View style={styles.View_255_2140}>
        <Text style={styles.Text_255_2140}>Your balance</Text>
      </View>
      <View style={styles.View_255_2142}>
        <Text style={styles.Text_255_2142}>Service fee</Text>
      </View>
      <View style={styles.View_255_2145}>
        <Text style={styles.Text_255_2145}>Total</Text>
      </View>
      <View style={styles.View_255_2138}>
        <Text style={styles.Text_255_2138}>ETH</Text>
      </View>
      <View style={styles.View_255_2141}>
        <Text style={styles.Text_255_2141}>4.568 ETH</Text>
      </View>
      <View style={styles.View_255_2143}>
        <Text style={styles.Text_255_2143}>0.001 ETH</Text>
      </View>
      <View style={styles.View_255_2147}>
        <Text style={styles.Text_255_2147}>0.001 ETH</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c77a3ccd-a0d7-487f-b661-5684a2f7dd84"
        }}
        style={styles.ImageBackground_255_2021}
      />
      <View style={styles.View_255_2135}>
        <Text style={styles.Text_255_2135}>Place a bid</Text>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("111%") },
  View_255_1951: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("9%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I255_1951_203_410: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%"),
    top: hp("3%")
  },
  View_I255_1951_338_16: {
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
  View_I255_1951_349_7250: {
    width: wp("24%"),
    top: hp("-2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%"),
    justifyContent: "flex-start"
  },
  Text_I255_1951_349_7250: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 30.409923553466797,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -2.8995864391326904,
    textTransform: "none"
  },
  ImageBackground_I255_1951_338_2219: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%")
  },
  ImageBackground_I255_1951_338_2220: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_I255_1951_338_2221: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%")
  },
  ImageBackground_I255_1951_338_2222: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%")
  },
  ImageBackground_I255_1951_338_2223: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%")
  },
  ImageBackground_I255_1951_338_2224: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%")
  },
  ImageBackground_I255_1951_338_2225: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%")
  },
  ImageBackground_255_1952: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%")
  },
  View_255_1953: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("32%")
  },
  View_255_1954: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(248, 248, 248, 1)"
  },
  View_255_1955: {
    width: wp("81%"),
    minWidth: wp("81%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("6%")
  },
  View_255_1956: {
    width: wp("81%"),
    minWidth: wp("81%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_255_1956: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_255_1957: {
    width: wp("64%"),
    minWidth: wp("64%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("8%"),
    justifyContent: "center"
  },
  Text_255_1957: {
    color: "rgba(136, 136, 136, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_255_1958: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%")
  },
  View_255_1959: {
    width: wp("37%"),
    minWidth: wp("37%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("25%"),
    justifyContent: "flex-start"
  },
  Text_255_1959: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.24,
    textTransform: "none"
  },
  View_255_1960: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("63%")
  },
  View_255_1961: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(240, 240, 240, 1)",
    borderWidth: 1
  },
  View_255_1962: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I255_1962_94_1774: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I255_1962_94_1775: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I255_1962_94_1778: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%")
  },
  View_255_1963: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("0%"),
    borderColor: "rgba(240, 240, 240, 1)",
    borderWidth: 1
  },
  View_255_1964: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("0%"),
    borderColor: "rgba(240, 240, 240, 1)",
    borderWidth: 1
  },
  View_255_1965: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%"),
    top: hp("0%"),
    borderColor: "rgba(240, 240, 240, 1)",
    borderWidth: 1
  },
  View_255_1966: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("76%"),
    justifyContent: "center"
  },
  Text_255_1966: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_255_1967: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("80%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I255_1967_114_19: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 252, 1)",
    borderColor: "rgba(85, 85, 85, 1)",
    borderWidth: 1
  },
  View_I255_1967_114_22: {
    flexGrow: 1,
    width: wp("37%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I255_1967_114_24: {
    width: wp("37%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I255_1967_114_25: {
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
  Text_I255_1967_114_25: {
    color: "rgba(136, 136, 136, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "none"
  },
  View_I255_1967_114_26: {
    width: wp("33%"),
    minWidth: wp("33%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_I255_1967_114_26: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_255_1968: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("90%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I255_1968_113_372: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(240, 240, 240, 1)"
  },
  View_I255_1968_114_3: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I255_1968_113_373: {
    width: wp("12%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I255_1968_113_363: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I255_1968_113_363: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_255_1969: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("100%"),
    backgroundColor: "rgba(240, 240, 240, 1)"
  },
  View_I255_1969_115_465: {
    flexGrow: 1,
    width: wp("81%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I255_1969_115_465: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  ImageBackground_I255_1969_119_5: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%"),
    top: hp("19%")
  },
  View_255_1970: {
    width: wp("81%"),
    minWidth: wp("81%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("126%")
  },
  View_255_1971: {
    width: wp("70%"),
    minWidth: wp("70%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_255_1971: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_255_1972: {
    width: wp("70%"),
    minWidth: wp("70%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_255_1972: {
    color: "rgba(136, 136, 136, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_255_1973: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I255_1973_127_1317: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 92, 255, 1)"
  },
  ImageBackground_I255_1973_127_1318: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_255_1974: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("164%")
  },
  View_255_1975: {
    width: wp("70%"),
    minWidth: wp("70%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_255_1975: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_255_1976: {
    width: wp("81%"),
    minWidth: wp("81%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_255_1976: {
    color: "rgba(119, 126, 144, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_255_1977: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I255_1977_127_1317: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 92, 255, 1)"
  },
  ImageBackground_I255_1977_127_1318: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_255_1978: {
    width: wp("81%"),
    minWidth: wp("81%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("136%")
  },
  View_255_1979: {
    width: wp("70%"),
    minWidth: wp("70%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_255_1979: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_255_1980: {
    width: wp("70%"),
    minWidth: wp("70%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_255_1980: {
    color: "rgba(136, 136, 136, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_255_1981: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I255_1981_127_1317: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 92, 255, 1)"
  },
  ImageBackground_I255_1981_127_1318: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_255_1982: {
    width: wp("81%"),
    minWidth: wp("81%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("149%")
  },
  View_255_1983: {
    width: wp("70%"),
    minWidth: wp("70%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_255_1983: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_255_1984: {
    width: wp("70%"),
    minWidth: wp("70%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_255_1984: {
    color: "rgba(136, 136, 136, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_255_1985: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I255_1985_127_1329: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(220, 220, 220, 1)",
    borderWidth: 1
  },
  View_255_1986: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("174%"),
    borderColor: "rgba(240, 240, 240, 1)",
    borderWidth: 1
  },
  View_255_1987: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("201%"),
    backgroundColor: "rgba(34, 34, 34, 1)"
  },
  View_I255_1987_112_812: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I255_1987_112_812_94_1774: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I255_1987_112_812_94_1775: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I255_1987_112_812_94_1778: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%")
  },
  View_I255_1987_112_322: {
    flexGrow: 1,
    width: wp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I255_1987_112_322: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_255_1988: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("91%"),
    minHeight: hp("91%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("226%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I255_1988_206_942: {
    flexGrow: 1,
    width: wp("90%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("10%"),
    justifyContent: "flex-start"
  },
  Text_I255_1988_206_942: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 20.724939346313477,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.25724939346313475,
    textTransform: "none"
  },
  View_I255_1988_206_943: {
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
  View_I255_1988_206_943_112_169: {
    flexGrow: 1,
    width: wp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I255_1988_206_943_112_169: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I255_1988_206_948: {
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
  View_I255_1988_206_948_112_149: {
    flexGrow: 1,
    width: wp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I255_1988_206_948_112_149: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I255_1988_206_964: {
    flexGrow: 1,
    width: wp("101%"),
    height: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("48%")
  },
  View_I255_1988_206_959: {
    width: wp("100%"),
    height: hp("42%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(34, 34, 34, 1)"
  },
  View_I255_1988_206_960: {
    width: wp("100%"),
    height: hp("0%"),
    top: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I255_1988_206_960_127_1449: {
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
  View_I255_1988_206_955: {
    width: wp("23%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "flex-start"
  },
  Text_I255_1988_206_955: {
    color: "rgba(248, 248, 248, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I255_1988_206_956: {
    width: wp("49%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    justifyContent: "flex-start"
  },
  Text_I255_1988_206_956: {
    color: "rgba(248, 248, 248, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I255_1988_206_957: {
    width: wp("27%"),
    top: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "flex-start"
  },
  Text_I255_1988_206_957: {
    color: "rgba(240, 240, 240, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I255_1988_338_2908: {
    flexGrow: 1,
    width: wp("47%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("3%")
  },
  View_255_1989: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("192%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I255_1989_112_822: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("2%")
  },
  View_I255_1989_112_307: {
    flexGrow: 1,
    width: wp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I255_1989_112_307: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_255_1990: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("174%"),
    backgroundColor: "rgba(240, 240, 240, 1)"
  },
  View_255_1991: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%"),
    top: hp("175%")
  },
  ImageBackground_255_1992: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 8
  },
  ImageBackground_255_1993: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 0
  },
  View_255_1994: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("176%")
  },
  ImageBackground_255_1995: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_255_1996: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_255_1997: {
    width: wp("42%"),
    minWidth: wp("42%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("182%"),
    justifyContent: "flex-start"
  },
  Text_255_1997: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_255_1998: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("214%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I255_1998_127_1455: {
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
  View_255_1999: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("57%")
  },
  View_255_2000: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_255_2000: {
    color: "rgba(136, 136, 136, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_255_2001: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I255_2001_127_1329: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(220, 220, 220, 1)",
    borderWidth: 1
  },
  View_255_2002: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 252, 1)"
  },
  View_I255_2002_134_558: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I255_2002_134_558: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I255_2002_134_559: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("3%")
  },
  ImageBackground_I255_2002_134_560: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I255_2002_134_565: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("3%")
  },
  ImageBackground_I255_2002_134_566: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I255_2002_134_570: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89%"),
    top: hp("2%")
  },
  ImageBackground_I255_2002_134_571: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_255_2003: {
    width: wp("101%"),
    minWidth: wp("101%"),
    height: hp("113%"),
    minHeight: hp("113%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%"),
    top: hp("-1%"),
    backgroundColor: "rgba(15, 15, 15, 1)"
  },
  View_255_2004: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("27%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_255_2005: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%")
  },
  View_255_2006: {
    width: wp("82%"),
    height: hp("8%"),
    top: hp("66%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I255_2006_112_169: {
    flexGrow: 1,
    width: wp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I255_2006_112_169: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_255_2007: {
    width: wp("82%"),
    height: hp("8%"),
    top: hp("76%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I255_2007_112_149: {
    flexGrow: 1,
    width: wp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I255_2007_112_149: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_255_2008: {
    width: wp("65%"),
    minWidth: wp("65%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("35%"),
    justifyContent: "flex-start"
  },
  Text_255_2008: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_255_2136: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("43%"),
    justifyContent: "flex-start"
  },
  Text_255_2136: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_255_2137: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("48%"),
    justifyContent: "flex-start"
  },
  Text_255_2137: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_255_2140: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("52%"),
    justifyContent: "flex-start"
  },
  Text_255_2140: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_255_2142: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("56%"),
    justifyContent: "flex-start"
  },
  Text_255_2142: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_255_2145: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("59%"),
    justifyContent: "flex-start"
  },
  Text_255_2145: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_255_2138: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    top: hp("48%"),
    justifyContent: "flex-start"
  },
  Text_255_2138: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_255_2141: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("52%"),
    justifyContent: "flex-start"
  },
  Text_255_2141: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_255_2143: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("56%"),
    justifyContent: "flex-start"
  },
  Text_255_2143: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_255_2147: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("59%"),
    justifyContent: "flex-start"
  },
  Text_255_2147: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  ImageBackground_255_2021: {
    width: wp("10%"),
    height: hp("5%"),
    top: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("102%")
  },
  View_255_2135: {
    width: wp("36%"),
    minWidth: wp("36%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("30%"),
    justifyContent: "flex-start"
  },
  Text_255_2135: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.24,
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
