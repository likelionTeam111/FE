import { instance } from '../utils/instance';

export const chatApi = async (prompt, random) => {
  const { data } = await instance.post(`/policy/chat/${random}/`, prompt);
  console.log(data);
  const { answer, thread_id } = data;
  return { answer, thread_id };
};
