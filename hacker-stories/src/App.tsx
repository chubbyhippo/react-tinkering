import * as React from "react";
import {useState} from "react";

type Story = {
    objectID: number;
    url: string;
    title: string;
    author: string;
    num_comments: number;
    points: number;
};

type Stories = Story[]

const App = () => {
    const stories = [
        {
            title: 'React',
            url: 'https://reactjs.org/',
            author: 'Jordan Walke',
            num_comments: 3,
            points: 4,
            objectID: 0,
        },
        {
            title: 'Redux',
            url: 'https://redux.js.org/',
            author: 'Dan Abramov, Andrew Clark',
            num_comments: 2,
            points: 5,
            objectID: 1,
        },
    ];

    return <div>
        <h1>My Hacker Stories</h1>

        <Search/>

        <hr/>

        <List list={stories}/>

        <hr/>

    </div>;
};

const Search = () => {
    console.log('Search renders')
    const [searchTerm, setSearchTerm] = useState('');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event);
        console.log(event.target.value);
        setSearchTerm(event.target.value)
    };

    return <div>
        <label htmlFor="search">Search: </label>
        <input type="text" id="search" onChange={handleChange}/>

        <p>
            Searching for <strong>{searchTerm}</strong>
        </p>
    </div>;
};

type ListProps = {
    list: Stories;
};

const List = ({list}: ListProps) => {
    console.log('List renders')
    return <ul>
        {list.map((item: any) => <Item key={item.objectID} item={item}/>)}
    </ul>;
};

type ItemProps = {
    item: Story
};

const Item = ({item}: ItemProps) => {
    console.log('Item renders')
    return (

        <li key={item.objectID}>
            <span>
                <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
        </li>
    );
};

export default App;