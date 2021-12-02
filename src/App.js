import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

import './App.css';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
         height="100vh"
         projectID="b847b0da-0cd6-40a7-98c6-8657f2ab2bd7"
         userName={localStorage.getItem('username')}
         userSecret={localStorage.getItem('password')}
         // to add more people u need to add more users in ChatEngine

         renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}

    />
  )
}

export default App;
