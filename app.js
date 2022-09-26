btn = document.querySelector("button");
btn.addEventListener("click",()=>{
  
 let Starters=document.getElementById("Starters").value;
  let MainCourse=document.getElementById("MainCourse").value;
 let Indianfood=document.getElementById("Indianfood").value;
 let Chinesefood=document.getElementById("Chinesefood").value;
  let x=[parseInt(Starters),parseInt(MainCourse),parseInt(Indianfood),parseInt(Chinesefood)];
  let total=x.reduce((a,b)=>{
      return a+=b;
  })
  document.getElementById("Total").value=total;
  console.log(total);
  let gst=(total/100)*18;
  total +=gst;
  //alert("if the bill is above 15000 than tip is 500 else 1000")
  if(total>15000){
    total+=500;
  }
  else{
    total+=1000;
  }
  document.getElementById("Gst_amount").value=gst;
  document.getElementById("Total_bill").value=total;
});

