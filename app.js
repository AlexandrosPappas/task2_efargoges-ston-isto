
// searchBar.addEventListener('keyup', (e)=>{
//     console.log( e.target.value);
//     function searchBarShow(title){
//         const link = `https://elearning-aueb.herokuapp.com/courses/search?title=${title}`;
//         fetch(link)
//         .then(response => response.json)
//         .then((data)=>{
//             console.log(data);
//         })
//     }

// fetch(`https://elearning-aueb.herokuapp.com/courses/search?title=1`)
// .then(response=> response.json())
// .then(data => console.log(data));
// fetch(`https://elearning-aueb.herokuapp.com/courses/search?category=id : `)
// .then(response=> response.json())
// .then(data => console.log(data));

/*************************************************************************************************************/
//Categories on console
let categories = [];
fetch(`https://elearning-aueb.herokuapp.com/categories`)
.then(response => response.json())
.then(data => {
    categories = data;
    console.log(categories)
    for(let i = 0; i < categories.length; i++){
        console.log(categories[i].title);
        document.querySelector('.categories').innerHTML = `<li>${categories[i].title}</li>`;
    }
    return data;
});


function searchBarShow(keyword){
    const link = `https://elearning-aueb.herokuapp.com/courses/search?title=${keyword}`;
    fetch(link)
    .then(response => response.json)
    .then((jsonData)=>{
        console.log(jsonData);
    })
}


window.onload = () =>{
    const searchBar = document.getElementById('search-txt');
    searchBar.onkeyup = ()=>{
       searchBarShow(searchBar.value);
       console.log(searchBar.value)
    }
}

// function fill_template(){
//     let data = {
//         title: 'alekos',
//         list : [
//             {name:'you can generate stuff'},
//             {name:'you can generate stuff2'},
//             {name:'you can generate stuff3'},
//         ]
//     };
//     let template = Handlebars.compile(document.querySelector('#template').innerHTML);
//     let filled = template(data);
//     document.querySelector('#output').innerHTML = filled;
// }