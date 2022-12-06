// import axios from "axios";
// import { useState } from "react";
// import styles from '../styles/contact.module.css';

// const contact = () => {
//     const [contactValue, setContactValue] = useState({})
//     const handleChange = (e) => {
//         setContactValue({ ...contactValue, ...{ [e.target.name]: e.target.value } })
//     }
//     const handlesubmit = (e) => {
//         e.preventDefault();
//         axios.post('/api/postcontact', contactValue)
//             .then((res) => {
//                 alert('submit success')
//                 setContactValue({})
//             })
//             .catch((err) => {
//                 alert(err.message)
//             })
//     }
//     return (
//         <div className={styles.container}>
//             <form onSubmit={handlesubmit} className={styles.form}>
//                 <label htmlFor="name">
//                     <input type="text" name="username" id="username" value={contactValue.username || ''} onChange={handleChange} placeholder="username" />
//                 </label>
//                 <label htmlFor="email">
//                     <input type="email" name="email" id="email" value={contactValue.email || ''} onChange={handleChange} placeholder="emal" />
//                 </label>
//                 <label htmlFor="phone">
//                     <input type="number" name="phone" id="phone" value={contactValue.phone || ''} onChange={handleChange} placeholder="phone" />
//                 </label>
//                 <label htmlFor="name">
//                     <textarea name="decs" id="decs" cols="30" rows="10" value={contactValue.decs || ''} onChange={handleChange} placeholder="decs..."></textarea>
//                 </label>
//                 <label htmlFor="submit">
//                     <input type="submit" name="submit" id="submit" />
//                 </label>
//             </form>
//         </div>
//     )
// }

// export default contact


import React from 'react'

const contact = () => {
    return (
        <div>
            contact
        </div>
    )
}

export default contact
