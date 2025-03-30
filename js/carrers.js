const carrers = [
    {
        id:1,
        title:"Store Manager",
        description:"",
        images_url:"https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id:2,
        title:"Store Seller",
        description:"",
        images_url:"https://images.unsplash.com/photo-1649424220505-bb300805f35a?q=80&w=2019&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id:3,
        title:"Mantainement",
        description:"",
        images_url:"https://images.unsplash.com/photo-1611416553159-262dd1e1c5c6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id:4,
        title:"Night Watchman",
        description:"",
        images_url:"https://plus.unsplash.com/premium_photo-1682125945563-8ce7517b8d17?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id:1,
        title:"Store Manager",
        description:"",
        images_url:"https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id:2,
        title:"Store Seller",
        description:"",
        images_url:"https://images.unsplash.com/photo-1649424220505-bb300805f35a?q=80&w=2019&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id:3,
        title:"Mantainement",
        description:"",
        images_url:"https://images.unsplash.com/photo-1611416553159-262dd1e1c5c6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id:4,
        title:"Night Watchman",
        description:"",
        images_url:"https://plus.unsplash.com/premium_photo-1682125945563-8ce7517b8d17?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
];

const carrerList = () => {
    let list = "<div>";
    carrers.forEach(value => {
        list += `<div class="div_card">`;
        list += `<img src="${value.images_url}" class="img_card"/>`;
        list += `<h3 class="title_card">${value.title}</h3>`;
        list += `<p>${value.description}</p>`;
        list += "</div>";
    });
    list += "</div>";
    document.getElementById('carrer-container').innerHTML=list;
}