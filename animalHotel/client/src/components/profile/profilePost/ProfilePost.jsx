/* eslint-disable react/prop-types */
import Card from 'react-bootstrap/Card';


import { formatDate } from '../../../lib/formatData';


export default function ProfilePost({
  title,
  description,
  imageUrl,
  _createdOn,
  
}){


    return (

        <Card  style={{paddingLeft:"10px"}}>
          <Card.Img variant="top" src={imageUrl} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">{formatDate(_createdOn)}</small>
          </Card.Footer>
        </Card>
   

    )
}