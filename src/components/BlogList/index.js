// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import BlogItem from '../BlogItem'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogList extends Component {
  state = {isloading: true, blogDetails: []}

  componentDidMount() {
    this.getfetchingdata()
  }

  getfetchingdata = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const datais = await response.json()
    console.log(datais)
    const formatedData = datais.map(eachItem => ({
      id: eachItem.id,
      title: eachItem.title,
      author: eachItem.author,
      topic: eachItem.topic,
      avatarUrl: eachItem.avatar_url,
      imageUrl: eachItem.image_url,
    }))
    this.setState({blogDetails: formatedData, isloading: false})
  }

  render() {
    const {blogDetails, isloading} = this.state
    console.log(blogDetails)
    return (
      <div className="bloglistmain-con">
        {isloading ? (
          <div testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <ul className="bloglist-con">
            {blogDetails.map(eachblocitem => (
              <BlogItem eachblocitem={eachblocitem} key={eachblocitem.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default BlogList
