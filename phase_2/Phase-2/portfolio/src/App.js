import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Home from './views/Home/Home';
import About from './views/About/About';
import Contact from './views/Contact/Contact';

function App() {
return (
    <BrowserRouter>
        <div className="grid text-lg  min-h-screen   grid-rows-1 grid-cols-1 md:grid-cols-7 xl:grid-cols-5   text-center md:text-left">
            <div className="md:h-screen col-span-1 col-span-2 xl:col-span-1 flex flex-col justify-center content-center items-center py-8 md:px-4">
                <Navbar />
            </div>
            <div className="col-span-1 md:col-span-5 xl:col-span-4 block self-center p-4 lg:px-4 xl:pr-16">
                <Routes>
                    <Route path ="/"        element={<Home/>}       />
                    <Route path ="/about"   element = {<About />}   />
                    <Route path ="/contact"  element = {<Contact />} />
                </Routes>
            </div>
        </div>
    </BrowserRouter>
);
}

export default App;


/*


welcomeHeading = Hello, I'm Görkem Okur.

welcomeMessage = <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula id est a tincidunt. Quisque quis mi in mauris vestibulum ultricies nec non risus. Sed id orci sed tellus imperdiet tempor. Ut nec venenatis turpis, non semper lectus. In a rhoncus lectus, et auctor ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget facilisis velit, a semper arcu. Suspendisse potenti.</p> <p>Donec at pharetra neque. Pellentesque finibus dolor at nunc fermentum, ut pretium eros laoreet. Aliquam erat volutpat. Mauris faucibus condimentum fermentum. Morbi elementum, diam luctus pretium sollicitudin, nibh turpis dapibus nisl, nec eleifend sapien risus at quam. Nullam eget iaculis nisl. Ut semper nisl odio, ac tempus felis placerat volutpat. Integer sapien odio, aliquet eget nulla vitae, scelerisque tincidunt elit.</p> <p>Phasellus a congue ipsum. Suspendisse id pretium elit. Nulla et aliquet nulla. Praesent viverra mi sit amet nunc viverra rhoncus. Ut vestibulum tellus ultricies egestas imperdiet. Nulla mattis lectus quam, nec hendrerit mi rhoncus porttitor. Pellentesque condimentum a nisl non tincidunt. Nunc viverra maximus malesuada. Phasellus aliquet tempor neque, vitae cursus lacus accumsan efficitur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin quis laoreet odio. Praesent condimentum, ex nec scelerisque faucibus, massa metus auctor est, eget gravida sem enim vitae magna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> <p>Pellentesque lobortis massa eu magna pulvinar tincidunt. Nulla imperdiet at elit ut mollis. Fusce consectetur ante vitae pharetra dictum. Sed ultrices justo eu rutrum mattis. Mauris scelerisque nibh non posuere fringilla. Nulla fermentum, ipsum vitae malesuada porta, nunc nulla laoreet mi, ac cursus nisi nisl et sapien. Praesent dignissim rhoncus viverra. Nunc eu dolor aliquam, fermentum tellus quis, venenatis augue. Fusce malesuada ante in quam malesuada, vitae imperdiet sapien auctor. In a lacinia ipsum. Quisque dictum nisi eu nisi cursus, in scelerisque enim pulvinar. Nam aliquet ante eget tellus varius fringilla non eu diam. Praesent maximus mi nec dolor ullamcorper, et accumsan massa porttitor. Donec tempor felis eget tempus pharetra. Curabitur tristique sem at posuere viverra.</p>

aboutME = <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula id est a tincidunt. Quisque quis mi in mauris vestibulum ultricies nec non risus. Sed id orci sed tellus imperdiet tempor. Ut nec venenatis turpis, non semper lectus. In a rhoncus lectus, et auctor ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget facilisis velit, a semper arcu. Suspendisse potenti.</p> <p>Donec at pharetra neque. Pellentesque finibus dolor at nunc fermentum, ut pretium eros laoreet. Aliquam erat volutpat. Mauris faucibus condimentum fermentum. Morbi elementum, diam luctus pretium sollicitudin, nibh turpis dapibus nisl, nec eleifend sapien risus at quam. Nullam eget iaculis nisl. Ut semper nisl odio, ac tempus felis placerat volutpat. Integer sapien odio, aliquet eget nulla vitae, scelerisque tincidunt elit.</p> <p>Phasellus a congue ipsum. Suspendisse id pretium elit. Nulla et aliquet nulla. Praesent viverra mi sit amet nunc viverra rhoncus. Ut vestibulum tellus ultricies egestas imperdiet. Nulla mattis lectus quam, nec hendrerit mi rhoncus porttitor. Pellentesque condimentum a nisl non tincidunt. Nunc viverra maximus malesuada. Phasellus aliquet tempor neque, vitae cursus lacus accumsan efficitur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin quis laoreet odio. Praesent condimentum, ex nec scelerisque faucibus, massa metus auctor est, eget gravida sem enim vitae magna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> <p>Pellentesque lobortis massa eu magna pulvinar tincidunt. Nulla imperdiet at elit ut mollis. Fusce consectetur ante vitae pharetra dictum. Sed ultrices justo eu rutrum mattis. Mauris scelerisque nibh non posuere fringilla. Nulla fermentum, ipsum vitae malesuada porta, nunc nulla laoreet mi, ac cursus nisi nisl et sapien. Praesent dignissim rhoncus viverra. Nunc eu dolor aliquam, fermentum tellus quis, venenatis augue. Fusce malesuada ante in quam malesuada, vitae imperdiet sapien auctor. In a lacinia ipsum. Quisque dictum nisi eu nisi cursus, in scelerisque enim pulvinar. Nam aliquet ante eget tellus varius fringilla non eu diam. Praesent maximus mi nec dolor ullamcorper, et accumsan massa porttitor. Donec tempor felis eget tempus pharetra. Curabitur tristique sem at posuere viverra.</p>



*/