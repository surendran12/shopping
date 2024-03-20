import React, {useState} from 'react'
import { Row, Col, Form, FormLabel, Pagination  } from 'react-bootstrap';
import item1 from  './../images/item1.png';
import item2 from  './../images/item2.png';
import item3 from  './../images/item3.png';
import item4 from  './../images/item4.png';
import item5 from  './../images/item5.png';
import item6 from  './../images/item6.png';
import like from  './../images/like.png';

function Home() {
    const Rating = ({ likeView }) => {
        const [like, setLike] = useState(0);
        const handleOnClick = (index) => {
            setLike(index + 1);
        };

        return (
          <div className="rating">
            {[...Array(likeView)].map((index) => (
              <span
                key={index}
                className={`star ${index < like ? 'active' : ''}`}
                onClick={() => handleOnClick(index)}
              >
                &#9733;
              </span>
            ))}
          </div>
        );
      };

  return (

    <div className='cartLayout'>
        <div className='section'>
            <Row>
                <div className='mobilelist'>
                <Col sm={12} className='headerinfo'>
                    <h3>Lorem ipsum</h3>
                    <p>Lorem ipsum dolor sit amet <span>Read More</span></p>
                </Col>
                <Col sm={12} className="searchList">
                        <Form>
                        <FormLabel>Select Category</FormLabel>
                        <Form.Select aria-label="Default select example">
                            <option value="1">Select Category</option>
                            <option value="1">Nike Air max</option>
                            <option value="2">laptops</option>
                            <option value="3">bags</option>
                            <option value="4">furniture</option>
                            <option value="5">groceries</option>
                            <option value="6">home-decoration</option>
                            <option value="7">skincare</option>
                            <option value="8">men-shoes</option>
                            <option value="9">Nike Air max</option>
                            <option value="10">laptops</option>
                            <option value="11">bags</option>
                            <option value="12">furniture</option>
                            <option value="13">groceries</option>
                            <option value="14">home-decoration</option>
                            <option value="15">skincare</option>
                            <option value="16">men-shoes</option>
                        </Form.Select>
                        </Form>
                </Col>
                </div>
            </Row>

            <Row>
                    <Col sm="3" className='gridview'>
                        <div className='productlist'>
                                <div className='productimg'>
                                    <img src={item1} alt="item1" />
                                    <div className='productlike'>
                                    <img src={like} alt="like" />
                                    </div>
                                </div>
                                <div className='info'>
                                    <h4>Nike Air Max</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                    <h5>$120.23</h5>
                                    <div className="star"><Rating likeView={5} /></div>
                                </div>
                            </div>
                    </Col>
                    <Col sm="3" className='gridview'>
                        <div className='productlist'>
                                <div className='productimg'>
                                    <img src={item2} alt="item2" />
                                    <div className='productlike'>
                                    <img src={like} alt="like" />
                                    </div>
                                </div>
                                <div className='info'>
                                    <h4>Nike Air Max</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                    <h5>$120.23</h5>
                                    <div className="star"><Rating likeView={5} /></div>
                                </div>
                            </div>
                    </Col>
                    <Col sm="3" className='gridview'>
                        <div className='productlist'>
                                <div className='productimg'>
                                    <img src={item3} alt="item3" />
                                    <div className='productlike'>
                                    <img src={like} alt="like" />
                                    </div>
                                </div>
                                <div className='info'>
                                    <h4>Nike Air Max</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                    <h5>$120.23</h5>
                                    <div className="star"><Rating likeView={5} /></div>
                                </div>
                            </div>
                    </Col>
                    <Col sm="3" className='gridview'>
                        <div className='productlist'>
                                <div className='productimg'>
                                    <img src={item4} alt="item4" />
                                    <div className='productlike'>
                                    <img src={like} alt="Logo" />
                                    </div>
                                </div>
                                <div className='info'>
                                    <h4>Nike Air Max</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                    <h5>$120.23</h5>
                                    <div className="star"><Rating likeView={5} /></div>
                                </div>
                            </div>
                    </Col>
                    <Col sm="3" className='gridview'>
                        <div className='productlist'>
                                <div className='productimg'>
                                    <img src={item5} alt="item5" />
                                    <div className='productlike'>
                                    <img src={like} alt="Logo" />
                                    </div>
                                </div>
                                <div className='info'>
                                    <h4>Nike Air Max</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                    <h5>$120.23</h5>
                                    <div className="star"><Rating likeView={5} /></div>
                                </div>
                            </div>
                    </Col>
                    <Col sm="3" className='gridview'>
                        <div className='productlist'>
                                <div className='productimg'>
                                    <img src={item6} alt="item6" />
                                    <div className='productlike'>
                                    <img src={like} alt="like" />
                                    </div>
                                </div>
                                <div className='info'>
                                    <h4>Nike Air Max</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                    <h5>$120.23</h5>
                                    <div className="star"><Rating likeView={5} /></div>
                                </div>
                            </div>
                    </Col>
                    <Col sm="3" className='gridview'>
                        <div className='productlist'>
                                <div className='productimg'>
                                    <img src={item1} alt="item1" />
                                    <div className='productlike'>
                                    <img src={like} alt="Logo" />
                                    </div>
                                </div>
                                <div className='info'>
                                    <h4>Nike Air Max</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                    <h5>$120.23</h5>
                                    <div className="star"><Rating likeView={5} /></div>
                                </div>
                            </div>
                    </Col>
                    <Col sm="3" className='gridview'>
                        <div className='productlist'>
                                <div className='productimg'>
                                    <img src={item2} alt="item2" />
                                    <div className='productlike'>
                                    <img src={like} alt="Logo" />
                                    </div>
                                </div>
                                <div className='info'>
                                    <h4>Nike Air Max</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                    <h5>$120.23</h5>
                                    <div className="star"><Rating likeView={5} /></div>
                                </div>
                            </div>
                    </Col>
                    <Col sm="3" className='gridview'>
                        <div className='productlist'>
                                <div className='productimg'>
                                    <img src={item3} alt="item3" />
                                    <div className='productlike'>
                                    <img src={like} alt="Logo" />
                                    </div>
                                </div>
                                <div className='info'>
                                    <h4>Nike Air Max</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                    <h5>$120.23</h5>
                                    <div className="star"><Rating likeView={5} /></div>
                                </div>
                            </div>
                    </Col>
                    <Col sm="3" className='gridview'>
                        <div className='productlist'>
                                <div className='productimg'>
                                    <img src={item4} alt="item4" />
                                    <div className='productlike'>
                                    <img src={like} alt="Logo" />
                                    </div>
                                </div>
                                <div className='info'>
                                    <h4>Nike Air Max</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                    <h5>$120.23</h5>
                                    <div className="star"><Rating likeView={5} /></div>
                                </div>
                            </div>
                    </Col>
                    <Col sm="3" className='gridview'>
                        <div className='productlist'>
                                <div className='productimg'>
                                    <img src={item5} alt="item5" />
                                    <div className='productlike'>
                                    <img src={like} alt="Logo" />
                                    </div>
                                </div>
                                <div className='info'>
                                    <h4>Nike Air Max</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                    <h5>$120.23</h5>
                                    <div className="star"><Rating likeView={5} /></div>
                                </div>
                            </div>
                    </Col>
                    <Col sm="3" className='gridview'>
                        <div className='productlist'>
                                <div className='productimg'>
                                    <img src={item6} alt="item6" />
                                    <div className='productlike'>
                                    <img src={like} alt="Logo" />
                                    </div>
                                </div>
                                <div className='info'>
                                    <h4>Nike Air Max</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                    <h5>$120.23</h5>
                                    <div className="star"><Rating likeView={5} /></div>
                                </div>
                            </div>
                    </Col>
                    <Col sm="12" className='pagination'>
                    <Pagination>
                        <Pagination.First />
                        <Pagination.Prev />
                        <Pagination.Item active>{1}</Pagination.Item>
                        <Pagination.Item>{2}</Pagination.Item>
                        <Pagination.Ellipsis />

                        {/* <Pagination.Item active>{10}</Pagination.Item> */}
                        {/* <Pagination.Ellipsis /> */}
                        <Pagination.Item>{11}</Pagination.Item>
                        <Pagination.Next />
                        <Pagination.Last />
                        </Pagination>
                    </Col>
            </Row>

        </div>

 
    </div>
  )
};

export default Home