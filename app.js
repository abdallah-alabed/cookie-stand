'use strict'
let storesLocation = document.getElementById('storesLocation');
let WH=['6 am','7 am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm'];


function random(min,max){
  return Math.floor(Math.random()*(max-min+1)+min) ;}  


 function cookies (min,max,avg){
for (let i=0; i<WH.length; i++){
 let cookie=Math.floor(avg * random(min,max));
  return cookie;
}
}

function Sales(name,min,max,avg){
  this.name=name;
  this.minCust=min;
  this.maxCust=max;
  this.avgCookie=avg;
  this.hourlySales=[];
 }

Sales.prototype.daily= function(){
 for(let i=0; i<WH.length; i++){
  this.hourlySales.push(cookies(this.minCust,this.maxCust,this.avgCookie));
  //return this.hourlySales;
  console.log(this.hourlySales[i])
}}

let seattle = new Sales('seattle',23,65,6.3);
let tokyo   = new Sales('tokyo',3,24,1.2);
let dubai   = new Sales('dubai',11,38,3.7);
let paris   = new Sales('paris',20,38,2.3);
let lima    = new Sales('lima',2,16,4.6);
//console.log(seattle,tokyo,dubai,paris,lima)



  
    

Sales.prototype.render= function(){
  let articleElement = document.createElement('article');
  storesLocation.appendChild(articleElement);

  //let h2Element=document.createElement('h2');
  //h2Element.textContent=this.name;
 // articleElement.appendChild(h2Element);

  let tableElement=document.createElement('table');
  articleElement.appendChild(tableElement);

  let tr1 = document.createElement('tr');
  tableElement.appendChild(tr1);


   let th1= document.createElement('th');
   th1.textContent='location';
   tr1.appendChild(th1);

   let th2 = document.createElement('th');
      th2.textContent=WH[0]
      tr1.appendChild(th2);

      let th3 = document.createElement('th');
      th3.textContent=WH[1]
      tr1.appendChild(th3);
      let th4 = document.createElement('th');
      th4.textContent=WH[2]
      tr1.appendChild(th4);

      let th5 = document.createElement('th');
      th5.textContent=WH[3]
      tr1.appendChild(th5);
      
      let th6 = document.createElement('th');
      th6.textContent=WH[4]
      tr1.appendChild(th6); 

      let th7 = document.createElement('th');
      th7.textContent=WH[5]
      tr1.appendChild(th7); 

      let th8 = document.createElement('th');
      th8.textContent=WH[6]
      tr1.appendChild(th8); 

      let th9 = document.createElement('th');
      th9.textContent=WH[7]
      tr1.appendChild(th9); 

      let th10 = document.createElement('th');
      th10.textContent=WH[8]
      tr1.appendChild(th10); 

      let th11 = document.createElement('th');
      th11.textContent=WH[9]
      tr1.appendChild(th11); 

      let th12 = document.createElement('th');
      th12.textContent=WH[10]
      tr1.appendChild(th12); 

      let th13 = document.createElement('th');
      th13.textContent=WH[11]
      tr1.appendChild(th13); 

      let th14 = document.createElement('th');
      th14.textContent=WH[12]
      tr1.appendChild(th14); 

      let th15 = document.createElement('th');
      th15.textContent=WH[13]
      tr1.appendChild(th15);


let tr2 = document.createElement('tr');
  tableElement.appendChild(tr2);

  let td1 = document.createElement('td');
  td1.textContent = this.name;
  tr2.appendChild(td1);

  

  console.log(tokyo.daily())
  

}
tokyo.render();
//lima.render();

  //let tr2 = document.createElement('tr');
  //tableElement.appendChild(tr2);

 // let td = document.createElement('td');
  //td.textContent = [];
  //tr1.appendChild(td);

  //let totalElem =document.createElement('td');
  //totalElem.textContent =this.name ; 

 
  

  //for (let i=0 ; i<WH.length ; i++){
  //  hourlySales[i]= Math.floor(this.avgCookie * this.number);
    //console.log(this.avgCookie)
 
 


  //console.log(arr[i]);


  /*let sum=0;
  for(let k = 0; k < WH.length; k++) {
    sum += hourlySalesTokyo[k];
            totalElem.textContent= 'total' + '  :     '+ sum;
            ulElement.appendChild(totalElem);}


  let arr = [frankie, jumper, serena];

  for(let i = 0; i < arr.length; i++) {
    arr[i].getAge(3, 12);
    arr[i].render();
    console.log(arr[i]);
  }  */
