import Head from 'next/head'
import Image from 'next/image'
import { useReducer } from 'react/cjs/react.production.min'

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_DIGIT":
      return [...state, action.payload];

    case "CLEAR":
      return [];
    
    case "BACKSPACE":
      return state.slice(0, -1);

    case "ADD_OPERATOR":
      return [...state, action.payload];
    
    case "EQUALS": 
      return [...state, action.payload];

    default:
      return state;
  }
};


export default function Home() {

  const [state, dispatch] = useReducer(reducer, []);

  const addNumber = (value) => {
    dispatch({ type: "ADD_DIGIT", payload: value });
  };

  return (
    <div className='bg-gradient-to-r from-[#1A1A40] to-[#270082] min-h-screen'>
      <Head>
        <title>Calculator</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='flex justify-center'>

        <div className='rounded-xl mt-20 shadow-lg p-4 bg-[#7A0BC0]'>
          <div className='bg-indigo-900 rounded p-4'>
            {/* <p className='text-white text-right text-lg'>85 * </p> */}
            <h1 className='text-white text-4xl text-right'>{state}</h1>
          </div>

          <div className='grid grid-cols-4 gap-4 mt-4'>


            <button className='btn col-span-2'>AC</button>
            <button className='btn col-span-1'>C</button>
            <button className='btn'>÷</button>

            <button className='btn' onClick={addNumber(1)}>1</button>
            <button className='btn' onClick={addNumber(2)}>2</button>
            <button className='btn' onClick={addNumber(3)}>3</button>
            <button className='btn'>x</button>

            <button className='btn' onClick={addNumber(4)}>4</button>
            <button className='btn' onClick={addNumber(5)}>5</button>
            <button className='btn' onClick={addNumber(6)}>6</button>
            <button className='btn'>-</button>

            <button className='btn' onClick={addNumber(7)}>7</button>
            <button className='btn' onClick={addNumber(8)}>8</button>
            <button className='btn' onClick={addNumber(9)}>9</button>
            <button className='btn'>+</button>

            <button className='btn col-span-2' onClick={addNumber(0)}>0</button>
            <button className='btn' onClick={addNumber(0)}>.</button>
            <button className='btn'>=</button>


          </div>

        </div>

      </div>

    </div>
  )
}
