<script setup lang="ts">
import { onMounted, onBeforeUnmount } from "vue";
import {
  createClientWithPublishableKey,
  type Client,
} from "@aircore/aircore-panel-core";
import { ChatPanel, type ChatPanelType } from "@aircore/aircore-chat-panel";

const channelId = "YOUR_CHANNEL_ID";
const userId = "YOUR_USER_ID" + Math.random();
const publishableApiKey = import.meta.env.VITE_PUBLISHABLE_API_KEY as string; // get your api key on https://developer.aircore.io

let myChatPanel: ChatPanelType | null = null;
let client: Client | null = null;

onMounted(() => {
  client = createClientWithPublishableKey(publishableApiKey, userId);
  client.setUserDisplayName("John Doe");
  client.setUserAvatarUrl("https://picsum.photos/200/200");
  client.connect(channelId);

  myChatPanel = ChatPanel("#my-chat-panel", {
    client,
    channelId,
  });
});

onBeforeUnmount(() => {
  myChatPanel?.destroy();
  client?.disconnect(channelId);
});
</script>

<template>
  <div id="my-chat-panel" />
</template>
