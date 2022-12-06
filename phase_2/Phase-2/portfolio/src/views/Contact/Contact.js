import {useState, useEffect} from 'react';

const Contact = () => {

    const [data, setData] = useState(null);

    /*useEffect(() => {
        fetch("https://raw.githubusercontent.com/GorkemOkur/CS412/main/phase_2/contact.json")
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error("Error by fetching: ",error))
    },[]);
    */
    
    

    console.log(data);

    return (
        data ? 
        <>
            <h1>{data.contactHeading}</h1>
            <dl>
                <dt>Phone Number:</dt>
                <dd>{data.contactTel}</dd>
                <dt>Address:</dt>
                <dd>{data.contactAddress}</dd>
            </dl>
        </>
        : <h1>Loading...</h1>
    );
}

export default Contact;