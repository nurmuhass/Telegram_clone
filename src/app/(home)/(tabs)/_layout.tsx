import { Slot, Stack, Tabs } from "expo-router";
import { Entypo } from '@expo/vector-icons';
export default function HomeLayout(){
    return (
    <Tabs>
        <Tabs.Screen name="index" options={{title:'Chats',
        tabBarIcon:({size,color})  => (
            <Entypo name="home"  size={size} color={color}/>
        )}}/>
         <Tabs.Screen name="profile" options={{title:'profile',
        tabBarIcon:({size,color})  => (
            <Entypo name="user"  size={size} color={color}/>
        )}}/>
    </Tabs>
    
    );
}