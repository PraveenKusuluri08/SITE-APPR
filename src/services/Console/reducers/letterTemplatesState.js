export default {
  defaultContent: `<div className='Date'>
        <span id='variable_todaydate'>~TodayDate~</span>
      </div>
      
      <center>
        <h1> Offer Letter </h1>
      </center>
      <div className='Address'>
        <span id='variable_universityname'>~UniversityName~</span>
        <br />
        <span id='variable_universityaddress'>~UniversityAddress~</span>
      </div>
      <p>
        This is to verify that Mr.<span id='variable_firstname'>~FirstName~</span><span id='variable_firstname'></span> 
        <span id='variable_lastname'>~LastName~</span> has been offered a full time position
        (40hr/Week), with <span id='variable_companyname'>~CompanyName~</span> as <span id='variable_jobtitle'>~JobTitle~</span> 
        effective from <span id='variable_effectivedate'>~EffectiveDate~</span>. This offer will be a
        knowledge based internship during the above mentioned period. Please
        note that this offer is contingent on successful CPT approval As a 
        <span id='variable_jobtitle'>~JobTitle~</span> Mr. <span id='variable_firstname'>~FirstName~</span> 
        <span id='variable_lastname'>~LastName~</span> will perform the following job duties:
      </p>
      
      <p>
        I certify that our organization <span id='variable_companyname'>~CompanyName~</span> is registered
        E-verify Company. The E-Verify Company Identification Number is 
        <span id='variable_everifynumber'>~CompanyEverifyNumber~</span>. Our Companies EIN is 
        <span  id='variable_einnumber'>~CompanyEIN~</span>. I agree to comply with the reporting
        requirements for students on authorized Curricular Practical Training
        (CPT). I agree to report the termination or departure of the student to
        you and to the university within 48 hours of termination of employment.
        You will be in our branch office at <span  id='variable_companyname'>~CompanyName~</span>, 
        <span  id='variable_companyaddress'>~CompanyAddress~</span>.
      </p>
      
      <p>
        If any additional information is required, please contact me at 
        <span id='variable_hrmailid'>~HRMailId~</span>
      </p>
      <div className='final'>
        <p>
          Sincerely,
          <br />
          <span id='variable_authorizedSign'>~AuthorizedPersonSignature~</span>
          <br />
          <span id='variable_authorizedname'>~AuthorizedName~</span>
          <br />
          <span id='variable_designation'>~AuthorizedPersonDesignation~</span>
        </p>
      </div>`,
  isLoaded: false,
  isEmpty: true,
  updating: false,
  id: "",
  name: "",
  type: "",
  content: "",
}
