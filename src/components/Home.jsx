
import Imageswitcher from "./ImageSwitcher";
import Navbar from "./Navbar";
import Footer from "./Footer";
import HomeContent from "./HomeContent";



const Home = () => {
  const url = "https://fakestoreapi.com/products/";

  return (
    <>
      <Navbar />
   
      <div className="w-full h-screen mt-14">
        <Imageswitcher />
        <HomeContent />
       <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
