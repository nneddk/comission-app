const baseURL = "http://localhost:8000/api/"
//fetches the database entries
async function getAll(){
  const response = await fetch (baseURL+"getAll");
  const data = await response.json();
  if(response.ok){
    return data;
  }
}

async function post(data){
  const response = await fetch(baseURL+"post",{
    method: "POST",
    mode: "cors",
    headers:{
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
  console.log(response);
}

async function deleteID(url){
  const response = await fetch(baseURL+"delete/"+url,{
    method: "DELETE",
    mode: "cors",
  });
  console.log(response);
}

export{post, getAll, deleteID};