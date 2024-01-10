import './App.css';
import Navbar from './components/navbar/Navbar';
import Dashboard from './components/dashboard/Dashboard';



function App() {
  return (
    <div className='h-full flex'>
      <Navbar/>
      <div className='flex-1  max-w-[1216px]'><Dashboard/></div>
      
    </div>
  );
}

export default App;
