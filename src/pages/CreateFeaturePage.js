import Page from 'components/Page';
import React from 'react';
import {
  Button,
  Card,
  CardBody,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from 'reactstrap';

const CreateFeaturePage = () => {
  return (
    <Page title="Create Feature">
      <Row>

        <Col xl={12} lg={12} md={12}>
          <Card>
            <CardBody>
              <Form>
                <FormGroup row>
                  <Label for="exampleEmail" sm={2}>
                    Feature Name
                  </Label>
                  <Col sm={10}>
                    <Input
                      type="email"
                      name="email"
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="exampleEmail" sm={2}>
                    Feature Key
                  </Label>
                  <Col sm={10}>
                    <Input
                      type="email"
                      name="email"
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="exampleText" sm={2}>
                    Description
                  </Label>
                  <Col sm={10}>
                    <Input type="textarea" name="text" />
                  </Col>
                </FormGroup>
                <FormGroup check row>
                  <Col sm={{ size: 10, offset: 2 }}>
                    <Button>Submit</Button>
                  </Col>
                </FormGroup>
              </Form>
            </CardBody>
          </Card>
        </Col>
      
      </Row>
    </Page>
  );
};

export default CreateFeaturePage;
