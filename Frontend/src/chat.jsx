import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'
const ChatsPage = (props) => {
    const chatpr = useMultiChatLogic('/', props.user.username, props.user.secret);
    return (
        <div style={{height: '100vh'}}>
            <MultiChatSocket {...chatpr} />
            <MultiChatWindow {...chatpr} style={{height:'100%'}}  />
        </div>
    )
}
export default ChatsPage
