let itmesEle=document.querySelector(".items")
let allEle=document.querySelector("#all")
let mensprodEle=document.querySelector("#mensprod")
let womensprodEle=document.querySelector("#womensprod")
let jeweleryEle=document.querySelector("#jewelery")
let electronicsEle=document.querySelector("#electronics")
// console.log(hi);

// fetch("https://fakestoreapi.com/products").then((respose)=>{
//     return respose.json()
// }).then((data)=>{console.log(data)}).catch((err)=>{console.log(err)
// })

const dataArr=[]
 async function datahandler() {
    let promise= await fetch("https://fakestoreapi.com/products")
    let data= await promise.json()
     data.forEach((ele)=>{
        dataArr.push(ele)
     })
     allHandler(data)
     allclothHandler(data)
     mensclothHandler(data)
     womensclothHandler(data)
     console.log(dataArr);
     
 }   
 datahandler()

function allHandler(source){    
    source.forEach((ele)=>{
    let imgdiv=`<div class="itemsdiv">
                    <img src=${ele.image} class="images">
                     <br><br>
                    <aside>${ele.title} </aside>
                     <p>${ele.description}</p>
                     <br>
                     <hr>$
                     ${ele.price}
                     <hr>
                     <br>
                     <br>
                     <a data-id=${ele.id} class="detailsBtn" href="./Product_Details.html" >Details</a>
                    <a>Add to Cart</a>
                </div>`
    itmesEle.insertAdjacentHTML("beforeend",imgdiv)
})
  allEle.style.backgroundColor="grey"
}

function allclothHandler(source){
      allEle.addEventListener("click",()=>{
          let alldivs=``
          source.forEach((ele)=>{
            let alldiv=`<div class="itemsdiv">
                            <img src=${ele.image} class="images">
                            <br><br>
                            <aside>${ele.title} </aside>
                            <p>${ele.description}</p>
                            <br>
                            <hr>$
                            ${ele.price}
                            <hr>
                            <br>
                            <br>
                            <a data-id=${ele.id}>Details</a>
                            <a>Add to Cart</a>
                        </div>`
            alldivs+=alldiv
            allEle.style.backgroundColor="grey"
            mensprodEle.style.backgroundColor="white"           
            womensprodEle.style.backgroundColor="white"           
            jeweleryEle.style.backgroundColor="white"           
            electronicsEle.style.backgroundColor="white"           
          })
        itmesEle.innerHTML=alldivs
        console.log(alldivs);
        
      }) 

}

function mensclothHandler(source){
    mensprodEle.addEventListener("click",()=>{
        let filterArr= source.filter((ele)=>{
           return ele.category==="men's clothing"
        })
        console.log(filterArr);
        // let mensdivs=`<div></div>`
           let mensdivs=""
        filterArr.forEach((ele)=>{
            // let mensdiv=document.createElement("div")
           
            let mensdiv=`<div class="itemsdiv">
                            <img src=${ele.image} class="images">
                            <br><br>
                            <aside>${ele.title} </aside>
                            <p>${ele.description}</p>
                            <br>
                            <hr>$
                            ${ele.price}
                            <hr>
                            <br>
                            <br>
                            <a data-id=${ele.id}>Details</a>
                            <a>Add to Cart</a>
                        </div>`
            // mensdiv.appendChild(mensdivs)
            mensdivs+=mensdiv
            // mensdiv.insertAdjacentHTML("beforend",mensdivs)          
         })
        itmesEle.innerHTML=mensdivs
        // allEle.style.backgroundColor="white"
        // mensprodEle.style.backgroundColor="grey"           
        // womensprodEle.style.backgroundColor="white"           
        // jeweleryEle.style.backgroundColor="white"           
        // electronicsEle.style.backgroundColor="white" 
    })
}

function womensclothHandler(source){
    womensprodEle.addEventListener("click",()=>{
        let filterArr= source.filter((ele)=>{
           return ele.category==="women's clothing"
        })
           
        let womensdivs=``

        filterArr.forEach((ele)=>{
            let womensdiv=`<div class="itemsdiv">
                            <img src=${ele.image} class="images">
                            <br><br>
                            <aside>${ele.title} </aside>
                            <p>${ele.description}</p>
                            <br>
                            <hr>$
                            ${ele.price}
                            <hr>
                            <br>
                            <br>
                            <a data-id=${ele.id} href="">Details</a>
                            <a>Add to Cart</a>
                        </div>`
            // mensdiv.appendChild(mensdivs)
            womensdivs+=womensdiv
            // mensdiv.insertAdjacentHTML("beforend",mensdivs)          
         })
         itmesEle.innerHTML=womensdivs
    
    })
}

jeweleryEle.addEventListener("click",()=>{
      let filterArr= dataArr.filter((ele)=>{
      return ele.category==="jewelery"
  })
   let jewelery=""
   filterArr.forEach((ele)=>{
            let jewelerydiv=`<div class="itemsdiv">
                            <img src=${ele.image} class="images">
                            <br><br>
                            <aside>${ele.title} </aside>
                            <p>${ele.description}</p>
                            <br>
                            <hr>$
                            ${ele.price}
                            <hr>
                            <br>
                            <br>
                            <a data-id=${ele.id}>Details</a>
                            <a>Add to Cart</a>
                         </div>`
                 jewelery+=jewelerydiv        
             }) 
    itmesEle.innerHTML=  jewelery                      
}) 

electronicsEle.addEventListener("click",()=>{
let filterArr= dataArr.filter((ele)=>{
      return ele.category==="electronics"
  })
   let electronics=""
   filterArr.forEach((ele)=>{
            let electronicsdiv=`<div class="itemsdiv">
                            <img src=${ele.image} class="images">
                            <br><br>
                            <aside>${ele.title} </aside>
                            <p>${ele.description}</p>
                            <br>
                            <hr>$
                            ${ele.price}
                            <hr>
                            <br>
                            <br>
                            <a data-id=${ele.id}>Details</a>
                            <a>Add to Cart</a>
                         </div>`
                 electronics+=electronicsdiv        
             }) 
    itmesEle.innerHTML=  electronics
})

itmesEle.addEventListener("click", (e) => {
   
    if (e.target.classList.contains("detailsBtn")) {
        let ID = e.target.dataset.id;
        localStorage.setItem("id", ID); 
    }
    console.log(localStorage.getItem("fsdsdfsdfd"));    
})

const prodEle=document.querySelector(".products")
console.log(prodEle);

prodEle.addEventListener("click",(e)=>{
    let value=e.target.dataset.id
    console.log(value);
    
    localStorage.setItem("id",value)
    console.log(localStorage.getItem("id"));
    
})


