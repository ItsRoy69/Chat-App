import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
  return (
    <ChatEngine
        height="100vh"
        projectID="0029aea8-61e1-40e0-8fbc-746b106e5451"
        userName="javascriptmastery"
        userSecret="123123"
        renderChatFeed={(chatAppProps) => <ChatFeed { ... chatAppProps }/>}
    />
  );
}

export default App;
