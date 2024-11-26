// class MessageParser {
//   constructor(actionProvider, state) {
//     this.actionProvider = actionProvider;
//     this.state = state;
//   }

import { Children, cloneElement } from "react";


//   parse(message) {
//     console.log(message)
//   }
// }

// export default MessageParser;

const MessageParser = ({children, actions}) => {
  const parse = (message) => {
    if (message.includes('hola')) {
      console.log('holaaa')
    }
  };

  return (
    <div>
      {
        Children.map(children, (child) => {
          return cloneElement(child, {
            parse: parse,
            actions: {},
          })
        })
      }
    </div>
  );
};

export default MessageParser;