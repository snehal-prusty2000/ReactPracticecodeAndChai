export const getPosts = async ()=> {
  const response = await  fetch('https://jsonplaceholder.typicode.com/posts'/*The simplest use of fetch() takes one argument — the path to the resource you want to fetch */,{
        method:"GET",
    });
   return await response.json();
};


export const getRandomUser = async() => {
    const response = await fetch("https://randomuser.me/api/",{
        method:"GET",
    });
    return await response.json();
}