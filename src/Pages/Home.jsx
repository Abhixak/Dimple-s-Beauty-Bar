<<<<<<< HEAD
import Header from '../Components/Header'
import Wwd from '../Components/Wwd'
import BookingForm from '../Components/BookingForm'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <>
       <Header />
       {/* What We Do */}
       <Wwd />
       <BookingForm />
       <Footer />
    </>
  )
}

export default Home
=======
import Landing  from "../Components/Landing";

const Home = () => {


  return (
    <div className="relative">
      <div className="relative z-20">
        < Landing />
      </div>
    </div>
  );
};

export default Home;
>>>>>>> fb34473d7420cb42a1446fa4532ca99974e0fcb1
