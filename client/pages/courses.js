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

const Courses = ({ courses }) => {
//   const [courses, setCourses] = useState([]);

  
//   useEffect(() => {
//     const fetchCourses = async () => {
//       const { data } = await axios.get("/api/courses");
//       setCourses(data);
//     };
    
//     fetchCourses();
//   }, []);

    return (
      <>
      <div style={{position: 'absolute', width: '100%'}}>
        <TopNav />

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

 
  
  export default Courses;