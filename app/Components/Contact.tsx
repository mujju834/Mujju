import emailjs from 'emailjs-com'; // Import EmailJS
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const [emailStatus, setEmailStatus] = useState({ sent: false, failed: false, visible: false });
  const [emailSent, setEmailSent] = useState(false);
  const [sendingFailed, setSendingFailed] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault(); // Prevent the form from submitting in the traditional way

    emailjs.sendForm('service_zhhuwpn', 'template_idfp4mj', e.target, 'ZKpasy-49q3Pgc5JA') // Replace 'user_XXXXXXXXXXXXX' with your EmailJS user ID
    .then((result) => {
      setEmailStatus({ sent: true, failed: false, visible: true });
      setTimeout(() => setEmailStatus((prevState) => ({ ...prevState, visible: false })), 3000);
    }, (error) => {
      setEmailStatus({ sent: false, failed: true, visible: true });
      setTimeout(() => setEmailStatus((prevState) => ({ ...prevState, visible: false })), 3000);
    });
};
  return (
    <div id='contact' className="target-section bg-blue-900 text-white py-10 px-4">
      <div className="container mx-auto">
        <div className="max-w-2xl bg-gray-900 rounded-lg shadow-md mx-auto p-8">
          <h2 className="text-3xl font-bold text-center mb-4">Contact</h2>
          <p className="text-center mb-8">
            Feel free to reach out to me for any questions or opportunities at
            <a href="mailto:mujjumazeme@gmail.com" className="text-purple-300"> mujjumazeme@gmail.com</a>
          </p>

          {(emailStatus.visible && emailStatus.sent) && (
            <div className={`animate-${emailStatus.visible ? 'fadeIn' : 'fadeOut'} bg-green-500 text-white px-6 py-3 rounded-md text-center mb-4`}>
              Your message has been sent successfully!
            </div>
          )}
          {(emailStatus.visible && emailStatus.failed) && (
            <div className={`animate-${emailStatus.visible ? 'fadeIn' : 'fadeOut'} bg-red-500 text-white px-6 py-3 rounded-md text-center mb-4`}>
              Failed to send your message. Please try again.
            </div>
          )}
          <form className="space-y-6" onSubmit={sendEmail}>
            <div>
              <label htmlFor="from_name" className="block mb-1">Your Name</label>
              <input type="text" id="from_name" name="from_name" style={{ height: '36px' }} className="w-full pl-2 rounded-md border-transparent bg-blue-800 focus:border-purple-500 focus:ring-0" />
            </div>
            <div>
              <label htmlFor="from_email" className="block mb-1">Your Email</label>
              <input type="email" id="from_email" name="from_email" style={{ height: '36px' }} className="pl-2 w-full bg-blue-800 rounded-md border-transparent focus:border-purple-500 focus:ring-0" />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1">Message</label>
              <textarea id="message" name="message" rows={4} className="pl-2 w-full rounded-md bg-blue-800 border-transparent focus:border-purple-500 focus:ring-0"></textarea>
            </div>
            <button type="submit" className="flex items-center justify-center w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-purple-700 bg-purple-300 hover:bg-purple-400">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              Send Message
            </button>
          </form>
        </div>
      </div>

      <style jsx>{`
        #contact {
          scroll-margin-top: 50px; /* Adjust this value as needed */
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeOut {
          from { opacity: 1; }
          to { opacity: 0; transform: translateY(-20px); }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
        .animate-fadeOut {
          animation: fadeOut 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Contact;
