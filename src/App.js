import './App.css';
import Heading from './components/Heading';
import Testimonial from './components/Testimonial';

function App() {
  return (
    <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200">
      <Heading></Heading>
      <Testimonial></Testimonial>
    </div>
  );
}

export default App;
