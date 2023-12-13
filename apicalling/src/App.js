import {useState,useEffect, useInsertionEffect} from 'react';
import {getPosts,getRandomUser} from "./api";
import PostCard from './components/PostCard';
import UserCard from './components/UserCard';
import './App.css';


function App() {

  const [data , setData] = useState(null);
  const [userData, setUserData] = useState(null)

  useEffect (()=> {
   // getPosts().then((posts) => console.log(posts))
    getPosts().then((posts) => setData(posts))
  },[] );

  useEffect(()=>{
  //  getRandomUser().then((users)=>console.log(users))
  getRandomUser().then((users)=>setUserData(users.results[0]))

  },[]);

 // console.log(userData);

const refresh = () =>{
  getRandomUser().then((users)=>setUserData(users.results[0]))
}

  return (
    <div className="App">
       {userData &&<UserCard data={userData}/>}
       <button onClick={refresh}>Refresh user</button>
        {/* make condition if userDatathen render UserCard */}
      {
        // data ? data.map(e =><li> {e.title}</li>) :<p>No Data</p>
        data ? data.map(e =><PostCard title= {e.title} body={e.body}/>) :<p>No Data</p>
      }
    </div>
  );
}

export default App;
