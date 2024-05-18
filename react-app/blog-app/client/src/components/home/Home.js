import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className='container'>
      <div className='row mx-5 mt-4'>
        <div className='card col-sm-6 p-3 text-light'>
          <h4 className='text-center text-light fw-semibold'>Purpose</h4>
          <p className='card-text'>
            To share information, ideas, opinions, experiences, and expertise with a target audience. The primary purposes of a blog include: Content Sharing, Communication, Marketing, Community Building, Personal Expression.
          </p>
        </div>
        <div className='card col-sm-6 p-3 bg-secondary-subtle'>
          <h4 className='text-center fw-semibold'>Features</h4>
          <p className='card-text'>
            Key features of a blog include: Content Management System, Post Categories and Tags, Search Functionality, Comments Section, Customization Options, Analytics, delete or block articles based on type of user.
          </p>
        </div>
      </div>
      <div className='row mx-5 mb-5'>
        <div className='card col-sm-6 p-3 bg-secondary-subtle'>
          <h4 className='text-center fw-semibold'>Benefits</h4>
          <p className='card-text'>
            The benefits of maintaining a blog include: Increased Visibility, Enhanced Credibility, Engagement and Interaction, Community Building, Marketing and Branding, Personal Development.
          </p>
        </div>
        <div className='card col-sm-6 p-3 text-light'>
          <h4 className='text-center fw-semibold'>Additional Info</h4>
          <p className='card-text'>
            Here we get when the article was posted and who is the author and what are the user comments, and we can also delete or update articles.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
