import { Container } from '../components/ui/Container'
import { SEO } from '../components/seo/SEO'

export const CookiePolicy = () => {
  return (
    <>
      <SEO
        title="Cookie Policy"
        description="Information about cookies used on the SafeSkillz Limited website"
      />
      <div className="py-16 bg-gray-50 dark:bg-gray-900">
        <Container>
          <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Cookie Policy
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">
              Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
            </p>

            <div className="prose dark:prose-invert max-w-none space-y-6">
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  1. What Are Cookies?
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  Cookies are small text files that are placed on your device when you visit our website.
                  They help us provide you with a better browsing experience by remembering your preferences,
                  understanding how you use our site, and improving our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  2. How We Use Cookies
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  SafeSkillz Limited uses cookies for the following purposes:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>To enable essential website functionality</li>
                  <li>To remember your preferences and settings</li>
                  <li>To analyze website traffic and user behavior</li>
                  <li>To improve website performance and user experience</li>
                  <li>To provide personalized content and marketing (with consent)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  3. Types of Cookies We Use
                </h2>

                <div className="space-y-6">
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      3.1 Strictly Necessary Cookies
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      These cookies are essential for the website to function properly. They enable core
                      functionality such as security, network management, and accessibility.
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                      Legal basis: Legitimate interest (no consent required under UK GDPR)
                    </p>
                    <div className="mt-3 bg-gray-50 dark:bg-gray-700 p-3 rounded">
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        <strong>Examples:</strong> Session cookies, cookie consent preferences, security tokens
                      </p>
                    </div>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      3.2 Functional Cookies
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      These cookies allow us to remember choices you make (such as your user name, language,
                      or region) and provide enhanced, more personal features.
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                      Legal basis: Consent or legitimate interest
                    </p>
                    <div className="mt-3 bg-gray-50 dark:bg-gray-700 p-3 rounded">
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        <strong>Examples:</strong> Theme preferences (dark/light mode), language settings, form data
                      </p>
                    </div>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      3.3 Analytics Cookies
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      These cookies help us understand how visitors interact with our website by collecting
                      and reporting information anonymously. This helps us improve our website performance
                      and content.
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                      Legal basis: Consent required
                    </p>
                    <div className="mt-3 bg-gray-50 dark:bg-gray-700 p-3 rounded">
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        <strong>Examples:</strong> Google Analytics (when used), page view tracking, session duration
                      </p>
                    </div>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      3.4 Marketing Cookies
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      These cookies track your browsing habits to enable us to show advertising which is
                      more likely to be of interest to you. They may be used to build a profile of your
                      interests and show relevant content on other sites.
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                      Legal basis: Explicit consent required
                    </p>
                    <div className="mt-3 bg-gray-50 dark:bg-gray-700 p-3 rounded">
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        <strong>Examples:</strong> Social media pixels, remarketing tags, advertising cookies
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  4. Cookie Duration
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  We use two types of cookies based on duration:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>
                    <strong>Session Cookies:</strong> Temporary cookies that expire when you close your browser
                  </li>
                  <li>
                    <strong>Persistent Cookies:</strong> Cookies that remain on your device for a set period
                    (typically up to 12 months) or until you delete them
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  5. Third-Party Cookies
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  We may use third-party services that set cookies on our website. These include:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Google Analytics (for website analytics)</li>
                  <li>LinkedIn, Twitter, YouTube (for social media integration)</li>
                  <li>Payment processors (for secure transactions)</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 mt-3">
                  These third parties have their own privacy policies. We recommend reviewing them to
                  understand how they use cookies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  6. Managing Your Cookie Preferences
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  You have the right to decide whether to accept or reject cookies. You can exercise your
                  cookie preferences through:
                </p>

                <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mb-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Cookie Consent Banner
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    When you first visit our website, you'll see a cookie consent banner allowing you to
                    accept or reject non-essential cookies. You can change your preferences at any time
                    by clicking the cookie settings link in the footer.
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Browser Settings
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    Most web browsers allow you to control cookies through their settings. You can:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                    <li>Block all cookies</li>
                    <li>Accept only first-party cookies</li>
                    <li>Delete cookies when you close your browser</li>
                    <li>View and delete individual cookies</li>
                  </ul>
                  <p className="text-gray-700 dark:text-gray-300 mt-3 text-sm">
                    Visit{' '}
                    <a
                      href="https://www.allaboutcookies.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      www.allaboutcookies.org
                    </a>{' '}
                    for detailed guidance on managing cookies in different browsers.
                  </p>
                </div>

                <div className="mt-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg p-4">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>Please note:</strong> Blocking or deleting cookies may impact your experience
                    on our website, and some features may not function properly.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  7. Changes to This Cookie Policy
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  We may update this Cookie Policy from time to time to reflect changes in technology,
                  legislation, or our business operations. Please check this page regularly to stay
                  informed about our use of cookies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  8. Contact Us
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  If you have questions about our use of cookies:
                </p>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>SafeSkillz Limited</strong><br />
                    Email: info@safeskillz.co.uk<br />
                    Phone: +44 (0)7946630285
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  9. More Information
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  For more information about privacy and data protection:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>
                    Read our{' '}
                    <a href="/privacy-policy" className="text-primary hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    Visit the Information Commissioner's Office:{' '}
                    <a
                      href="https://ico.org.uk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      www.ico.org.uk
                    </a>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}
