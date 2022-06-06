import { createContext } from 'react';

const PostContext = createContext([{
    id: null,
    content: null,
    created:null,
}]);

export default PostContext;