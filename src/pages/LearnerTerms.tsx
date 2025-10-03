import { Container } from '../components/ui/Container'
import { SEO } from '../components/seo/SEO'

export const LearnerTerms = () => {
  return (
    <>
      <SEO
        title="Learner Terms and Conditions"
        description="Terms and conditions for SafeSkillz Limited training courses"
      />
      <div className="py-16 bg-gray-50 dark:bg-gray-900">
        <Container>
          <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Learner Terms and Conditions
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
                  These Learner Terms and Conditions ("Terms") govern the provision of cybersecurity training
                  courses and educational services by SafeSkillz Limited to individual learners and corporate
                  clients. By enrolling in any of our courses, you agree to be bound by these Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  2. Definitions
                </h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                  <li><strong>"Course"</strong> means any training program, workshop, or educational service offered by SafeSkillz Limited</li>
                  <li><strong>"Learner"</strong> means any individual enrolled in a Course</li>
                  <li><strong>"Client"</strong> means any organization booking training on behalf of Learners</li>
                  <li><strong>"Booking"</strong> means a confirmed enrollment in a Course</li>
                  <li><strong>"Public Course"</strong> means an open enrollment course available to individual Learners</li>
                  <li><strong>"Bespoke Course"</strong> means a customized training program designed for a specific Client</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  3. Course Booking and Enrollment
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  <strong>3.1 Booking Process</strong>
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                  <li>All bookings must be made through our official channels (website, email, or phone)</li>
                  <li>A booking is confirmed only when you receive written confirmation from SafeSkillz Limited</li>
                  <li>Course places are subject to availability</li>
                  <li>Minimum enrollment numbers may be required for courses to proceed</li>
                </ul>

                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  <strong>3.2 Prerequisites</strong>
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Some courses may have prerequisite requirements. It is the Learner's responsibility to ensure
                  they meet these requirements before enrolling. SafeSkillz Limited reserves the right to refuse
                  admission if prerequisites are not met.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  4. Fees and Payment
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  <strong>4.1 Course Fees</strong>
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                  <li>Course fees are stated in GBP (£) unless otherwise specified</li>
                  <li>All prices are subject to VAT where applicable</li>
                  <li>Fees include course materials, access to online resources, and certification (where applicable)</li>
                  <li>Fees do not include accommodation, travel, or meals unless explicitly stated</li>
                </ul>

                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  <strong>4.2 Payment Terms</strong>
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Individual Learners: Payment is due in full at the time of booking</li>
                  <li>Corporate Clients: Payment terms are typically 30 days from invoice date unless otherwise agreed</li>
                  <li>We accept payment by bank transfer, credit/debit card, or approved purchase order</li>
                  <li>Non-payment may result in denial of access to course materials and certificates</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  5. Cancellation and Refund Policy
                </h2>

                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg p-4 mb-4">
                  <p className="text-gray-700 dark:text-gray-300 font-semibold mb-2">
                    5.1 Cancellation by Learner/Client
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                    <li><strong>More than 30 days before course start:</strong> Full refund minus 10% administrative fee</li>
                    <li><strong>15-30 days before course start:</strong> 50% refund</li>
                    <li><strong>Less than 15 days before course start:</strong> No refund (substitution allowed)</li>
                    <li><strong>No-show or withdrawal during course:</strong> No refund</li>
                  </ul>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  <strong>5.2 Substitutions</strong>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Learner substitutions are permitted at any time before the course start date at no additional
                  charge. The substitute must meet course prerequisites.
                </p>

                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  <strong>5.3 Cancellation by SafeSkillz Limited</strong>
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  We reserve the right to cancel a course due to insufficient enrollment, trainer illness,
                  or circumstances beyond our control. In such cases, we will offer a full refund or transfer
                  to an alternative date at no extra cost. SafeSkillz Limited is not liable for any additional
                  expenses incurred (travel, accommodation, etc.).
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  6. Course Delivery
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  <strong>6.1 Delivery Methods</strong>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Courses may be delivered in-person, online (live virtual), or hybrid format as specified
                  in the course description. Technical requirements for online courses will be communicated
                  in advance.
                </p>

                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  <strong>6.2 Course Materials</strong>
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Digital course materials will be provided via email or online portal</li>
                  <li>Materials are for personal use only and may not be shared or distributed</li>
                  <li>All materials are subject to copyright and intellectual property protection</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  7. Learner Responsibilities
                </h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Attend all scheduled course sessions punctually</li>
                  <li>Complete any pre-course work or reading as required</li>
                  <li>Ensure you have the necessary equipment and software for online courses</li>
                  <li>Conduct yourself professionally and respectfully toward trainers and other learners</li>
                  <li>Comply with all policies regarding cybersecurity practice and ethical conduct</li>
                  <li>Not record, photograph, or share course content without written permission</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  8. Assessment and Certification
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  <strong>8.1 Assessment</strong>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Some courses include assessments (practical exercises, exams, projects). Learners must
                  achieve the required pass mark to receive certification.
                </p>

                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  <strong>8.2 Certification</strong>
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Certificates are issued upon successful completion of course requirements</li>
                  <li>Accredited certifications are subject to the rules of the accrediting body</li>
                  <li>Digital certificates will be issued within 10 working days of course completion</li>
                  <li>Replacement certificates may incur an administration fee</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  9. Intellectual Property
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  All course materials, content, and intellectual property remain the property of SafeSkillz
                  Limited or its licensors. Learners are granted a non-exclusive, non-transferable license
                  to use materials solely for personal educational purposes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  10. Code of Conduct and Ethics
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  SafeSkillz Limited is committed to ethical cybersecurity education. Learners must:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Use cybersecurity knowledge and skills only for lawful and ethical purposes</li>
                  <li>Not engage in unauthorized hacking, penetration testing, or malicious activities</li>
                  <li>Respect the confidentiality of information shared during training</li>
                  <li>Report any suspected misuse of training to SafeSkillz Limited</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 mt-3">
                  Violation of this code may result in immediate expulsion from the course without refund
                  and potential legal action.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  11. Data Protection
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  Personal data collected during enrollment and training is processed in accordance with
                  our{' '}
                  <a href="/privacy-policy" className="text-primary hover:underline">
                    Privacy Policy
                  </a>
                  {' '}and UK GDPR. Training records may be retained for up to 7 years for accreditation
                  and legal compliance purposes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  12. Limitation of Liability
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  SafeSkillz Limited provides training and education to the best of its ability. However,
                  we do not guarantee specific career outcomes, certification exam results, or employment
                  prospects. Our liability is limited to the fees paid for the course, except where liability
                  cannot be excluded by law (death, personal injury, fraud).
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  13. Force Majeure
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  SafeSkillz Limited is not liable for failure to perform obligations due to circumstances
                  beyond reasonable control, including (but not limited to) natural disasters, pandemics,
                  power failures, or government restrictions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  14. Complaints and Disputes
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  If you have a complaint about our training services:
                </p>
                <ol className="list-decimal pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Contact us in writing at info@safeskillz.co.uk</li>
                  <li>We will acknowledge your complaint within 5 working days</li>
                  <li>We will investigate and respond within 20 working days</li>
                  <li>If unresolved, disputes will be governed by the laws of England and Wales</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  15. Amendments
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  SafeSkillz Limited reserves the right to amend these Terms at any time. Changes will not
                  affect bookings already confirmed unless required by law. The latest version will always
                  be available on our website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  16. Governing Law
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  These Terms are governed by the laws of England and Wales. Any disputes will be subject
                  to the exclusive jurisdiction of the courts of England and Wales.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  17. Contact Information
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  For questions about these Learner Terms and Conditions:
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

              <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mt-8">
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  <strong>By enrolling in a SafeSkillz Limited course, you acknowledge that you have read,
                  understood, and agree to be bound by these Learner Terms and Conditions.</strong>
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}
