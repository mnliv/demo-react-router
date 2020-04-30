import React from 'react';

import { Container, Row, Col, Card, CardImg, CardText, CardBody,
    CardTitle, Button} from 'reactstrap';
import { CartContext } from '../contexts/Cart'

class Products extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [{
                "id": "fb0acfab-0f23-4fcf-b152-3384782b7cf8",
                "name": "Potatoes - Parissienne",
                "description": "nulla tellus in sagittis dui vel nisl duis ac nibh",
                "imageURL": "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
              }, {
                "id": "dff2d5cc-79a8-4ada-8878-c9c056b61232",
                "name": "Otomegusa Dashi Konbu",
                "description": "augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent",
                "imageURL": "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
              }, {
                "id": "2ec30388-4f81-4140-96d2-9b72ded60d05",
                "name": "Squash - Butternut",
                "description": "nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh",
                "imageURL": "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
              }, {
                "id": "7dce509c-0bb7-4167-8893-3540dc4228c8",
                "name": "Garbage Bags - Black",
                "description": "in quis justo maecenas rhoncus aliquam lacus morbi quis tortor",
                "imageURL": "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
              }, {
                "id": "28b31249-1d2f-410c-aa02-564f92d9b725",
                "name": "Kiwi Gold Zespri",
                "description": "erat quisque erat eros viverra eget congue eget semper rutrum",
                "imageURL": "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
              }, {
                "id": "0d3ee3c8-2153-4067-933a-8d3dbc8e9dab",
                "name": "Tandoori Curry Paste",
                "description": "vehicula condimentum curabitur in libero ut massa volutpat convallis morbi",
                "imageURL": "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
              }, {
                "id": "061c062f-5cfa-42e5-908b-df2f93f0f1e9",
                "name": "Cheese - Valancey",
                "description": "luctus nec molestie sed justo pellentesque viverra pede ac diam",
                "imageURL": "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
              }, {
                "id": "decb83c0-2104-449a-9c60-ea0f2e7dd0af",
                "name": "Lime Cordial - Roses",
                "description": "varius integer ac leo pellentesque ultrices mattis odio donec vitae",
                "imageURL": "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
              }, {
                "id": "55048d10-a584-41f7-b68b-bfab46d10b7c",
                "name": "Wine - Prosecco Valdobienne",
                "description": "ac nibh fusce lacus purus aliquet at feugiat non pretium",
                "imageURL": "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
              }, {
                "id": "a70eda90-93bb-4087-8a4b-31a888500a75",
                "name": "Ice Cream - Vanilla",
                "description": "sit amet erat nulla tempus vivamus in felis eu sapien",
                "imageURL": "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
              }, {
                "id": "c722ec9d-5a8d-4370-a1be-b41e77421134",
                "name": "Extract - Vanilla,artificial",
                "description": "leo odio porttitor id consequat in consequat ut nulla sed",
                "imageURL": "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
              }, {
                "id": "7e0c7499-c763-41e5-97e6-7d3d27fbaecf",
                "name": "Jam - Apricot",
                "description": "dui maecenas tristique est et tempus semper est quam pharetra",
                "imageURL": "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
              }, {
                "id": "d23623e3-e474-4a80-9329-fb02a1575481",
                "name": "Horseradish - Prepared",
                "description": "nulla nunc purus phasellus in felis donec semper sapien a",
                "imageURL": "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
              }, {
                "id": "bb92c99d-eb03-4477-867c-49acd462d31d",
                "name": "Orange - Tangerine",
                "description": "vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis",
                "imageURL": "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
              }, {
                "id": "18c31acf-54d3-45ae-ae25-e824f61db033",
                "name": "Wine - Jaboulet Cotes Du Rhone",
                "description": "sem duis aliquam convallis nunc proin at turpis a pede",
                "imageURL": "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
              }, {
                "id": "98e5e2df-1ce4-46b2-98e3-4d8cd4a80937",
                "name": "Fennel - Seeds",
                "description": "turpis enim blandit mi in porttitor pede justo eu massa",
                "imageURL": "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
              }, {
                "id": "d9782752-c205-4f8e-939e-93a37534ecee",
                "name": "Turnip - Mini",
                "description": "integer aliquet massa id lobortis convallis tortor risus dapibus augue",
                "imageURL": "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
              }, {
                "id": "3da35e74-1f5a-492d-bec1-7ff828d45c62",
                "name": "Fruit Salad Deluxe",
                "description": "habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam",
                "imageURL": "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
              }, {
                "id": "8481514f-439a-414c-b787-860d6b036d6e",
                "name": "Smirnoff Green Apple Twist",
                "description": "vehicula consequat morbi a ipsum integer a nibh in quis",
                "imageURL": "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
              }, {
                "id": "879c6671-d073-43a9-95a0-1e30ab46098d",
                "name": "Cheese - Gouda Smoked",
                "description": "consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum",
                "imageURL": "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
              }]
        }
    }
    render() {
        const { products } = this.state;
        
        return(
            <Container>
              <h2>Products</h2>
              <Row>
                {
                  products.map((product) => {
                    return(
                      <Col sm="6" lg="4">
                        <Card>
                          <CardImg top width="100%" src={product.imageURL} alt="Card image cap" />
                          <CardBody>
                            <CardTitle>{ product.name }</CardTitle>
                            <CardText> {product.description} </CardText>
                            <CartContext.Consumer>
                              {
                                ( {addProductToCart }) => <Button onClick={() => addProductToCart(product)}>Add to cart</Button>
                              }
                            </CartContext.Consumer>         
                          </CardBody>
                        </Card>
                      </Col>         
                    )
                  })
                }
              </Row>
            </Container>
        )
    }
}

export default Products;