import { Slot, Stack } from "expo-router";
import { useEffect } from "react";
import { StreamChat } from 'stream-chat';
import { Chat, OverlayProvider } from 'stream-chat-expo';

const client = StreamChat.getInstance('9rkwr6sur98z');

export default function HomeLayout(){


    useEffect(() => {

        const connect = async () => {
          await client.connectUser(
            {
              id: '123456',
              name: 'nurmuhass',
            },
           client.devToken('123456')
          );
// const channel = client.channel('messageing', 'the_park',{
//     name:'The Park',
// });
// await channel.watch();
};
    
        connect();
    });
     
    return (
    <OverlayProvider>
        <Chat client={client}>
          <Slot />;
        </Chat> 
    </OverlayProvider>
    )
}