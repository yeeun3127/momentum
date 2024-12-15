const backgroundUrl = [
    "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fG5hdHVyZXxlbnwwfHx8fDE2NzE1NzY3MzY&ixlib=rb-1.2.1&q=80&w=1080",
    "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGNpdHl8ZW58MHx8fHwxNjcxNTc2NzM2&ixlib=rb-1.2.1&q=80&w=1080",
    "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDR8fGFic3RyYWN0fGVufDB8fHx8MTY3MTU3NjczNg&ixlib=rb-1.2.1&q=80&w=1080",
    "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDV8fHRleHR1cmV8ZW58MHx8fHwxNjcxNTc2NzM2&ixlib=rb-1.2.1&q=80&w=1080"
];
const backgroundSrc = `${
    backgroundUrl[Math.floor(Math.random() * backgroundUrl.length)]
}`;
document.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(${backgroundSrc})`;
