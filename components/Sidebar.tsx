'use client'
import { useSession, signOut } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import NewChat from "./NewChat";
import { collection, query, orderBy } from "firebase/firestore";
import { db } from "../firebase";
import ChatRow from "./ChatRow";
import ModelSelection from "./ModelSelection";

function Sidebar() {
    const { data: session } = useSession();

    const [chats, loading, error] = useCollection(
        session && query(collection(db, 'users', session.user?.email!, 'chats'), orderBy('createdAt', 'asc'))
    );


    return (
        <div className="p-2 flex flex-col h-screen">
            <div className="flex-1">
                <div className="mb-5">
                    <NewChat />

                </div>
                
                <div className="hidden md:inline">
                    <ModelSelection />
                </div>

                <div className="flex flex-col space-y-2 my-2">
                    {loading && (
                        <div className="animate-pulse text-center text-white">
                            <p>Loading Chats...</p>
                        </div>
                    )}

                    {chats?.docs.map(chat => (
                        <ChatRow key={chat.id} id={chat.id} />
                    ))}
                </div>

            </div>

            {session && (
                <>
                    <img 
                        src={session.user?.image!} alt="user image"
                        className="h-12 w-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50"
                        onClick={() => signOut()}
                    />
                    <p className="text-gray-400 justify-center flex text-xs">{session?.user?.name}</p>
                </>
            )}
        </div>
    )
}

export default Sidebar;
