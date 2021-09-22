import { useState, useEffect } from "react";
import axios from "axios";
import InstructorRoute from "../../../components/routes/InstructorRoute";
import CourseCreateForm from "./forms/CourseCreateForm";
import Resizer from "react-image-file-resizer";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const CourseCreate = () => {
  // state
  const [values, setValues] = useState({
    name: "",
    description: "",
    price: "9.99",
    uploading: false,
    paid: true,
    category: "",
    subcategories: [],
    loading: false,
  });
  const [image, setImage] = useState({});
  const [preview, setPreview] = useState("");
  const [uploadButtonText, setUploadButtonText] = useState("Upload Image");
  const [categories, setCategories] = useState([]);
  const [showSubCategories, setShowSubCategories] = useState(false);
  const [subOptions, setSubOptions] = useState([]);


  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    await axios.get("/api/admin/categories")
    .then((c) => setCategories(c.data));
   }
  // router
  const router = useRouter();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    let file = e.target.files[0];
    setPreview(window.URL.createObjectURL(file));
    setUploadButtonText(file.name);
    setValues({ ...values, loading: true });
    // resize
    Resizer.imageFileResizer(file, 720, 500, "JPEG", 100, 0, async (uri) => {
      try {
        let { data } = await axios.post("/api/course/upload-image", {
          image: uri,
        });
        console.log("IMAGE UPLOADED", data);
        // set image in the state
        setImage(data);
        setValues({ ...values, loading: false });
      } catch (err) {
        console.log(err);
        setValues({ ...values, loading: false });
        toast("Image upload failed. Try later.");
      }
    });
  };

  const handleImageRemove = async () => {
    try {
      // console.log(values);
      setValues({ ...values, loading: true });
      const res = await axios.post("/api/course/remove-image", { image });
      setImage({});
      setPreview("");
      setUploadButtonText("Upload Image");
      setValues({ ...values, loading: false });
    } catch (err) {
      console.log(err);
      setValues({ ...values, loading: false });
      toast("Image upload failed. Try later.");
    }
  };


const handleCategoryChange = (e) => {
    e.preventDefault()
    console.log('CLICKED CATEGORY', e.target.value);
    setValues({ ...values, subs: [], category: e.target.value });
    axios.get(`/api/category/subcategories/${e.target.value}`)
      .then((res) => {
        setSubOptions(res.data);
      });
    setShowSubCategories(true);
};

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        // console.log(values);
        const {data} = await axios.post('/api/course', {
            ...values,
            image,
        });
        toast("Great! Now you can start adding lessons");
        router.push("/instructor");
    } catch (err) {
        toast(err.response.data);
    }

  };


  return (
    <InstructorRoute>
      <h1 className="jumbotron text-center square">Create Course</h1>
      <div className="pt-3 pb-3">
        <CourseCreateForm
          handleSubmit={handleSubmit}
          handleImage={handleImage}
          handleChange={handleChange}
          values={values}
          setValues={setValues}
          preview={preview}
          uploadButtonText={uploadButtonText}
          handleImageRemove={handleImageRemove}
          handleCategoryChange={handleCategoryChange}

          categories={categories}
          showSubCategories={showSubCategories}
          subOptions={subOptions}
        />
      </div>
      {/* <pre>{JSON.stringify(values, null, 4)}</pre> */}
      <hr />
      {/* <pre>{JSON.stringify(image, null, 4)}</pre> */}
    </InstructorRoute>
  );
};

export default CourseCreate;