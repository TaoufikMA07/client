import React from 'react';
import ReactDOM from 'react-dom';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Mapp from '../Map/Map';


function ModalWrapper ({modalIsShown,pharmacy,showModal})  {
    let position = [pharmacy.lat,pharmacy.log]
  return (<>
    <div>
      <Modal isOpen={modalIsShown} toggle={showModal}>
        {/* <ModalHeader toggle={showModal}>Modal title</ModalHeader> */}
        <Mapp position={position}/>
        <ModalFooter>
         
        </ModalFooter>
      </Modal>
    </div>
  </>
)
}

export default ModalWrapper;