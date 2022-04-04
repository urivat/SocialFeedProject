import React, { useState } from 'react';



const AddPostForm = (props) => {
    const[name, setName] = useState('');
    const[post, setPost] = useState('');
}


function onSubmit(event) {
    event.preventDefault();
    let newEntry = {
        name: name,
        post: post,
    };
}


