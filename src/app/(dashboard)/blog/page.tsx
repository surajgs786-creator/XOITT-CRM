//import node modules libraries
import { Fragment } from 'react';
import { Metadata } from 'next';

//import custom components
import BlogList from 'src/components/blog/BlogList';
import BlogListHeader from 'src/components/blog/BlogListHeader';

export const metadata: Metadata = {
  title: 'Post List | Dasher - Responsive Bootstrap 5 Admin Dashboard',
  description: 'Dasher - Responsive Bootstrap 5 Admin Dashboard',
};

const Blog = () => {
  return (
    <Fragment>
      <BlogListHeader />
      <BlogList />
    </Fragment>
  );
};

export default Blog;
