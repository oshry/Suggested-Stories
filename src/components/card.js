import React, {Component} from 'react';
import Slider from "react-slick";
class Card extends Component {

  Cardbaker(props){

    let cards = [], cardNumber = 1
    console.log('props')
    console.log(props)
    for(let app of props.apps){
      cards.push(
            <div>
                <div className="image-container float-l">
                    <img className="image-w" src={app.cover_thumb_url} alt="First slide"/>
                </div>
                <div className="content-container float-l">
                    <div><h3>{app.story_title}</h3></div>
                    <div>{app.story_sub_title}</div>
                    <div className="read-story" ><a href={app.link}>Read Story</a></div>
                </div>


            </div>
         )
      cardNumber++
    }
    var settings = {};
    // if(props.device == 'DESKTOP'){
        settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1
        };
    // }else{
    //     settings = {
    //         dots: true,
    //         infinite: true,
    //         speed: 500,
    //         slidesToShow: 1,
    //         slidesToScroll: 1
    //     };
    // }

    return (<Slider {...settings}>
        { cards }
    </Slider>)

  }


  render() {

    return (

      <this.Cardbaker apps={this.props.apps} totalapps={this.props.totalapps}/>
    );
  }

}


export default Card;
