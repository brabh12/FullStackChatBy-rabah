import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'
const ChatsPage = (props) => {
    const chatpr = useMultiChatLogic('a7e9fe42-c543-4383-9fc5-04164bd99f3b', props.user.username, props.user.secret);
    return (
        <div style={{height: '100vh'}}>
            <MultiChatSocket {...chatpr} />
            <MultiChatWindow {...chatpr} style={{height:'100%'}}  />
        </div>
    )
}
export default ChatsPage