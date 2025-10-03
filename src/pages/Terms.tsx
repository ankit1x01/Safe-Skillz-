import { Container } from '../components/ui/Container'
import { SEO } from '../components/seo/SEO'

export const Terms = () => {
  return (
    <>
      <SEO
        title="Terms and Conditions"
        description="SafeSkillz Limited website terms and conditions"
      />
      <div className="py-16 bg-gray-50 dark:bg-gray-900">
        <Container>
          <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Website Terms and Conditions
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">
              Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
            </p>

            <div className="prose dark:prose-invert max-w-none space-y-6">
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  1. Introduction
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  These terms and conditions govern your use of the SafeSkillz Limited website located at
                  safeskillz.co.uk. By using this website, you accept these terms and conditions in full.
                  If you disagree with any part of these terms, you must not use our website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  2. About SafeSkillz Limited
                </h2>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Company Name:</strong> SafeSkillz Limited<br />
                    <strong>Jurisdiction:</strong> United Kingdom<br />
                    <strong>Registered Office:</strong> London, United Kingdom<br />
                    <strong>Email:</strong> info@safeskillz.co.uk<br />
                    <strong>Phone:</strong> +44 (0)7946630285
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  3. License to Use Website
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Unless otherwise stated, SafeSkillz Limited and/or its licensors own the intellectual
                  property rights in the website and material on the website. You may:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>View pages from our website in a web browser</li>
                  <li>Download pages for caching in a web browser</li>
                  <li>Print pages from the website for personal use</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 mt-3 mb-3">
                  You must not:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Republish material from this website without attribution</li>
                  <li>Sell, rent, or sub-license material from the website</li>
                  <li>Reproduce or duplicate material for commercial purposes</li>
                  <li>Redistribute content from SafeSkillz Limited (except as permitted by social sharing)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  4. Acceptable Use
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  You must not use our website in any way that causes, or may cause, damage to the website
                  or impairment of the availability or accessibility of the website. You must not:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Use the website in any way that is unlawful, illegal, fraudulent or harmful</li>
                  <li>Use the website to transmit or send unsolicited commercial communications</li>
                  <li>Use the website for any purposes related to marketing without express consent</li>
                  <li>Use data mining, robots, screen scraping, or similar data gathering tools</li>
                  <li>Attempt to gain unauthorized access to our systems or networks</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  5. User-Generated Content
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  If you submit any content to our website (through contact forms, comments, or otherwise),
                  you grant SafeSkillz Limited a worldwide, irrevocable, non-exclusive, royalty-free license
                  to use, reproduce, adapt, publish and distribute such content for business purposes.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-3">
                  You warrant that any content you submit does not infringe any third-party intellectual
                  property rights and complies with applicable laws.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  6. Third-Party Links
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  Our website may contain links to third-party websites and services. These links are provided
                  for your convenience only. We have no control over third-party websites and accept no
                  responsibility for their content, privacy policies, or practices. Visiting third-party
                  sites is at your own risk.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  7. Limitation of Liability
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  To the extent permitted by law:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>
                    The website is provided "as is" without any representations or warranties, express or implied
                  </li>
                  <li>
                    We will not be liable for any loss or damage arising from your use of the website,
                    including (but not limited to) indirect or consequential loss
                  </li>
                  <li>
                    We do not guarantee the accuracy, completeness, or timeliness of information on the website
                  </li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 mt-3">
                  Nothing in these terms excludes or limits liability for death or personal injury caused
                  by negligence, fraud, or any liability that cannot be excluded under UK law.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  8. Data Protection and Privacy
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  Your use of our website is also governed by our{' '}
                  <a href="/privacy-policy" className="text-primary hover:underline">
                    Privacy Policy
                  </a>
                  . We process personal data in accordance with UK GDPR and the Data Protection Act 2018.
                  For information about cookies, please see our{' '}
                  <a href="/cookie-policy" className="text-primary hover:underline">
                    Cookie Policy
                  </a>
                  .
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  9. Training Services
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  These website terms are separate from our{' '}
                  <a href="/learner-terms" className="text-primary hover:underline">
                    Learner Terms and Conditions
                  </a>
                  , which govern the provision of training courses and educational services. By enrolling
                  in a course, you agree to both sets of terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  10. Indemnity
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  You agree to indemnify and hold harmless SafeSkillz Limited, its directors, employees,
                  and agents from any claims, losses, damages, and expenses (including legal fees) arising
                  from your breach of these terms or misuse of the website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  11. Breaches of These Terms
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  If you breach these terms, we may take one or more of the following actions:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Issue a warning</li>
                  <li>Suspend or terminate your access to the website</li>
                  <li>Block computers using your IP address from accessing the website</li>
                  <li>Contact your internet service provider</li>
                  <li>Commence legal proceedings against you</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  12. Variations
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  We may revise these terms from time to time. Revised terms will apply from the date
                  of publication on this website. Please check this page regularly to ensure you are
                  familiar with the current version.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  13. Severability
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  If any provision of these terms is found to be invalid or unenforceable by a court,
                  the remaining provisions shall continue in full force and effect.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  14. Entire Agreement
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  These terms, together with our Privacy Policy and Cookie Policy, constitute the entire
                  agreement between you and SafeSkillz Limited relating to your use of this website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  15. Governing Law and Jurisdiction
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  These terms are governed by and construed in accordance with the laws of England and Wales.
                  Any disputes relating to these terms will be subject to the exclusive jurisdiction of the
                  courts of England and Wales.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  16. Contact Information
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  If you have any questions about these terms:
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
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}
