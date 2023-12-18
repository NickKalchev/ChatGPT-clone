import { DocumentData } from "firebase-admin/firestore";

type Props = {
    message: DocumentData
};

function Message({ message }: Props) {
    const isChatGPT = message?.user?.name === "ChatGPT";
    
    return (
        <div className={`py-5 text-white ${isChatGPT && "bg-[#434654]"}`}>
            <div className="flex space-x-5 px-1 max-w-2xl mx-auto">
                <img src={message?.user?.avatar} alt="avatar" className="h-8 w-8 rounded-xl" />
                <p className="pt-1 flex-1 text-sm">{message.text}</p>
            </div>
        </div>
    )
}

export default Message;
