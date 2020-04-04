import socketIO from 'socket.io-client';

const socket = socketIO('http://192.168.5.99:8000', {
  transports: ['websocket'],
  secure: true,
  path: '/socket.io',
});

export const subscribeToMessages = (setMessages) => {
  socket.on('received_new_message', (messages) => {
    setMessages(messages);
  });
};

export const sendNewMessage = (message) => {
  socket.emit('send_new_message', message);
};
