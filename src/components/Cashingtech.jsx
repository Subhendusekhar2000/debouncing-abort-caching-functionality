import  {React,useEffect,useRef,useState } from "react";

const STATUS={
    LODING:"LODING",
    ERROR:"ERROR",
    SUCCESS:"SUCCESS"
}
const Cashingtech=()=>{
    const[search,setSearch]=useState("")
    const[product,setProduct]=useState([])
    const[status,setStatus]=useState(STATUS.LODING)
    const cache=useRef({})
      console.log(cache)
    useEffect(()=>{
        const abortController=new AbortController();
        // console.log(abortController);
        const{signal}=abortController;
        // console.log(signal);
            const fetchData=async()=>{
                setStatus(STATUS.LODING)

                if( cache.current[search]){
                    setProduct(cache.current[search])
                    setStatus(STATUS.SUCCESS)
                    return;
                }
                try {
                   
                    // console.log(search)
                const result=await fetch(`https://dummyjson.com/products/search?q=${search}&limit=10`,{signal})
                // console.log(result)
                const data=await result.json();
                
                setStatus(STATUS.SUCCESS)
                cache.current[search]=data.products
                 setProduct(data.products)
                } catch (error) {
                    // console.log(error.name)
                    if (error.name !=="AbortError") {
                        setStatus(STATUS.ERROR)
                    }
                
                }
             }
            const timerId=setTimeout(fetchData, 1000); 
          return ()=>{
            clearTimeout(timerId)
            abortController.abort();
          }
    },[search])

 
    return(
        <div>
            <p className="text-center text-3xl mt-[20px] mb-[30px] underline">Search Functionality </p>
            <div className="grid grid-cols-3 gap-4">
                  <div></div>
                  <div> 
                  <input type="search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Here..."
                  value={search} onChange={(e)=>setSearch(e.target.value)} />
                  {status===STATUS.LODING && <div>Loding...</div>}
                  {status===STATUS.ERROR && <div>Something went to be error ...</div>}
                   {status===STATUS.SUCCESS &&  <ul>
                    {product.map((item)=>{
                        return(
                            <li>{item.title}</li>
                        )
                    })}
                   
                  </ul>}
                 
                  </div>
                  <div></div>
            </div>
       
        </div>
    )
}

export default Cashingtech;