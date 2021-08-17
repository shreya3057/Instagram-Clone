import React from 'react';  

const Profile =()=>{
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
                   <h4>Shreya</h4>
                   <div style={{display:"flex",justifyContent:"space-between",width:"108%"}}>
                       <h5>40 post</h5>
                       <h5>40 Follower</h5>
                       <h5>40 Following</h5>
                   </div>
               </div>
           </div>
           <div className="gallery">
            {
                <img className="item" src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnNvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" />
            }

           
           </div>
       </div>
    )
}
export default Profile