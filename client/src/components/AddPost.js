import axios from "axios";
import React, { useState } from "react";
import { ListGroup, Row, Col, Button } from "react-bootstrap";
import FileBase64 from 'react-file-base64'
 

function AddPost() {
    const [title, settitle] = useState('')
    const [description, setdescription] = useState('')
    const [read, setread] = useState('')
    // const [date, setdate] = useState('')


    const [img,setimg]= useState('')
    const handleSubmit=(e)=>{
        e.preventDefault()
        let newPost = {title, description,img,read};
        axios.post('http://localhost:4000/api/posts/add',newPost)
        .then(res => console.log(res))
        .catch(err=>console.log(err,'error'));
      }

    return (
        <div>
    <form onSubmit={handleSubmit}>
      <Row className="mt-5" >
        <Col lg={3} md={2} sm={1} xs={1}></Col>
        <Col lg={6} md={8} sm={10} xs={10}>
          <ListGroup>
            <ListGroup.Item variant="primary" className="col-headers">
               New Post
            </ListGroup.Item>
            <ListGroup.Item variant="light">
              <Row>
                <Col className="col-headers">Title</Col>
                <Col>
                  <input type="text" name='title' onChange={(e)=>settitle(e.target.value)} />
                </Col>
              </Row>
              <Row>
                <Col className="col-headers">Desc</Col>
                <Col>
                  <input type="text" name='description' onChange={(e)=>setdescription(e.target.value)} />
                </Col>
              </Row>
              <Row>
                <Col className="col-headers">read more</Col>
                <Col>
                  <input type="text" name='read more' onChange={(e)=>setread(e.target.value)} />
                </Col>
              </Row>
              {/* <Row> */}
                {/* <Col className="col-headers">date</Col>
                <Col>
                  <input type="text" name='read more' onChange={newDate('')} />
                </Col>
              </Row> */}


              <Row>
                <Col className ='col-headers'>
                  image
                
                </Col>
                <Col>
                    <FileBase64
                      multiple={false}
                      onDone={({base64})=>setimg(base64)}
                    />                </Col>
              </Row>
              <Row className="my-2">
                <Col className="text-center">
                  <Button type='submit' variant="info" size="md">
                    Add
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col lg={3} md={2} sm={1} xs={1}></Col>
      </Row>
    </form>

        </div>
    )
}

export default AddPost
