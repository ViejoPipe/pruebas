// TablePlans.jsx
import React, { useState, useRef } from 'react';
import '../styles/tablePlans.css';

const TablePlans = () => {
  const [showAll, setShowAll] = useState(false);
  const [buttonClass, setButtonClass] = useState('');
  const tableRef = useRef(null);

  const rows = [
    ['Habitación individual', '✔️', '✔️', '✔️'],
    ['Unidad de cuidados intensivos y especiales', '✔️', '✔️', '✔️'],
    ['Gastos hospitalarios ', '✔️', '✔️', '✔️'],
    ['Hospitalizaciones psiquiátricas', '✔️', '✔️', '✔️'],
    ['Transplantes', '✔️', '✔️', '✔️'],
    ['Cirugía ambulatoria y tratamiento de fracturas, luxaciones y esguinces ', '✔️', '✔️', '✔️'],
    ['Tratamiento ambulatorio por cáncer o leucemina', '✔️', '✔️', '✔️'],
    ['Tratamiento por hemodiálisis y diálisis peritoneal ', '✔️', '✔️', '✔️'],
    ['Tratamiento por VIH - SIDA', '✔️', '✔️', '✔️'],
    ['Exámenes de diagnóstico', '✔️', '✔️', '✔️'],
    ['Terapias físicas', '✔️', '✔️', '✔️'],
    ['Nebulizaciones, terapias del lenguaje, respiratorias, cardiacas, ortópticas, linfáticas, pleóticas, pélvicas, y ocupacionales', '✔️', '✔️', '✔️'],
    ['Infiltraciones ortopédicas, intratimpánicas y dermatológicas', '✔️', '✔️', '✔️'],
    ['Urgencias por accidente', '✔️', '✔️', '✔️'],
    ['Donación de órganos', '✔️', '✔️', '✔️'],
    ['Enfermera en casa, luego de cirugías u hospitalizaciones', '✔️', '✔️', '✔️'],
    ['Plan de atención médica hospitalaria en casa', '✔️', '✔️', '✔️'],
    ['Gastos de prótesis', '✔️', '✔️', '✔️'],
    ['Urgencias odontológicas por accidentes', '✔️', '✔️', '✔️'],
    ['Laboratorios clínicos', '✔️', '✔️', '✔️'],
    ['Urgencias por enfermedad', '✔️', '✔️', '✔️'],
    ['Consulta médica externa', '✔️', '✔️', '✔️'],
    ['Gastos funerarios', '✔️', '✔️', '❌'],
    ['Medicamentos pre y posoperatorios, fracturas, luxaciones y esguinces', '✔️', '✔️', '❌'],
    ['Medicamentos por tratamientos ambulatorios para las enfermedades enunciadas en las condiciones generales', '✔️', '✔️', '❌'],
    ['Medicamentos secundarios ambulatorios a quimio, radio y hormonoterapia.', '✔️', '✔️', '❌'],
    ['Evaluación neuro psiquiátrica o neuro psicológica', '✔️', '✔️', '❌'],
    ['Escleroterapia hasta 10 sesiones por vigencia', '✔️', '✔️', '❌'],
    ['Urgencias por enfermedad o accidente fuera del país a través de asistencia en viaje', '✔️', '✔️', '❌'],
    ['Renta por días de hospitalización o cirugía', '✔️', '✔️', '❌'],
    ['Hospitalizaciones y cirugías programadas fuera del país', '✔️', '❌', '❌'],
    ['Tratamientos ambulatorios por cáncer y leucemia programados en el exterior', '✔️', '❌', '❌'],
    ['Tratamiento por hemodiálisis y diálisis peritoneal programado en el exterior', '✔️', '❌', '❌'],
    ['Examenes de diagnósticos radilógicos programados en el exterior', '✔️', '❌', '❌'],
    ['Maternidad y atención del parto', '✔️', '✔️', '✔️'],
    ['Cobertura para recién nacidos sin costo hasta la renovación', '✔️', '✔️', '❌'],
    ['EMD', '✔️', '✔️', '✔️'],
    ['Afiliación y mantenerse activo en EPS del Régimen Contributivo', '✔️', '✔️', '✔️'],
    ['Medicamentos secundarios a cáncer o leucemia', '✔️', '✔️', '❌'],
    ['Tratamientos específicos fuera de hospital o clínica', '✔️', '✔️', '❌'],
    ['Puvaterapias', '✔️', '✔️', '✔️'],
    ['Terapias de acondicionamiento físico', '✔️', '❌', '❌'],
    ['Terapia familiar', '✔️', '❌', '❌'],
    ['Terapia alternativa acupuntura', '✔️', '❌', '❌'],
    ['Asistencia en viaje', '✔️', '✔️', '❌'],
    ['Tamizaje genético', '✔️', '✔️', '❌'],
    ['Asistencia domiciliaria por urgencias', '✔️', '✔️', '✔️'],
    ['Odontología', '✔️', '✔️', '❌'],
    ['Psiquioterapia individual', '✔️', '❌', '❌'],
    ['Consulta por neuropsicología', '✔️', '❌', '❌'],
    ['Consulta por trabajo social', '✔️', '❌', '❌'],
    ['Medicamentos formulados derivados de la atención de una urgencia', '✔️', '✔️', '❌'],
    ['Exoneración pago de primas', '✔️', '✔️', '✔️'],
    ['Trasplantes', '✔️', '✔️', '✔️'],
    ['Donación de órganos (Compatible)', '✔️', '✔️', '✔️'],
    ['Terapias físicas musculares y esqueléticas, del lenguaje, respiratorias, cardiacas, ortópticas, linfáticas, pleópticas, pélvicas, ocupacionales, deglución y vestibulares: por tipo de terapia, vigencia anual y por asegurado.', '✔️', '✔️', '✔️'],
    ['Nebulizaciones', '✔️', '✔️', '✔️'],
  ];

  const handleToggle = () => {
    if (showAll) {
      tableRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    setShowAll(!showAll);
    setButtonClass(!showAll ? 'movable' : '');
  };

  return (
    <div id="tables-container">
      <h2 id="table-title">¿Que te ofrecemos?</h2>
      <table ref={tableRef} id="plans-table">
        <thead>
          <tr>
            <th></th>
            <th>Salud Global</th>
            <th>Salud Clásico</th>
            <th>Salud Evoluciona</th>
          </tr>
        </thead>
        <tbody id="plans-tbody">
          {rows.slice(0, showAll ? rows.length : 9).map((row, index) => (
            <tr key={index} className={!showAll && index >= 6 ? 'hidden' : ''}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {!showAll && <div id="table-fade"></div>}
      <button id="button" className={buttonClass} onClick={handleToggle}>
        {showAll ? 'Mostrar menos' : 'Mostrar todo'}
      </button>
      <p id="table-info">
        ¿Aún no tienes muy claro cuál plan debes elegir? no te preocupes contáctanos y te asesoramos de forma personalizada.
      </p>
      <div id="video-container">
        <iframe
          id="youtube-video"
          src="https://www.youtube.com/embed/K9codgO4_jg" // Formato correcto para embed
          title="YouTube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default TablePlans;