// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {eachblocitem} = props
  const {id, topic, title, imageUrl, avatarUrl, author} = eachblocitem
  return (
    <Link to={`/blogs/${id}`}>
      <li className="eachblogItem">
        <img src={imageUrl} alt={`imageurl${id}`} className="imageUrl" />
        <div className="textcont-con">
          <p className="topic">{topic}</p>
          <h1 className="title">{title}</h1>
          <div className="img-author-con">
            <img src={avatarUrl} alt={`avatar${id}`} className="avatarUrl" />
            <p className="author">{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}
export default BlogItem
