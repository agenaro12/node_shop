const Books = [
    {id:1,name:"The Fellowship Of The Ring",price:20},
    {id:2,name:"The Two Towers",price:18},
    {id:3,name:"Return of the King",price:30},
    {id:4,name:"Aventures of Robinson Crusoe",price:20},
    {id:5,name:"Song of Ice and Fire",price:17},
    {id:6,name:"The Bones Collector",price:16},
    {id:7,name:"Around the world in 80 days",price:22},
];

const Search = (prompt) => {
    const book = Books.find((value) => {
        return value.id == prompt;
    })
    console.log(book.name + prompt);
    alert(`The book ${book.name} was found`);
    //bookTable('bookTable');
}

const bookTable = (tableClass) => {
    let table = `<table class='${tableClass}'>`;
    table += `<tr><th class="bookTable_th">Id</th><th class="bookTable_th">Name</th><th class="bookTable_th">Price</th></tr>`;
    Books.forEach((value)=>{
        table+=`<tr><td class="bookTable_td">${value.id}</td><td class="bookTable_td">${value.name}</td><td class="bookTable_td">${value.price}</td></tr>`;
    });
    table += "</table>";
    document.getElementById('libraryCnt').innerHTML=table;
}