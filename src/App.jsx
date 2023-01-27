import List from './Components/List';
import Card from './Components/Card';

const todoList = [
    {
        name: 'Task1',
        category: 'Design',
        reward: '1 ETH',
    },
    {
        name: 'Task2',
        category: 'Frontend',
        reward: '1 ETH',
    },
    {
        name: 'Task3',
        category: 'Backend',
        reward: '1 ETH',
    },
];
const progressList = [
    {
        name: 'Task1',
        category: 'Design',
        reward: '1 ETH',
    },
    
];
const doneList = [
    {
        name: 'Task1',
        category: 'Design',
        reward: '1 ETH',
    },
    {
        name: 'Task2',
        category: 'Frontend',
        reward: '1 ETH',
    },
    
];

function App() {
    return (
        <div className='h-screen flex gap-4 bg-[#121217] p-8 text-white'>
            <List name='To Do'>
                {todoList.map((item, index) => {
                    return <Card {...item} key={index} />;
                })}
            </List>
            <List name='Progress'>
                {progressList.map((item, index) => {
                    return <Card {...item} key={index} />;
                })}
            </List>
            <List name='Done'>
                {doneList.map((item, index) => {
                    return <Card {...item} key={index} />;
                })}
            </List>
        </div>
    );
}

export default App;
