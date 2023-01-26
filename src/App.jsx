import List from './Components/List';
import Card from './Components/Card';

function App() {
    return (
        <div className='text-indigo-600'>
            <List />
            <Card name='Task1' category='Design' reward='1 ETH' />
        </div>
    );
}

export default App;
