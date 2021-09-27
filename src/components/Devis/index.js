import { Button } from 'bootstrap';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowCircleLeft} from 'react-icons/fa';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import ReactTooltip from 'react-tooltip';
import './devis.css';


const Devis=()=>{
    const [startDate, setStartDate] = useState(new Date());
    var date = new Date();
    const[show,setShow]=useState(true);
    const[check1,setCheck1]=useState(false);
    const[check2,setCheck2]=useState(false);
    const[check3,setCheck3]=useState(false);
    const[check4,setCheck4]=useState(false);
    const[check5,setCheck5]=useState(false);
    const[check6,setCheck6]=useState(false);
    const[check7,setCheck7]=useState(false);
    const[check8,setCheck8]=useState(false);
    const[check9,setCheck9]=useState(false);
    const[check10,setCheck10]=useState(false);
    const[check11,setCheck11]=useState(false);
    const[check12,setCheck12]=useState(false);
    const[checka11,setChecka11]=useState(false);
    const[check22,setCheck22]=useState(false);
    const[check33,setCheck33]=useState(false);
    const[check44,setCheck44]=useState(false);
    const[check55,setCheck55]=useState(false);
    const[check66,setCheck66]=useState(false);
    const[check77,setCheck77]=useState(false);
    const[check88,setCheck88]=useState(false);
    const[check99,setCheck99]=useState(false);
    const[check100,setCheck100]=useState(false);
    const[check111,setCheck111]=useState(false);
    const[check112,setCheck112]=useState(false);
    const[dep1,setDep1]=useState(false);
    const[dep2,setDep2]=useState(false);
    const[arr1,setArr1]=useState(false);
    const[arr2,setArr2]=useState(false);
    var [total,setTotal]=useState(120);
    const handelChange=()=>{

        setCheck1(true) 
        setCheck2(false) 
    }
    const handelChange2=()=>{

        setCheck1(false) 
        setCheck2(true) 
    }
    const handelChange3=()=>{

        setCheck3(true) 
        setCheck4(false) 
       
    }
    const handelChange4=()=>{

        setCheck3(false) 
        setCheck4(true) 
       setTotal(120)
    }
    const handelChange5=()=>{

        setCheck5(true) ;
        setCheck6(false); 
        let t=120;
        setTotal(t+250);
    }
    const handelChange6=()=>{

        setCheck5(false) 
        setCheck6(true) 
        let t=120;
        setTotal(t+450);
    }
    const handelChange7=()=>{
        setCheck7(true) 
        setCheck8(false) 
        
    }
    const handelChange8=()=>{
        setCheck7(false) 
        setCheck8(true) 
        
    }
    const handelChange9=()=>{
        setCheck9(true) 
        setCheck10(false) 
        
    }
    const handelChange10=()=>{
        setCheck9(false) 
        setCheck10(true) 
        
    }
    const handelChange11=()=>{
        setCheck12(false) 
        setCheck11(true) 
        
    }
    const handelChange12=()=>{
        setCheck11(false) 
        setCheck12(true) 
        
    }
    const handelChangea11=()=>{
        setChecka11(true) 
        setCheck22(false) 
        
    }
    const handelChange22=()=>{
        setChecka11(false) 
        setCheck22(true) 
        
    }
    const handelChange33=()=>{
        setCheck33(true) 
        setCheck44(false) 
        
    }
    const handelChange44=()=>{
        setCheck33(false) 
        setCheck44(true) 
   }
   const handelChange55=()=>{
    setCheck55(true) 
    setCheck66(false) 
    
}
const handelChange66=()=>{
    setCheck55(false) 
    setCheck66(true) 
    
}
const handelChange77=()=>{
    setCheck77(true) 
    setCheck88(false) 
}
const handelChange88=()=>{
    setCheck77(false) 
    setCheck88(true) 
}
const handelChange99=()=>{
    setCheck99(true) 
    setCheck100(false) 
}
const handelChange100=()=>{
    setCheck99(false) 
    setCheck100(true) 
}
const handelChange111=()=>{
    setCheck111(false) 
    setCheck112(true ) 
}
const handelChange112=()=>{
    setCheck111(true) 
    setCheck112(false) 
}
const handelChangedep1=()=>{
    setDep1(true) 
    setDep2(false) 
}
const handelChangedep2=()=>{
    setDep2(true) 
    setDep1(false) 
}
const handelChangearr1=()=>{
    setArr1(true) 
    setArr2(false) 
}
const handelChangearr2=()=>{
    setArr1(true) 
    setArr2(false) 
}
    const openshow=()=>{
        setShow(!show)
    }
   
    const[nmbrCarton,setNmbrCarton]=useState(0);
    const handelInputNumbers=(event)=>{
        setNmbrCarton(event.target.value)

         console.log("NmbrCarton",nmbrCarton)
    }
return(<div className="devis">

<h1>Formule TRINKIL</h1>
<div className="formule">

   <div className="marg-left"></div>
<form className="form">
<h1>Adresse de départ</h1>
<label className=" Myborder-top">
<p className="title">Logement de départ </p>
    <input className="input-style" type="text"  placeholder="Address de départ"  name="address_a"   />
</label>
<label>
<p className="title"> Type de logement</p>

<div className="check-box">
      <label for="scales">Maison
       <input type="checkbox" id="scales" name="maison" checked={check1} onClick={handelChange}/>
     </label>
<label for="scales">Appartement
            <input type="checkbox" id="scales" name="appart" checked={check2} onClick={handelChange2}/>
  </label>

</div>

</label>

<label >
<p className="title">Nombre d’étages </p>
<input className="input-style " type="number"  placeholder="Nombre d’étages"  name="etages"   />
</label>
<label >
<p className="title">Besoin d’un monte Meuble?</p>
<div className="check-box">
      <label for="scales">Oui
       <input type="checkbox" id="scales"  name="monte" checked={check3} onClick={handelChange3}/>
     </label>
<label for="scales">Non
            <input type="checkbox" id="scales" name="n-monte" checked={check4} onClick={handelChange4}/>
  </label>

</div>

</label>


{check3 &&(<label >
  
    
    <p className="title"  >Vous voulez le monte meuble pour:</p>
    <ReactTooltip /> 
    <div className="check-box">
      <label for="scales" data-tip="250€">demi journée
       <input type="checkbox" id="scales" name="monte" checked={check5} onClick={handelChange5}/>
     </label>
<label for="scales" data-tip="450€">7H
            <input type="checkbox" id="scales" name="n-monte" checked={check6} onClick={handelChange6}/>
  </label>

</div>

</label>)
    
}

 <label >
 <p className="title">
 est-il possible de stationner un camion à moins de 30m de l’entrée du logement?

 </p>
<div className="check-box">

      <label for="scales">Oui
       <input type="checkbox" id="scales" name="station" checked={check7} onClick={handelChange7}/>
     </label>
<label for="scales">Non
            <input type="checkbox" id="scales" name="n-station" checked={check8} onClick={handelChange8}/>
  </label>

</div>
</label>
{check8 && (<label >
    <p className="title">à quel distance pourrait-il stationner?</p>
    <input className="input-style " type="number"  placeholder="distace de stationnement"  name="distance"   />
</label>)

}

<label >
<p className="title">Indiquer la surface approximative (en m2) à déménager</p>
<input className="input-style " type="number"  placeholder="Surface"  name="etages"   />
</label>
<label >
<p className="title">Le nombre de cartons standards :</p>   
<input className="input-style " type="number"  placeholder="Nombre de cartons"  name="nmbrCarton"  onChange={ handelInputNumbers}  />
</label>
<label >
<p className="title">Le nombre de cartons livres :</p>   
<input className="input-style " type="number"  placeholder="Nombre de cartons"  name="nmbrCarton"  onChange={ handelInputNumbers}  />
</label>

<label >
 <p className="title">Indiquer le nombre de pièces</p>
 <input className="input-style " type="number"  placeholder="Nombre de piéces"  name="pieces"   />
</label>





<label className="unserline-button">
<p className="title">Besoin des cartons?</p>
<div className="check-box">
      <label for="scales">Oui
       <input type="checkbox" id="scales" name="carton" checked={check11} onClick={handelChange11}/>
     </label>
<label for="scales">Non
            <input type="checkbox" id="scales" name="n-carton" checked={check12} onClick={handelChange12}/>
  </label>

</div>

</label>


{check11 &&(<label>
  
 <p>  
Clickez <a href="https://www.officiel-demenagement.com/">ici </a>pour acheter un carton:
</p> 
<label>



</label>
</label>)}

</form>




<div className="marg-right"></div>
</div>











    <div className="formule">
   <div className="marg-left"></div>
<form className="form">
<h1 >Adresse Arrivé</h1>
<label >
<p className="title">Logement Futur </p>
    <input className="input-style" type="text"  placeholder="Address d'arrivéée"  name="address_a"   />
</label>
<label>
<p className="title"> Type de logement</p>

<div className="check-box">
      <label for="scales">Maison
       <input type="checkbox" id="scales" name="maison" checked={checka11} onClick={handelChangea11}/>
     </label>
<label for="scales">Appartement
            <input type="checkbox" id="scales" name="appart" checked={check22} onClick={handelChange22}/>
  </label>

</div>

</label>

<label>
<p className="title">Nombre d’étages </p>
<input className="input-style " type="number"  placeholder="Nombre d’étages"  name="etages"   />
</label>
<label >
<p className="title">Besoin d’un monte Meuble?</p>
<div className="check-box">
      <label for="scales">Oui
       <input type="checkbox" id="scales" name="monte" checked={check33} onClick={handelChange33}/>
     </label>
<label for="scales">Non
            <input type="checkbox" id="scales" name="n-monte" checked={check44} onClick={handelChange44}/>
  </label>

</div>

</label>


{check3 &&(<label >
  
    
    <p className="title">demi journée/7H</p> 
    <div className="check-box">
      <label for="scales">demi journée
       <input type="checkbox" id="scales" name="monte" checked={check55} onClick={handelChange55}/>
     </label>
<label for="scales">7H
            <input type="checkbox" id="scales" name="n-monte" checked={check66} onClick={handelChange66}/>
  </label>

</div>

</label>)
    
}
<label >
<p className="title">
est-il possible de stationner un camion à moins de 30m de l’entrée du logement?
</p>

<div className="check-box">
      <label for="scales">Oui
       <input type="checkbox" id="scales" name="monte" checked={arr1} onClick={handelChangearr1}/>
     </label>
<label for="scales">Non
            <input type="checkbox" id="scales" name="n-monte" checked={arr2} onClick={handelChangearr2}/>
  </label>

</div>
</label>
 <label >
 <p className="title">
 est-il possible de stationner un camion à moins de 30m de l’entrée du logement?

 </p>
<div className="check-box">

      <label for="scales">Oui
       <input type="checkbox" id="scales" name="station" checked={check77} onClick={handelChange77}/>
     </label>
<label for="scales">Non
            <input type="checkbox" id="scales" name="n-station" checked={check88} onClick={handelChange88}/>
  </label>

</div>
</label>


<label >
<p className="title">Indiquer la surface approximative (en m2) à déménager</p>
<input className="input-style " type="number"  placeholder="Surface"  name="etages"   />
</label>
<label >
<p className="title">Indiquer le nombre de cartons:</p>   
<input className="input-style " type="number"  placeholder="Nombre de cartons"  name="nbr-carton"   />

</label>
<label >
<p className="title"></p>   
<div className="check-box">

      <label for="scales">carton standard
       <input type="checkbox" id="scales" name="carton-s" checked={check99} onClick={handelChange99}/>
     </label>
<label for="scales">carton livre
            <input type="checkbox" id="scales" name="carton-l" checked={check100} onClick={handelChange100}/>
  </label>

</div>

</label>


<label >
 <p className="title">
 Indiquer le nombre de pièces

 </p>
 <input className="input-style " type="number"  placeholder="Nombre de piéces"  name="pieces"   />
</label>





<label >
<p className="title">Besoin des cartons?</p>
<div className="check-box">
      <label for="scales">Oui
       <input type="checkbox" id="scales" name="carton" checked={check111} onClick={handelChange111}/>
     </label>
<label for="scales">Non
            <input type="checkbox" id="scales" name="n-carton" checked={check112} onClick={handelChange112}/>
  </label>

</div>

</label>


{check11 &&(<label>
  
 <p>  
Clickez <a href="https://www.officiel-demenagement.com/">ici </a>pour acheter un carton:
</p> 
<label>



</label>
</label>)}
<label>
<p className="title">Choisissez une date</p>
<input className="input-style" type="date"/>

</label>

<label className="unserline-button">
<p className="title">Choisissez L'heure</p>
<input className="input-style" type="time"/>
</label>


<div className="continue-wrap"><button>Valider</button></div>
<Link to="/"><FaArrowCircleLeft  className="icon-choix"/></Link>
<div className="continue-wrap pos"><button>Total: {total} €</button></div>
</form>




<div className="marg-right"></div>
</div>




    </div>)
}
export default Devis;

