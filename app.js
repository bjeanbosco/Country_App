let z=0

const api=`./rest-countries-api-with-color-theme-switcher-master/data.json`;
const Country= async ()=>{
    const respose= await fetch(api)
    const data= await respose.json()
    
  console.log(data);
  data.map(myFunction)
  function myFunction(item){
    //this is for flag
   const flag= document.createElement('img')
   flag.src=item.flags.svg
   //this is for name
   const name= document.createElement('h4');   
   name.innerHTML=item.name 
   //this is for population
   const pop= document.createElement('div');  
   pop.innerHTML=`Population: ${item.population} `
   //this is for region
   const region= document.createElement('div');  
   region.innerHTML=`Region: ${item.region} ` 
   //this is for capital
   const capital= document.createElement('div');
   item.capital?capital.innerHTML=`Capital: ${item.capital}`: null  
   //the above i s for capital 
   const card=document.createElement('div');
   const some=document.createElement('div');

   some.append(name,pop,region,capital);
   some.className='some'
   card.id=item.name
    card.className='card head border class'
    card.append(flag,some)
    document.getElementById('content').append(card)
  
    const selected=document.getElementById('select')
    selected.addEventListener('click',()=>{
      if(selected.value==='Filter by Region'){
        document.querySelectorAll('.americas').forEach(item=>item.remove())
        document.querySelectorAll('.africa').forEach(item=>item.remove())
        document.querySelectorAll('.europe').forEach(item=>item.remove())
        document.querySelectorAll('.asia').forEach(item=>item.remove())
        document.querySelectorAll('.oceania').forEach(item=>item.remove())
        document.getElementById('content').append(card)
      }
    })


    //this is for filte
}




const select=document.getElementById('select')
 
select.addEventListener('click',()=>{
    data.filter(item=>item.region===select.value).map(item=>{

        const flag= document.createElement('img')
        flag.src=item.flags.svg
        //this is for name
        const name= document.createElement('h4');   
        name.innerHTML=item.name 
        //this is for population
        const pop= document.createElement('div');  
        pop.innerHTML=`Population: ${item.population} `
        //this is for region
        const region= document.createElement('div');  
        region.innerHTML=`Region: ${item.region} ` 
        //this is for capital
        const capital= document.createElement('div');
        item.capital?capital.innerHTML=`Capital: ${item.capital}`: null  
        //the above i s for capital 
        const card=document.createElement('div');
        const some=document.createElement('div');
        some.append(name,pop,region,capital);
        some.className='some'
         card.className='card head border class'
         card.value=item.name
         card.append(flag,some)
        
     
         if(select.value==='Africa'&&item.region==='Africa'){
           document.querySelectorAll('.card').forEach(item=>item.remove())
           document.querySelectorAll('.europe').forEach(item=>item.remove())
            document.querySelectorAll('.asia').forEach(item=>item.remove())
            document.querySelectorAll('.americas').forEach(item=>item.remove())
            document.querySelectorAll('.oceania').forEach(item=>item.remove())
           card.className='africa remove'
           document.getElementById('content').append(card)
         }
        else if(select.value==='Europe'&&item.region==='Europe'){
          document.querySelectorAll('.card').forEach(item=>item.remove())
          document.querySelectorAll('.africa').forEach(item=>item.remove())
          document.querySelectorAll('.asia').forEach(item=>item.remove())
          document.querySelectorAll('.americas').forEach(item=>item.remove())
          document.querySelectorAll('.oceania').forEach(item=>item.remove())
          card.className='europe remove'
          document.getElementById('content').append(card)
        }
        else if(select.value==='Asia'&&item.region==='Asia'){
          document.querySelectorAll('.card').forEach(item=>item.remove())
          document.querySelectorAll('.africa').forEach(item=>item.remove())
          document.querySelectorAll('.europe').forEach(item=>item.remove())
          document.querySelectorAll('.americas').forEach(item=>item.remove())
          document.querySelectorAll('.oceania').forEach(item=>item.remove())
          card.className='asia remove'
          document.getElementById('content').append(card)
        }
      
       
        else if(select.value==='Oceania'&&item.region==='Oceania'){
          document.querySelectorAll('.card').forEach(item=>item.remove())
          document.querySelectorAll('.africa').forEach(item=>item.remove())
          document.querySelectorAll('.europe').forEach(item=>item.remove())
          document.querySelectorAll('.asia').forEach(item=>item.remove())
          document.querySelectorAll('.americas').forEach(item=>item.remove())
          card.className='oceania remove'
          document.getElementById('content').append(card)
        }
        else if(select.value==='Americas'&&item.region==='Americas'){
          document.querySelectorAll('.card').forEach(item=>item.remove())
          document.querySelectorAll('.africa').forEach(item=>item.remove())
          document.querySelectorAll('.europe').forEach(item=>item.remove())
          document.querySelectorAll('.asia').forEach(item=>item.remove())
          document.querySelectorAll('.oceania').forEach(item=>item.remove())
          card.className='americas remove'
          document.getElementById('content').append(card)
        }
    })

})

//this is for single country where search button is clicked
const btn=document.getElementById('btn')
btn.addEventListener('click',mySearch)
const searchIN=document.getElementById('search')
function mySearch(){
 console.log('wow');
 const mine= data.filter(myproject)

 function myproject(item){
  let Name=item.name
  let Value=new RegExp(searchIN.value, 'i')
  return Name.match(Value)
 }
 mine.map(item=>{
  //this is for flags
  const flag=document.createElement('img')
  flag.src=item.flags.svg
  //this is country name
  const name=document.createElement('h4')
  name.innerHTML=item.name
  name.className='name'
  name.id=item.name
  //this is for country population
  const populate=document.createElement('div')
  populate.innerHTML=`Population: ${item.population}`
  //this is for country capital city
  const capital=document.createElement('div')
  if(data[0].capital){
    capital.innerHTML=`Capital: ${item.capital}`
  }
  
  //thi is for region where country lies
  const region=document.createElement('div')
  region.innerHTML=`Region: ${item.region}`
  //this hold country information details
  const details=document.createElement('div')
  details.className='details'
  details.append(name,populate,region,capital)
  //this hold all information about the searched country
  const card=document.createElement('div')
  card.append(flag,details)
  card.className='count'
  document.getElementById('content').style.display='none'
  document.getElementById('display').style.display='none'
  document.getElementById('singleCountry').append(card)
  document.querySelectorAll('.result').forEach(item=>item.style.display='block')
})

}
}

