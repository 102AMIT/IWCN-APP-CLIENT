import styles from '../styles/item.module.css'
import { toast } from 'react-toastify';
import axios from 'axios';
const Item = (props) =>{
    
    const {id,title , description , created_on} = props.data;
    
    let date = created_on.split('T');
    let time = date[1].split('.');
    
    const deleteItem = async(id) =>{
        await axios.delete(`http://localhost:8000/api/post/remove/${id}`)
        toast.success("item removed successfully");
    }
    
    return(
        <>
        <div className={styles.container}>
            
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>
            <div style={{display:"flex",justifyContent:"space-between"}}>
            <h5 className={styles.description}>{date[0]} {time[0]}</h5>
            <button onClick={()=>deleteItem(id)} className={styles.btnDelete}>Delete</button>
            </div>
        </div>
        </>
    )
}

export default Item;