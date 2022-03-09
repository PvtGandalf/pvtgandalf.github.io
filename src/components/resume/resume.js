import React, { Component } from 'react';
export default  class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">

         <div className="row education">

            <div className="three columns header-col">
               <h1><span>Education</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.education && resumeData.education.map((item)=>{
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.UniversityName}</h3>
                          <p className="info">
                            {item.specialization}
                            <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                          <p className="details">
                          Focus: {item.Focus}
                          </p>
                          <p className="details">
                          GPA: {item.GPA}
                          </p>
                       </div>
                    </div>
                  )
                })
              }
            </div>
         </div>
{/*
        <div className="row work">
            <div className="three columns header-col">
               <h1><span>Work</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.work && resumeData.work.map((item) => {
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.CompanyName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                          <p>
                          {item.Achievements}
                          </p>
                       </div>

                    </div>

                  )
                })
              }
            </div> 
         </div>
*/}
         <div className="row skill">

            <div className="three columns header-col">
               <h1><span>Skills</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.skills && resumeData.skills.map((item)=>{
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.skillname}</h3>
                       </div>
                    </div>
                  )
                })
              }
            </div>

         </div>

<div className="row project">

            <div className="three columns header-col">
               <h1><span>Projects</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.portfolio && resumeData.portfolio.map((item)=>{
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.name}</h3>
                          <p className="altDescription">{item.altDescription}</p>
                          {
                            item.achievements.map((item)=>{
                              return(
                                <ul className="achievements">
                                <li>{item.achievement}</li>
                                </ul>
                              )
                            })
                          }
                       </div>
                    </div>
                  )
                })
              }
            </div>
         </div>

      </section>
    );
  }
}
