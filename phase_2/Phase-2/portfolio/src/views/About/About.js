import {useState, useEffect} from 'react';

const About = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/GorkemOkur/CS412/main/phase_2/about.json")
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.log("Error by fetching: ",error))
    },[]);

    return(
        data ?
        <>
            {console.log(data)}

            <h1 className="font-mono font-bold text-3xl pb-8">{data.aboutHeading}</h1>

            {data.aboutMessage.map(content => <p className="pb-4 font-serif">{content}</p>)}

        </>
        :  <h1>Loading....</h1>
    );
}

export default About;