import axios from 'axios';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Item from './Item';
import style from '../styles/item.module.css';

const Home = () => {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [adding, setAdding] = useState(false);


  // initial api call fetching data
  async function fetchApi() {
      let getdata = await axios.get('http://localhost:8000/api/get');
      setData(getdata.data);
  }
  // initial render
  useEffect(() => {
    fetchApi();
  })


  // adding item 
  const addItem = async () => {
    
    setAdding(false);
    if(title === "" || description === ""){
      return toast.error("Please Enter Data")
    }
    
    
    const postdata = await axios.post('http://localhost:8000/api/post',{description:description,title:title})
    
    const addedData = [...data, postdata.data];
    toast.success("Post added successfully");
    setData(addedData); 
    
    console.log("hello");
  }
 
  useEffect(()=>{
  },);
  
  
 

  
    

  return (
    <div >
      <div className={style.addItem}>
        {
          adding &&
          < >
            <div className={style.formGroup}>
              <input className={style.formfield} type="text" onChange={(e) => setTitle(e.target.value)} placeholder="Enter Your Title...!" />
            </div>

            <div className={style.formGroup}>
              <input className={style.formfield} type="text" onChange={(e) => setDescription(e.target.value)} placeholder="Enter Description Here....!"/>
            </div>


            {/* <input type="submit" onClick={() => setAdding(false)} /> */}
            <input type="submit" onClick={addItem} />
          </>
        }
        {
          !adding && <button onClick={() => setAdding(true)} className={style.buttonAdd} type="submit">Click Here To Add A New Data</button>

        }
      </div>
      <div className={style.allItem}>
        {
          data.map((item) => {
            return <Item data={item} key={item.id} />
          })
        }
      </div>


    </div>
  )
}

export default Home