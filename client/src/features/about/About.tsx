import { Button, ButtonGroup, Typography } from '@mui/material';
import { Container } from '@mui/system';

import agent from '../../app/api/agent';

const About = () => {
  return (
    <Container>
      <Typography variant="h2">Errors for testing</Typography>
      <ButtonGroup>
        <Button
          variant="contained"
          onClick={() =>
            agent.TestErrors.get400Error().catch((error) => console.log(error))
          }
        >
          Test 400 error
        </Button>

        <Button
          variant="contained"
          onClick={() =>
            agent.TestErrors.get401Error().catch((error) => console.log(error))
          }
        >
          Test 401 error
        </Button>

        <Button
          variant="contained"
          onClick={() =>
            agent.TestErrors.get404Error().catch((error) => console.log(error))
          }
        >
          Test 404 error
        </Button>

        <Button
          variant="contained"
          onClick={() =>
            agent.TestErrors.get500Error().catch((error) => console.log(error))
          }
        >
          Test 500 error
        </Button>

        <Button
          variant="contained"
          onClick={() =>
            agent.TestErrors.getValidError().catch((error) =>
              console.log(error)
            )
          }
        >
          Test Validation error
        </Button>
      </ButtonGroup>
    </Container>
  );
};
export default About;
