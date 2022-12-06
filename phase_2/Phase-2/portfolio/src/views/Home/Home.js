import {useState, useEffect} from 'react';

const Home = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/GorkemOkur/CS412/main/phase_2/home.json')
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.log("Error by fetchind: ", error.message) );
    },[]);


    return(
        data ? 
        <>
            {console.log(data)}

            <h1 className="font-mono font-bold text-3xl pb-8">{data.welcomeHeading}</h1>

            {data.welcomeMessage.map(el => <p className = "pb-4 font-serif">{el}</p>)}
        </>
        : <h1>Loading....</h1>
    );
};

export default Home;