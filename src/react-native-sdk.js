import React, { useEffect } from "react";
import { WebView } from "react-native-webview";
import { generateUrl } from "./generate-url";
import { eventListener } from "./event-listener";

function MetaWidget({ queryParams, onEventHandler, ...webviewProps }) {
    const config = { ...queryParams };
    const channelId = `${new Date().valueOf()}-${Math.round(
        Math.random() * 100000000
    )}`;

    const channelName = `ONMETA-CHANNEL-${channelId}`;

    const onmetaUrl = generateUrl(config, channelName);

    delete webviewProps.injectJavaScript;
    delete webviewProps.sharedCookiesEnabled;
    delete webviewProps.injectedJavaScript;
    delete webviewProps.injectedJavaScriptBeforeContentLoaded;

    useEffect(() => {
        let subscribe = async () => {
            return await eventListener({ channelName, cb });
        };

        let unbindFunc = subscribe();

        return function () {
            unbindFunc
                .then((f) => f())
                .then((_) => console.log("unsubscribed"));
        };
    }, []);

    return (
        <WebView
            {...webviewProps}
            javaScriptEnabled={true}
            originWhitelist={["*"]}
            source={{ uri: onmetaUrl }}
            allowsInlineMediaPlayback={false}
        />
    );
}

export { MetaWidget };
