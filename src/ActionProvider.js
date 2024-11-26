
import { Children, cloneElement } from "react";

const ActionProvider = ({createChatBotMessage, setState, children}) => {

  const initialAction = () => {
    const message = createChatBotMessage('Type in your name to begin.')
    updateState(message)
  }

  const updateState = (message) => {
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message]
    }))
  }

  return (
    <div>
      {Children.map(children, (child) => cloneElement(child, {
          actions: {
            initialAction
          },
        })
      )}
    </div>
  )
};

export default ActionProvider;