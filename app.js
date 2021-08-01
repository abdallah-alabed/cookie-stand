'use strict'



const seattle = {
    minCust:23 ,
    maxCust:65 ,
    avgCookie: 6.3,
    
  custCount: function randomInt(min,max){
  min = Math.ceil(min);
  max = Math.floor(max);
  this.cusNumber = (Math.random() * (max - min + 1) + min);
  return this.cusNumber ;}  }

let WH=['6 am','7 am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm'];
let hourlySalesSeattle=[];
    for (let i=0 ; i<WH.length ; i++){
        let count=seattle.custCount( seattle.minCust , seattle.maxCust );
        hourlySalesSeattle[i]= Math.floor(seattle.avgCookie * count);
        // console.log(hourlySales[i]);
    }
let articleElement = document.getElementById('seattle');
let pElement=document.createElement('p');
pElement.textContent='Seattle';
articleElement.appendChild(pElement);
  let ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement);
    for(let k = 0; k < WH.length; k++) {
        let liElement = document.createElement('li');
        liElement.textContent= WH[k] + '  :     '+ hourlySalesSeattle[k];
        ulElement.appendChild(liElement);
        //console.log(hourlySalesSeattle[k])
      }

      const tokyo = {
        minCust:3 ,
        maxCust:24 ,
        avgCookie: 1.2,
        
      custCount: function randomInt(min,max){
      min = Math.ceil(min);
      max = Math.floor(max);
      this.cusNumber = (Math.random() * (max - min + 1) + min);
      return this.cusNumber ;}  }
    
    let hourlySalesTokyo=[];
        for (let i=0 ; i<WH.length ; i++){
            let count=tokyo.custCount( tokyo.minCust , tokyo.maxCust );
            hourlySalesTokyo[i]= Math.floor(tokyo.avgCookie * count);
            // console.log(hourlySalesTokyo[i]);
        }
    articleElement = document.getElementById('tokyo');
    pElement=document.createElement('p');
    pElement.textContent='tokyo';
    articleElement.appendChild(pElement);
    ulElement = document.createElement('ul');
        articleElement.appendChild(ulElement);
        for(let k = 0; k < WH.length; k++) {
            let liElement = document.createElement('li');
            liElement.textContent= WH[k] + '  :     '+ hourlySalesTokyo[k];
            ulElement.appendChild(liElement);
            //console.log(hourlySalesTokyo[k])
          }

          const dubai = {
            minCust:11 ,
            maxCust:38 ,
            avgCookie: 3.7,
            
          custCount: function randomInt(min,max){
          min = Math.ceil(min);
          max = Math.floor(max);
          this.cusNumber = (Math.random() * (max - min + 1) + min);
          return this.cusNumber ;}  }
        
        let hourlySalesDubai=[];
            for (let i=0 ; i<WH.length ; i++){
                let count=dubai.custCount( dubai.minCust , dubai.maxCust );
                hourlySalesDubai[i]= Math.floor(dubai.avgCookie * count);
                // console.log(hourlySalesDubai[i]);
            }
        articleElement = document.getElementById('dubai');
        pElement=document.createElement('p');
        pElement.textContent='dubai';
        articleElement.appendChild(pElement);
        ulElement = document.createElement('ul');
            articleElement.appendChild(ulElement);
            for(let k = 0; k < WH.length; k++) {
                let liElement = document.createElement('li');
                liElement.textContent= WH[k] + '  :     '+ hourlySalesDubai[k];
                ulElement.appendChild(liElement);
                //console.log(hourlySalesDubai[k])
              }

            

                  const paris = {
                    minCust:20 ,
                    maxCust:38 ,
                    avgCookie: 2.3,
                    
                  custCount: function randomInt(min,max){
                  min = Math.ceil(min);
                  max = Math.floor(max);
                  this.cusNumber = (Math.random() * (max - min + 1) + min);
                  return this.cusNumber ;}  }
                
                let hourlySalesParis=[];
                    for (let i=0 ; i<WH.length ; i++){
                        let count=paris.custCount( paris.minCust , paris.maxCust );
                        hourlySalesParis[i]= Math.floor(paris.avgCookie * count);
                        // console.log(hourlySalesParis[i]);
                    }
                articleElement = document.getElementById('paris');
                pElement=document.createElement('p');
                pElement.textContent='paris';
                articleElement.appendChild(pElement);
                ulElement = document.createElement('ul');
                    articleElement.appendChild(ulElement);
                    for(let k = 0; k < WH.length; k++) {
                        let liElement = document.createElement('li');
                        liElement.textContent= WH[k] + '  :     '+ hourlySalesParis[k];
                        ulElement.appendChild(liElement);
                        //console.log(hourlySalesParis[k])
                      }
                  
                  
            