import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Button} from '@mui/material';

function GroupExample() {
  return (
    <CardGroup>
      <Card>
      <Card.Header>Header</Card.Header>
        <Card.Img variant="top" src="https://images.pexels.com/photos/3059654/pexels-photo-3059654.jpeg?auto=compress&cs=tinysrgb&w=600" />
       
        <Card.Body>
          <Card.Title>Reading Time</Card.Title>
          <Card.Text>
           You must be reading for 20 minutes a day.
           reading is good for your brain.reading expands your vocabulary.
          </Card.Text>
        </Card.Body>
        <Card.Body>
        <Button variant="outlined" outline>Go somewhere</Button><br></br>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
      </Card>
     
      <Card>
      <Card.Header>Header</Card.Header>
        <Card.Img variant="top" src="https://images.pexels.com/photos/929280/pexels-photo-929280.jpeg?auto=compress&cs=tinysrgb&w=600" />
        <Card.Body>
          <Card.Title>Artichetural design</Card.Title>
          <Card.Text>
           You must be able to design a house.I am trying to design a house.
           Good house design is important for market value.
          </Card.Text>
        </Card.Body>
        <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
      </Card>
      <Card>
      <Card.Header>Header</Card.Header>
        <Card.Img variant="top" src="https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg?auto=compress&cs=tinysrgb&w=600" />
        <Card.Body>
          <Card.Title>Shark Sea</Card.Title>
          <Card.Text>
            If you swim in the sea you  must be careful of Sharks.
            Sharks are dangerous.Sharks are big and scary.
          </Card.Text>
        </Card.Body>
        <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
      </Card>
    </CardGroup>
  );
}

export default GroupExample;