/*

suivants :

Déja on a deux formules :
1.Formule chrono

Formule Zen
// Logement actuel :
Indiquer Adresse de départ
Indiquer le Type de logement : - Maison - Appartement
Indiquer le Nombre d’étages
Besoin d’un monte Meuble ? Oui / Non
Si oui afficher si c pour une demi journée ou 7H
Portage : est-il possible de stationner un camion à moins de 30m de l’entrée du logement.
Oui / Non

Indiquer la surface approximative (en m3) à déménager
Afficher le devis carton standard
Afficher le devis carton libre

Indiquer le nombre de pièces.

Indiquer inventaire de cartons / meubles (voir si le client a des carton)
oui / non
(s’il n’a pas de carton on lui affiche le lien vers le shop : acheter es cartons)

//Logement futur :
Adresse d’arrivée (votre destination)
Type de logement : - Maison - Appartement
Nombre d’étages
Portage : est-il possible de stationner un camion à moins de 30m de l’entrée du logement.
Indiquer la surface approximative (en m2) à déménager
Indiquer le nombre de pièces.
Indiquer inventaire de cartons / meubles
Date de déménagement
heure de déménagement

Formules de calcul :
Tarif initial : 120 euro HT Tarif Monte meuble : ½ journé = 250 HT euro / 7h 450 HT euro
Tarif surface approximative : 10 cartons standards => 1 m3 = 40 euro HT
15 cartons libres => 1 m3 = 50 euro HT Tarif portage : moins de 30m c 'est gratuit / au dela de 30 m il paye 15 euro

*/ 





/*

<label>
<p className="title">
est-il possible de stationner un camion à moins de 30m de l’entrée du logement?
</p>
<div className="check-box">
      <label for="scales">Oui
       <input type="checkbox" id="scales" name="monte" checked={dep1} onClick={handelChangedep1}/>
     </label>
<label for="scales">Non
            <input type="checkbox" id="scales" name="n-monte" checked={dep2} onClick={handelChangedep2}/>
  </label>

</div>






</label>



*/