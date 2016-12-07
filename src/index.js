import _ from 'lodash';
//Import React from node_modules which we installed via npm
import React, {Component} from 'react'
//Import React Dom from node_modules which we installed via npm
import ReactDom from 'react-dom'
//Import youtube api search
import YTSearch from 'youtube-api-search'
//Import search_bar.js SearchBar component.
import SearchBar from './components/search_bar'
//Import video_list.js VideoList component.
import VideoList from './components/video_list'
//Import video_detail.js VideoDetail component.
import VideoDetail from './components/video_detail'

const API_KEY = 'AIzaSyAaGKOeULMhwbpTZdJ5D-1wZIUNXT9t8is';



class App extends Component {
//state
  constructor(props) {
    super(props);

    this.state = {
       videos: [],
       selectedVideo: null
      };

      this.videoSearch('surfboards');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term }, (videos) => {
      this.setState({
         videos: videos,
         selectedVideo: videos[0]

       })
    });
  }


  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300)



    return (
    //SearchBar component from search_bar.js
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}/>
      </div>
    );
  }
}





//Take this components generated html and put it on the page(in the doms)
ReactDom.render(<App />,document.getElementById('container'));
