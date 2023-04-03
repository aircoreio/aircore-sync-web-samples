import { MediaPanel } from '@aircore/aircore-media-panel';
import { ChatPanel } from '@aircore/aircore-chat-panel';
import { createClientWithPublishableKey } from '@aircore/aircore-panel-core';
import { useEffect } from 'react';
import './App.css';

const publishableApiKey = 'ADD_YOUR_PUBLISHABLE_API_KEY_HERE'; // get your api key on https://developer.aircore.io
const channelId = 'YOUR_CHANNEL_ID';
const userId = 'YOUR_USER_ID' + Math.floor(Math.random() * 1000);

const Home = () => {
  useEffect(() => {
    const client = createClientWithPublishableKey(publishableApiKey, userId)
    client.setUserDisplayName("John Doe");
    client.setUserAvatarUrl("https://picsum.photos/200/200");
    client.connect(channelId);

    const mediaPanel = MediaPanel(
      '#my-combined-panel',
      {
        client,
        channelId,
      }
    );

    const chatPanel = ChatPanel(
      null,
      {
        client,
        channelId,
      }
    );

    mediaPanel.combine(chatPanel);

    return () => {
      client.disconnect(channelId);
      mediaPanel.destroy();
      chatPanel.destroy();
    }
  }, []);

  return (
    <div className="container">
      <div id="my-combined-panel" />
    </div>
  )
}

export default Home