Country()

let x=0;

const dark=document.getElementById('dark')

dark.addEventListener('click',()=>{
    x++;
    if(x%2!==0){
      document.getElementById('dark').innerHTML=` <i  class="fa">&#xf185;</i>  Light Mode`
      document.getElementById('result').style.backgroundColor=`hsl(207, 26%, 17%)`
       document.getElementById('result').style.color=`hsl(0, 0%, 100%)`
  document.body.style.backgroundColor=`hsl(207, 26%, 17%)`
  document.body.style.color=`hsl(0, 0%, 100%)`
  document.querySelectorAll('.head').forEach(item=>item.style.backgroundColor=`hsl(209, 23%, 22%)`)
  document.querySelectorAll('.border').forEach(item=>item.style.border=`4px solid hsl(209, 23%, 22%)`)
  document.querySelectorAll('.remove').forEach(item=>item.style.border=`4px solid hsl(209, 23%, 22%)`)
}
else{
    document.body.style.backgroundColor=`hsl(0, 0%, 98%)`
    document.body.style.color=`hsl(200, 15%, 8%)`
    document.querySelectorAll('.head').forEach(item=>item.style.backgroundColor=`hsl(0, 0%, 98%)`)
    document.querySelectorAll('.border').forEach(item=>item.style.border=`3px solid gray`)
    document.querySelectorAll('.remove').forEach(item=>item.style.border=`3px solid gray`)
    document.getElementById('head').style.border='4px solid whitesmoke'
    document.getElementById('head').style.borderBottom='3px solid gray'
    document.getElementById('dark').innerHTML=` <i class="fa">&#xf186;</i>   Dark Mode`
}
})

