import React from 'react'
import { Carousel } from 'react-bootstrap'

const Caroussel = (props) => {
  console.log(props.urlArray)
  console.log(props.id)
  return (
    <Carousel className="carousel">
      {props.urlArray.map((elem) => {

        return (

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={`http://localhost:5000/images/${elem}`}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>)
      })
      }
    </Carousel>
  )
}

export default Caroussel
