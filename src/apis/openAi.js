import { instance } from './instance';

export const openAi = async (prompt) => {
  const { data } = await instance.post('/chat/completions', prompt);
  const reply = data.choices[0].message.content;
  return reply;
};
