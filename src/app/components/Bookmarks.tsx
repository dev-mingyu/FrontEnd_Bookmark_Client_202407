import { BookmarkType } from '@/types';
import React from 'react';

type Props = {
    bookmarks: BookmarkType[]
}

const Bookmarks: React.FC<Props> = ({bookmarks}) => {
    return (
        <div>
            <h1>Welcome to Bookmarker</h1>
            {
            bookmarks.map(bookmark => {
                return (
                    <p key={bookmark.id}>{bookmark.title}</p>
                )
            })
            }            
        </div>
    );
};

export default Bookmarks;