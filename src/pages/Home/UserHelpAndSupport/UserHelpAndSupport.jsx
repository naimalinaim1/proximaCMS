import React from "react";

const UserHelpAndSupport = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Help and Support</h2>
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">FAQs</h3>
        <ul className="list-disc list-inside">
          <li>How do I reset my password?</li>
          <li>How do I update my account information?</li>
          <li>How do I cancel my subscription?</li>
          <li>How do I contact customer support?</li>
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
        <p>
          For any additional questions or support, please contact our customer
          support team at:
        </p>
        <ul className="list-disc list-inside">
          <li>Phone: 1-800-123-4567</li>
          <li>Email: support@yourcompany.com</li>
          <li>Live Chat: Available 24/7 on our website</li>
        </ul>
      </div>
    </div>
  );
};

export default UserHelpAndSupport;
