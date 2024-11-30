const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
  ];

  const getMessages = async() =>{
    return messages;
  };

  const postMessage = async(userName,message,added) => {
    messages.push({text: message, user: userName, added: added})
  };

  module.exports = {getMessages,postMessage};