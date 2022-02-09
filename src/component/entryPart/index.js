import React, { useEffect, useState } from 'react';
import { Container, Card } from 'react-bootstrap';
import './style.css';
import { Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';
import { Button, FormGroup } from 'react-bootstrap';
import { EventData } from '../../services';
import { Link } from 'react-router-dom';

const EntryPart = () => {
    const [modalDetail, setModalDetail] = useState(false);
    const [data, setData] = useState([]);

    const getAllData = () =>{
        EventData.getAllData().then((result) => {
            setData(result);
        })
    }

    const [detail, setDetail] = useState([]);

    const toggleDetail = (event) => {
        const id = event.target.id
        EventData.getDataId(id).then((result) => {
            console.log(result);
            setDetail(result[0]);
        })
        return setModalDetail(!modalDetail);
    }

    return (
        <>
        <div className="finalBody">
            <Container>
                <div>
                    <Button style={{margin:'10px',display:'inline-block'}} disabled>Get Data</Button>
                    <Link to="/event"><Button>Save Data</Button></Link>
                </div>
                <div>
                    <Button style={{margin:'10px',display:'inline-block', backgroundColor:'#FFA740', border:'0'}} onClick={getAllData}>Get All Data</Button>
                </div>
                <Card className="cardData" style={{width:'100%', height:'100%', color:'black', top:'20px'}}>
                    <Card.Body className="cardBody">
                        <div className="row" align="left">
                            <div className="col-sm-1" />
                            <div className="col-sm-10">
                                <table>
                                    <tr style={{ marginBottom: '10px'}}>
                                        <th width="20%">No.</th>
                                        <th width="50%">Event Name</th>
                                        <th width="50%">Event Place</th>
                                        <th></th>
                                    </tr>
                                    {data.map((dataMap, key) => {
                                        return (
                                            // <p>{data}</p>
                                            <tr key={key}>
                                                <td>1</td>
                                                <td>{dataMap.event_name}</td>
                                                <td>{dataMap.event_place}</td>
                                                <td>
                                                    <Button variant="outline-secondary" id={dataMap.id} onClick={toggleDetail}>Detail</Button>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </table>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
                <div>
                    <Modal isOpen={modalDetail} toggle={toggleDetail} className="modal-xl">
                        <ModalHeader toogle={toggleDetail}>
                            <b>Detail</b>
                        </ModalHeader>
                        <ModalBody>
                            <FormGroup>
                                <div className="container">
                                    <div>
                                        <table className="detailBody">
                                            <tr>
                                                <td style={{height:'50px'}}><h6>Event Name</h6></td>
                                                <td><h6>:</h6></td>
                                                <td>
                                                    <h6>{detail.event_name}</h6>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style={{height:'50px'}}><h6>Event Place</h6></td>
                                                <td><h6>:</h6></td>
                                                <td>
                                                    <h6>{detail.event_place}</h6>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style={{height:'50px'}}><h6>Create At</h6></td>
                                                <td><h6>:</h6></td>
                                                <td>
                                                    <h6>{detail.created_at}</h6>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </FormGroup>
                        </ModalBody>
                        <ModalFooter className="footer">
                            <Button onClick={toggleDetail} variant="outline-secondary">
                                Back
                            </Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </Container>
        </div>
        </>
    )
}

export default EntryPart;
