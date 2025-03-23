import { useState } from 'react';
import * as React from 'react';
import useStore from '../../store/store';
import './MyForm.css'

interface Product {
  id: string;
  name: string;
  image_path: string;
  desc: string;
  wood_type: string;
  category: string;
  price: string;
  finish: string;
  dimensions: {
    depth: number;
    width: number;
    height: number;
  };
  weight: number;
}
export interface IMyFormProps {
}

export function MyForm (props: IMyFormProps) {
  const [name, setName] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [desc, setDesc] = useState('');
  const [wood_type, setWoodType] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [finish, setFinish] = useState('');
  const [description, setDescription] = useState('');
  const [depth, setDepth] = useState(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0)

	const {addProductToList} = useStore();


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!image) {
      alert('Пожалуйста, выберите изображение');
      return;
    }
    const newProduct: Product = {
			id: String(Date.now()), //способ генерации уникального ID
			name,
			image_path: URL.createObjectURL(image), //временный URL для отображения			
			desc,
      wood_type,
      category,
      price,
      finish,
      dimensions: {
        depth,
        width,
        height,
      },
      weight,
		};

    addProductToList(newProduct);//добавление в store

    alert('Элемент добавлен в список. Перейдите на главную и выберите нужную категорию для отображения элемента')
		
		//Очистка ввода 
		setName('');
    setImage(null);
    setDesc('');
    setWoodType('');
    setCategory('');
    setPrice('');
    setFinish('');
    setDepth(0);
    setWidth(0);
    setHeight(0);
    setWeight(0);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setImage(event.target.files[0]);
    }
  };
  

	return (
		<>
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} required onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Description:
        <input type="text" value={desc} required onChange={(e) => setDesc(e.target.value)} />
      </label>
      <label>
        Type of wood:
        <input type="text" value={wood_type} required onChange={(e) => setWoodType(e.target.value)} />
      </label>
      <label>
        Category:
        <input type="text" value={category} required onChange={(e) => setCategory(e.target.value)} />
      </label>
      <label>
        Price:
        <input type="text" value={price} required onChange={(e) => setPrice(e.target.value)} />
      </label>
      <label>
        Finish:
        <input type="text" value={finish} required onChange={(e) => setFinish(e.target.value)} />
      </label>
      <label>
        Depth:
        <input type="number" value={depth} required onChange={(e) => setDepth(Number(e.target.value))} />
      </label>
      <label>
        Width:
        <input type="number" value={width} required onChange={(e) => setWidth(Number(e.target.value))} />
      </label>
      <label>
        Height:
        <input type="number" value={height} required onChange={(e) => setHeight(Number(e.target.value))} />
      </label>
      <label>
        Weight:
        <input type="number" value={weight} required onChange={(e) => setWeight(Number(e.target.value))} />
      </label>
			<label>
        Image:
        <input type="file" accept="image/*" required onChange={handleImageChange} />
      </label>
			<div className="image-preview">
          {image && <img src={URL.createObjectURL(image)} alt="Выбранное изображение" />}
      </div>
      <button type="submit">Добавить</button>
    </form>

	</>
	);

}

