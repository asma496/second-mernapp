import React from 'react';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ListGroup, Row, Col, Button } from "react-bootstrap";
import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  main:{
marginLeft: '180px', 
  },
  root: {
    maxWidth: 550,
    padding:'10px 10px 20px 10px',
    border: '1px solid #BFBFBF',
    backgroundColor: 'white',
    boxShadow:'10px 10px 5px #aaaaaa',
    marginTop:'50px',
    mozboxShadow:    'inset 0 0 10px #000000',
   webkitBoxShadow: 'inset 0 0 10px #000000',
   boxShadow:         'inset 0 0 10px #000000',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));




 function Home() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  
  const [state, setstate] = useState([]);
const [dummy, setdd] = useState([
  {name:'Faiza',email:'faz@gmail.com',id:1},
  {name:'Shehla',email:'shehla@gmail.com',id:2},
]);
const [msg, setmsg] = useState('')
const handleDelete = (id)=>{
  console.log(id)
  axios.delete('http://localhost:4000/api/posts/'+id)
  .then((res) => {
    console.log(res.data);
    setmsg(`${id} is deleted successfully`);
  })
  .catch((e) => console.log(e));


}

  useEffect(() => {
    axios.get('http://localhost:4000/api/posts/')
    .then((res) => {
      console.log(res.data);
      setstate(res.data.data);
    })
    .catch((e) => console.log(e));
}, []);


  return (
    <div >
    <div className="">
      <h1 className="title-text pl-5">
        {/* <i> MERN</i> App :::. */}
       
        </h1>
      </div>

   
    <div className={classes.main}>
    {state.map((item, ind) => (
  <Card className={classes.root}>
  <CardHeader
    avatar={
    //   <Avatar aria-label="recipe" className={classes.avatar}>
    //     R
    //   </Avatar>
    <Avatar alt="Remy Sharp" src="data:image/jpeg;base64,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" />

    }
    action={
      <IconButton aria-label="settings">
        <MoreVertIcon />
      </IconButton>
    }
    title={item.title}
    subheader="September 14, 2016"
  />
  <CardMedia
    className={classes.media}
    image={item.img}
    title="Paella dish"
  />
  <CardContent>
    <Typography variant="body2" color="textSecondary" component="p">
    {item.description}
    </Typography>
  </CardContent>
  <CardActions disableSpacing>
    <IconButton aria-label="add to favorites">
      <FavoriteIcon />
    </IconButton>
    <IconButton aria-label="share">
      <ShareIcon />
    </IconButton>
    <IconButton
      className={clsx(classes.expand, {
        [classes.expandOpen]: expanded,
      })}
      onClick={handleExpandClick}
      aria-expanded={expanded}
      aria-label="show more"
    >
      <ExpandMoreIcon />
    </IconButton>
  </CardActions>
  <Collapse in={expanded} timeout="auto" unmountOnExit>
    <CardContent>
      <Typography paragraph>Read:</Typography>
      <Typography paragraph>
        {item.read}
      </Typography>
      {/* <Typography paragraph>
        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
        heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
        browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
        and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
        pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
        saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
      </Typography>
      <Typography paragraph>
        Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
        without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
        medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
        again without stirring, until mussels have opened and rice is just tender, 5 to 7
        minutes more. (Discard any mussels that don’t open.)
      </Typography>
      <Typography>
        Set aside off of the heat to let rest for 10 minutes, and then serve.
      </Typography> */}
    </CardContent>
  </Collapse>
</Card>

))}
</div>
     </div>
     
);
}

   
        /* <Row className="mt-5">
      <Col lg={3} md={2} sm={1} xs={1}></Col>
      <Col lg={6} md={8} sm={10} xs={10}>
        <p>{msg}</p>
        <ListGroup>
          <ListGroup.Item variant="primary">
            <Row className="col-headers">
              <Col>Name</Col>
              <Col>Email</Col>
              <Col>Actions</Col>
            </Row>
          </ListGroup.Item>

          {state.map((item, ind) => (
            <ListGroup.Item key={ind} variant="light">
              <Row>
                <Col>{item.title}</Col>
                <Col>{item.description}</Col>
                <Col>
                <Button 
                    variant="info"
                    size="sm"
                    as={Link}
                    to={"/single-post/" + item._id}
                  >
                    View
                  </Button>&nbsp;
                  <Button 
                    variant="info"
                    size="sm" 
                    onClick={()=>handleDelete(item._id)}
                  >
                    Delete
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))} 
        </ListGroup>
      </Col>
      <Col lg={3} md={2} sm={1} xs={1}></Col>
    </Row>

 */

export default Home;
