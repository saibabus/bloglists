// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogItemDetails extends Component {
  state = {isloading1: true, blogDetails1: {}}

  componentDidMount() {
    this.getfetchingdata()
  }

  getfetchingdata = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const eachItem = await response.json()
    console.log(eachItem)
    const formatedData1 = {
      id: eachItem.id,
      title: eachItem.title,
      author: eachItem.author,
      content: eachItem.content,
      topic: eachItem.topic,
      avatarUrl: eachItem.avatar_url,
      imageUrl: eachItem.image_url,
    }
    this.setState({blogDetails1: formatedData1, isloading1: false})
  }

  render() {
    const {blogDetails1, isloading1} = this.state
    const {title, imageUrl, content, avatarUrl, author} = blogDetails1

    console.log(blogDetails1)
    return (
      <div className="bloglistmain-con">
        {isloading1 ? (
          <div testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <div className="bloglist-con1">
            <h1 className="title1">{title}</h1>
            <div className="avt-author-con1">
              <img className="avatarUrl1" alt="avatarUrl" src={avatarUrl} />
              <p className="author1">{author}</p>
            </div>
            <img src={imageUrl} alt={title} className="imageUrl1" />
            <p className="content1">{content}</p>
          </div>
        )}
      </div>
    )
  }
}
export default BlogItemDetails
