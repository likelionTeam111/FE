import { instance } from '../utils/instance';

export const chatApi = async (prompt) => {
  const { data } = await instance.post(`/policy/chat/`, prompt);
  const { answer, thread_id } = data;
  return { answer, thread_id };
};

export const policyChatApi = async (prompt, policy_id) => {
  const { data } = await instance.post(`/policy/chat/${policy_id}/`, prompt);
  const { answer, thread_id } = data;
  return { answer, thread_id };
};
