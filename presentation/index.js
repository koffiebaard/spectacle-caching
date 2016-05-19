// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  dynamoImplementation: require("../assets/dynamo-cache-implementation.png"),
  dynamoInvalidation: require("../assets/dynamo-cache-invalidation.png"),
};

preloader(images);

const theme = createTheme({
  primary: "#44bf40"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>

          <Slide transition={["slide", "spin"]} bgColor="primary" notes="Varnish & Redis, the popular choices for the two different ways of caching.">
            <Heading size={2} fit caps textColor="black">
              Caching
            </Heading>
            <Heading size={1} fit caps>
              Varnish & Redis
            </Heading>
            <Link href="https://github.com/wisc/spectacle-caching">
              <Text bold caps textColor="black">View on Github</Text>
            </Link>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary" notes="1. Varnish sits in front of the webserver (or in front of node app)<br />2. It's a layer between the user and the app.<br />3. In memoryyyy">
            <Heading size={2}  caps textColor="white">
              Varnish
            </Heading>
            <Heading size={2} fit caps textColor="black">
              What is Varnish?
            </Heading>
            <List>
              <ListItem>cache layer web</ListItem>
              <ListItem>high level</ListItem>
              <ListItem>memory based</ListItem>
            </List>
      	  </Slide>

          <Slide transition={["slide"]} bgColor="primary" notes="Pros<br />1. Easy to setup. Just put Varnish in front and go.<br />2. Availability during failure, for the cached calls.<br />3. Clear overview of cache policy. e.g.<br />- determine time to cache, skip cache when containing certain headers, parameters, urls, response codes.">
            <Heading size={2}  caps textColor="white">
              Varnish
            </Heading>
            <Heading size={2} fit caps textColor="black">
              Pros and cons
            </Heading>
            <Layout>
              <Fill>
                <Heading size={3} caps textColor="secondary">
                  pros
                </Heading>
                <Heading size={5} caps textColor="secondary" bgColor="white" margin={10}>
                  easy to setup
                </Heading>
                <Heading size={5} caps textColor="secondary" bgColor="white" margin={10}>
                  availability
                </Heading>
                <Heading size={5} caps textColor="secondary" bgColor="white" margin={10}>
                  clear overview
                </Heading>
              </Fill>
              <Fill>
                <Heading size={3} caps textColor="secondary">
                  cons
                </Heading>
                <Heading size={5} caps textColor="secondary" bgColor="white" margin={10}>
                  all or nothing
                </Heading>
                <Heading size={5} caps textColor="secondary" bgColor="white" margin={10}>
                  http only
                </Heading>
              </Fill>
      	     </Layout>
      	  </Slide>

          <Slide transition={["slide"]} bgColor="primary" notes="1. Node, Mongo, Express, etc.<br />2. DB is hardpressed.<br />3. Almost all calls are cached, excluding the calls that sync<br />4a. A background process imports the products from the Plus back-end.<br />4b. Afterwards the Varnish cache is cleared & warmed (all calls are called on all app servers)">
            <Heading size={2}  caps textColor="white">
              Varnish
            </Heading>
            <Heading size={2} fit caps textColor="black">
              example setup: Plus
            </Heading>
            <List>
              <ListItem>Plus is backed by Node & Mongo</ListItem>
              <ListItem>15k products, 700 categories, response size up to 15MB</ListItem>
              <ListItem>Varnish in front of most calls</ListItem>
              <ListItem>Processes in background doing the heavy lifting</ListItem>
              <ListItem>Automatic cache invalidation & warming</ListItem>
            </List>
      	  </Slide>






          <Slide transition={["slide", "spin"]} bgColor="primary" notes="Persist to disk is actually pretty fast & lightweight on I/O.<br />You can set it to write once every 300s for example.">
            <Heading size={2}  caps textColor="white">
              Redis
            </Heading>
            <Heading size={2} fit caps textColor="black">
              What is Redis?
            </Heading>
            <List>
              <ListItem>key/value store</ListItem>
              <ListItem>code level</ListItem>
              <ListItem>memory based</ListItem>
              <ListItem>persists to disk</ListItem>
            </List>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary" notes="Pros<br />1. You can cache anything anywhere, from function results to images.<br />2. <br />3. not only http, also CLI and w/e.">
            <Heading size={2}  caps textColor="white">
              Redis
            </Heading>
            <Heading size={2} fit caps textColor="black">
              Pros and cons
            </Heading>
            <Layout>
              <Fill>
                <Heading size={3} caps textColor="secondary">
                  pros
                </Heading>
                <Heading size={5} caps textColor="secondary" bgColor="white" margin={10}>
                  flexibility
                </Heading>
                <Heading size={5} caps textColor="secondary" bgColor="white" margin={10}>
                  persist to disk
                </Heading>
                <Heading size={5} caps textColor="secondary" bgColor="white" margin={10}>
                  works in any context
                </Heading>
              </Fill>
              <Fill>
                <Heading size={3} caps textColor="secondary">
                  cons
                </Heading>
                <Heading size={5} caps textColor="secondary" bgColor="white" margin={10}>
                  can be invasive codewise
                </Heading>
                <Heading size={5} caps textColor="secondary" bgColor="white" margin={10}>
                  low visibility
                </Heading>
                <Heading size={5} caps textColor="secondary" bgColor="white" margin={10}>
                  can be hard to debug
                </Heading>
              </Fill>
             </Layout>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary" notes="Cache invalidation is done by listing dependencies in the key name.">
            <Heading size={2}  caps textColor="white">
              Redis
            </Heading>
            <Heading size={2} fit caps textColor="black">
              example setup: Dynamo
            </Heading>
            <List>
              <ListItem>Dynamo is backed by PHP & MySQL</ListItem>
              <ListItem>Heavy DB usage, complex relational structures</ListItem>
              <ListItem>Relies heavily on sync, so we use Redis</ListItem>
              <ListItem>Automatic cache invalidation through CMS</ListItem>
            </List>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary" notes="Cache invalidation is done by listing dependencies in the key name.">
            <Heading size={2}  caps textColor="white">
              Redis
            </Heading>
            <Heading size={2} fit caps textColor="black">
              example setup: Dynamo
            </Heading>
            
            <Heading size={4} caps textColor="white">
              API side, using the cache:
            </Heading>
            <Image src={images.dynamoImplementation.replace("/", "")} margin="0 0 0 -87px" width="1100" />
            
            <Heading size={4} caps textColor="white">
              CMS side, invalidating the cache:
            </Heading>
            <Image src={images.dynamoInvalidation.replace("/", "")} margin="0 0 0 -87px" width="1100" />
          </Slide>

          <Slide transition={["spin", "slide"]} bgColor="tertiary">
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
              Woohoo. All done.
            </Heading>
            <Heading size={4} textColor="#aaa">
              ಠ_ಠ
            </Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
