import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";

const drawerWidth = 240;

const styles = theme => ({
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  entry: {
    margin: '20px 20px',
  },
  title: {
    textDecoration: 'initial'
  }
});

function ShareDArticleEntryExample(props) {
  const {classes} = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.entry}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h2">
          be
          {bull}
          nev
          {bull}o{bull}
          lent
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

function ShareDArticleEntry(props) {
  const {classes, article} = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.entry}>
      <CardContent>
        <Typography variant="h5" component={Link} to={'/r/' + article.hashID} className={classes.title}>
          {article.title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Author {article.author} {bull} 1 hour ago
        </Typography>
        <Typography component="p">
          {article.brief}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" component={Link} to={'/r/' + article.hashID}>Read More</Button>
      </CardActions>
    </Card>
  );
}

const exampleArticle = {
  title: "How to create multiple page app using react",
  author: "Shuai Zhou",
  brief: "I have created a single page web app using react js. I have used webpack to create bundle of all components. But now I want to create many other pages. Most of pages are API call related.",
};

class ShareDArticleList extends React.Component {


            state = {
            };

          render() {
          const { classes, articles } = this.props;
          return (
          <React.Fragment>
          {
            articles.map((article, i) => (
            <ShareDArticleEntry classes={classes} article={article} key={i}/>
          ))
        }
        {/*<ShareDArticleEntryExample classes={classes} article={exampleArticle}/>*/}
      </React.Fragment>
    );
  }
}

ShareDArticleList.propTypes = {
  classes: PropTypes.object.isRequired,
  articles: PropTypes.array.isRequired,
};

ShareDArticleList.defaultProps = {
  name: 'Stranger',
  articles: []
};

export default withStyles(styles)(ShareDArticleList);
