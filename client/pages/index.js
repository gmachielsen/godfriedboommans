import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import CourseCard from '../components/cards/CourseCard';
import Image from 'next/image'
import museumPic from '../public/photos/coverphoto.jpg'

const Index = ({ courses }) => {
  // const [courses, setCourses] = useState([]);

  
  // useEffect(() => {
  //   const fetchCourses = async () => {
  //     const { data } = await axios.get("/api/courses");
  //     setCourses(data);
  //   };
    
  //   fetchCourses();
  // }, []);
  const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  }
    return (
      <>
      <div>
      {/* <Image
      loader={myLoader}
      src={museumPic}
      alt="Picture of the author"
      width={500}
      height={500}
    /> */}
        {/* <Image 
          src={require('./my-image.jpg')}       
          width={500}
          height={500} 
          alt="Picture of the author" 
        /> */}
        
        {/* <img src={require('./my-image.jpg')} /> */}
        <h1 className="text-center">
          Artacademy
        </h1>
      </div>

        <div className="container-fluid">
            <div className="row">
                {courses.map((course) => (
                  <div key={course._id} className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                    <CourseCard course={course} />
                  </div>))}
            </div>
        </div>
      </>
    );
  };

  export async function getServerSideProps() {
    const { data } = await axios.get(`${process.env.API}/courses`);
    // console.log("DATA LENGTH =====> ", data.length);
    return {
      props: {
        courses: data,
      },
    };
  }
  
  export default Index;