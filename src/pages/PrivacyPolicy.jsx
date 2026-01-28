import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className="privacy-policy-container text-center p-8 max-w-4xl mx-auto bg-base-200/50 bg-gradient-to-b from-primary/10 to-secondary/10 rounded-2xl shadow-lg">
            <h1 className='text-primary font-semibold text-2xl text-center'>Privacy Policy</h1>
            <p>
                This Privacy Policy explains how this mobile money application collects, uses, and protects user information.
            </p>

            <h2 className='text-primary font-semibold text-lg text-center'>Information We Collect</h2>
            <p>The app may collect:</p>
            <ul>
                <li>Personal information such as name, phone number, and account details</li>
                <li>Transaction data related to money transfers and bill payments</li>
                <li>Device and usage information for security and performance purposes</li>
            </ul>

            <h2 className='text-primary font-semibold text-lg text-center'>How We Use Information</h2>
            <p>Information is used to:</p>
            <ul>
                <li>Provide mobile money services</li>
                <li>Process transactions securely</li>
                <li>Improve app functionality and user experience</li>
                <li>Prevent fraud and unauthorized access</li>
            </ul>

            <h2 className='text-primary font-semibold text-lg text-center'>Data Sharing</h2>
            <p>
                User data is not sold or shared with third parties except when required by law or necessary to operate the service.
            </p>

            <h2 className='text-primary font-semibold text-lg text-center'>Data Security</h2>
            <p>
                We apply appropriate technical and organizational security measures to protect user information.
            </p>

            <h2 className='text-primary font-semibold text-lg text-center'>User Rights</h2>
            <p>
                Users may request access, correction, or deletion of their personal data in accordance with applicable laws.
            </p>

            <h2 className='text-primary font-semibold text-lg text-center'>Children's Privacy</h2>
            <p>
                This app is not intended for children under the age of 13. We do not knowingly collect data from children.
            </p>

            <h2 className='text-primary font-semibold text-lg text-center'>Changes to This Policy</h2>
            <p>
                This Privacy Policy may be updated periodically. Continued use of the app means acceptance of the updated policy.
            </p>

            <h2 className='text-primary font-semibold text-lg text-center'>Contact Us</h2>
            <p>
                For any questions regarding this Privacy Policy, please contact:
                <br />
                    Email: <a href="mailto:contact@bbsmastergroup.com" className='font-semibold text-secondary'>contact@bbsmastergroup.com</a>
            </p>
        </div>
    );
};

export default PrivacyPolicy;