//this is for back button when where are on much details about country page


//this is for clicking each card 

async function webpage(){
  const res= await fetch(api)
  const data= await res.json()


  document.querySelectorAll('.card').forEach(item=>{
    item.addEventListener('click',myCard)
  })
  
  function myCard(){
    
     data.filter(item=>item.name===this.id).map(item=>{
    //national flag
    const  flag=document.createElement('img')
    flag.src=item.flags.svg
    flag.className='img'
    //national name 
    const name=document.createElement('h4')
    name.innerHTML=item.name
    //national capital
    const capital=document.createElement('div')
    capital.innerHTML=item.capital
    //native name
    const native=document.createElement('div')
    native.innerHTML=`Native Name: ${item.nativeName}`
    //national population
    const pop=document.createElement('div')
    pop.innerHTML=`Population: ${item.population}`
    //national region
    const region=document.createElement('div')
    region.innerHTML=`Region: ${item.region}`
    //national sub regiona
    const sub=document.createElement('div')
    sub.innerHTML=`Sub Region: ${item.subregion}`
    //natioal languages
    const lang=document.createElement('div')
    lang.innerHTML=`Languages: ${item.languages[0].name}`
    //natioanl currencies
    const currec=document.createElement('div')
    currec.innerHTML=`Currencies: ${item.currencies[0].name}`
    //national border 1
    const border1=document.createElement('button')
    border1.className='bobo'
    border1.id='hello'
    data.filter(t=>t.alpha3Code===item.borders[0]).map(d=>{
      border1.innerHTML=`${d.name}`
      
     
    })
   
       //border1.onclick(()=>alert(1))
    
    //some information
    const division=document.createElement('div')
    
        division.innerHTML=`Border Countries:`
    //national border2
    const border2=document.createElement('button')
    border2.className='bobo'
    data.filter(t=>t.alpha3Code===item.borders[2]).map(d=>{
      border2.innerHTML=`${d.name}`
      border2.id=d.name
     
    })
   
    //national border 3
    const border3=document.createElement('button')
    border3.className='bobo'
    data.filter(t=>t.alpha3Code===item.borders[3]).map(d=>{
      border3.innerHTML=`${d.name}`
      border3.id=d.name
     
    })
  
   //country domain
   const domain=document.createElement('div')
   domain.innerHTML=`Top Level Domain: ${item.topLevelDomain[0]}`
   //this is part one
  const part1=document.createElement('div')
  part1.append(native,pop,region,sub,capital)
   //this is part two
   const part2=document.createElement('div')
   part2.append(domain,currec,lang)
   //this is for link
   //const link=document.createElement('a')
   //link.href='index.html'
   
   //this contain word details
    const Info=document.createElement('div')
    Info.append(part1,part2)
    Info.className='infor'
    //this contain all borders
    const Border=document.createElement('div')
    Border.append(division,border1,border2,border3)
    Border.className='next'
    //details part
    const more=document.createElement('div')
    more.append(name,Info,Border)
     //all data container
     const Nation=document.createElement('div')
     Nation.append(flag,more)
     Nation.className='Nation'
     //back buttton
     const Back=document.createElement('button')
     //root div
     document.getElementById('link').innerHTML=`<a href='index.html'><button class='fa'>&#xf060; Back</button></a>`
     document.title=item.name
  
      document.getElementById('single').append(link,Nation)
      document.getElementById('content').style.display='none'
      document.getElementById('input').style.display='none'
      document.getElementById('select').style.display='none'
     //back button
    
     })
  
  }
  
  
}
webpage()

document.querySelector('.bobo').addEventListener('clcick',myButton)
function myButton(){
  alert(1)
}

document.getElementById('hello').addEventListener('click',()=>{
  alert('hi')
})