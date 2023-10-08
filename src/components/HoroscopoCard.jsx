import React from 'react';
import PropTypes from 'prop-types';

import ariestImg from '../assets/aries.png';
import tauroImg from '../assets/tauro.png';
import geminisImg from '../assets/geminis.png';
import cancerImg from '../assets/cancer.png';
import leoImg from '../assets/signo-de-leo.png';
import virgoImg from '../assets/virgo.png';
import libraImg from '../assets/libra.png';
import escorpioImg from '../assets/escorpio.png';
import sagitarioImg from '../assets/sagitario.png';
import capricornioImg from '../assets/capricornio.png';
import acuarioImg from '../assets/acuario.png';
import piscisImg from '../assets/piscis.png';




const HoroscopoCard = ({ fecha }) => {

  const imagenesHoroscopos = {
    'Aries': ariestImg,
    'Tauro': tauroImg,
    'Géminis': geminisImg,
    'Cáncer': cancerImg,
    'Leo': leoImg,
    'Virgo': virgoImg,
    'Libra': libraImg,
    'Escorpio': escorpioImg,
    'Sagitario': sagitarioImg,
    'Capricornio': capricornioImg,
    'Acuario': acuarioImg,
    'Piscis': piscisImg,
  };
    const mes = fecha.getMonth() + 1;
    const dia = fecha.getDate();

    let signo = '';

    // Aquí determinamos el signo zodiacal según la fecha
    if ((mes === 3 && dia >= 21) || (mes === 4 && dia <= 19)) {
        signo = 'Aries';
    } 
    if((mes === 4 && dia >= 20) || (mes === 5 && dia <= 20)) {
      signo = 'Tauro';
    }
    if((mes === 5 && dia >= 21) || (mes === 6 && dia <= 20)) {
      signo = 'Géminis';
    }
    if((mes === 6 && dia >= 21) || (mes === 7 && dia <= 22)) {
      signo = 'Cáncer';
    }
    if((mes === 7 && dia >= 23) || (mes === 8 && dia <= 22)) {
      signo = 'Leo';
    }
    if((mes === 8 && dia >= 23) || (mes === 9 && dia <= 22)) {
      signo = 'Virgo';
    }
    if((mes === 9 && dia >= 23) || (mes === 10 && dia <= 22)) {
      signo = 'Libra';
    }
    if((mes === 10 && dia >= 23) || (mes === 11 && dia <= 21)) {
      signo = 'Escorpio';
    }
    if((mes === 11 && dia >= 22) || (mes === 12 && dia <= 21)) {
      signo = 'Sagitario';
    }
    if((mes === 12 && dia >= 22) || (mes === 1 && dia <= 19)) {
      signo = 'Capricornio';
    }
    if((mes === 1 && dia >= 20) || (mes === 2 && dia <= 18)) {
      signo = 'Acuario';
    }
    if((mes === 2 && dia >= 19) || (mes === 3 && dia <= 20)) {
      signo = 'Piscis';
    }


    
    const horoscopos = {
        'Aries': 'Amor: No es una semana favorable en el amor. Será un momento de definiciones, evita apegarte demasiado.Dinero: Puede haber incertidumbre en el trabajo, evalúa tus prioridades.Clave de la semana: Si sigues intentando, encontrarás oportunidades.',
        'Tauro': 'Amor: Buena etapa para establecer bases sólidas en tu relación. Alguien especial te conmoverá. Dinero: Trabaja en las relaciones públicas, están cerca de tus objetivos aunque hay más trabajo que dinero. Clave de la semana: Crea conexiones que te acerquen a la competencia.',
        'Géminis': 'Amor: Replantea tu rumbo en el amor ya que Venus cambia de signo y no te favorece. Dinero: Mantente coherente en el trabajo, pronto tendrás que rendir cuentas. Clave de la semana: Sé inclusivo con personas diferentes a ti.',
        'Cáncer': 'Amor: Momento propicio para mostrar afecto hacia tu pareja. Dinero: Evita negocios de alto riesgo, es mejor trabajar en equipo. Clave de la semana: Atiende a tu familia cuando te necesiten.',
        'Leo': 'Amor: No te sacrifiques demasiado por los demás, da solo lo que puedas. Dinero: Mantén un perfil bajo en asuntos financieros. Clave de la semana: Amor con libertad, evita resolver los problemas de otros.',
        'Virgo': 'Amor: Venus te favorece, estarás muy cariñoso y demandante. Dinero: Buen momento para ganar terreno en el ámbito laboral. Clave de la semana: No compartas tus triunfos con personas negativas.',
        'Libra': 'Amor: Con el cambio de signo de Venus, hay un desbalance en tu relación. Dinero: Recibirás fondos para un proyecto. Clave de la semana: Recibirás ayuda de quienes has ayudado antes.',
        'Escorpio': 'Amor: Fuerte cohesión con tu pareja y familia. Dinero: Tendrás una posición ganadora en asuntos financieros. Clave de la semana: No busques consejo si ya tomaste una decisión.',
        'Sagitario': 'Amor: Posible desilusión o desconexión afectiva temporal. Dinero: Reorganiza tus fuerzas para resolver imprevistos. Clave de la semana: Un pequeño error no te derribará, podrás con todo.',
        'Capricornio': 'Amor: Venus transforma el amor en un viaje emocionante. Dinero: No es momento para cambios laborales. Clave de la semana: Amar significa estar presente.',
        'Acuario': 'Amor: No planifiques el amor, si surge un sentimiento sincero, acéptalo. Dinero: Buen momento en lo profesional, pronto recibirás lo que mereces. Clave de la semana: Mejor arrepentirse de intentar un cambio que de no intentar nada.',
        'Piscis': 'Amor: Establece límites claros en tus relaciones, sé franco. Dinero: Cuidado con el manejo de dinero ajeno. Clave de la semana: La madurez se refleja en actuar correctamente y en el momento adecuado​.',
    };

    return (
      <div className="horoscopo-card">
          <h2>Horóscopo React</h2>
          <img src={imagenesHoroscopos[signo]} alt={signo} style={{ width: '100px', height: '100px' }} />

          <h3>{signo}</h3>
          <p>{horoscopos[signo]}</p>
      </div>
  );
  
};

HoroscopoCard.propTypes = {
  fecha: PropTypes.instanceOf(Date).isRequired
}

export default HoroscopoCard;
