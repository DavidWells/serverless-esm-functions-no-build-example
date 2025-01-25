import { capitalize, reverse } from 'lodash-es';

export const handler = async (event) => {
  const message = 'hello world';
  const processedMessage = capitalize(message);
  const reversedMessage = reverse(message.split('')).join('');
  
  return {
    statusCode: 200,
    body: JSON.stringify({
      original: message,
      capitalized: processedMessage,
      reversed: reversedMessage
    })
  };
}; 