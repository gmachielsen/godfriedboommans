import {Card, Badge} from 'antd';
import Link from 'next/link';
import { currencyFormatter } from '../../utils/helpers';
// import {coverimage} from "../../public/coverphoto.jpg"; 


const Cover = () => {

    return (
        <img src={require('../../public/coverphoto.jpg')}  style={{ filter: 'grayscale(80%)', objectFit: 'cover', minWidth: '100%', maxHeight: '100vh', display: 'block'}} />
    );
};

export default Cover;