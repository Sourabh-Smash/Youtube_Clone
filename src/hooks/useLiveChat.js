import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessages } from "../utils/chatSlice";
import { generateRandomName, makeid } from "../helper/helper";

const useLiveChat = () => {
  const dispach = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const timer = setInterval(() => {
      dispach(
        addMessages({
          name: generateRandomName(),
          text: makeid(20),
        })
      );
    }, 2000);
    return () => clearInterval(timer);
  }, [dispach]);
  return chatMessages;
};

export default useLiveChat;
