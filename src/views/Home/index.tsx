import React from 'react';
import { Container } from 'react-bootstrap';

import './home.css';
import { Scoreboard } from '../../components';

export function Home() {

    return (
        <div className="main">
            <Container>
                <h2>10 Pin Bowling score card</h2>
                <hr />
                <Scoreboard />
            </Container>
        </div>
    );
    // const [pins, setPins] = useState(fillRolls(CONSTANTS.PIN_TOTAL));
    // const [frames] = useState(fillRolls(CONSTANTS.PIN_TOTAL-1));
    // const [frames1, setFrames1] = useState([
    //     {0: [4, 6, 4]},
    //     {1: [4, 6, 4]},
    //     {2: [4, 6, 4]},
    //     {3: [4, 6, 4]},
    //     {4: [4, 6, 4]},
    //     {5: [4, 6, 4]},
    //     {6: [4, 6, 4]},
    //     {7: [4, 6, 4]},
    //     {8: [4, 6, 4]},
    //     {9: [4, 6, 4]},
    // ]);
    // const [show, setShow] = useState(false);
    // const [currentRoll, setCurrentRoll] = useState(0);
    // const [nextRoll, setNextRoll] = useState(0);
    // const score = useRef(0);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    // useEffect(() => {
    //     console.log(pins);
    //     console.log(frames);
    // }, []);

    // const startGame = () => {

    // };

    // const handlePinSelection = (pin: number) => {
    //     const pins = fillRolls(CONSTANTS.PIN_TOTAL - pin);
    //     setPins(pins);
    //     setCurrentRoll(pin);
    // }

    // return (
    //     <div className="main">
    //         <Container>
    //             <h2>10 Pin Bowling score card</h2>
    //             <hr />

    //             <div className="pin-container">
    //                 <h4>Possible Pins to Knock down</h4>
    //                 {pins.map((pin, index) => {
    //                     return (
    //                         <Button variant="primary" className="roll-btn" onClick={() => handlePinSelection(pin)}>
    //                             <span key={index}>{pin}</span>
    //                         </Button>
    //                     )
    //                 })}
    //             </div>

    //             <div>
    //                 {frames.map((frame, index) => {
    //                     // if (isNumberOfPins(currentRoll)) {
    //                     //     // strike logic
    //                     // } 

    //                     return (
    //                         <div></div>
    //                     )
    //                 })}
    //             </div>

    //             <div className="score-container">
    //                 <h4>Frame Scores</h4>
    //                 <div className="scores">
    //                     {frames1.map((frame, index) => {
    //                         return (
    //                             <div className="score-item">
    //                                 <p className="box">
    //                                     <h6>Rolls</h6>
    //                                     <span>4, 6</span>
    //                                 </p>
    //                                 <p className="box">
    //                                     <h6>Frame Score</h6>
    //                                     <span>45</span>
    //                                 </p>
    //                             </div>
    //                         )
    //                     })}
    //                 </div>
    //             </div>
    //             <br />
    //             <Button variant="primary" onClick={handleShow} className="roll-btn">
    //                 Start Game
    //             </Button>
    //         </Container>
    //         <Modal show={show} onHide={handleClose}>
    //             <Modal.Header closeButton>
    //                 <Modal.Title>Modal title</Modal.Title>
    //             </Modal.Header>

    //             <Modal.Body>
    //                 <p>Modal body text goes here.</p>
    //             </Modal.Body>

    //             <Modal.Footer>
    //                 <Button variant="secondary">Close</Button>
    //                 <Button variant="primary">Save changes</Button>
    //             </Modal.Footer>
    //         </Modal>
    //     </div>
    // )
};
