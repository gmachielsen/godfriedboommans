import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import CourseCard from '../components/cards/CourseCard';
import Cover from '../components/cards/Cover';
import TopNav from "../components/TopNav";
import Footer from "../components/Footer";
import Image from 'next/image'
import { ConsoleSqlOutlined } from "@ant-design/icons";
// import museumpic from '../public/coverphoto.jpg'

const Index = ({ courses, covers }) => {
  // const [courses, setCourses] = useState([]);

  
  // useEffect(() => {
  //   const fetchCourses = async () => {
  //     const { data } = await axios.get("/api/courses");
  //     setCourses(data);
  //   };
    
  //   fetchCourses();
  // }, []);

    return (
      <>
      <div style={{position: 'absolute', width: '100%'}}>
        <TopNav  />
        <div className="cover" style={{ padding: 0, position: 'relative', textAlign: 'center'}}>
          <h1 className="text-center" style={{ padding: 0, position: 'absolute', left: 0, right: 0, top: '25%', fontSize: '100px', color: 'red'}}>
            Artacademy
            {/* <img src={require('../../public/coverphoto.jpg')} /> */}


          </h1>
          <Cover/>
        </div>
        <div className="container-fluid">
            <div className="row">
                {courses.map((course) => (
                  <div key={course._id} className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                    <CourseCard course={course}/>
                  </div>))}
            </div>
        </div>
        <Footer />
      </div>

       
      </>
    );
  };

  export async function getServerSideProps() {
    const { data } = await axios.get(`${process.env.API}/courses`);
    // const { cover } = await axios.get(`${process.env.API}/courses`)
    // const data = [courses, cover]
    // const cover = JSON.stringify(coverdata)
    // console.log("DATA LENGTH =====> ", data.length);
    return {
      props: {
        courses: data,
      },
      // props: {
      //   cover: cover,
      // }
    };
  }

  // export async function getServerSideProperties() {
  //   // const { data } = await axios.get(`${process.env.API}/courses`);
  //   const { data } = await axios.get(`${process.env.API}/get-covercontent`)
  //   // const data = [courses, cover]
  //   // const cover = JSON.stringify(coverdata)
  //   // console.log("DATA LENGTH =====> ", data.length);
  //   return {
  //     props: {
  //       covers: data,
  //     },
  //     // props: {
  //     //   cover: cover,
  //     // }
  //   };
  // }
  

  // export async function getServerSideProps() {
  //   const [{courseResponse}, {coverResponse}] = await Promise.all([
  //     axios.get(`${process.env.API}/courses`), 
  //     axios.get(``)
  //   ]);
  //   // const [courses, cover] = await Promise.all([
  //   //   courseResponse, 
  //   //   coverResponse
  //   // ]);
  //   return { props: { courses: courseResponse, cover: coverResponse } };
  // }
  
  export default Index;