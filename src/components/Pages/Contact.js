import React, {Component} from 'react';
import Fields from '../Common/Fields.js';
import {withFormik} from 'formik';
import *as Yup from 'yup';

const fields = {
    sections: [
        [
        {name: 'name', elementName: 'input', type: 'text', placeholder: 'Your Name*'},
        {name: 'email', elementName: 'input', type: 'email', placeholder: 'Your Email*'},
        {name: 'phone', elementName: 'input', type: 'text', placeholder: 'Your Phone Number*'}
   

    ],
    [
        
    {name: 'mesage', elementName: 'textarea', type: 'text', placeholder: 'Type Your Message*'}

    ]
]

}



class Contact  extends Component{

    render(){
        return(
             <section className="page-section" id="contact">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Contact Us</h2>
          <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <form onSubmit={this.props.handleSubmit}  name="sentMessage" novalidate="novalidate">
             <div className="row">
                {fields.sections.map((section, sectionIndex) => {
                    console.log("Rendering section", sectionIndex, "With", section);
                    return(
                        <div className="col-md-6" key={sectionIndex}>
                        {section.map((field, i) => {
                            return <Fields 
                            {...field} 
                            key={i}  
                            value={this.props.values[field.name]}  
                            name={field.name}
                            onChange={this.props.handleChange}
                            onBlur={this.props.handleBlur}
                            touched={(this.props.touched[field.name])}
                            errors={this.props.errors[field.name]}

                            />

                        })}
                        
                        </div>
                    )
                })}
                
              <div className="clearfix"></div>
              <div className="col-lg-12 text-center">
                <div id="success"></div>
                <button  className="btn btn-primary btn-xl text-uppercase" type="submit"
                >Send Message</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
        )
    }

}
export default withFormik({
    mapPropsToValues: () => ({
        name: '',
        email: '',
        phone: '',
        message: '',
    }),
    validationSchema: Yup.object().shape({
        name: Yup.string().min(3, 'come on your name is longer than that').required('You must give us your name.'),

       /*  email: Yup.string().email('you need to submit an email').reuired('your email is required'),

        phone: Yup.string().min(10, 'please provide 10 digits').max(15,'Your number canot be more than 15').required('we need your number'),

        message: Yup.string().min(500, 'more information').required('we need this'), */

      

        

    }),
   
    handleSubmit: (values, {setSubmitting}) => {
        console.log("VALUES", values);
        alert("you have submitted the form", JSON.stringify(values));
    }
})(Contact);