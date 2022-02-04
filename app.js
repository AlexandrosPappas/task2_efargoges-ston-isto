
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
        //To valame apla gia elegxo
    }
});

// Search var
function searchBarShow(keyword){
    const link = `https://elearning-aueb.herokuapp.com/courses/search?title=${keyword}`;
    fetch(link)
    .then(response => response.json())
    .then((jsonData)=>{
        console.log(jsonData);
        let template = Handlebars.compile(document.querySelector('#template').innerHTML);
        let filled = template(jsonData, {
            noEscape: true
        });
        document.querySelector('.courses').innerHTML = filled;
    })
}


window.onload = () =>{
    const searchBar = document.getElementById('search-txt');
    searchBar.onkeyup = ()=>{
       searchBarShow(searchBar.value);

    }
}
//Course Navigation 
function fill_template(){
    fetch(`https://elearning-aueb.herokuapp.com/categories`)
    .then(response => response.json())
    .then(data => {
        let template = Handlebars.compile(document.querySelector('#templatenav').innerHTML);
        let filled = template(data, {
            noEscape: true
        });
        document.querySelector('.dropdown-menu').innerHTML = filled;
});
}
//Display courses by id

function display_by_id(id){
    fetch(`https://elearning-aueb.herokuapp.com/courses/search?category=${id}`)
    .then(response=> response.json())
    .then(data => {
        console.log(data);
        let template = Handlebars.compile(document.querySelector('courses-template-id').innerHTML);
        let filled = template(jsonData, {
            noEscape: true
        });
        document.querySelector('.all-courses').innerHTML = filled;
    });
}