import React from 'react';  

const Home =()=>{
    return(
        <div className="home">
            <div className="card home-card">
                <h5>Shreya</h5>
                <div className="card home-card">
                    <div className="card-image">
                        <img src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Zmxvd2VyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"/>

                    </div>
                    <div className="card-content">
                    <i className="material-icons" style={{color:"red"}}>favorite</i>
                        <h6>Title</h6>
                        <p>This is amazing pic</p>
                        <input type="text" placeholder="add a comment" />
                    </div>

                </div>

            </div>

        </div>
    )
}
export default Home;