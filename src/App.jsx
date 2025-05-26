import Ani from './LineAnimation';
import Home from './home/Home';
import './index.css';

const App = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <Home />
      <Ani />
    </div>
  )
}

export default App;

