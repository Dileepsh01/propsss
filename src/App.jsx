import './App.css';
import Card from './Components/Card';
function App() {
    return (
    <>
       <h1 className='text-4xl font-bold text-white bg-green-800 p-6 rounded-3xl mb-4'>
        Tailwind Test
       </h1>
       <Card  name="dilip" btntext="clickme"/>
       <Card name="sanju" />
       <Card name="lalbabu" btntext="servicce"/>

       


    </>
  );
}

export default App;
