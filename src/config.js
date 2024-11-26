// Config starter code
import { createChatBotMessage } from "react-chatbot-kit";
import BotAvatar from "./components/BotAvatar";
import StartBtn from "./components/StartBtn";
import StartSlow from "./components/StartSlow";

const config = {
  initialMessages: [createChatBotMessage(`Holiss`, {
    widget: "startBtn"
  })],
  botName: "Cool bot",
  customComponents: {
    botAvatar: (props) => <BotAvatar {...props}/>,
    },
    widgets: [
      {
        widgetName:'startBtn',
        widgetFunc: (props) => <StartBtn {...props} />
      },
      {
        widgetName:'startSlow',
        widgetFunc: (props) => <StartSlow {...props} />
      }
    ]
  }

export default config