/* const seattle = {
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
let totalElem =document.createElement('li');
  let ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement);
    let sum=0;
    for(let k = 0; k < WH.length; k++) {
        let liElement = document.createElement('li');
        liElement.textContent= WH[k] + '  :     '+ hourlySalesSeattle[k];
        ulElement.appendChild(liElement);
        sum += hourlySalesSeattle[k];
        totalElem.textContent= 'total' + '  :     '+ sum;
        ulElement.appendChild(totalElem);
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
    totalElem =document.createElement('li');
    ulElement = document.createElement('ul');
        articleElement.appendChild(ulElement);
         sum=0;
        for(let k = 0; k < WH.length; k++) {
            let liElement = document.createElement('li');
            liElement.textContent= WH[k] + '  :     '+ hourlySalesTokyo[k];
            ulElement.appendChild(liElement);
            sum += hourlySalesTokyo[k];
            totalElem.textContent= 'total' + '  :     '+ sum;
            ulElement.appendChild(totalElem);
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
        totalElem =document.createElement('li');
        ulElement = document.createElement('ul');
            articleElement.appendChild(ulElement);
            sum=0;
            for(let k = 0; k < WH.length; k++) {
                let liElement = document.createElement('li');
                liElement.textContent= WH[k] + '  :     '+ hourlySalesDubai[k];
                ulElement.appendChild(liElement);
                sum += hourlySalesDubai[k];
            totalElem.textContent= 'total' + '  :     '+ sum;
            ulElement.appendChild(totalElem);
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
                totalElem =document.createElement('li');
                ulElement = document.createElement('ul');
                    articleElement.appendChild(ulElement);
                    sum=0;
                    for(let k = 0; k < WH.length; k++) {
                        let liElement = document.createElement('li');
                        liElement.textContent= WH[k] + '  :     '+ hourlySalesParis[k];
                        ulElement.appendChild(liElement);
                        sum += hourlySalesParis[k];
            totalElem.textContent= 'total' + '  :     '+ sum;
            ulElement.appendChild(totalElem);
                        //console.log(hourlySalesParis[k])
                      }

                      const lima = {
                        minCust:20 ,
                        maxCust:38 ,
                        avgCookie: 2.3,
                        
                      custCount: function randomInt(min,max){
                      min = Math.ceil(min);
                      max = Math.floor(max);
                      this.cusNumber = (Math.random() * (max - min + 1) + min);
                      return this.cusNumber ;}  }
                    
                    let hourlySalesLima=[];
                        for (let i=0 ; i<WH.length ; i++){
                            let count=lima.custCount( lima.minCust , lima.maxCust );
                            hourlySalesLima[i]= Math.floor(lima.avgCookie * count);
                            // console.log(hourlySalesLima[i]);
                        }
                    articleElement = document.getElementById('lima');
                    pElement=document.createElement('p');
                    pElement.textContent='lima';
                    articleElement.appendChild(pElement);
                    totalElem =document.createElement('li');
                    ulElement = document.createElement('ul');
                        articleElement.appendChild(ulElement);
                        sum=0;
                        for(let k = 0; k < WH.length; k++) {
                            let liElement = document.createElement('li');
                            liElement.textContent= WH[k] + '  :     '+ hourlySalesLima[k];
                            ulElement.appendChild(liElement);
                            sum += hourlySalesLima[k];
            totalElem.textContent= 'total' + '  :     '+ sum;
            ulElement.appendChild(totalElem);
                            //console.log(hourlySalesLima[k])
                          } */