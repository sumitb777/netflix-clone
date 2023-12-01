import React from 'react'
import { useNavigate } from "react-router-dom";

const Home = () => {
    let navigate = useNavigate();


    return (


        <section class="container-fluid bg-black  ">
            <section class="row ">
                {/* <!--                                 Header Section                --> */}
                <header class="header-section ">
                    <section class=" col-lg-9 m-auto  py-3 d-flex justify-content-lg-between justify-content-around   ">

                        <img class="logo-home  " src="./images/logo.png" alt="" />
                        <div class="d-flex gap-4   ">
                            <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle bg-transparent " type="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    <img class="img-2   " src="./images/language-svgrepo-com.png" alt="" /> <p class="d-none d-md-inline">English</p></button>
                                <ul class="dropdown-menu ">
                                    <li class="dropdown-item ">Hindi</li>
                                </ul>

                            </div>
                            <div className='userlogo'>
                                <img className='userlogoimg' src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' />

                            </div>
                        </div>
                    </section>
                    <section class="my-5 pt-0 pt-md-0 pt-lg-5  text-light d-flex text-center  justify-content-center align-items-center   ">
                        <div class="header-body mt-lg-5 mt-2  pt-6 col-10 p-3 ">
                            <p class=" mb-3 mt-lg-4  fw-bolder fs-1  lh-1 ">Enjoy big movies, hit series and more from ₹ 149.</p>
                            <h3 class="fw-semibold  my-4 ">Join today. Cancel anytime.</h3>
                            <p class="h4 fw-medium ">Ready to watch? Enter your email to create or restart your membership.</p>
                            <div class="login d-flex flex-sm-column flex-md-row  flex-lg-row flex-column  justify-content-center align-items-center
                               gap-2 mt-4  ">

                                <div class="   ">
                                    <button class="btn bg-danger  btn-lg  text-light  d-flex justify-content-center align-items-center gap-2   "
                                        type="button" onClick={() => navigate('main/')}
                                    >
                                        <p class="fw-semibold h3">Get Started As Guest</p> <h3>{'>'}</h3>
                                    </button>
                                </div>
                            </div>
                        </div>

                    </section>

                </header>
                {/* <!--                                 Header Section End             --> */}
                <hr />
                {/* <!--                                 Feature Section Starts         --> */}
                <section class=" py-0 px-0 mx-0 ">
                    {/* <!--                                 Feature-1 Section Starts         --> */}
                    <div class="d-flex flex-sm-column flex-md-column  flex-lg-row flex-column 
                      justify-content-center align-items-center  bg-black  ">
                        <div class="text-light ms-4 text-md-center text-sm-center text-lg-start text-center col-lg-5 col-md-11 col-sm-11 col-11  ">
                            <p class="feature-h fw-bolder fs-1 ">Enjoy on your TV</p>
                            <p class="fw-semibold fs-3 ">Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                        </div>
                        <div class="col-lg-5 col-md-12 col-sm-12 col-12 py-4 ps-3 position-relative ">
                            <img class="feature-img position-relative z-1 img-fluid  
                                     " src="images/feature1.png" alt="" />
                            <video autoplay loop muted src='/videos/tvin.m4v' type="video/mp4"
                                autoPlay={true} class="position-absolute feature1-video" > </video>
                        </div>

                    </div>
                    <hr />
                    {/* <!-- Feature-2 Section Starts --> */}
                    <div class="d-flex flex-sm-column flex-md-column  flex-lg-row flex-column justify-content-center align-items-center  bg-black  ">
                        <div class="col-lg-5  col-10 my-5  ps-1 position-relative  ">
                            <img class="feature-img img-fluid  " src="./images/mobile-0819.jpg" alt="" />
                            {/* <!--    Image Card       --> */}
                            <div class="card1 bg-black  d-flex align-items-center rounded-4 position-absolute  ">
                                <div class="h-100 me-lg-2 ms-lg-2  ">
                                    <img class="h-100  p-lg-1 " src="./images/boxshot.png" alt="" />
                                </div>
                                <div class="text-light ms-2  ">

                                    <p class="fw-lg-semibold m-0 fw-medium ps fs-6 "> Stranger Things</p>
                                    <p class="text-primary m-0  pd ">Downloading...</p>
                                </div>
                                <div class="align-content-end  ps-lg-5 ps-4  ">
                                    <i class="fa-solid fa-circle-arrow-down fa-xl"></i>
                                </div>
                            </div>

                        </div>
                        <div class="text-light ms-4 col-lg-5 col-md-12 col-sm-12 col-12 text-md-center text-sm-center text-lg-start text-center ">
                            <p class="feature-h fw-bolder fs-1 ">Download your shows to watch offline</p>
                            <p class="fw-semibold fs-3 ">Save your favourites easily and always have something to watch.</p>
                        </div>
                    </div>
                    <hr />
                    {/* <!-- Feature-3 Section Starts --> */}
                    <div class="d-flex  flex-lg-row flex-column  
                                   justify-content-center align-items-center  bg-black  ">
                        <div class="text-light text-md-center text-sm-center text-lg-start text-center  ms-lg-4 ps-lg-5 
                                  text col-lg-5 col-md-10 col-sm-10 col-10  ">
                            <p class="feature-h fw-bolder fs-1 ">Watch everywhere</p>
                            <p class="fw-semibold fs-4 ">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV</p>
                        </div>
                        <div class=" my-lg-3 py-lg-3  position-relative  col-lg-5  col-9 m-auto  ">
                            <img class="feature-img position-relative z-1 img-fluid 
                                             " src="./images/device-pile-in.png" alt="" />
                            <video autoplay muted class="position-absolute p-0  video2"
                                type="video/mp4" src=" /videos/video-devices-in.m4v"
                                autoPlay={true} loop ></video>
                        </div>

                    </div>
                    <hr />
                    {/* <!-- Feature-4 Section Starts --> */}
                    <div class="d-flex  flex-lg-row flex-column justify-content-center align-items-center  bg-black  ">
                        <div class=" col-lg-5 m-auto py-lg-5  col-10  ">
                            <img class="feature-img img-fluid  " src="./images/c-img.png" alt="" />

                        </div>
                        <div class="text-light pe-lg-5   col-lg-5 m-auto  col-10 text-md-center text-sm-center text-lg-start text-center">
                            <p class="feature-h fw-bolder fs-1 ">Create profiles for kids</p>
                            <p class="fw-semibold fs-3 ">Send children on adventures with their favourite characters in a space made just for
                                them—free with your membership.</p>
                        </div>
                    </div>

                </section>
                {/* <!--                                 Feature Section End Here      --> */}
                <section class="Footer">
                    <section class="footer-accordian col-12  m-auto col-md-9  ">
                        <div class="mb-2 collp">
                            <button class="btn w-100 collbt rounded-0 p-2  bg-dark text-light d-flex justify-content-between align-items-center px-3  " type="button"
                                data-bs-toggle="collapse" data-bs-target="#collapse-1" ><p class="fs-3 fw-medium pt-2  ">What Is Netflix ?

                                </p> <h1>+</h1> </button>
                            <div id="collapse-1" class="collapse collapsing text-light p-2 fs-4 ps-4 ">
                                <p >
                                    Netflix is a streaming service that offers a wide variety of
                                    award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.
                                </p>
                                <p>You can watch as much as you want, whenever you want, without a
                                    single ad – all for one low monthly price. There's always something new to discover,
                                    and new TV shows and movies are added every week!
                                </p>
                            </div>
                        </div>
                        {/* <!--                               collapse 2                       --> */}
                        <div class="mb-2 collp">
                            <button class="btn w-100 collbt rounded-0 p-2  bg-dark text-light d-flex justify-content-between align-items-center px-3  " type="button"
                                data-bs-toggle="collapse" data-bs-target="#collapse-2" ><p class="fs-3 fw-medium pt-2  ">How much does Netflix cost?

                                </p> <h1>+</h1> </button>
                            <div id="collapse-2" class="collapse  text-light p-2 fs-4 ps-4 ">
                                <p >
                                    Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device,
                                    all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.
                                </p>

                            </div>
                        </div>
                        {/* <!--                              collapse-3                         --> */}
                        <div class="mb-2 collp">
                            <button class="btn w-100 collbt rounded-0 p-2  bg-dark text-light d-flex justify-content-between align-items-center px-3  " type="button"
                                data-bs-toggle="collapse" data-bs-target="#collapse-3" ><p class="fs-3 fw-medium pt-2  ">Where can I watch?</p> <h1>+</h1> </button>
                            <div id="collapse-3" class="collapse  text-light p-2 fs-4 ps-4 ">
                                <p >
                                    Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer
                                    or on any
                                    internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game
                                    consoles..
                                </p>
                                <p>You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while
                                    ou're on the go and without an internet connection. Take Netflix with you anywhere.
                                </p>
                            </div>
                        </div>
                        {/* <!--                             collapse-4                       --> */}
                        <div class="mb-2 collp">
                            <button class="btn w-100 collbt rounded-0 p-2  bg-dark text-light d-flex justify-content-between align-items-center px-3  " type="button"
                                data-bs-toggle="collapse" data-bs-target="#collapse-4" ><p class="fs-3 fw-medium pt-2  ">How do I cancel?</p> <h1>+</h1> </button>
                            <div id="collapse-4" class="collapse  text-light p-2 fs-4 ps-4 ">
                                <p >
                                    Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in
                                    two clicks. There are no cancellation fees – start or stop your account anytime.
                                </p>
                            </div>
                        </div>
                        {/* <!--                             collapse-5                 --> */}
                        <div class="mb-2 collp">
                            <button class="btn w-100 collbt rounded-0 p-2  bg-dark text-light d-flex justify-content-between align-items-center px-3"
                                type="button"
                                data-bs-toggle="collapse" data-bs-target="#collapse-5" ><p class="fs-3 fw-medium pt-2  ">What can I watch on Netflix?</p>
                                <h1>+</h1>
                            </button>
                            <div id="collapse-5" class="collapse  text-light p-2 fs-4 ps-4 ">
                                <p >
                                    Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals,
                                    and more. Watch as much as you want, anytime you want.
                                </p>

                            </div>
                        </div>
                        {/* <!--                            collapse-6                    --> */}
                        <div class="mb-2 collp">
                            <button class="btn w-100 collbt rounded-0 p-2  bg-dark text-light d-flex justify-content-between align-items-center px-3  "
                                type="button"
                                data-bs-toggle="collapse" data-bs-target="#collapse-6" ><p class="fs-3 fw-medium pt-2  ">Is Netflix good for kids?
                                </p> <h1>+</h1> </button>
                            <div id="collapse-6" class="collapse  text-light p-2 fs-4 ps-4 ">
                                <p >
                                    The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV
                                    shows and films in their own space.
                                </p>
                                <p>Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can
                                    watch and block specific titles you don’t want kids to see.
                                </p>
                            </div>
                        </div>
                    </section>
                    <div class="login d-flex flex-sm-column flex-md-row  flex-lg-row flex-column  justify-content-center align-items-center
                                          gap-2 mt-4 text-light ">

                        <div class="   ">
                            <button class="btn bg-danger  btn-lg  text-light  d-flex justify-content-center align-items-center gap-2   "
                                type="button">
                                <p class="fw-semibold h3">Get Started As Guest</p> <h3>{'>'}</h3></button>
                        </div>
                    </div>

                </section>
                <hr class="mt-5 " />
                <section class="footer-main  pt-3 ">
                    <p class="col-md-4 col-10  me-5 pe-3 text-center   ">Questions? Call 000-800-919-1694</p>
                    <div class="d-flex justify-content-around  ">

                        <div class="d-flex flex-column gap-3 mb-5  ">

                            <a class=" text-light1 " href="#">FAQ</a>
                            <a class=" text-light1 " href="#">Investor Relations</a>
                            <a class=" text-light1 " href="#">Privacy</a>
                            <a class=" text-light1 " href="#">Speed Test</a>
                            {/* <!--    hide when lg --> */}
                            <a class=" text-light1 d-md-none  d-block   " href="">Account</a>
                            <a class=" text-light1 d-md-none  d-block  " href="">Ways to Watch</a>
                            <a class=" text-light1 d-md-none  d-block  " href=""> Corporate Information</a>
                            <a class=" text-light1 d-md-none  d-block  " href=""> on Netflix</a>


                            <div class="dropdown mt-3 ">
                                <button class="btn btn-secondary dropdown-toggle bg-transparent " type="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    <img class="img-l"
                                        src="./images/language-svgrepo-com.png" alt="" /> English</button>
                                <ul class="dropdown-menu ">
                                    <li class="dropdown-item ">Hindi</li>   </ul>
                            </div>
                            <p>Netflix India</p>

                        </div>
                        <div class="d-flex flex-column gap-3  ">

                            <a class=" text-light1 " href="#">Help Centre</a>
                            <a class=" text-light1 " href="#">Jobs</a>
                            <a class=" text-light1 " href="">Cookie Preferences</a>
                            <a class=" text-light1 " href="">Legal Notices</a>
                            {/* <!--                       --> */}
                            <a class=" text-light1 d-md-none  d-block" href="">Media Centre</a>
                            <a class=" text-light1 d-md-none  d-block" href="">Terms of Use</a>
                            <a class=" text-light1 d-md-none  d-block" href="">Contact Us</a>

                        </div>
                        <div class="d-md-flex flex-column gap-3 d-none  ">

                            <a class=" text-light1 " href="">Account</a>
                            <a class=" text-light1 " href="">Ways to Watch</a>
                            <a class=" text-light1 " href=""> Corporate Information</a>
                            <a class=" text-light1 " href=""> on Netflix</a>

                        </div>
                        <div class="d-md-flex flex-column gap-3 d-none  ">
                            <a class=" text-light1 " href="">Media Centre</a>
                            <a class=" text-light1 " href="">Terms of Use</a>
                            <a class=" text-light1 " href="">Contact Us</a>
                        </div>



                    </div>

                </section>
            </section>
        </section>




    )
}

export default Home;