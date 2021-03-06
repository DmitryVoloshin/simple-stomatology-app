import React from 'react';
import DoctorsBlock from '../../Logic-components/doctors-list-logic/DoctorBlock';


import './Doctors.css'

const Doctors = ( {howManyDocs} ) =>{
    return <section >
                 <div className="doctors-about_block">
                    <h3 className="about-block_title">Наши специалисты</h3>
                    <p className="about-block_info">
                    Высококвалифицированные врачи-стоматологи AstraDent регулярно посещают профессиональные
                    мастер-классы и стажируются в Украине и за рубежом, чтобы быть в курсе всех современных тенденций
                    дентальной медицины. Наши специалисты оснащены современной техникой мировых лидеров
                    производства стоматологического оборудования и используют только высококачественные
                    сертифицированные материалы от ведущих компаний.
                    </p>
                 </div>
                    <DoctorsBlock howManyDocs={howManyDocs}/>
           </section>
}

export default Doctors