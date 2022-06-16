import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Name = () => {
    //useState for setting the first value to an empty array
    const [value,setValue] = useState([])

    //function to make API requests and set the value to the data
    const getData = async () => {
        try {
            const res = await axios.get('https://randomuser.me/api')
            const mydata = res.data.results;
            //updating the state after the fetch call
            setValue(mydata)
        } catch (err) {
            console.log(err)
        }
    }

    //useEffect to render once at the start of the page
        useEffect(()=>{
        getData()
    },[])
    
    localStorage.setItem("locals",JSON.stringify(value)) 
  return (
    <>
    {/* fetch everytime the button is clicked */}
    <button className='but' onClick={()=>getData()}>Fetch Info</button>
    <div>
        {/* map each element and change div content each time it's rendered */}
    {value.map((el,key) => {
          var fullName = `${el.name.title}`+" "+ `${el.name.first}`+' '+`${el.name.last}`;
        return (
            <div className='flex' key={key}>
                {/* <h2>Name:. <br/> {fullName}</h2>
                <h4>Email:. <br/> {el.email}</h4> */}
                <ul className='my-list'>
                    <li><a>Name:. {fullName}</a></li><br/>
                    <li><a>Email:. {el.email}</a></li>
                </ul>
            </div>
        )
}
)}

        {/* {this.state.data} */}
        {/* {
            data
            // datas.map((val)=>{
            //     return (
            //         <div>
            //             <div class="card" style="width: 18rem;">
            //             <img src="..." class="card-img-top" alt="..."/>
            //             <div class="card-body">
            //             <h5 class="card-title">Card title</h5>
            //             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            //             <a href="#" class="btn btn-primary">Go somewhere</a>
            //             </div>
            //         </div>
            //         </div>
            //     )
            // })
        } */}
    </div>
    </>
  )
}

export default Name
