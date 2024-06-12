// using function create dom elements 
function element (tag,classname,id,text){
    let tags = document.createElement(tag);
    tags.classList = classname;
    tags.id = id;
    tags.innerHTML=text;
    return tags;
}

// create a (container ,heading , row)
let container = element("div","container","", "");
const h1 = element("h1","text-center","title","Game Of thrones  Characters")
const row = element("div","row","","")

// getting api data game of thrones 
const response =fetch ("https://api.gameofthronesquotes.xyz/v1/characters")
response
.then((data)=>data.json())
.then((result)=>{
    for(let i=0;i<result.length;i++){
        const col = document.createElement("div")
        col.classList ="col-sm-6 col-md-4 col-lg-4 col-xl-4v crdmain"
        col.innerHTML = `
        <div class = "card h-100">
        <div class = "card-header">
        <div class = " col text-center ">
        <h5 class = "card-title" "text-center" >${result[i].name}</h5>
        </div>
        <div class="img-box">
        <img src="https://t.ctcdn.com.br/DSjFGCs4CprGpViQbmL1fj-nyw4=/1200x675/smart/i350335.jpeg" class="card-img-top" alt="game of thrones img">
        </div>
        <div class="card-body ">
        <div class ="card-text ">Slug : ${result[i].slug}</div>
        <div class ="card-text ">house : ${result[i].house.name}</div>
        <div class ="card-text ">Qutoes : ${result[i].quotes}</div>
        </div> 
        </div>
        </div>
        ` 
        row.append(col)
    }

})

// appending part 
document.body.append(h1, container);
container.append(row);