import React from 'react';
import DoctorsBlock from '../../Logic-components/DoctorsListLogic/DoctorBlock';


import './Doctors.css'

const Doctors = ( ) =>{
    return <section >
                 <div className="Doctors-about_block">
                    <h3 className="about-block_title">Наши специалисты</h3>
                    <p className="about-block_info">
                    Высококвалифицированные врачи-стоматологи AstraDent регулярно посещают профессиональные
                    мастер-классы и стажируются в Украине и за рубежом, чтобы быть в курсе всех современных тенденций
                    дентальной медицины. Наши специалисты оснащены современной техникой мировых лидеров
                    производства стоматологического оборудования и используют только высококачественные
                    сертифицированные материалы от ведущих компаний.
                    </p>
                 </div>
                    <DoctorsBlock/>
                <div>
                    g
                </div>

           </section>
}

export default Doctors