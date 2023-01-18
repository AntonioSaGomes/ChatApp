import { logOut } from "../services/firebase"

export const menuItems = [
    {name: 'Profile', path: '/profile', imgSrc:"/icons/account.svg"},
    {name: 'Contact', path: '/chat', imgSrc:"/icons/chat.svg"},
    {name: 'Settings', path: '/settings',imgSrc:"/icons/settings.svg"},
    {name: 'Logout', path:'/', imgSrc:"/icons/logout.svg", onClick: logOut}
]

export const menuItemGroup = 
    {groupName: 'Chats', menuItems: menuItems, imgSrc:"/icons/chat.svg"};


export const appDescription = `Our app features multiple chatrooms where you can discuss a variety of
topics with other users.
These chatrooms include topics such as politics, sports, technology,
and much more.
Whether you want to share your thoughts on the latest news or just
have a casual conversation with others who share your interests, our
chat app has something for everyone.
So come join the discussion and connect with other like-minded
individuals today!`

export const currentUser = {id: 'fasok2314kls', name:'John Doe', photo:'/icons/account.svg'}


export const chatMessages = [
    {content: 'Hello John', senderId: 'fasok2314kls', chatId: '2314dalllow', date: new Date(), photo:'/icons/girl.svg'},
    {content: 'Hi Maria', senderId: 'fasok2314kxx', chatId: '2314dalllow', date: new Date(), photo:'/icons/account.svg'},
    {content: 'How are you', senderId: 'fasok2314kxx', chatId: '2314dalllow', date: new Date(), photo:'/icons/account.svg'},
]

export const chatRooms = [
    {name:"sports", img:'/icons/sports.svg'}, 
    {name:"politics", img:'/icons/politics.svg'},
     {name:"animals", img:'/icons/animals.svg'}, 
/*      {name:"technology", img:'/icons/technology.svg'}
 */    ]
