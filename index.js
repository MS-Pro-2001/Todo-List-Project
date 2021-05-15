
// localStorage.clear();

// let call = ()=>
// {
//     document.getElementById('info').style.display="none";
// }

// if(localStorage.getItem("itemJson")==null)
// {
//     call();
// }


let getandupdate = ()=>
{
  document.getElementById('message').style.display="none";
  // document.getElementById('info').style.display="block";


  var ls = localStorage.getItem("itemJson");
  let tit = document.getElementById("title").value;
  let desc = document.getElementById("description").value;

  if (ls == null) {
    itemarray = [];
   itemarray.push([tit, desc]);
  localStorage.setItem("itemJson", JSON.stringify(itemarray));
  
 }
 
 else if (ls != null) {
  itemJsonarraystr = localStorage.getItem("itemJson");
  itemarray = JSON.parse(itemJsonarraystr);
  
  itemarray.push([tit, desc]);
  localStorage.setItem("itemJson", JSON.stringify(itemarray));
  
}

update();


}


let update = ()=>
{
  var ls = localStorage.getItem("itemJson");

  if (ls == null) {
    itemarray = [];
   localStorage.setItem("itemJson", JSON.stringify(itemarray));
  
 }
 
 else if (ls != null) {
  itemJsonarraystr = localStorage.getItem("itemJson");
  itemarray = JSON.parse(itemJsonarraystr);
  
 
  
}




//   Populating the table
  let tablebody = document.getElementById("tablebody");
  let str = "";
  itemarray.forEach((element,index) => {
      
        str +=
        `   
        <tr>
        <th scope="row">${index+1}</th>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td>  <button class="btn btn-danger" onclick="del(${index})">Delete</button> </td>
        </tr>
  
        `

     });

  tablebody.innerHTML = str;
  document.getElementById('re').reset();
 

  }    // End of update function
  
  
  update();





 









var add = document.getElementById("additem");

add.addEventListener("click", ()=>
{
    let tit = document.getElementById("title").value;
   let desc = document.getElementById("description").value;
   console.log(tit.length);
   console.log(desc.length);
    if(tit.length == 0 || desc.length == 0)
    {
        alert("Fields cannot empty. ");
        
    } 
    else{
        getandupdate();
    }

});






let del = (itemindex)=>
{
    itemJsonarraystr = localStorage.getItem("itemJson");
    itemarray = JSON.parse(itemJsonarraystr);

    itemarray.splice(itemindex,1);
    localStorage.setItem('itemJson',JSON.stringify(itemarray));
    
    update();

    if(itemarray.length == 0)
    {
      document.getElementById('message').style.display="block";
      
    }
    
  


}