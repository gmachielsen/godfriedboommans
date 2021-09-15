import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import CourseCard from '../components/cards/CourseCard';
import Cover from '../components/cards/Cover';
import TopNav from "../components/TopNav";
import Footer from "../components/Footer";
import Image from 'next/image'
import { DownSquareOutlined } from "@ant-design/icons";
import { Menu, Checkbox } from "antd";

// import museumpic from '../public/coverphoto.jpg'
const { SubMenu, ItemGroup } = Menu;

const Courses = ({ courses }) => {
//   const [courses, setCourses] = useState([]);
const [categories, setCategories] = useState([]);

  
//   useEffect(() => {
//     const fetchCourses = async () => {
//       const { data } = await axios.get("/api/courses");
//       setCourses(data);
//     };
    
//     fetchCourses();
//   }, []);

const showCategories = () =>
    categories.map((c) => (
      <div key={c._id}>
        <Checkbox
          onChange={handleCheck}
          className="pb-2 pl-4 pr-4"
          value={c._id}
          name="category"
          checked={categoryIds.includes(c._id)}
        >
          {c.name}
        </Checkbox>
        <br />
      </div>
    ));
    return (
      <>
      <div style={{position: 'absolute', width: '100%'}}>

        <div className="container-fluid" style={{ padding: "0"}}>
            <div className="row" style={{ padding: "15px" }}>
                <div className="col-sm-12 col-md-12 col-lg-4 col-xl-3 pt-2">
                  <Menu defaultOpenKeys={["1", "2"]} mode="inline">
                  <SubMenu
                      key="3"
                      title={
                        <span className="h6">
                          <DownSquareOutlined /> Categories
                        </span>
                      }
                  >
                  <div style={{ maringTop: "-10px" }}>{showCategories()}</div>
            </SubMenu>

                  </Menu>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-8 col-xl-9 pt-2">
                    {courses.map((course) => (
                    <div key={course._id} className="col-sm-12 col-md-12 col-lg-12 col-xl-4">
                      <CourseCard course={course}/>
                    </div>))}
                </div>
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