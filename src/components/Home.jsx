import React, { Component } from 'react'
import axios from 'axios'
import Card from './Card'
import './../css/Home.css'


export default class Home extends Component {
    constructor() {
        super()
        this.state = {
            posts: [],
            loading:false

        }


    }
    componentDidMount() {
        axios.get('https://api.tvmaze.com/search/shows?q=avengers')
            .then(res => {
                console.log(res)
                console.log('text',res.data[0].show.image.medium)
                this.setState({
                    posts: res.data,
                    loading:true
                })
                console.log(this.state.posts);
            })
            .catch(e => console.log(e))
    }
    render() {
        

        return (
            <section>
                <h1 className='text-center mb-5'>Three Arrow Technologies</h1>
                <main className=''>
                    {this.state.loading?this.state.posts.map((num)=>
                    
                   <Card key={num.show.id} id={num.show.id} image={num.show.image?num.show.image.medium:'none'} name={num.show.name} language={num.show.language} genres={num.show.genres} runtime={num.show.runtime} premiered={num.show.premiered} rating={num.show.rating.average}  country_name={num.show.network?num.show.network.country.name:'none'}/> 
                    ):<h1 className='text-center'>Loading...</h1>}
                    
                    {/* {this.state.posts.map((num)=>
                   <Card key={num.show.id} image={num.show.image.medium} name={num.show.name} language={num.show.language} genres={num.show.genres} runtime={num.show.runtime} premiered={num.show.premiered} rating={num.show.rating.average}  country_name={num.show.network}/> 
                    )} */}
                </main>
            </section>
        )
    }
}
