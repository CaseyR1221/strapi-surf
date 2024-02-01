'use client';

import { useState } from "react";

const SubscribeToNewsletter = () => {

  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const onChange = (e) => {
    setEmail(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('Subscribed with email:', email);

    if (email.length) {
      setSubscribed(true);
    }

    setEmail('');
  }

  return (
    <section className="newsletter">
      {subscribed ? (
        <h4 className="newsletter__thanks">Thanks for subscribing to the newsletter!</h4>
      ) : (
        <>
          <div className="newsletter__info">
            <h4>subscribe to our newsletter</h4>

            <p className="copy">
              Unlock Exclusive Insights and Stay In the Know – Subscribe to Our Newsletter Today to always stay in touch
            </p>
          </div>

          <form className="newsletter__form" onSubmit={onSubmit}>
            <input 
              type="text" 
              className="newsletter__email input" 
              placeholder="Enter your E-mail address" 
              value={email}
              onChange={onChange}
            />

            <button type="submit" className="newsletter__subscribe btn btn--medium btn--turquoise">
              SUBSCRIBE
            </button>
          </form>
        </>
      )}
    </section>
  )
}

export default SubscribeToNewsletter