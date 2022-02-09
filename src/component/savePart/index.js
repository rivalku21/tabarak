import React, {useState} from 'react';
import { Form, FormGroup, Input, Button } from 'reactstrap';
import { Col, Row} from 'react-bootstrap';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { EventData } from '../../services';
import { Link } from 'react-router-dom';

const SavePart = () => {
    const [isLoading, setLoading] = useState(false);
    const [eventPost, setEventPost] = useState({
        eventName: '',
        eventPlace: '',
    });
    
    const changeHandler = (e) => {
        setEventPost({ ...eventPost, [e.target.id]: e.target.value });
    }

    const submitEvent = async() => {
        setLoading(true);
        const submit = await EventData.saveData(eventPost)
        console.log(submit.statusCode);
        if (submit.statusCode === 201) {
            setLoading(false);
            alert(submit.status);
            window.location.replace('/');
        } else {
            setLoading(false);
            alert(submit.message);
        }
    }

    return (
        <div>
            <div>
                <Link to="/"><Button style={{margin:'10px',display:'inline-block'}} color="primary">Get Data</Button></Link>
                <Button color="primary" disabled>Save Data</Button>
            </div>
            <Row style={{width:'100%'}}>
                <Col style={{margin:'auto 0'}}>
                    <div className="eventSaveWrap">
                        <Form className="eventSave">
                            <FormGroup>
                                <h5 className="data">Event Name</h5>
                                <Input 
                                    type="text"
                                    name="eventNAme"
                                    id="eventName"
                                    placeholder="Insert Event Name"
                                    onChange={changeHandler}
                                />
                            </FormGroup>
                            <FormGroup style={{marginTop:'10px'}}>
                                <h5 className="data">Event Place</h5>
                                <Input 
                                    type="text"
                                    name="eventPlace"
                                    id="eventPlace"
                                    placeholder="Insert Event Place"
                                    onChange={changeHandler}
                                />
                            </FormGroup>
                            
                            <div className="buttonSave">
                                <Button
                                    color="primary"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        submitEvent();
                                    }}
                                    disabled={isLoading} style={{marginTop:'30px', width:'100%', backgroundColor:'#FFA740', border:'0'}}
                                >
                                    Save
                                </Button>
                            </div>
                        </Form>
                    </div>
                </Col>
            </Row>
        </div>
    )
};

export default SavePart;
