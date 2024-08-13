import PropTypes from 'prop-types';
const Blog = ({blog}) => {
    let {title,cover,reading_time,author_img,posted_date,hashtag,author} = blog;
    return (
        <div>
            <img src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between'>
                <div className='flex gap-5'>
                     <img className='w-14 ' src={author_img} alt="" />
                     <div>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                     </div>
                </div>
                <div>
                    <span>{reading_time} mins read</span>
                </div>
            </div>
            <h2 className="text-2xl">{title}</h2>
            <p>
                {
                    hashtag.map((hash,idx) => <span key={idx}><a href="">{hash}</a></span>)
                }
            </p>
        </div>
    );
};

Blog.PropTypes ={
    blog: PropTypes.object.isRequired
}

export default Blog;