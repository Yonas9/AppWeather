const body = document.querySelector('body')

console.log('domFile');

const users = [
        {name:'ligia',premium:true},
        {name:'mario',premium:true},
        {name:'yoshi',premium:false},
        {name:'toad',premium:true},
        {name:'posh',premium:false}
]

const premiumUsers = (users)=>{
    return users.filter(user =>user.premium)
}
const addTitle = (text) =>{
    const title = document.createElement('h1');

    title.textContent = text;
    body.appendChild(title)
}
//  one default value per file
export {premiumUsers,addTitle,users as default}
