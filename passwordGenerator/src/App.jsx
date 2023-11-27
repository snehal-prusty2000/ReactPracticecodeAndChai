import { useState , useCallback , useEffect, useRef} from 'react'


function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed , setNumberAllowed] = useState(false);
  const [charterAllowed , setCharAllowed] = useState(false);
  const[password,setPassword] =useState("");

  //useRef hook
  const passwordRef = useRef(null)
 
  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str +="0123456789"
    if(charterAllowed) str +="!@#$%^&*()~`_+=-"
    for(let i = 1;i <= length; i++){
         let char = Math.floor(Math.random() * str.length+1)
         pass += str.charAt(char)
    }
    setPassword(pass)
  } ,[length,numberAllowed,charterAllowed,setPassword] )
  
   const copyPasswordToClipboard = useCallback(()=>{
     passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0,9)
     window.navigator.clipboard.writeText(password)
   },[password])

  useEffect(()=>{
     passwordGenerator()
  },[length,numberAllowed,charterAllowed,passwordGenerator])
  return (
    <>
   <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
   <h1 className='text-4xl text-center text-white my-3'> Password Generator</h1>
 <div className='flex shadow rounded-lg overflow-hiden mb-4'>
 <input 
   type="text"
   value={password}
   className='outline-none w-full py-1 px-3 rounded-lg'
   placeholder='password'
   readonly
   ref = {passwordRef}
   />

   <button
    onClick={copyPasswordToClipboard}
    className='outline-none bg-blue-700 text-white 
    px-3 py-0.5 shrink-0 rounded-lg'
    >Copy</button>
 </div>
 <div className='flex text-sm gap-x-2'>
  <div className='flex items-center gap-x-1'>
    <input 
    type="range" 
    min={6}
    max={100}
    value={length}
    className='cursor-pointer'
    onChange={(e)=>{
      setLength(e.target.value)
    }}
    />
    <label> Length: {length}</label>
  </div>
  <div className='flex items-center gap-x-1'>
    <input 
    type="checkbox"
    defaultChecked={numberAllowed}
    id="numberInput"
    onChange={()=>{
      setNumberAllowed((prev) => !prev);
    }} 
    />
    <label>Number</label>
  </div>
  <div className='flex items-center gap-x-1'>
    <input 
    type="checkbox"
    defaultChecked={numberAllowed}
    id="charecterInput"
    onChange={()=>{
      setCharAllowed((prev) => !prev);
    }} 
    />
    <label>Charecter</label>
  </div>
  </div>
 </div>
     
    </>
  )
}

export default App
