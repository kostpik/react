import React from 'react';
import AppHeaader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
// eslint-disable-next-line no-unused-vars
// import './app.css';
// import './index.css';
import styled from 'styled-components';

const AppBlock = styled.div`
        margin: 20px 0 0 0;
        padding: 0;
`
const App = () => {
    const data = [
        {label: "Going to learn react", important: false, id: 1},
        {label: "Going to englisch", important: false, id: 2},
        {label: "Going to learn spanish", important: true, id: 3},
        {label: "Going to learn spanish", important: true, id: 4}
    ];

    return (
    <AppBlock>
        <AppHeaader/>
        <div className="search-panel d-flex">
            <SearchPanel/>
            <PostStatusFilter/>
        </div>
        <PostList posts={data}/>
        <PostAddForm/>
    </AppBlock>
    )
}

export default App;