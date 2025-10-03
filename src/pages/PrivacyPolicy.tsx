import { Container } from '../components/ui/Container'
import { SEO } from '../components/seo/SEO'

export const PrivacyPolicy = () => {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="SafeSkillz Limited privacy policy and data protection information"
      />
      <div className="py-16 bg-gray-50 dark:bg-gray-900">
        <Container>
          <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Privacy Policy
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">
              Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
            </p>

            <div className="prose dark:prose-invert max-w-none space-y-6">
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  1. Introduction
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  SafeSkillz Limited ("we", "our", "us") is committed to protecting your privacy and personal data.
                  This Privacy Policy explains how we collect, use, store, and protect your information in accordance
                  with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  SafeSkillz Limited is the data controller responsible for your personal data. If you have any
                  questions about this policy, please contact us at info@safeskillz.co.uk.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  2. Information We Collect
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  We collect and process the following types of personal data:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                  <li><strong>Identity Data:</strong> Name, title, company name, job role</li>
                  <li><strong>Contact Data:</strong> Email address, telephone number, postal address</li>
                  <li><strong>Technical Data:</strong> IP address, browser type, device information, cookies</li>
                  <li><strong>Usage Data:</strong> How you use our website and training materials</li>
                  <li><strong>Training Data:</strong> Course enrollment, attendance records, assessment results, certificates</li>
                  <li><strong>Marketing Data:</strong> Your preferences for receiving marketing communications</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  3. How We Use Your Information
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  We process your personal data for the following purposes:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>To provide cybersecurity training courses and educational services</li>
                  <li>To process course bookings and payments</li>
                  <li>To issue certificates and maintain training records</li>
                  <li>To communicate with you about your training and our services</li>
                  <li>To send marketing communications (with your consent)</li>
                  <li>To improve our website and services</li>
                  <li>To comply with legal and regulatory requirements</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  4. Legal Basis for Processing
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  We rely on the following legal bases for processing your personal data:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                  <li><strong>Contract Performance:</strong> To fulfill our training services agreement with you</li>
                  <li><strong>Legitimate Interests:</strong> To operate and improve our business, provided your rights are not overridden</li>
                  <li><strong>Consent:</strong> For marketing communications and non-essential cookies</li>
                  <li><strong>Legal Obligation:</strong> To comply with applicable laws and regulations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  5. Data Sharing and Disclosure
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  We may share your personal data with:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Training partners and accreditation bodies (where required for certification)</li>
                  <li>IT service providers and hosting companies</li>
                  <li>Payment processors for secure transaction handling</li>
                  <li>Professional advisors (lawyers, auditors, insurers)</li>
                  <li>Government authorities when legally required</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 mt-3">
                  We do not sell your personal data to third parties.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  6. International Data Transfers
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  Your personal data is primarily stored within the United Kingdom. If we transfer data outside
                  the UK, we ensure appropriate safeguards are in place, such as Standard Contractual Clauses
                  or adequacy decisions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  7. Data Retention
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  We retain your personal data only for as long as necessary to fulfill the purposes outlined
                  in this policy. Training records and certificates are typically retained for 7 years for
                  professional accreditation and legal requirements. Marketing data is retained until you
                  withdraw consent.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  8. Your Data Protection Rights
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Under UK GDPR, you have the following rights:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                  <li><strong>Right of Access:</strong> Request a copy of your personal data</li>
                  <li><strong>Right to Rectification:</strong> Correct inaccurate or incomplete data</li>
                  <li><strong>Right to Erasure:</strong> Request deletion of your personal data</li>
                  <li><strong>Right to Restrict Processing:</strong> Limit how we use your data</li>
                  <li><strong>Right to Data Portability:</strong> Receive your data in a structured format</li>
                  <li><strong>Right to Object:</strong> Object to processing based on legitimate interests</li>
                  <li><strong>Right to Withdraw Consent:</strong> Withdraw consent for marketing or cookies</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 mt-4">
                  To exercise these rights, contact us at info@safeskillz.co.uk
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  9. Cookies and Tracking Technologies
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  Our website uses cookies to improve your experience. For detailed information about the
                  cookies we use and your choices, please see our{' '}
                  <a href="/cookie-policy" className="text-primary hover:underline">
                    Cookie Policy
                  </a>
                  .
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  10. Data Security
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  We implement appropriate technical and organizational measures to protect your personal data
                  against unauthorized access, alteration, disclosure, or destruction. This includes encryption,
                  secure servers, access controls, and regular security assessments.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  11. Children's Privacy
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  Our services are intended for individuals aged 18 and over. We do not knowingly collect
                  personal data from children under 18. If you believe we have collected such data, please
                  contact us immediately.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  12. Changes to This Policy
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  We may update this Privacy Policy from time to time. Changes will be posted on this page
                  with an updated revision date. We encourage you to review this policy periodically.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  13. Contact Us
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  If you have questions about this Privacy Policy or wish to exercise your data protection rights:
                </p>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>SafeSkillz Limited</strong><br />
                    Email: info@safeskillz.co.uk<br />
                    Phone: +44 (0)7946630285<br />
                    Address: London, United Kingdom
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  14. Complaints
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  If you are not satisfied with our response to your data protection concerns, you have the
                  right to lodge a complaint with the Information Commissioner's Office (ICO):
                </p>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg mt-3">
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Information Commissioner's Office</strong><br />
                    Website:{' '}
                    <a
                      href="https://ico.org.uk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      www.ico.org.uk
                    </a>
                    <br />
                    Helpline: 0303 123 1113
                  </p>
                </div>
              </section>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}
