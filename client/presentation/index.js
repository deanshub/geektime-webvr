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

import {Icon} from 'react-fa';

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

import style from './style.css';

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  me: require("../assets/me.jpg"),
  rift: require("../assets/rift.png"),
  vive: require("../assets/vive.png"),
  room: require("../assets/room.jpg"),
  uvsu: require("../assets/uvsu.png"),
  html5: require("../assets/html5.png"),
  webgl: require("../assets/webgl.png"),
  three: require("../assets/three.png"),
  aframe: require("../assets/aframe.png"),
  scr: require("../assets/sisense-control-room.gif"),
  dashboard: require("../assets/dashboard.png"),
};

preloader(images);

const theme = createTheme({
  primary: "#000",
  secondary: '#C62828',
  tertiary: '#fff',
  fourth: '#42A5F5',
  fifth: '#66BB6A',
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom"]} transitionDuration={500}>
          <Slide style={{marginTop:'-5vh'}} transition={["zoom"]} bgColor="tertiary">
            <Heading size={1} fit lineHeight={1} textColor="primary">
              Introduction to
            </Heading>
            <Heading size={1} fit lineHeight={1} textColor="fifth">
              WebVR
            </Heading>
            <Heading size={1} fit textColor="primary">
              + an experiment with react and VR
            </Heading>
            <Heading size={1} fit caps textColor="fifth">
              Geektime devfest
            </Heading>
            {/**
              <Link href="https://github.com/FormidableLabs/spectacle">
              <Text bold caps textColor="primary">View on Github</Text>
            </Link>
            **/}
            <Text textSize="1.5em" margin="20px 0px 0px" bold>Hit Your Right Arrow To Begin!</Text>
          </Slide>

          <Slide transition={["slide"]} bgColor="tertiary" notes="<ul><li>Architect @ Sisense</li></ul>">
            <Image src={images.me.replace("/", "")} margin="0px auto 40px" height="40vh"/>
            <Heading size={4} margin={10} textColor="fourth">
              <Link textColor="fourth" href="https://github.com/deanshub">
                <Icon name="github"/>
              </Link>
              <Link textColor="fourth" href="https://twitter.com/deanshub">
                <Icon name="twitter"/>
              </Link>
              deanshub
            </Heading>
          </Slide>

          <Slide transition={["zoom", "fade"]} style={{marginTop:'-5vh'}} bgColor="tertiary" notes="<ul><li>more then 100 headsets</li><li>GearVR\ Google Daydream\ playstation VR</li><li></li></ul>">
            <Heading caps fit textColor="primary">Current state of VR</Heading>
            <Layout>
              <Fill>
                <Image src={images.rift.replace("/", "")} margin="0px auto 40px" height="20vh"/>
                <Heading size={4} caps textColor="fourth" bgColor="white" margin={10}>
                  Oculus Rift
                </Heading>
                <List className={style.list} textColor="fourth">
                  <ListItem>GPU: GeForce GTX 970 or AMD Radeon R9 290 or better</ListItem>
                  <ListItem>CPU: Intel Core i5 4590 or greater</ListItem>
                  <ListItem>RAM: 8GB or more</ListItem>
                  <ListItem>Video Output: HDMI 1.3</ListItem>
                  <ListItem>USB port: 2 USB 3.0 ports</ListItem>
                </List>
              </Fill>
              <Fill>
                <Image src={images.vive.replace("/", "")} margin="0px auto 40px" height="20vh"/>
                <Heading size={4} caps textColor="fourth" bgColor="white" margin={10}>
                  HTC Vive
                </Heading>
                <List className={style.list} textColor="fourth">
                  <ListItem>GPU: Nvidia GeForce GTX 970, AMD Radeon R9 290 equivalent or better</ListItem>
                  <ListItem>CPU: Intel i5-4590, AMD FX 8350 equivalent or better</ListItem>
                  <ListItem>RAM: 4 GB or more</ListItem>
                  <ListItem>Video Output: HDMI 1.4, DisplayPort 1.2 or newer</ListItem>
                  <ListItem>USB Port: 1x USB 2.0 or better port</ListItem>
                </List>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["fade"]} bgImage={images.room.replace("/", "")}>
          </Slide>

          <Slide transition={["fade"]} bgImage={images.room.replace("/", "")} bgDarken={0.75} notes="<ul><li>Expensive</li><li>Wife</li><li></li></ul>">
            <Heading size={1} caps fit textColor="fourth">
              laptop + GPU
            </Heading>
            <Heading size={1} caps fit textColor="tertiary">
              Monitors + Monitors mount
            </Heading>
            <Heading size={1} caps fit textColor="fourth">
              Graphics amplifier
            </Heading>
            <Heading size={1} caps fit textColor="tertiary">
              Oculus rift
            </Heading>
          </Slide>

          <Slide transition={["fade"]} bgImage={images.uvsu.replace("/", "")}>
          </Slide>

          <Slide transition={["fade"]} bgColor="tertiary" textColor="fourth">
            <Image src={images.html5.replace("/", "")} margin="0px auto 40px" height="20vh"/>
            <Appear><Image src={images.webgl.replace("/", "")} margin="0px auto 40px" height="20vh"/></Appear>
            <Appear><Image src={images.three.replace("/", "")} margin="0px auto 40px" height="20vh"/></Appear>
          </Slide>



          <Slide className={style.example} transition={["fade"]} bgColor="tertiary" textColor="fourth">
            <iframe id="viewer" name="viewer" width="100%" height="100%" allowFullScreen src="https://threejs.org/examples/webgl_animation_scene.html" />
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="tertiary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <CodePane
              lang="html"
              source={require("raw!../assets/three.example")}
              className={style.scrollableSlide}
            />
          </Slide>

          <Slide transition={["fade"]} bgColor="tertiary" textColor="fourth">
            <Image src={images.html5.replace("/", "")} margin="0px auto 40px" height="20vh"/>
            <Image src={images.webgl.replace("/", "")} margin="0px auto 40px" height="20vh"/>
            <Image src={images.three.replace("/", "")} margin="0px auto 40px" height="20vh"/>
            <Appear><Image src={images.aframe.replace("/", "")} margin="0px auto 40px" height="20vh"/></Appear>
          </Slide>

          <Slide className={style.example} transition={["zoom", "fade"]} bgColor="tertiary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <iframe id="exampleIframe" width="100%" height="100%" allowFullScreen scrolling="no" src="https://aframe.io/aframe/examples/boilerplate/hello-world/"></iframe>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="tertiary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <CodePane
              lang="html"
              source={require("raw!../assets/aframe.example")}
              />
          </Slide>

          <Slide transition={["slide", "spin"]} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              What is WebVR?
            </Heading>
            <List textColor="fourth" size={1}>
              <Appear><ListItem>Browser API that allows communication straight to the VR hardware</ListItem></Appear>
              <Appear><ListItem>Render frame for each eye sepparatly</ListItem></Appear>
              <Appear><ListItem>Supports 90fps</ListItem></Appear>
              <Appear><ListItem>Currently available only in Firefox nightly & certain chromium builds</ListItem></Appear>
              <Appear><ListItem><a href="https://iswebvrready.org">State of WebVR site</a></ListItem></Appear>
              <Appear><ListItem><a href="https://webvr.info">More Details can be found in this link</a></ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={["slide"]} bgColor="tertiary">
            <Layout>
              <Fill>
                <Heading size={4} caps textColor="primary" bgColor="fifth" margin={10}>
                  Apps
                </Heading>
                <Layout>
                  <Fill>
                    <Appear id="3"><Heading size={4} textColor="primary" bgColor="fifth" margin={10}>
                      React Aframe
                    </Heading></Appear>
                    <Layout>
                      <Fill>
                        <Appear id="2"><Heading size={4} textColor="primary" bgColor="fifth" margin={10}>
                          Aframe
                        </Heading></Appear>
                        <Layout>
                          <Fill>
                            <Appear id="1"><Heading size={4} textColor="primary" bgColor="fifth" margin={10}>
                              Three.js
                            </Heading></Appear>
                            <Layout>
                              <Fill>
                                <Heading size={4} textColor="primary" bgColor="fourth" margin={10}>
                                  WebVR
                                </Heading>
                              </Fill>
                            </Layout>
                          </Fill>
                        </Layout>
                      </Fill>
                    </Layout>
                  </Fill>
                  <Fill>
                    <Heading size={4} textColor="primary" bgColor="fifth" margin={10}>
                      React Aframe
                    </Heading>
                    <Layout>
                      <Fill>
                        <Heading size={4} textColor="primary" bgColor="fifth" margin={10}>
                          Aframe
                        </Heading>
                        <Layout>
                          <Fill>
                            <Heading size={4} textColor="primary" bgColor="fifth" margin={10}>
                              Three.js
                            </Heading>
                            <Layout>
                              <Fill>
                                <Heading size={4} textColor="primary" bgColor="fourth" margin={10}>
                                  WebGL
                                </Heading>
                              </Fill>
                            </Layout>
                          </Fill>
                        </Layout>
                      </Fill>
                    </Layout>
                  </Fill>
                </Layout>
              </Fill>
            </Layout>
            <Layout>
              <Fill>
                <Heading size={4} caps textColor="primary" bgColor="fourth" margin={10}>
                  Browser
                </Heading>
                <Layout style={{marginTop:'8vh'}}>
                  <Fill>
                    <Heading size={7} caps textColor="fourth" margin={10}>
                      Browser API
                    </Heading>
                  </Fill>
                  <Fill>
                    <Heading size={7} caps textColor="fifth" margin={10}>
                      Javascript API
                    </Heading>
                  </Fill>
                </Layout>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["slide"]} bgColor="tertiary" notes="<ul><li>obj\ json geometry</li><li></li></ul>">
            <Heading caps fit size={1} textColor="primary">
              What can we do with this?
            </Heading>
            <List textColor="fourth" size={1}>
              <ListItem>Object + Material</ListItem>
              <ListItem>panoramic images | <Link href="https://threejs.org/examples/?q=panorama#webgl_panorama_equirectangular">360° images</Link>\<Link href="https://threejs.org/examples/?q=panorama#webgl_video_panorama_equirectangular">videos</Link></ListItem>
              <ListItem>Interactions & Events</ListItem>
              <ListItem>Gamepad API</ListItem>
              <ListItem><Link href="https://chrome.google.com/webstore/detail/webvr-api-emulation/gbdnpaebafagioggnhkacnaaahpiefil">WebVr extension debugger</Link></ListItem>
              <ListItem><a href="https://medium.com/@clayallsopp/a-journey-to-virtual-reality-with-react-6e3b86140a63#.wl607l18y">A Journey To Virtual Reality with React</a></ListItem>
              <ListItem>Sisense</ListItem>
            </List>
          </Slide>

          <Slide transition={["slide"]} bgColor="tertiary" className={style.fullSize} bgImage={images.dashboard.replace("/", "")}>
          </Slide>

          <Slide transition={["slide"]} bgColor="tertiary" bgImage={images.scr.replace("/", "")}>
          </Slide>

          <Slide transition={["slide"]} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              Next phase
            </Heading>
            <List textColor="fourth" size={1}>
              <ListItem>Chrome release for mobile</ListItem>
              <ListItem>ReactVR</ListItem>
              <ListItem>Caramel browser</ListItem>
              <ListItem>Lower hardware requirements</ListItem>
            </List>
          </Slide>

          <Slide transition={["slide"]} bgColor="fourth">
            <BlockQuote>
              <Quote>ReactVR is the easiest way to build VR experiences</Quote>
              <Cite>Someone from the future</Cite>
            </BlockQuote>
          </Slide>

          <Slide transition={["zoom"]} bgColor="fourth">
            <Heading fit size={1} textColor="primary">
              Thanks
            </Heading>
            <Heading fit size={1} textColor="primary">
              <Link href="http://webvr.shubapp.com">webvr.shubapp.com</Link>
            </Heading>
          </Slide>

        </Deck>
      </Spectacle>
    );
  }
}
