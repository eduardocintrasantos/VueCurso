<script setup lang="ts">
import ChatMessages from '@/components/chat/ChatMessages.vue';

import type { ChatMessage } from '@/interfaces/chat-message.interface';
import { ref } from 'vue';

const messages = ref<ChatMessage[]>([
  {
    id: new Date().getTime(),
    message: 'Ola Mundo',
    itsMine: true,
  },
  {
    id: new Date().getTime(),
    message: 'Teste',
    itsMine: true,
  },
  {
    id: new Date().getTime() + 1,
    message: 'No',
    itsMine: false,
    image: 'https://yesno.wtf/assets/no/4-122be48db47678331dbef3dd6ac6ff56.gif',
  },
  {
    id: new Date().getTime(),
    message: 'Eduardo',
    itsMine: true,
  },
  {
    id: new Date().getTime() + 1,
    message: 'No',
    itsMine: false,
    image: 'https://yesno.wtf/assets/no/4-122be48db47678331dbef3dd6ac6ff56.gif',
  },
]);
</script>

<template>
  <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
    <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
      <span>Mi esposa</span>
    </div>

    <!-- ChatMessages -->
    <ChatMessages :messages="messages" />

    <!-- MessageBox -->
    <MessageBox />
  </div>
</template>
