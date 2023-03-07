import Head from "next/head";
import React from "react";
import Layout from "../../components/layout/Layout";
import Link from "next/link";

export default function BlogPostOne() {
  return (
    <>
      <Head>
        <title>Website Design Company Grapevine TX</title>
      </Head>
      <Layout>
        <article>
          <section className="section banner-service bg-grey-60 position-relative">
            <div className="box-banner-abs">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-xxl-6 col-xl-7 col-lg-12">
                    <div className="box-banner-service">
                      <h2 className="color-brand-1 mb-20">
                        Need to hire a local professional to build your website?
                        we got you covered!
                      </h2>
                      <div className="row">
                        <div className="col-lg-9">
                          <p className="font-lg color-grey-500">
                            Find local talent in grapevine texas just give us a
                            call at <a className="">214-516-0778</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row m-0">
              <div className="col-xxl-6 col-xl-6 col-lg-6" />
              <div className="col-xxl-6 col-xl-6 col-lg-6 pr-0">
                <div className="d-none d-xxl-block pl-70">
                  <img
                    className="w-100 d-block"
                    src="../assets/imgs/page/blog/banner.png"
                    alt="Website Design Company Grapevine TX"
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="section mt-80 body-section">
            <div className="row">
              <div className="col-xl-3 font-xl"></div>
              <div className="col-xl-9 font-xl">
                <p className="mt-10">
                  If you're looking to create a website for your business,
                  finding the right website design company in Grapevine, TX can
                  make all the difference. With so many options to choose from,
                  it can be difficult to know where to start. In this post,
                  we'll provide you with some tips to help you choose the right
                  website design company in Grapevine, TX.
                </p>

                <p className="mt-50">What we do: </p>
                <ul className="blog-list dashed">
                  <li>Look at Their Portfolio</li>
                  <li>Check Their Reviews</li>
                  <li>Ask About Their Process</li>
                  <li>Consider Their Expertise</li>
                  <li>Consider Your Budget</li>
                </ul>
                <div className="d-flex align-items-center justify-content-center row">
                  <div className="col-xl-6">
                    <h2 className="mt-40 mb-40">Sign up for a free quote</h2>
                    <form>
                      <label className="form-group mt-10">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="John Doe"
                      ></input>
                      <label className="form-group mt-10">Email: </label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Johndoe@gmail.com"
                      ></input>
                      <label className="form-group mt-10">Phone Number</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="214..."
                      ></input>
                      <label>Message</label>
                      <input type="textarea" className="form-control"></input>
                      <div className="d-flex align-items-center justify-content-center">
                        <a className="btn btn-brand-1 mt-20">
                          Sumbit (under development)
                        </a>
                      </div>
                    </form>
                  </div>
                </div>

                <p className="mt-50">
                  Choosing the right website design company in Grapevine, TX can
                  be a daunting task, but it doesn't have to be. By considering
                  these factors, you'll be well on your way to finding a company
                  that can create a website that meets your needs and exceeds
                  your expectations. Remember to take your time, do your
                  research, and choose a company that you feel confident working
                  with. Good luck!
                </p>
              </div>
            </div>
          </section>
        </article>
      </Layout>
    </>
  );
}
