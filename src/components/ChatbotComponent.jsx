import { Chatbot } from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css'

import messageParser from '../MessageParser';
import actionProvider from '../ActionProvider';
import config from '../config';

const ChatbotComponent = () => (
  <Chatbot
    config={config}
    messageParser={messageParser}
    actionProvider={actionProvider}
    placeholderText="Start chating with this cool bot!"
  />
)

export default ChatbotComponent;