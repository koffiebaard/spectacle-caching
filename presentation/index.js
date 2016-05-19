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
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
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

          <Slide transition={["slide"]} bgColor="primary" notes="Pros<br />1. Easy to setup. Just put Varnish in front and go.<br />2. Availability during failure, for the cached calls.<br />3. Clear overview of cache policy. Visibility.">
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

          <Slide transition={["spin", "slide"]} bgColor="tertiary">
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
              Woohoo. All done.
            </Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
