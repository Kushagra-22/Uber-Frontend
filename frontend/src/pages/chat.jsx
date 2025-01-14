import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://chat-service.com', {
    // auth: { token: 'USER_JWT_TOKEN' },
});

function Chat({ chatId }) {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    useEffect(() => {
        // Join the chat room
        socket.emit('joinRoom', { chatId });

        // Listen for new messages
        socket.on('receiveMessage', (message) => {
            setMessages((prev) => [...prev, message]);
        });

        return () => socket.disconnect();
    }, [chatId]);

    const sendMessage = () => {
        socket.emit('sendMessage', {
            chatId,
            senderType: 'user',
            senderId: 'USER_ID',
            message: newMessage,
        });
        setNewMessage('');
    };

    return (
        <div>
            <div>
                {messages.map((msg, index) => (
                    <div key={index}>
                        <b>{msg.senderType === 'user' ? 'You' : 'Captain'}:</b> {msg.message}
                    </div>
                ))}
            </div>
            <input
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type a message"
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
}

export default Chat;
