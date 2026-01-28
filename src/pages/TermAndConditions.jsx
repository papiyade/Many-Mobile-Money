import React from 'react';

export default function TermsAndConditions() {
    return (
        <div className="terms-container text-center p-8 max-w-4xl mx-auto bg-base-200/50 bg-gradient-to-b from-primary/10 to-secondary/10 rounded-2xl shadow-lg">
            <h1 className='text-primary font-semibold text-2xl text-center'>Terms and Conditions</h1>
            
            <p className="intro">
                By downloading or using this mobile money application, you agree to these Terms and Conditions.
            </p>

            <section>
                <h2 className='text-primary font-semibold text-lg text-center'>Use of the App</h2>
                <p>
                    This app provides mobile money services including sending and receiving money, bill payments, and wallet management. Users must comply with all applicable laws and regulations.
                </p>
            </section>

            <section>
                <h2 className='text-primary font-semibold text-lg text-center'>User Accounts</h2>
                <p>
                    Users are responsible for keeping their login credentials secure. All activity performed through a user's account is the user's responsibility.
                </p>
            </section>

            <section>
                <h2 className='text-primary font-semibold text-lg text-center'>Transactions</h2>
                <p>
                    Transactions are processed securely. The app provider is not responsible for delays or failures caused by network issues or third-party service providers.
                </p>
            </section>

            <section>
                <h2 className='text-primary font-semibold text-lg text-center'>Fees</h2>
                <p>
                    Some transactions may include fees. Any applicable fees will be displayed before the transaction is completed.
                </p>
            </section>

            <section>
                <h2 className='text-primary font-semibold text-lg text-center'>Prohibited Use</h2>
                <p>
                    Users must not use the app for illegal, fraudulent, or unauthorized purposes.
                </p>
            </section>

            <section>
                <h2 className='text-primary font-semibold text-lg text-center'>Limitation of Liability</h2>
                <p>
                    The app is provided "as is" without warranties of any kind. The app provider shall not be liable for indirect or consequential damages.
                </p>
            </section>

            <section>
                <h2 className='text-primary font-semibold text-lg text-center'>Termination</h2>
                <p>
                    We reserve the right to suspend or terminate user access if these terms are violated.
                </p>
            </section>

            <section>
                <h2 className='text-primary font-semibold text-lg text-center'>Changes to Terms</h2>
                <p>
                    These Terms and Conditions may be updated at any time. Continued use of the app indicates acceptance of the updated terms.
                </p>
            </section>

            <section>
                <h2 className='text-primary font-semibold text-lg text-center'>Apple Disclaimer</h2>
                <p>
                    Apple Inc. is not a party to these Terms and Conditions and is not responsible for the app or its content. Any claims related to the app must be directed to the app provider, not Apple.
                </p>
            </section>

            <section>
                <h2 className='text-primary font-semibold text-lg text-center'>Governing Law</h2>
                <p>
                    These Terms are governed by applicable laws and regulations.
                </p>
            </section>

            <section>
                <h2 className='text-primary font-semibold text-lg text-center'>Contact Information</h2>
                <p>
                    For questions regarding these Terms and Conditions, contact:
                    <br />
                    Email: <a href="mailto:contact@bbsmastergroup.com" className='font-semibold text-secondary'>contact@bbsmastergroup.com</a>
                </p>
            </section>
        </div>
    );
}