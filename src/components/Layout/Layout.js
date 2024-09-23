import { Suspense } from 'react';
import Header from "../Header/Header";
import Converter from "../Converter/Converter";
import ConverterTable from '../ConverterTable/ConverterTable';
import Loader from '../Loader/Loader';
import { USD, EUR } from '../../utils/constants';
import './Layout.css';

function Layout() {

  return (
    <Suspense fallback={<Loader />}>
      <div className='container'>
        <div className='converter-wrapper'>
          <h1> Currency Converter</h1>
          <Header />
          <Converter />
        </div>
        <div className='converterTableContainer'>
          <ConverterTable currency={USD} />
          <ConverterTable currency={EUR} />
        </div>
      </div>
    </Suspense>
  )
}

export default Layout;