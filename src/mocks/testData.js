import { logOut } from "../services/firebase"

export const menuItems = [
    {name: 'Profile', path: '/profile', imgSrc:"/icons/account.svg"},
    {name: 'Contact', path: '/chat', imgSrc:"/icons/chat.svg"},
    {name: 'Settings', path: '/settings',imgSrc:"/icons/settings.svg"},
    {name: 'Logout', path:'/', imgSrc:"/icons/logout.svg", onClick: logOut}
]

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
     {name:"technology", img:'/icons/technology.svg'}
    ]
