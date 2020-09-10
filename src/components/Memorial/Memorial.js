import React from "react";
import './Memorial.css'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Memorial(props) {
  return (
    <Container>
      <Jumbotron>
        <h1>Marvel Memorial</h1>
        <img src="https://newsd.in/wp-content/uploads/2018/11/stan-lee-marvel-comics-comicbookcom-1070074-1280x0.jpeg" />
        <h3>The MARVELous Creator, Stan Lee</h3>

        <Row>
          <Col><img src="https://cdn.mos.cms.futurecdn.net/9HEqv9pcccpwSYcxcrHgPe-970-80.jpg.webp" />The Black Panther, Chadwick Boseman</Col>
          <Col><img src="https://cdn.mos.cms.futurecdn.net/9HEqv9pcccpwSYcxcrHgPe-970-80.jpg.webp" /></Col>
        </Row>
        <Row>
          <Col><img src="https://img3.looper.com/img/gallery/marvel-actors-you-may-not-know-are-dead/cliff-robertson-uncle-ben-1532700967.jpg" /></Col>
          <Col><img src="https://img3.looper.com/img/gallery/marvel-actors-you-may-not-know-are-dead/cliff-robertson-uncle-ben-1532700967.jpg" />Uncle Ben, Cliff Robertson</Col>
          <Col><img src="https://img3.looper.com/img/gallery/marvel-actors-you-may-not-know-are-dead/cliff-robertson-uncle-ben-1532700967.jpg" /></Col>
        </Row>
        <Row>
          <Col><img src="https://img2.looper.com/img/gallery/marvel-actors-you-may-not-know-are-dead/michael-clarke-duncan-the-kingpin-1516727257.jpg" /></Col>
          <Col><img src="https://img2.looper.com/img/gallery/marvel-actors-you-may-not-know-are-dead/michael-clarke-duncan-the-kingpin-1516727257.jpg" />The Kingpin, Michael Clarke Duncan</Col>
        </Row>
        <Row>
          <Col><img src="https://img1.looper.com/img/gallery/marvel-actors-you-may-not-know-are-dead/yevgeni-eugene-lazarev-anton-vanko-1516727257.jpg" />Anton Vanko, Yevgeni "Eugene" Lazarev</Col>
          <Col><img src="https://img1.looper.com/img/gallery/marvel-actors-you-may-not-know-are-dead/yevgeni-eugene-lazarev-anton-vanko-1516727257.jpg" /></Col>
          <Col><img src="https://img1.looper.com/img/gallery/marvel-actors-you-may-not-know-are-dead/yevgeni-eugene-lazarev-anton-vanko-1516727257.jpg" /></Col>
        </Row>
        <Row>
          <Col><img src="https://img2.looper.com/img/gallery/marvel-actors-you-may-not-know-are-dead/neil-fingleton-ultron-1516727257.jpg" /></Col>
          <Col><img src="https://img2.looper.com/img/gallery/marvel-actors-you-may-not-know-are-dead/neil-fingleton-ultron-1516727257.jpg" />Ultron, Neil Fingleton</Col>
        </Row>
        <Row>
          <Col><img src="https://www.thewrap.com/wp-content/uploads/2019/02/RocketRacoon.jpg" /></Col>
          <Col><img src="https://www.thewrap.com/wp-content/uploads/2019/02/RocketRacoon.jpg" /></Col>
          <Col><img src="https://www.thewrap.com/wp-content/uploads/2019/02/RocketRacoon.jpg" />Rocket Racoon, Oreo the Racoon</Col>
        </Row>
      </Jumbotron>
    </Container>
  );
}

export default Memorial;