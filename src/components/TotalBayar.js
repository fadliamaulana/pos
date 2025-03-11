import React, { Component } from "react";
import { Row, Col, Button, Card } from "react-bootstrap";
import { numberWithCommas } from "../utils/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { API_URL } from '../utils/constants'

export default class TotalBayar extends Component {

  submitTotalBayar = (totalBayar) => {
    const pesanans = {
      total_bayar: totalBayar,
      menus: this.props.keranjangs
    }
    axios.post(API_URL+"pesanans", pesanans).then((res)=>{
      this.props.history.push('/sukses')
    })
  }

  render() {
    const totalBayar = this.props.keranjangs.reduce(function (result, item) {
      return result + item.total_harga;
    }, 0);
    console.log(totalBayar); // 10
    return (
      <>
      <div className="fixed-bottom d-none d-md-block">
        <Row>
          <Col md={{ span: 3, offset: 9 }} className="px-4">
            <Card className="shadow mb-4">
              <Card.Body>
                <h4 className="text-center">
                  Total Harga :
                  <strong>Rp. {numberWithCommas(totalBayar)}</strong>
                </h4>
              </Card.Body>
              <Button 
              variant="primary" 
              block 
              className="px-4" 
              size="lg"
              onClick={() => this.submitTotalBayar(totalBayar)}
              >
                <FontAwesomeIcon icon={faShoppingCart} className="px-2" />
                <strong>BAYAR</strong>
              </Button>
            </Card>
          </Col>
        </Row>
      </div>

      <div className="d-sm-block d-md-none mt-3">
        <Row>
          <Col md={{ span: 3, offset: 9 }} className="px-4">
            <Card className="shadow mb-4">
              <Card.Body>
                <h4 className="text-center">
                  Total Harga :
                  <strong>Rp. {numberWithCommas(totalBayar)}</strong>
                </h4>
              </Card.Body>
              <Button 
              variant="primary" 
              block 
              className="px-4" 
              size="lg"
              onClick={() => this.submitTotalBayar(totalBayar)}
              >
                <FontAwesomeIcon icon={faShoppingCart} className="px-2" />
                <strong>BAYAR</strong>
              </Button>
            </Card>
          </Col>
        </Row>
      </div>
      </>
    );
  }
}
