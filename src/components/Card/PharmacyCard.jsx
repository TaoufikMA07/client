import {Card,CardBody,CardSubtitle,CardTitle,CardText,Button} from "reactstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";


function PharmacyCard ({nom,id,adresse,lat,log,zone,toggleModal,image}){
 
       return (
       <>
       <Card key={id}
          style={{
            width: '18rem'
          }}
        >
        <img
          alt="Sample"
          src={image}
        />
        <CardBody>
          <CardTitle tag="h5">
          {nom}
          </CardTitle>
          <CardText>
            {adresse}
          </CardText>
          <Button onClick={()=>toggleModal({nom,id,adresse,lat,log,zone})}>
            Voir détails
          </Button>
          </CardBody>
            </Card>
        </>
)
}

export default PharmacyCard