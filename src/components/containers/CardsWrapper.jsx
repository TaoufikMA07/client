import React, { useEffect,useState } from "react";
import {Row,Col} from "reactstrap"

import 'leaflet/dist/leaflet.css';
import axios from 'axios';
import { getPharmacies } from "../services/pharmacies";
import PharmacyCard from "../Card/PharmacyCard";


// import useModal from "../CustomHooks/UseModal";
import Modal from "../Modal/Modal";


function MapApp() {
    const position = [33.545317,-7.659849];
    const [pharmacies, setPharmacies] = useState([]);
    const [modalIsShown , setModalShow] = useState(false)
    const [currentPharmacy , setCurrentPharmacy] = useState({})

    let images = ['/img/phar.jpg',
    '/img/phar1.jpg',
    '/img/phar2.jpg',
    '/img/phar3.webp',
    '/img/phar4.jpg',
    '/img/phar5.jpg',
    ]



    function showModal (pharmacy){
      setModalShow(!modalIsShown)
      console.log('modalIsShown',modalIsShown)
      // if (modalIsShown) {
        setCurrentPharmacy(pharmacy)
      //   console.log('curent pharmcay',currentPharmacy);
      // }
      // else {
      //   setCurrentPharmacy({})
      // }
    }


    useEffect(() => {
     let mounted = true;
     getPharmacies()
       .then(items => {
         if(mounted) {
            setPharmacies(items)
         }
       })
     return () => mounted = false;
   }, [])



  
    return (
      <>

    <div className="wrapper">
     <h1>Pharmacies</h1>
     <ul>
      <Row>
       {pharmacies.map((item,index) => 
        <Col xs="12" sm="6" lg="4" key={item.id}>
         <PharmacyCard key={item.id} image={images[index]} {...item} toggleModal={showModal}/>
         
        </Col>
      )}

    {modalIsShown && <Modal modalIsShown={modalIsShown} pharmacy={currentPharmacy} showModal={showModal} />}

      </Row>
     </ul>
   </div>
     
      </>
     
    )
}
export default MapApp;
