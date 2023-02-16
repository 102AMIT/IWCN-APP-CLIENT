import styles from '../styles/item.module.css'
import { toast } from 'react-toastify';
import axios from 'axios';
import { useEffect } from 'react';
const Item = (props) =>{
    
    const {id,title , description , created_on} = props.data;
    
    let date = created_on.split('T');
    const deleteItem = async(id) =>{
        await axios.delete(`http://localhost:8000/api/post/remove/${id}`)
        toast.success("item removed successfully");

    }
    
    return(
        <>
        <div className={styles.container}>
            
            <h2 className={styles.title}>{title}</h2>
            <h4 className={styles.description}>{description}</h4>
            <div style={{display:"flex",justifyContent:"space-between"}}>
            <h5 className={styles.description}>{created_on}</h5>
            <button onClick={()=>deleteItem(id)} className={styles.btnDelete}>Delete</button>
            </div>
        </div>
        </>
    )
}

export default Item;