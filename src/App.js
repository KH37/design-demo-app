import logo from './logo.svg';
import './App.css';
import React from "react"
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    width:"95%",
    margin:"12px auto"
  },
  appbar:{
    flexGrow: 1,
  },
  name:{
    margin:"12px 12px 5px 12px"
  },
  button:{
    margin:"0px 12px 20px 12px"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
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
  avatarD:{
    backgroundColor: "blue"
  }
}));

const SelectMenu = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState('A');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleClickButton = (e) => {
    window.alert("ご希望のメニューを受け付けました")
  }
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [expandedD, setExpandedD] = React.useState(false);
  const handleExpandClickD = () => {
    setExpandedD(!expandedD);
  };
  return(
    <div className={classes.appbar}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            病院食選択アプリ
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
      <div className={classes.name}>
        <h3>
          123号室
        </h3>
        <h2>
        山田太郎様
        </h2>
        <FormControl component="fieldset">
          <FormLabel component="legend">ご希望のメニューを選択してください。</FormLabel>
          <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
            <FormControlLabel value="A" control={<Radio />} label="A : 鮭のムニエル" />
            <FormControlLabel value="D" control={<Radio />} label="D : 牛タン" />
          </RadioGroup>
        </FormControl>
      </div>
      <div className={classes.button}>
        <Button variant="contained" color="primary" onClick={handleClickButton}>
          決定
        </Button>
      </div>
      <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            A
          </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title="鮭のムニエル"
      />
      <CardMedia
        className={classes.media}
        image="/salmon.jpg"
        title="鮭のムニエル"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          ------ここにこだわりのポイントを記入------------------ここにこだわりのポイントを記入------------------ここにこだわりのポイントを記入------------
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {/* <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
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
          <Typography paragraph>こちらの料理について</Typography>
          <Typography paragraph>
            --------------ここに料理の説明-----------------------------------ここに料理の説明-----------------------------------ここに料理の説明-----------------------------------ここに料理の説明---------------------
          </Typography>
          <Typography paragraph>栄養価</Typography>
          <Typography paragraph>
            ビタミンB、ビタミンC、タンパク質、糖質....-----ここに栄養価を記入-------
          </Typography>
          {/* <Typography paragraph>
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
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatarD}>
            D
          </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title="牛タン"
      />
      <CardMedia
        className={classes.media}
        image="/beef-tongue.jpg"
        title="牛タン"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          ------ここにこだわりのポイントを記入------------------ここにこだわりのポイントを記入------------------ここにこだわりのポイントを記入------------


        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {/* <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expandedD,
          })}
          onClick={handleExpandClickD}
          aria-expanded={expandedD}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expandedD} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>こちらの料理について</Typography>
          <Typography paragraph>
            --------------ここに料理の説明-----------------------------------ここに料理の説明-----------------------------------ここに料理の説明-----------------------------------ここに料理の説明---------------------
          </Typography>
          <Typography paragraph>栄養価</Typography>
          <Typography paragraph>
            ビタミンB、ビタミンC、タンパク質、糖質....-----ここに栄養価を記入-------
          </Typography>
          {/* <Typography paragraph>
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

    </div>
  )
}

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/byoinshoku/hogehoge" exact component={SelectMenu} />
          {/* <Route path="/pagetwo"  component={PageTwo} /> */}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
