import React from 'react'
import logo from "../../assets/img/logo-premium.svg"
import "./style.scss"
const Premium = () => {
    return (
        <>
            <section className='premium'>
                <div className="container-fluid h-100">
                    <div className="row h-100">
                        <div className="col-lg-2  d-flex justify-content-start align-items-start">
                            <div className="logo">
                                <img src={logo} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-10">
                            <div className="right-text">
                                <h1>iSpace - Azərbaycan Respublikasında Apple Premium Reseller statuslu yeganə satış nöqtəsidir.</h1>
                                <h6>Apple Premium Reseller statusu yalnız işinin peşəkarlarına verilir.</h6>
                                <p>Mağazalarımız Mac kompyuterlərinin, iPhone smarfonlarının, iPad planşetlərinin və iPod pleyerlərinin bütün çeşidlərini, aksessuarlarının və proqram təminatının bütün növlərini təklif edir. iSpace- Azərbaycanda Apple səlahiyətlərinin mərkəzidir, haraya siz istədiyiniz zaman yaxınlaşıb, sizi maraqlandıran suallara cavab və peşəkar məsləhət ala bilərsiniz.</p>
                                <span>Tam göstər <i class="fa-solid fa-chevron-right"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Premium