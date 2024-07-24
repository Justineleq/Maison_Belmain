import { Card } from "react-bootstrap";

export default function ProductCards(data) {
    console.log(data, 'productCards');
    return(
        <>
         {data.length && (
        <Card style={{ width: '18rem' }}>
            {data.map((data, index) => (
                <div key={index}>
                    <Card.Img variant="top" src={data.image} />
                    <Card.Body>
                    <Card.Title>{data.flavour}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </div>
        ))}
      </Card>
    )}
   </> 
   )

}