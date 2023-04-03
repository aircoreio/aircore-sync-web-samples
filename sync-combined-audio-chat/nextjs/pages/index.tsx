import { MediaPanel } from '@aircore/aircore-media-panel';
import { ChatPanel } from '@aircore/aircore-chat-panel';
import { createClientWithPublishableKey } from '@aircore/aircore-panel-core';
import type { NextPage } from 'next';
import { useEffect } from 'react';
import styles from '../styles/Home.module.css';

const channelId = 'YOUR_CHANNEL_ID';
const userId = 'YOUR_USER_ID' + Math.random();
const publishableApiKey = process.env.NEXT_PUBLIC_PUBLISHABLE_API_KEY as string; // get your api key on https://developer.aircore.io

const Home: NextPage = () => {
  useEffect(() => {
    const client = createClientWithPublishableKey(publishableApiKey, userId)
    client.setUserDisplayName("John Doe");
    client.setUserAvatarUrl("https://picsum.photos/200/200");
    client.connect(channelId);

    const mediaPanel = MediaPanel(
      '#my-media-panel',
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
    <div className={styles.container}>
      <div id="my-media-panel" />
    </div>
  )
}

export default Home
