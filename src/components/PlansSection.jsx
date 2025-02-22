import './../styles/PlansSection.css';
import PlanCard from '../components/PlanCard';
import evoluciona_plan_img from '../assets/evoluciona-plan-img.png';

const PlansSection = () => {
  return (
    <div id="plans-section">
        <h1 id="plans-title">Nuestros planes</h1>
        <p id="plans-subtitle">Elige tu plan ideal y un asesor te ayudará a completar tu afiliación de manera fácil y rápida</p>
        <div id="plans-cards-container">
            <PlanCard
                title="Plan evoluciona"
                image={evoluciona_plan_img}
                paragraph="Podrás encontrar en un plan económico coberturas en temas de hospitalización, cirugías, consultas con las especialidades, exámenes de laboratoria y convenios con las mas importantes clínicas del país"
                borderColor="#e2e72b" // Color azul claro para el borde superior
            />
                <PlanCard
                title="Plan clasico"
                image={evoluciona_plan_img}
                paragraph="Este programa te permite tener un directorio medico mas amplio coberturas de emergencias fuera del país, rembolsos y cobertura ilimitada en Colombia"
                borderColor="#2e6df5" // Otro tono de azul para el borde superior
            />
                <PlanCard
                title="Plan global"
                image={evoluciona_plan_img}
                paragraph="El plan global nos gozar de una cobertura mas amplianos dentro y fuera del pais, convenio con las Clínicas importantes, toda la atencion en hospitalizacion, cirigias, gastos hospitalarios."
                borderColor="#04a7cc" // Otro tono de azul para el borde superior
            />
        </div>
        
    </div>
  );
}

export default PlansSection;