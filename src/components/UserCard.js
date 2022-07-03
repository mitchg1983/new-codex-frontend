import { Box, Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function UserCard(props) {

  const {
    user,
  } = props;

  const {
    firstName,
    lastName,
    username,
  } = user;

  return (
    <Card>
      <CardHeader
        title={username}
        action={(
          <Typography fontWeight="bold">

          </Typography>
)}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {firstName}
          {lastName}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default UserCard;