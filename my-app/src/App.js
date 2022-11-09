import { useEffect, useState } from "react";
import "./App.css";
import { Message } from "./components/Message";

function App() {
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    function bot() {
      const lastMessage = messageList[messageList.length - 1];
      if (lastMessage && lastMessage.author) {
        const userMessage = {
          text: "Сообщение отправлено.",
        };
        setMessageList([...messageList, userMessage]);
      }
    }
    setTimeout(() => {
      bot();
    }, 2000);
  }, [messageList]);

  function handelFormSubmit(event) {
    event.preventDefault();
    const userMessage = {
      text: event.target.inputMessage.value,
      author: "nik",
    };
    setMessageList([...messageList, userMessage]);
    event.target.inputMessage.value = "";
  }
  console.log(messageList);

  return (
    <div className="App">
      {messageList.map((message) => {
        return <Message text={message.text} />;
      })}
      <form onSubmit={handelFormSubmit}>
        <label>
          Введите сообщение:
          <input type="text" name="inputMessage" />
        </label>
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
}

export default App;
