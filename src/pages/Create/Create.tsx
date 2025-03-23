import * as React from 'react';
import './Create.css'
import { MyForm } from '../../Components/MyForm/MyForm';

interface ICreateProps {
}

const Create: React.FC = () => {
  return(
    <div>
      <MyForm/>
    </div>
  ) ;
};

export default Create;
