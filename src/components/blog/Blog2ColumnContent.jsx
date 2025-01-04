import React from 'react';
import blogData from '@/assets/jsonData/blog/BlogData.json'
import Pagination from '../pagination/Pagination';
import SingleBlog2Column from './SingleBlog2Column';

const Blog2ColumnContent = () => {
    return (
        <>
            <div className="blog-area blog-grid default-padding">
                <div className="container">
                    <div className="blog-item-box">
                        <div className="row">
                            {blogData.slice(0, 2).map(blog =>
                                <div className="col-xl-6" key={blog.id}>
                                    <SingleBlog2Column blog={blog} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blog2ColumnContent;