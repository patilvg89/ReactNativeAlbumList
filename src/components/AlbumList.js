// import libraries for making component
import React, {Component} from 'react'
import {ScrollView} from 'react-native'
import axios from 'axios'
import AlbumDetail from './AlbumDetail.js'

export default class AlbumList extends Component {

    state = {albums: []}

    render() {
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        )
    }

    componentDidMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => {
                console.log(response)
                // alert(response)
                this.setState({albums: response.data})
            });
    }


    renderAlbums() {
        return this.state.albums.map(album => <AlbumDetail key={album.title} data={album}/>)
    }
}
