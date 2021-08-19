import React,{useState,useEffect,useContext} from 'react'
import {UserContext} from '../../App'
import {Link} from 'react-router-dom'
const Home  = ()=>{
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch('/allpost',{
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then(result=>{
            console.log(result)
            setData(result.posts)
        })
     },[])
    return(
        <div className="home">
        {
            data.map(item=>{
                return(
                    <div className="card home-card" key={item._id}>
                        <h5>shreya</h5>
                         {/* <h5 style={{padding:"5px"}}><Link to={item.postedBy._id !== state._id?"/profile/"+item.postedBy._id :"/profile"  }>{item.postedBy.name}</Link> {item.postedBy._id == state._id 
                         && <i className="material-icons" style={{
                             float:"right"
                         }} 
                         onClick={()=>deletePost(item._id)}
                         >delete</i>

                         }</h5> */}
                         <div className="card-image">
                             <img src={item.photo}/>
                         </div>
                         <div className="card-content">
                         <i className="material-icons" style={{color:"red"}}>favorite</i>
                         {/* {item.likes.includes(state._id)
                         ? 
                          <i className="material-icons"
                                 onClick={()=>{unlikePost(item._id)}}
                           >thumb_down</i>
                         : 
                         <i className="material-icons"
                         onClick={()=>{likePost(item._id)}}
                         >thumb_up</i>
                         } */}
                         
                        
                             <h6>{item.likes.length} likes</h6>
                             <h6>{item.title}</h6>
                             <p>{item.body}</p>
                             {/* {
                                 item.comments.map(record=>{
                                     return(
                                     <h6 key={record._id}><span style={{fontWeight:"500"}}>{record.postedBy.name}</span> {record.text}</h6>
                                     )
                                 })
                             } */}
                             {/* <form onSubmit={(e)=>{
                                 e.preventDefault()
                                 makeComment(e.target[0].value,item._id)
                             }}>
                               <input type="text" placeholder="add a comment" />  
                             </form> */}
                             <input type="text" placeholder="add a comment" />  
                             
                         </div>
                     </div> 
                )
            })
        }
       
       
    </div>
)
}

export default Home