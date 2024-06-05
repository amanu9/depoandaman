import React from 'react';
import { Link } from 'react-router-dom';
import Slider from '../inc/slider';
import Vms from '../inc/mission';
import Navbar from '../inc/navbar';
import slider1 from '../image/slider4.jpg'
import slider2 from '../image/slider2.jpg'
import slider3 from '../image/slider3.jpg'
import Footer from '../inc/footer';
import MyNavbar from '../inc/HomeNavbar';
function Home() {
  return (

    <div>
<MyNavbar/>
      < Slider />
      <div>
        <section className="section">
          <div className='container'>
            <div className='row'>
              <div className='col-md-12 text-center'>
                <h3 className='main-heading'>Our Company</h3>
                <div className='underline mx-auto'></div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <Link to="/about" className='btn btn-warning shadow'>Read More</Link>
              </div>
            </div>
          </div>

        </section>
        <Vms />
        <section className="section  border-top">
          <div className='container'>
            <div className='row'>

              <div className='col-md-12 mb-4 text-center'>
                <h3 className='main-heading '>Our Service</h3>
                <div className='underline mx-auto'></div>


              </div>
              <div className='col-md-4 text-center'>
                <div className='card shadow'>
                  <img src={slider1} className='w-100% border-bottom'></img>
                  <div className='card-body'>
                    <h6>Service1</h6>
                    <div className='underline mx-auto'></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
                    <Link to="/servics" className='btn btn-link'>read more</Link>
                  </div>
                </div>
              </div>

              <div className='col-md-4 text-center'>

                <div className='card shadow'>
                  <img src={slider2} className='w-100% border-bottom'></img>
                  <div className='card-body'>
                    <h6>Service2</h6>
                    <div className='underline mx-auto'></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
                    <Link to="/servics" className='btn btn-link'>read more</Link>
                  </div>
                </div>
              </div>
              <div className='col-md-4 text-center'>
                <div className='card shadow'>
                  <img src={slider3} className='w-100% border-bottom'></img>
                  <div className='card-body'>
                    <h6>Service3</h6>
                    <div className='underline mx-auto '></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
                    <Link to="/servics" className='btn btn-link'>read more</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>
        <Footer />


      </div>
    </div>

  );
}

export default Home;