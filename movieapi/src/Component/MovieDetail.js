import React, { Component } from 'react';
import '../App.css';

class MovieList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: 'loading...',
            quotes: '',
            results: []
        }
    };

    componentDidMount() {
        setInterval(() => {
            const _url = "https://api.themoviedb.org/3/movie/now_playing?api_key=e68c1a67b9b6a0fff17d9ed980ca72cf"
            fetch(_url).then(resp => resp.json())
                .then(nowPlayingList => {
                    console.log(nowPlayingList)
                    this.setState({
                        name:nowPlayingList.results[0].title,
                        date:nowPlayingList.results[0].release_date,
                        overview: nowPlayingList.results[0].overview,
                      
                    })
                })
       })
   };
   render() {
       return (
           <div>
               <ul>
                   <li>Title:{this.state.name}</li>
                   <li>Release Date:{this.state.date}</li>
                   <li>Overview:{this.state.overview}</li>
                   </ul>
           </div>
       )
   }
}

export default MovieList