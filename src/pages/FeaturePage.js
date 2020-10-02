import Page from 'components/Page';
import React from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table, Button, ButtonGroup } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const FeaturePage = () => {
  return (
    <Page
      title="Features"
      className="FeaturePage"
    >
      <Row>
        <Col>
          <Card className="mb-3">
            <CardHeader className="d-flex justify-content-between">
                Feature List
                <ButtonGroup size="l">
                    <NavLink to="/create-feature">
                        <Button color="secondary">
                            Create Feature
                        </Button>
                    </NavLink>  
                </ButtonGroup>
            </CardHeader>
            <CardBody>
              <Table responsive>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Key</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Shipping JNE</td>
                    <td>shipping-jne</td>
                    <td>Buat Shipping JNE</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Product</td>
                    <td>product</td>
                    <td>Buat Product</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Payment</td>
                    <td>payment</td>
                    <td>Buat Payment</td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Page>
  );
};

export default FeaturePage;
