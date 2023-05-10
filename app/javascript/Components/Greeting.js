import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getApiMessages } from '../Redux/MessagesReducer';
import store from '../Redux/ConfigureStore';

let flag = false;
const Greeting = () => {

  useEffect(() => {
    if (!flag) {
      store.dispatch(getApiMessages());
      flag = true;
    }
  }, []);

const messages = useSelector((state) => state.Messages);
   
  return (
    <div className="home-page">
      <h1>Messages from rails API</h1>
      <p class="message">{messages.id}.{" "} {messages.greeting}</p>
    </div>

  );
};

export default Greeting;
