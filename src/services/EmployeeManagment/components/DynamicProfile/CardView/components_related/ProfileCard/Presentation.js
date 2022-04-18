import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Presentation(props) {
  const { cardState, sectionData, ContentToBeRendered, state } = props
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  // const employeeProfile = {
  //   [sectionData.access_key]: {},
  //   ...state.employeeProfile.data
  // }
  return (

    <Card className="profile-card1" style={cardState}>
      <CardContent>
        <ContentToBeRendered />
      </CardContent>
    </Card>
  );
}
