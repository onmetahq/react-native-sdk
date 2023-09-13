import { Pusher } from "@pusher/pusher-websocket-react-native";

export const eventListener = async ({ channelName, cb }) => {
  let pusher = Pusher.getInstance();
  await pusher.init({
    apiKey: "09fe67de1a6428147cd6",
    cluster: "ap2",
  });

  await pusher.connect();
  await pusher.subscribe({
    channelName: channelName,
    onEvent: (event) => {
      cb(event.eventName, event.data);
    },
  });

  return async function () {
    await pusher.unsubscribe({ channelName });
  };
};
