
let clothes=document.querySelector("#clothes");
let back=document.querySelector("#back-clothing");
let catDiv=document.querySelector("#category-div");
let clothesDiv=document.querySelector("#category-div-1");
let category=document.querySelector("#category");
let crossCat=document.querySelector("#cross-category");
let crossCloth=document.querySelector("#cross-clothing");

category.onclick=function(){
    showCategory();
}

function showCategory(){
    
    catDiv.style.display="block";


}


crossCat.onclick=function(){
    closeCatogory();
}
crossCloth.onclick=function(){
    closeCatogory();
}

function closeCatogory(){
    catDiv.style.display="none";
    clothesDiv.style.display="none";
}

clothes.onclick=function(){
    showClothes();
}

function showClothes(){
    catDiv.style.display="none";
    clothesDiv.style.display="block";
}

back.onclick=function(){
    closeClothes();
}

function closeClothes(){
    clothesDiv.style.display="none";
    catDiv.style.display="block";
}