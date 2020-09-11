import React from "react";
import Image from 'react-bootstrap/Image'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Memorial(props) {
  return (
    <Container>
      <Jumbotron>
        <h1 style={{textAlign: 'center'}}>Marvel Memorial</h1>
        <Image src="https://newsd.in/wp-content/uploads/2018/11/stan-lee-marvel-comics-comicbookcom-1070074-1280x0.jpeg" fluid />
        <h3>The MARVELous Creator, Stan Lee</h3>

        <Row>
          <Col><Image src="https://static01.nyt.com/images/2018/02/07/arts/07black-panther1/merlin_133187918_5fbcffdc-abaa-4e42-a938-24b9217b675c-jumbo.jpg?quality=90&auto=webp" fluid />The Black Panther, Chadwick Boseman</Col>
          <Col><Image src="https://static01.nyt.com/images/2018/02/07/arts/07black-panther1/merlin_133187918_5fbcffdc-abaa-4e42-a938-24b9217b675c-jumbo.jpg?quality=90&auto=webp" fluid /></Col>
        </Row>
        <Row>
          <Col><Image src="https://img3.looper.com/img/gallery/marvel-actors-you-may-not-know-are-dead/cliff-robertson-uncle-ben-1532700967.jpg" fluid /></Col>
          <Col><Image src="https://img3.looper.com/img/gallery/marvel-actors-you-may-not-know-are-dead/cliff-robertson-uncle-ben-1532700967.jpg" fluid />Uncle Ben, Cliff Robertson</Col>
          <Col><Image src="https://img3.looper.com/img/gallery/marvel-actors-you-may-not-know-are-dead/cliff-robertson-uncle-ben-1532700967.jpg" fluid /></Col>
        </Row>
        <Row>
          <Col><Image src="https://img2.looper.com/img/gallery/marvel-actors-you-may-not-know-are-dead/michael-clarke-duncan-the-kingpin-1516727257.jpg" fluid /></Col>
          <Col><Image src="https://img2.looper.com/img/gallery/marvel-actors-you-may-not-know-are-dead/michael-clarke-duncan-the-kingpin-1516727257.jpg" fluid />The Kingpin, Michael Clarke Duncan</Col>
        </Row>
        <Row>
          <Col><Image src="https://img1.looper.com/img/gallery/marvel-actors-you-may-not-know-are-dead/yevgeni-eugene-lazarev-anton-vanko-1516727257.jpg" fluid />Anton Vanko, Yevgeni "Eugene" Lazarev</Col>
          <Col><Image src="https://img1.looper.com/img/gallery/marvel-actors-you-may-not-know-are-dead/yevgeni-eugene-lazarev-anton-vanko-1516727257.jpg" fluid /></Col>
          <Col><Image src="https://img1.looper.com/img/gallery/marvel-actors-you-may-not-know-are-dead/yevgeni-eugene-lazarev-anton-vanko-1516727257.jpg" fluid /></Col>
        </Row>
        <Row>
          <Col><Image src="https://img2.looper.com/img/gallery/marvel-actors-you-may-not-know-are-dead/neil-fingleton-ultron-1516727257.jpg" fluid /></Col>
          <Col><Image src="https://img2.looper.com/img/gallery/marvel-actors-you-may-not-know-are-dead/neil-fingleton-ultron-1516727257.jpg" fluid />Ultron, Neil Fingleton</Col>
        </Row>
        <Row>
          <Col><Image src="https://www.thewrap.com/wp-content/uploads/2019/02/RocketRacoon.jpg" fluid /></Col>
          <Col><Image src="https://www.thewrap.com/wp-content/uploads/2019/02/RocketRacoon.jpg" fluid /></Col>
          <Col><Image src="https://www.thewrap.com/wp-content/uploads/2019/02/RocketRacoon.jpg" fluid />Rocket Racoon, Oreo the Racoon</Col>
        </Row>
      </Jumbotron>
    </Container>
  );
}

export default Memorial;