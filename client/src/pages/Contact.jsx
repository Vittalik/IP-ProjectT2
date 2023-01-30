import React from 'react'
import "../styles/contact_style.scss"
import { Wrapper, Status } from "@googlemaps/react-wrapper";




const Contact = () => {

const ref = React.useRef(null);
const [map, setMap] = React.useState();
    
React.useEffect(() => {
    if (ref.current && !map) {
    setMap(new window.google.maps.Map(ref.current, {}));
    }
}, [ref, map]);


  return (
<div className='lmao'>
C.S.M. Suceava

<br></br>
Adresa
<br></br>
<br></br>

Bulevardul 1 Decembrie 1918, nr.7
<br></br>
Suceava
<br></br>
Romania
<br></br>

<br></br><br></br>
<br></br>
Contact
<br></br>
<br></br>
csm.suceava@sport.gov.ro
<br></br>
0230 531 289
<br></br>
0230 524 767
<br></br>
http://www.csm-suceava.ro/
<br></br>

<br></br>
<br></br>
<br></br>
Informații diverse
<br></br>
<br></br>

Email CSM Suceava:
<br></br>
csm.suceava@sport.gov.ro
<br></br>
 
<br></br>
Transparență CSM Suceava
<br></br>

transparenta@csm-suceava.ro
petitie@csm-suceava.ro
</div>
  )
}

export default Contact