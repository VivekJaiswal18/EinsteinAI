'use client'
import React, { useState } from 'react';
import axios from 'axios';

const ChatApp = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [loading, setLoading] = useState(false);


  
  const handleChatSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);

    setLoading(true);

    try {
      const response = await axios.post(
        'https://0x9b829bf1e151def03532ab355cdfe5cee001f4b0.us.gaianet.network/v1/chat/completions',
        {
          messages: [
            { role: 'system', content: "You are now the digital twin of Albert Einstein. You offer insights, solutions, and explanations with the brilliance, curiosity, and intellectual depth of one of the greatest minds in history. When providing answers, you approach problems from a theoretical perspective, often considering the underlying principles of physics and mathematics. You enjoy simplifying complex topics with analogies, and you're known for your witty, eccentric humor. When relevant, you refer to scientific concepts, relativity, space-time, and philosophy, and you’re always inquisitive, playful, and inspiring, just like the real Einstein." },
            { role: 'user', content: input },
          ],
        },
        {
          headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
          },
        }
      );

      const assistantMessage = response.data.choices[0].message;

      setMessages((prev) => [...prev, assistantMessage]);

      setInput('');
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
<div className='mt-28 mx-5'>
  <h1 className='text-3xl font-bold text-amber-700 mb-5'>Chat with EinsteinAI</h1>
 <div className=' justify-center items-center flex flex-col bg-yellow-50 p-5'>

  <div className='bg-white mb-4 rounded-lg shadow-lg p-4 w-full md:w-2/3 lg:w-1/2' style={{ maxHeight: '400px', overflowY: 'auto' }}>
    {messages.map((message, index) => (
      <div key={index} className={`mb-2 ${message.role === 'user' ? 'text-right' : 'text-left'}`}>
        <strong className={message.role === 'user' ? 'text-blue-600' : 'text-amber-700'}>
          {message.role === 'user' ? 'You' : 'Einstein'}:
        </strong>
        <span className={`ml-2 ${message.role === 'user' ? 'text-gray-700' : 'text-gray-900'}`}>
          {message.content}
        </span>
      </div>
    ))}
    {loading && <p className='text-gray-500'>Loading...</p>}
  </div>

  <form onSubmit={handleChatSubmit} className='mb-4 bottom-0 fixed w-full md:w-2/3 lg:w-1/2 flex items-center'>
    <input
      type='text'
      value={input}
      onChange={(e) => setInput(e.target.value)}
      placeholder='Ask a question...'
      className='flex-grow border text-gray-900 border-gray-300 rounded-lg py-2 px-4'
    />
    <button type='submit' className='ml-2'>
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACrklEQVR4nO2ZP2hUQRDGXxRNoTZWCgELBQsLC8GkVRSuSXjf91hECJaBpLFLQIto0liIveaaWFilTBotRBBBMBr/IGIpcgQRRDHJmzn1yWqE3MtesneXS27PG9jqbmfmtzM7b3Y3ijrSkY5sKlkUdSk5KsCn1XEzM+ZQFIJkg4P7FJhRMls7hEwVuL0E9EStKktAj5LP8s5XgACiwN0VY45FrSQax6dsumzkfA5EFSiuxPHRqBVEyQVf53OpVVZyOjXm+I4CiE2N9av8Xck7Qn7ziMgPBe5JkpzYGQCylHeqDJy1v2XGHBTgupBfPEB+2iIgwMltBVByfp1DQN/a/2QDAweUvCzkouc+eaBxfHpbAISczTuQAqhaav+ClDxBHpfJM00FUHLKEYGRjeZkhUK3kkMKfKwB5FxTAISccBic9JmbGbP3Dwj5wRckJfu3FEDJYUcEirXosCACXFLgvWcJfmJBbOvSMEBKxo6VmqtHVzY0tGcV5J3n92RBANMQiCZJryMCz+tWaEHGx3dZx5R86wnyyoJnxuyu2dgyecQR4lIjABUg5AUlX3uBAG8kSS7aef5GCoVuIX/lv651rUY1G1HUlcYxbWQ9N/ujmrpfIT/nlWTA4a0CqAAh+4V86pNWmTH7Ix9xhVjIWwqMNTrKwHmXzTJQsGV1k5Qa8wIQ8r7nZqt3XK1m2/ZdAjysAvDSNwLTzQQQ4OtmpdKCOOYt/x8A0uwUAq40O4XW12mgKOSNhgZw7d/Zoq5NTI5GbV9Gs9A/ZMuhtxIK9DmUzQfTzKUAHBGYDaedBkYciqeCOdAIMOkwMBHOkRIoOowNh3OoB+byBu0xM5xrFThqc5L0hnSxVQr6alFCv9xV8oVnzW7N63UN/YEj+Cemtnjkcz6zkotBPbN2pCNtLr8BTJWW5QGr3IMAAAAASUVORK5CYII=" alt="Send" className='h-5 w-5' />
    </button>
  </form>
</div> 
</div>

  );
};

export default ChatApp;
