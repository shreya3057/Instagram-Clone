import React,{useEffect,useState,useContext} from 'react'
import {UserContext} from '../../App'
 

const Profile  = ()=>{
    const [mypics,setPics] = useState([])
    const {state,dispatch} = useContext(UserContext)
    const [image,setImage] = useState("")
    useEffect(()=>{
       fetch('/mypost',{
           headers:{
               "Authorization":"Bearer "+localStorage.getItem("jwt")
           }
       }).then(res=>res.json())
       .then(result=>{
           console.log(result)
           setPics(result.mypost)
       })
    },[])
    // useEffect(()=>{
    //    if(image){
    //     const data = new FormData()
    //     data.append("file",image)
    //     data.append("upload_preset","insta-clone")
    //     data.append("cloud_name","cnq")
    //     fetch("https://api.cloudinary.com/v1_1/cnq/image/upload",{
    //         method:"post",
    //         body:data
    //     })
    //     .then(res=>res.json())
    //     .then(data=>{
    
       
    //        fetch('/updatepic',{
    //            method:"put",
    //            headers:{
    //                "Content-Type":"application/json",
    //                "Authorization":"Bearer "+localStorage.getItem("jwt")
    //            },
    //            body:JSON.stringify({
    //                pic:data.url
    //            })
    //        }).then(res=>res.json())
    //        .then(result=>{
    //            console.log(result)
    //            localStorage.setItem("user",JSON.stringify({...state,pic:result.pic}))
    //            dispatch({type:"UPDATEPIC",payload:result.pic})
    //            //window.location.reload()
    //        })
       
    //     })
    //     .catch(err=>{
    //         console.log(err)
    //     })
    //    }
    // },[image])
    // const updatePhoto = (file)=>{
    //     setImage(file)
    // }
    return(
        <div style={{maxWidth:"550px",margin:"0px auto"}}>
           <div style={{
             display:"flex",
             justifyContent:"space-around",
             margin:"18px,0px",
             borderBottom:"1px solid grey"
           }}>
               <div>
               <img style={{width:"160px",height:"160px",borderRadius:"80px"}}
               src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnNvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
               />
               </div>
               <div>
                <h4>{state?state.name:"loading"}</h4>
                   <div style={{display:"flex",justifyContent:"space-between",width:"108%"}}>
                       <h5>40 post</h5>
                       <h5>40 Follower</h5>
                       <h5>40 Following</h5>
                   </div>
               </div>
           </div>

            <div className="gallery">
               {
                   mypics.map(item=>{
                       return(
                        <img key={item._id} className="item" src={item.photo} alt={item.title}/>  
                       )
                   })
               }

           
           </div>

           
           </div>
    )
}
export default Profile