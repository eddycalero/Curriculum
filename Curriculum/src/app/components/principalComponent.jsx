import "../styles/curriculumStyle.css";

const PrincipalComponent = () => {
  return (
    <section className="principal">
     <section className="section-principal">
        <section className="section-one">
          <section className="section-one-one">
            <img className="img-curriculum" src="../../../public/assets/curriculum.jpeg"/>
          </section>
            <section className="section-two-principal">
              <section className="section-info-one">
               <section className="Title-one">
               Educacion
               </section>
               <section className="Information-one">
               Instituto Juan XXlll:
               <br/>
               2012-2013
               <br/><br/>
               Escuela Secundaria San Marcos:
               <br/>
               2014-2016
               <br/><br/>
               Instituto San sebastian:
               <br/>
               2018-2019
               <br/><br/>
               Universidad Nacional de Ingenieria:
               <br/>
               2020-Present
               </section>
               <section className="Title-two">
              Referencias
              </section>
              </section> 
          </section>

          <section className="section-tree-principal">
          <section className="section-one-tree">
                <section className="section-one-tree-one"></section>
                   <section className="section-one-tree-two">
                  Telefono:
                  </section>
                </section>  
                <section className="infoEx">
                 +505-57163729
                </section>  
           <section className="section-one-four">
          <section className="section-one-tree-one"></section>
                <section className="section-one-tree-two">
                  Gmail:
                </section>
           </section>  
           <section className="infoEx">
           Caleroeddy99@Gmail
            </section>    
           <section className="section-one-five">
          <section className="section-one-tree-one"></section>
                <section className="section-one-tree-two">
                  Git-hub:
                </section>
           </section>
           <section className="infoEx">
           eddycalero
                </section> 
        </section>
          </section>


        <section className="section-two">
          <section className="section-two-one">
          <section>
            Eddy Jose Calero Perez
            <br/>
            Ingeniero de Sistemas
          </section>
          </section>
          <section className="section-two-two">
            <section className="section-two-two-one">
              Sobre mi
            </section>
            <article>
              <br/>
              Actual estudiante del cuarto año de Ingenieria de Sistemas en la Universidad Nacional de Ingeniria, con deseo de formar 
              parte del mundo laboral y adquirir conocimientos sobre la industria. Cuento con don de gentes
               y tengo la capacidad de realizar varias tareas de manera simultánea.
            </article>
            
            <section className="section-two-two-one">
              Sofware Skill
            </section>
            <ul>
              <li>
              C#
              </li>
              <li>
                JAVA
              </li>
              <li>
                HTML
              </li>
              <li>
                CSS
              </li>
              <li>
                JS
              </li>
              <li>
                REACT
              </li>
              <li>
                SQL
              </li>
              <li>
                SCRUM
              </li>
              <li>
                .NET CORE 6
              </li>
            </ul>
          </section>
          
        </section>
     </section>
     </section>
  );
};

export { PrincipalComponent };