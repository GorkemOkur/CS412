import logoImage from '../../assets/p1.jpg';

const Navbar = () => {
    return(
        <>
            <div className="md:fixed text-center">
                <img className="logoImage" src={logoImage} alt="Görkem Okur" />
                <ul className="text-lg font-bold list-none pt-3">
                    <li><a className="font-mono text-2xl leading-none py-1 my-2 inline-block" href="/">Home</a></li>
                    <li><a className="font-mono text-2xl leading-none py-1 my-2 inline-block" href="/about">About</a></li>
                    <li><a className="font-mono text-2xl leading-none py-1 my-2 inline-block" href="/contact">Contact</a></li>
                </ul>
            </div>
        </>
    );
};

export default Navbar;