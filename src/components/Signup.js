import React from 'react';

import './Signup.css';
import { StaticImage } from "gatsby-plugin-image"

const BLOG_FORM_ID = '2498386';

class Signup extends React.Component {
  render() {
    let form = {
        id: BLOG_FORM_ID,
        title: 'Subscribe to the Newsletter',
        subTitle: 'Subscribe to get my latest content by email.',
        buttonText: 'Subscribe',
      };
    return (
      <form
        action={`https://app.convertkit.com/forms/${form.id}/subscriptions`}
        className="seva-form formkit-form"
        method="post"
        min-width="400 500 600 700 800"
        style={{
          boxShadow: 'var(--form-shadow)',
          backgroundColor: 'var(--bg)',
          borderRadius: '6px',
        }}
      >
        <div data-style="full">
          <div
            data-element="column"
            className="formkit-column"
            style={{ backgroundColor: 'var(--bg-secondary)' }}
          >
            <h1
              className="formkit-header"
              data-element="header"
              style={{
                color: 'var(--textTitle)',
                fontSize: '20px',
                fontWeight: 700,
              }}
            >
              {form.title}
            </h1>
            <div
              data-element="subheader"
              className="formkit-subheader"
              style={{ color: 'var(--textNormal)' }}
            >
              <p>{form.subTitle}</p>
            </div>
            <div className="formkit-image">
              <StaticImage src="../images/4YbcCnBAfRNnCyBWJU2pTW.png" />
            </div>
          </div>
          <div data-element="column" className="formkit-column">
            <ul
              className="formkit-alert formkit-alert-error"
              data-element="errors"
              data-group="alert"
            />

            <div data-element="fields" className="seva-fields formkit-fields">
              <div className="formkit-field">
                <input
                  className="formkit-input"
                  aria-label="Your first name"
                  name="fields[first_name]"
                  placeholder="Your first name"
                  type="text"
                  style={{
                    borderColor: 'rgb(227, 227, 227)',
                    borderRadius: '4px',
                    color: 'rgb(0, 0, 0)',
                    fontWeight: 400,
                  }}
                  required
                />
              </div>
              <div className="formkit-field">
                <input
                  className="formkit-input"
                  name="email_address"
                  aria-label="Your email address"
                  placeholder="Your email address"
                  required
                  type="email"
                  style={{
                    borderColor: 'rgb(227, 227, 227)',
                    borderRadius: '4px',
                    color: 'rgb(0, 0, 0)',
                    fontWeight: 400,
                  }}
                />
              </div>
              <button
                data-element="submit"
                className="formkit-submit formkit-submit"
                style={{
                  backgroundColor: '#1677be',
                  borderRadius: '24px',
                  color: 'white',
                  fontWeight: 700,
                }}
              >
                <div className="formkit-spinner" />
                <span>{form.buttonText}</span>
              </button>
            </div>
            <div
              data-element="guarantee"
              className="formkit-guarantee"
              style={{
                color: 'var(--textNormal)',
                fontSize: '13px',
                fontWeight: 400,
              }}
            >
              <p>I won’t send you spam.</p>
              <p>
                Unsubscribe at <em>any</em> time.
              </p>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default Signup;