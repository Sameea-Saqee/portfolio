import MailchimpSubscribe from "react-mailchimp-subscribe";
import { Newsletter } from "./Newsletter";

export const MailchimpForm = () => {
  // Demo version - agar Mailchimp credentials nahi hain toh bhi form dikhega
  const postUrl = process.env.REACT_APP_MAILCHIMP_URL ? 
    `${process.env.REACT_APP_MAILCHIMP_URL}?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}` : 
    "";

  const handleSubscribe = (formData) => {
    // Demo functionality - agar Mailchimp setup nahi hai
    if (!postUrl) {
      console.log('Demo subscription:', formData);
      alert('Thank you for subscribing! (Demo mode)');
      return Promise.resolve();
    }
  };

  return (
    <>
      {postUrl ? (
        <MailchimpSubscribe
          url={postUrl}
          render={({ subscribe, status, message }) => (
            <Newsletter
              status={status}
              message={message}
              onValidated={formData => subscribe(formData)}
            />
          )}
        />
      ) : (
        <Newsletter
          status={null}
          message={null}
          onValidated={handleSubscribe}
        />
      )}
    </>
  )
}