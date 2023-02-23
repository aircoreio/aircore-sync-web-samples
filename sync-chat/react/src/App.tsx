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

    const chatPanel = ChatPanel(
      '#my-chat-panel',
      {
        client,
        channelId,
      }
    );
    return () => {
      client.disconnect(channelId);
      chatPanel.destroy()
    }
  }, []);

  return (
    <div className="container">
      <div id="my-chat-panel" />
    </div>
  )
}

export default Home
