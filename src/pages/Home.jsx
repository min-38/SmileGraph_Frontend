import {useState} from 'react';
import axios from 'axios';
import '../main.css';

const Home = () => {
    const [happiness, setHappiness] = useState(0);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const writeDiary = (event) => {
        event.preventDefault();
        
        const formData = new FormData();

        formData.append('happiness', happiness);
        formData.append('title', title);
        formData.append('content', content);
        formData.append('time', Date.now());

        axios({
            method:'POST',
            url:'/api/diary',
            data: formData,
        })
        .then((result)=>{console.log('요청성공')
            console.log(result)
        })
        .catch((error)=>{console.log('요청실패')
            console.log(error)  
        })
    };

    return (
        <>
            <form id="myForm" method="POST" action="http://192.168.55.120:3002">
                <div>
                    <div>
                        <h2 className="text-3xl font-bold underline">오늘의 행복도</h2>
                    </div>
                    <div>
                        <label htmlFor="happiness" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">행복도</label>
                        <input
                            type="number"
                            id="happiness"
                            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            max={100}
                            min={0}
                            onChange={setHappiness}
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="d_title">일기</label>
                    <input type="text" name="" id="d_title" max={100} min={0} onChange={setTitle} />
                    <textarea name="" id="" cols="30" rows="10" onChange={setContent}></textarea>
                </div>
                <button onClick={writeDiary}>eee</button>
            </form>
        </>
    );
}

export default Home;