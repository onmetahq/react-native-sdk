# Onmeta React native SDK

## Installation

Install via Yarn: yarn add @onmeta/react-native-sdk

Install via npm: npm i @onmeta/react-native-sdk

## peer dependencies

npm i @pusher/pusher-websocket-react-native@^1.2.2

## Quick Start

```javascript
import MetaWidget from "@onmeta/react-native-sdk";




  const eventHandler = async (event, data) => {

    switch (event) {
      // example to open the upi apps
      case 'upi-intent': {
        const Linkdata = await JSON.parse(data);
        void Linking.openURL(Linkdata.link);
      }
      default: {
// Default code 
      }
    }
  };

<MetaWidget
  queryParams={{
    apiKey: "*****MERCHANT_API_KEY********",
    environment: "STAGING/PRODUCTION",
  }}
  onEventHandler={eventHandler}
/>;
```

## Contact us

<p align="center">
  <a href="https://github.com/onmetahq" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-%40onmetahq-181717?style=for-the-badge&logo=github" alt="GitHub">
  </a>
  <a href="https://twitter.com/onmetahq" target="_blank">
    <img src="https://img.shields.io/badge/X-%40onmetahq-1DA1F2?style=for-the-badge&logo=X" alt="X">
  </a>
</p>
