import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import LegalHero from '../components/LegalHero'
import { FiMapPin, FiMail } from 'react-icons/fi'

const Section = ({ number, title, children }) => (
  <section className="mb-10">
    <div className="flex items-start gap-4 mb-4">
      <span className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-orange-500 text-sm font-bold mt-0.5">
        {number}
      </span>
      <h2 className="text-lg md:text-xl font-semibold text-slate-900 pt-0.5">{title}</h2>
    </div>
    <div className="pl-12 text-slate-600 leading-relaxed space-y-3 text-sm md:text-base">
      {children}
    </div>
  </section>
)

const DefCard = ({ term, def }) => (
  <div className="bg-slate-50 rounded-xl p-4">
    <p className="font-semibold text-slate-800 mb-1">"{term}"</p>
    <p className="text-slate-600">{def}</p>
  </div>
)

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Privacy Policy — RiggleX'
    return () => { document.title = 'RiggleX — Built for Bharat' }
  }, [])

  return (
    <div className="min-h-screen bg-[#f7f0ea]">
      <Navbar />
      <LegalHero
        title="Privacy Policy"
        subtitle="Your Privacy, Our Priority — We handle your data with care and transparency."
      />

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 md:py-14">
        {/* Company Info Banner */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 md:p-6 mb-8 flex flex-col sm:flex-row gap-4 sm:items-center">
          <div className="flex-1">
            <p className="text-xs font-semibold uppercase tracking-wider text-orange-500 mb-1">Operated by</p>
            <p className="text-slate-900 font-semibold text-sm md:text-base">Potluck Technologies Private Limited</p>
            <p className="text-slate-500 text-xs md:text-sm">CIN: U51909MH2021PTC367185</p>
          </div>
          <div className="flex flex-col gap-1.5 text-xs md:text-sm text-slate-500">
            <span className="flex items-start gap-2">
              <FiMapPin className="h-3.5 w-3.5 mt-0.5 flex-shrink-0 text-orange-400" />
              Office No. 102, 1st Floor, Shrishti Square, LBS Marg, Bhandup (W), Mumbai – 400078
            </span>
            <span className="flex items-center gap-2">
              <FiMail className="h-3.5 w-3.5 flex-shrink-0 text-orange-400" />
              privacy@rigglex.in
            </span>
          </div>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-10">

          {/* Intro */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-6 border-b border-slate-100">
            <p className="text-slate-500 text-sm md:text-base leading-relaxed">
              This Privacy Policy describes how Potluck Technologies Private Limited ("Company", "We", "Us", "Our") collects, uses, and shares information about you when you use RiggleX. We are committed to protecting your privacy and handling your data with transparency and care.
            </p>
            <span className="flex-shrink-0 text-xs font-medium text-orange-500 bg-orange-50 border border-orange-100 rounded-full px-3 py-1 whitespace-nowrap">
              Last updated: 28 May 2026
            </span>
          </div>

          <Section number="1" title="Background">
            <p>
              www.rigglex.in ("Website") and the mobile apps, web interfaces, APIs, documentation, servers and all other Intellectual Property, software and infrastructure (collectively referred to as "RiggleX", and individually as "Platform" or "Service"), is owned, operated, and registered by <strong>Potluck Technologies Private Limited</strong> (CIN: U51909MH2021PTC367185).
            </p>
            <p>
              This Privacy Policy covers: (i) the type of information collected from users through the Website, the RiggleX Products and the RiggleX Suite, including sensitive Personal Data or information; (ii) the purpose, means and modes of usage of such information; and (iii) how and to whom such information will be disclosed.
            </p>
            <p>
              For the purpose of this Privacy Policy, "Administrator", "Customer", "HR Manager" shall mean any user who creates a team and invites other users to use the RiggleX Suite. "User" shall mean any natural person who has been invited to use any RiggleX Product by an administrator or customer.
            </p>
            <p>
              We reserve the right to make changes to this Privacy Policy at any time. Any such modifications will become effective immediately upon posting to the Website or the RiggleX Suite and continued use of the RiggleX Suite constitutes agreement to such modifications.
            </p>
          </Section>

          <div className="border-t border-slate-100 my-8" />

          {/* Key Definitions */}
          <Section number="1a" title="Key Definitions">
            <div className="space-y-3">
              <DefCard term="Personal Data" def="Any information relating to User or identifiable to User — including name, identification number, location data, an online identifier, or payment information such as payment card numbers, billing address, and bank account information." />
              <DefCard term="Processing" def="Any operation performed on Personal Data, whether or not by automated means — such as collection, recording, organisation, structuring, storage, adaptation, retrieval, consultation, use, disclosure, transmission, erasure or destruction." />
              <DefCard term="Controller" def="The company, or administrator. The administrator is the controller for all information related to the teams created by the customer and the users invited to RiggleX by them." />
              <DefCard term="Processor" def="A company or third parties engaged by the company. The company is a processor for all data entered into RiggleX by users." />
              <DefCard term="Consent" def="Any freely given, specific, informed and unambiguous indication of the User's wishes by which he or she signifies agreement to the processing of Personal Data relating to him or her." />
              <DefCard term="Sensitive Data" def="Various categories of Personal Data identified by data privacy laws as requiring special treatment — including racial or ethnic origin, political opinions, religious beliefs, physical or mental health, biometric or genetic data, sexual life or orientation, or criminal convictions." />
              <DefCard term="Board" def="The Data Protection Board of India, an independent body established under the Digital Personal Data Protection Act, 2023, to ensure compliance, handle grievances, and enforce penalties related to personal data processing in India." />
            </div>
          </Section>

          <div className="border-t border-slate-100 my-8" />

          <Section number="2" title="Information We Collect">
            <p className="font-medium text-slate-700">Information That Our Customers Provide:</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>First and last name; Email address(es)</li>
              <li>Mobile and other phone number(s) (optional)</li>
              <li>Date of birth; Location</li>
              <li>User profile photos that you upload</li>
              <li>Organization information; Preferences</li>
              <li>Messages exchanged through any RiggleX Product</li>
              <li>Files and rich media exchanged through any RiggleX Product</li>
              <li>Mobile device information including device type, ID, model number, and operating system</li>
              <li>Calls placed using any RiggleX Product</li>
              <li>Payment information (submitted and processed through a secure connection)</li>
              <li>MAC and/or IP address</li>
              <li>Authentication keys for third party plugins (Google Drive, OneDrive, Dropbox etc.)</li>
            </ul>
            <p className="mt-3 font-medium text-slate-700">Information Collected Automatically:</p>
            <p>When you use or interact with our Website and services, we receive and store information generated by your activity, including IP address, browser type and version, preferred language, geographic location, operating system, full URL clickstream to, through, and from our Website, date and time, length of visit, and number of times you visit and use the services.</p>
            <p className="mt-3 font-medium text-slate-700">Information from Other Sources:</p>
            <p>If we receive any information about you from other sources, we may add it to the information we already have about you. We also use Google Analytics for analytics and measurement to understand how our services are used.</p>
            <p className="mt-3 font-medium text-slate-700">Sensitive Data:</p>
            <p>We do not generally seek to collect sensitive data through this Website or otherwise.</p>
          </Section>

          <div className="border-t border-slate-100 my-8" />

          <Section number="3" title="How We Use Collected Information">
            <p><strong>Lawful Basis of Processing:</strong> We process your personal data only when we have a lawful basis — presently using the Performance of Contract and consent as the lawful basis for processing.</p>
            <p>The information collected when customers use the Website and services shall be used to:</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Facilitate use of the RiggleX Suite, its upgrades, and replacements</li>
              <li>Process payment and verify payment information</li>
              <li>Contact and communicate with Customers and Users</li>
              <li>Provide technical service and support, including updates</li>
              <li>Respond to legal requirements, exercise legal rights or defend against legal claims</li>
              <li>Customize and/or tailor the RiggleX Suite and user experience</li>
              <li>Troubleshoot issues and respond to customer queries</li>
            </ul>
            <p className="mt-3"><strong>Users under 13 years of age:</strong> The Sites and Services do not knowingly collect personal information from users under the age of 13.</p>
          </Section>

          <div className="border-t border-slate-100 my-8" />

          <Section number="4" title="Disclosure of Personal Information">
            <p>The following categories of recipients will most likely receive your data in order for us to provide services:</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Third Party Data Center Services such as AWS</li>
              <li>Third Party SMTP Services such as Sendgrid</li>
              <li>Third Party helpdesk applications/tools for troubleshooting</li>
              <li>Salesforce CRM/Hubspot for direct marketing</li>
              <li>Third party Service Providers</li>
            </ul>
            <p className="mt-3">All financial information collected through the RiggleX Suite is used solely to enable payment towards the consideration for usage of the relevant RiggleX Product(s) and is not used for marketing or promotional purposes.</p>
            <p>We reserve the right to disclose any personal information as required by law or to respond to legal process, to protect our customers, to protect lives, to maintain the security of our products, and to protect the rights or property of the Company.</p>
          </Section>

          <div className="border-t border-slate-100 my-8" />

          <Section number="5" title="Cross Border Data Transfers">
            <p>Since we operate from Mumbai, India, your data may be processed and stored in data centres located within India or in jurisdictions outside India, as permitted under applicable Indian laws. All data transfers will comply with the Digital Personal Data Protection Act, 2023 and relevant government regulations.</p>
            <p>Personal Data we collected may be transferred or be accessible internationally throughout Company's business and between our entities and affiliates. Any such transfers throughout Company's business take place in accordance with the applicable data privacy laws.</p>
          </Section>

          <div className="border-t border-slate-100 my-8" />

          <Section number="6" title="Your Rights">
            <p>Customers are entitled (in the circumstances and under the conditions set out in applicable law) to:</p>
            <div className="space-y-3 mt-3">
              {[
                { right: 'Right of Access', desc: 'Know whether we hold Personal Data about you and obtain information on and a copy of that Personal Data.' },
                { right: 'Right to Rectification', desc: 'Have Personal Data corrected if it is inaccurate or incomplete.' },
                { right: 'Right to Object', desc: 'Request that Company no longer processes your Personal Data.' },
                { right: 'Right to Erasure', desc: 'Request the erasure of Personal Data, including where it would no longer be necessary to achieve the purposes.' },
                { right: 'Right to Restriction', desc: 'Request that Company only processes Personal Data in limited circumstances, including with consent.' },
                { right: 'Right to Portability', desc: 'Receive a copy of Personal Data in a structured, commonly used and machine-readable format.' },
              ].map(({ right, desc }) => (
                <div key={right} className="flex gap-3">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-orange-400 mt-2" />
                  <div>
                    <p className="font-medium text-slate-700">{right}</p>
                    <p className="text-slate-500">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <div className="border-t border-slate-100 my-8" />

          <Section number="7" title="Cookies">
            <p>The RiggleX Suite uses cookies, which are files that web browsers put on system when you visit a website, to store certain information that is not sensitive personal information. The information collected through these cookies is used for technical administration, research and development, and to improve the quality of our services.</p>
            <p>We may use third party cookies to track visitor behaviour and to improve the quality of our services. However, such cookies will not store any kind of personal information, nor will such information be disclosed to any third party.</p>
            <p>These cookies are intended to be automatically cleared or deleted when the User quits the browser application. You have a variety of tools to control cookies, web beacons and similar technologies, including browser controls to block and delete cookies.</p>
            <p>The information we collect with cookies is not sold, rented, or shared with any third parties, other than for internal development and maintenance of the RiggleX Suite.</p>
          </Section>

          <div className="border-t border-slate-100 my-8" />

          <Section number="8" title="Third Party Links">
            <p>We may provide links to websites for the convenience and information of users. These websites may not be owned, controlled, or operated by us. In those cases, we cannot control how information collected by those websites will be used, shared, or secured.</p>
            <p>If the user visits linked sites, we strongly recommend that the user reviews the privacy notices or policies posted at those sites. We are not responsible for the content of linked sites or the User's use of them.</p>
          </Section>

          <div className="border-t border-slate-100 my-8" />

          <Section number="9" title="Data Security">
            <p>We maintain organizational, physical and technical security arrangements for all the Personal Data we hold. We have protocols, controls and relevant policies, procedures and guidance to maintain these arrangements taking into account the risks associated with the categories of Personal Data and the processing we undertake.</p>
            <p>We adopt market leading security measures to protect Personal Data. However, you should understand that the open nature of the internet is such that information and Personal Data flows over networks without security measures and may be accessed by people other than those for whom the data are intended.</p>
          </Section>

          <div className="border-t border-slate-100 my-8" />

          <Section number="10" title="Retention of Information">
            <p>We will retain Personal Data only for as long as is necessary. We maintain specific records management and retention policies and procedures, so that Personal Data are deleted after a reasonable time according to the following criteria:</p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>We retain Data as long as we have an ongoing relationship with our Customer.</li>
              <li>Once our customers choose to close their accounts, the information is deleted within 30 days of such closure.</li>
              <li>We will only keep the data while account is active or for as long as needed to provide services.</li>
              <li>We retain data for as long as needed in order to comply with our legal and contractual obligations.</li>
            </ul>
          </Section>

          <div className="border-t border-slate-100 my-8" />

          <Section number="11" title="Choice / Opt-Out">
            <p>If the Customer wishes to opt-out of receiving non-essential (promotional, marketing-related) communications from us, after setting up an account, they may choose to do so by making such preference changes within the application or contacting us at <a href="https://www.rigglex.in" className="text-orange-500 hover:underline">www.rigglex.in</a>.</p>
          </Section>

          <div className="border-t border-slate-100 my-8" />

          <Section number="12" title="Governing Law">
            <p>This Privacy Policy shall be governed by and constructed in accordance with the laws of India, without reference to conflict of laws principles. The courts in Mumbai, India, shall have the exclusive jurisdiction to determine any disputes arising in relation to, or under, this Privacy Policy.</p>
          </Section>

          <div className="border-t border-slate-100 my-8" />

          <Section number="13" title="Contact Us">
            <p>You may contact us at our mailing address below:</p>
            <div className="bg-slate-50 rounded-xl p-5 mt-3 space-y-2 text-sm md:text-base">
              <p className="font-semibold text-slate-800">Potluck Technologies Private Limited</p>
              <p className="text-slate-600 flex items-start gap-2">
                <FiMapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-orange-400" />
                Office No. 102, 1st Floor, Shrishti Square, LBS Marg, Bhandup (W), Mumbai, Maharashtra – 400078, India
              </p>
              <p className="text-slate-600 flex items-center gap-2">
                <FiMail className="h-4 w-4 flex-shrink-0 text-orange-400" />
                General queries: <a href="mailto:support@rigglex.in" className="text-orange-500 hover:underline">support@rigglex.in</a>
              </p>
              <p className="text-slate-600 flex items-center gap-2">
                <FiMail className="h-4 w-4 flex-shrink-0 text-orange-400" />
                Data Privacy Officer: <a href="mailto:privacy@rigglex.in" className="text-orange-500 hover:underline">privacy@rigglex.in</a>
              </p>
            </div>
            <p className="mt-4">If you are a resident of India and we maintain your Personal Data under the scope of the Digital Personal Data Protection Act, 2023 (DPDPA), you are entitled to certain rights as a Data Principal. You also have the right to file a grievance with the Data Protection Board of India, as per the provisions of the DPDPA.</p>
          </Section>

          {/* Footer note */}
          <div className="mt-10 pt-8 border-t border-slate-100 text-center">
            <p className="text-slate-400 text-xs md:text-sm">
              For privacy-related concerns, contact our Data Privacy Officer at{' '}
              <a href="mailto:privacy@rigglex.in" className="text-orange-500 hover:underline">privacy@rigglex.in</a>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default PrivacyPolicy
