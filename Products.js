const secEle=document.querySelector(".detailsDiv")
const btns=document.querySelectorAll(".LP_buttons")
const mainEle=document.querySelector(".mainsection")
console.log(btns);


let sourceArr=[];
async function datahandler(){
        let response= await fetch("https://fakestoreapi.com/products")
        let data=await response.json()
        data.forEach((ele)=>{
            sourceArr.push(ele)
        })
       console.log(data);
       
        allhandler(data)
        // details(data)
}
datahandler()

      
    function allhandler(source){
        let  allitems=""
        let btnsArr=[]
        source.forEach(ele => {
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
                     <a data-id=${ele.id} class="detailsBtn"  >Details</a>
                    <a>Add to Cart</a>
                </div>`
            allitems+=imgdiv 
            
             
        })
        secEle.innerHTML=allitems
        let btnEles=document.querySelectorAll(".detailsBtn")
        console.log(btnEles);
         
        btnEles.forEach((ele)=>{
            ele.addEventListener("click",(e)=>{
                let filterDetail=source.filter((element)=>{
                    return element.id==e.target.dataset.id
                })
                console.log(filterDetail);
                
                let filterDiv=`<div class="imgdiv1">
                                        <img src=${filterDetail[0].image} class="images">
                                    </div>
                                    <br><br>
                                    <div class="contentDiv1">
                                        <h2>${filterDetail[0].category}</h2>
                                        <br>
                                        <aside>${filterDetail[0].title} </aside>
                                        <br>
                                        <span>${filterDetail[0].rating.rate} <ion-icon name="star"></ion-icon></span>
                                        <br>
                                        <p>${filterDetail[0].description}</p>
                                        <br>
                                        <aside>$ ${filterDetail[0].price} </aside>                               
                                        <br>
                                        <br>
                                        <a data-id=${filterDetail[0].id} >Add to Cart</a>
                                        <a>Go to Cart </a>
                                    </div>`  
                mainEle.innerHTML=filterDiv                     
            })
        })        
    }
    // {
        // console.log(btnele);
        
        // btnele.forEach((ele)=>{
        //     ele.addEventListener("click",(e)=>{
        //         let filterDetail=source.filter((element)=>{
        //             return element.id===e.target.dataset.id
        //             console.log(filterDetail);
        //             console.log(e);
                    
                    
        //         })
              
                
        //     })
        // })
    // }
    
    
    btns.forEach((button)=>{
        button.addEventListener("click",()=>{
            let category=button.getAttribute("data-category")
             if(category==="All"){
               allhandler(sourceArr) 
            }
            else{
               let FilterProducts= sourceArr.filter((ele)=>{
                return ele.category===category
               })
               console.log(FilterProducts);
               
               allhandler(FilterProducts)
            }
        })
    })

    // secEle.addEventListener("click",(e)=>{
    //   if(e.target.classList.contains("detailsBtn"))
    //   {
    //      document.querySelector(".detailsBtn").addEventListener("click",()=>{
    //         console.log("arish");
            
    //      })
    //   }
    // })

    //   x=localStorage.getItem("id");
    //   function details(source){
    //    let y= source.filter((ele)=>{
    //          return ele.id==x
    //     })

    //     let electronicsdiv=`<div class="imgdiv">
    //                            <img src=${y[0].image} class="images">
    //                         </div>
    //                         <br><br>
    //                         <div class="contentDiv">
    //                             <h2>${y[0].category}</h2>
    //                             <br>
    //                             <aside>${y[0].title} </aside>
    //                             <br>
    //                             <span>${y[0].rating.rate} <ion-icon name="star"></ion-icon></span>
    //                             <br>
    //                             <p>${y[0].description}</p>
    //                             <br>
    //                             <aside>$ ${y[0].price} </aside>                               
    //                             <br>
    //                             <br>
    //                             <a data-id=${y[0].id} >Add to Cart</a>
    //                             <a>Go to Cart </a>
    //                      </div>`
    //         secEle.innerHTML=electronicsdiv    
    //   }

    // detailsBtn.addEventListener("click",(e)=>{
    //     let id=e.target.dataset.id
    //     console.log(id);
        
    //     let y= source.filter((ele)=>{
    //                  return ele.id===id
    //             })
        
    //             let electronicsdiv=`<div class="imgdiv">
    //                                    <img src=${y[0].image} class="images">
    //                                 </div>
    //                                 <br><br>
    //                                 <div class="contentDiv">
    //                                     <h2>${y[0].category}</h2>
    //                                     <br>
    //                                     <aside>${y[0].title} </aside>
    //                                     <br>
    //                                     <span>${y[0].rating.rate} <ion-icon name="star"></ion-icon></span>
    //                                     <br>
    //                                     <p>${y[0].description}</p>
    //                                     <br>
    //                                     <aside>$ ${y[0].price} </aside>                               
    //                                     <br>
    //                                     <br>
    //                                     <a data-id=${y[0].id} >Add to Cart</a>
    //                                     <a>Go to Cart </a>
    //                              </div>`
    //                 secEle.innerHTML=electronicsdiv    
              
    // })


