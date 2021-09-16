import TopNav from "../components/TopNav";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import "../public/css/styles.css";
import {ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "../context";
import {useRouter} from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const {asPath,route,pathname } = router

  if(asPath === "/"){
    return (
       <Provider>
         <Component {...pageProps} />
       </Provider>
    )
 } else if (asPath === "/admin" || asPath === "/admin/users" || asPath === "/admin/applicants" || asPath === "/admin/cover" || asPath === "/courses" || asPath === "/about" || asPath === "/admin/category" ) {
    return(
      <Provider>
      <ToastContainer position="top-center" />
      <TopNav />
        <Component {...pageProps} />
      {/* <Footer /> */}
     </Provider>
    )
 } else {
   return (
    <Provider>
    <ToastContainer position="top-center" />
    <TopNav />
      <Component {...pageProps} />
    <Footer />
   </Provider>
   )
 }

  // return (
  //   <Provider>
  //     <ToastContainer position="top-center" />
  //     {/* <TopNav /> */}
  //       <Component {...pageProps} />
  //     {/* <Footer /> */}
  //   </Provider>
  // );
}

export default MyApp;