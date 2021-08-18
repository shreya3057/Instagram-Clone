import React,{useEffect,useState,useContext} from 'react'
import {UserContext} from '../../App'
import {useParams} from 'react-router-dom'
const Profile  = ()=>{
    const [userProfile,setProfile] = useState(null)
    const {state,dispatch} = useContext(UserContext)
    const {userid} = useParams()
   //const [showfollow,setShowFollow] = useState(state?!state.following.includes(userid):true)
    useEffect(()=>{
       fetch(`/user/${userid}`,{
           headers:{
               "Authorization":"Bearer "+localStorage.getItem("jwt")
           }
       }).then(res=>res.json())
       .then(result=>{
           //console.log(result)
         
            setProfile(result)
       })
    },[])


    // const followUser = ()=>{
    //     fetch('/follow',{
    //         method:"put",
    //         headers:{
    //             "Content-Type":"application/json",
    //             "Authorization":"Bearer "+localStorage.getItem('jwt')
    //         },
    //         body:JSON.stringify({
    //             followId:userid
    //         })
    //     }).then(res=>res.json())
    //     .then(data=>{
        
    //         dispatch({type:"UPDATE",payload:{following:data.following,followers:data.followers}})
    //          localStorage.setItem("user",JSON.stringify(data))
    //          setProfile((prevState)=>{
    //              return {
    //                  ...prevState,
    //                  user:{
    //                      ...prevState.user,
    //                      followers:[...prevState.user.followers,data._id]
    //                     }
    //              }
    //          })
    //          setShowFollow(false)
    //     })
    // }
    // const unfollowUser = ()=>{
    //     fetch('/unfollow',{
    //         method:"put",
    //         headers:{
    //             "Content-Type":"application/json",
    //             "Authorization":"Bearer "+localStorage.getItem('jwt')
    //         },
    //         body:JSON.stringify({
    //             unfollowId:userid
    //         })
    //     }).then(res=>res.json())
    //     .then(data=>{
            
    //         dispatch({type:"UPDATE",payload:{following:data.following,followers:data.followers}})
    //          localStorage.setItem("user",JSON.stringify(data))
            
    //          setProfile((prevState)=>{
    //             const newFollower = prevState.user.followers.filter(item=>item != data._id )
    //              return {
    //                  ...prevState,
    //                  user:{
    //                      ...prevState.user,
    //                      followers:newFollower
    //                     }
    //              }
    //          })
    //          setShowFollow(true)
             
    //     })
    // }
   return (
       <>
       {userProfile ?
       <div style={{maxWidth:"550px",margin:"0px auto"}}>
           <div style={{
               display:"flex",
               justifyContent:"space-around",
               margin:"18px 0px",
               borderBottom:"1px solid grey"
           }}>
               <div>
                   <img style={{width:"160px",height:"160px",borderRadius:"80px"}}
                  src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnNvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"

                   />
               </div>
               <div>
                   <h4>{userProfile.user.name}</h4>
                   <h5>{userProfile.user.email}</h5>
                   <div style={{display:"flex",justifyContent:"space-between",width:"108%"}}>
                   <h6>{userProfile.posts.length} posts</h6>
                       <h6> followers</h6>
                       <h6> following</h6>
                   </div>
                  

               </div>
           </div>
     
           <div className="gallery">
               {
                   userProfile.posts.map(item=>{
                       return(
                        <img key={item._id} className="item" src={item.photo} alt={item.title}/>  
                       )
                   })
               }

           
           </div>
       </div>
       
       
       : <h2>loading...!</h2>}
       
       </>
   )
}


export default Profile