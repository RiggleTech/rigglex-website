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

const TermsAndConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Terms & Conditions — RiggleX'
    return () => { document.title = 'RiggleX — Built for Bharat' }
  }, [])

  return (
    <div className="min-h-screen bg-[#f7f0ea]">
      <Navbar />
      <LegalHero
        title="Terms and Conditions"
        subtitle="Understanding and Upholding our Commitment"
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
              support@rigglex.in
            </span>
          </div>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-10">

          {/* Intro */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-6 border-b border-slate-100">
            <p className="text-slate-500 text-sm md:text-base leading-relaxed">
              Please read these Terms of Use carefully before using RiggleX. By accessing or using RiggleX, you agree to be bound by these Terms. If you do not agree to these Terms, you may not use RiggleX.
            </p>
            <span className="flex-shrink-0 text-xs font-medium text-orange-500 bg-orange-50 border border-orange-100 rounded-full px-3 py-1 whitespace-nowrap">
              Last updated: 28 May 2026
            </span>
          </div>

          <Section number="1" title="Background">
            <p>
              www.rigglex.in (the "Website"), along with its associated mobile applications, web interfaces, APIs, documentation, servers, and all related intellectual property, software, and infrastructure (collectively referred to as "RiggleX", and individually as "Platform" or "Service"), is owned, operated, and registered by <strong>Potluck Technologies Private Limited</strong> (CIN: U51909MH2021PTC367185) ("Company"), a company incorporated under the laws of India.
            </p>
            <p>
              These Terms of Use ("Terms of Use"), which include and hereby incorporate the Privacy Policy ("Privacy Policy"), are a legal agreement between the Company and its related companies (the "Company" or "We" or "Us") and you ("You" or "User"). By using or accessing RiggleX, you agree (i) that you are 13 years of age or older, (ii) if You are the age of majority in your jurisdiction or over, that you have read, understood, and accept to be bound by the Terms of Service and the Privacy Policy.
            </p>
            <p>
              We reserve the right to make changes to these Terms of Use at any time. Any such modifications will become effective immediately upon posting to the Website/RiggleX Product and Your continued use constitutes Your agreement to such modifications. You agree to periodically review the current version of these Terms of Use as posted on the Website/RiggleX Product.
            </p>
          </Section>

          <div className="border-t border-slate-100 my-8" />

          <Section number="2" title="Definitions">
            <p>For the purposes of these Terms of Use:</p>
            <div className="space-y-3 mt-3">
              {[
                { term: 'Applicable Law', def: 'Any statute, law, regulation, ordinance, rule, judgment, notification, rule of common law, order, decree, bye-law, government approval, directive, guideline, requirement or other governmental restriction, or any similar form of decision of, or determination by, or any interpretation, policy or administration, having the force of law of any of the foregoing, by any Authority having jurisdiction over the matter in question.' },
                { term: 'Authority', def: 'Any national, state, provincial, local or similar government, governmental, regulatory or administrative authority, branch, agency, any statutory body or commission or any non-governmental regulatory or administrative authority, body or other organization to the extent that the rules, regulations and standards, requirements, procedures or orders of such authority, body or other organization that have the force of Applicable Law or any court, tribunal, arbitral or judicial body in India.' },
                { term: 'Minimum Age', def: 'Any person aged 13 (Thirteen) years and above.' },
              ].map(({ term, def }) => (
                <div key={term} className="bg-slate-50 rounded-xl p-4">
                  <p className="font-semibold text-slate-800 mb-1">"{term}"</p>
                  <p className="text-slate-600">{def}</p>
                </div>
              ))}
            </div>
          </Section>

          <div className="border-t border-slate-100 my-8" />

          <Section number="3" title="Services and Restrictions on Use">
            <p>We provide an array of services for team communication and collaboration in the form of RiggleX Products ("Service" or "Services"). You may use the Services for your personal and business use or for internal business purpose in the organization that you represent.</p>
            <p>Subject to your compliance with these Terms of Use, the Company grants you a limited, revocable, non-exclusive, non-transferable, non-sublicensable license to use and access the Service.</p>
            <p>You agree not to (and not to attempt to) (i) use the Service for any use or purpose other than as expressly permitted by these Terms of Use or (ii) copy, adapt, modify, prepare derivative works based upon, distribute, license, sell, transfer, publicly display, publicly perform, transmit, stream, broadcast or otherwise exploit the Service or any portion of the Service, except as expressly permitted in these Terms.</p>
            <p>Company reserves the right to modify or discontinue, temporarily or permanently, the Service (or any part thereof) with or without notice. The Company reserves the right to refuse any user access to the Services without notice for any reason, including but not limited to a violation of the Terms of Use.</p>
            <p>If you violate these Terms of Use, the Company reserves the right to issue you a warning regarding the violation or immediately terminate or suspend any or all Accounts you have created using the Service.</p>
            <p>The various products within the RiggleX Suite are offered through various versions, both free and premium. The Company is not obligated to provide any support services with respect to the free version and hereby reserves the right to suspend provision of free RiggleX Products at any time or charge a subscription fee.</p>
          </Section>

          <div className="border-t border-slate-100 my-8" />

          <Section number="4" title="Privacy">
            <p>Your privacy is important to us. Please read the RiggleX Privacy Policy as it describes the types of data we collect from you and your devices ("Personal Data"), how we use your Data, and the legal basis for which we have to process your Personal Data.</p>
            <p>The Privacy Policy also describes how RiggleX uses your Personal Data, which is your communications with others; postings submitted by you via the Services; and the files, photos, documents, audio, digital works, livestreams and videos that you upload, store, broadcast or share through the Services.</p>
            <p>Where processing is based on consent and to the extent permitted by law, by agreeing to these Terms, you consent to RiggleX's collection, use, process and disclosure of your content and Personal Data as described in the Privacy Policy.</p>
          </Section>

          <div className="border-t border-slate-100 my-8" />

          <Section number="5" title="Usage of RiggleX Suite">
            <p>If you use a RiggleX Product, as a User you are responsible for maintaining the security of the devices on which the RiggleX Product is installed and/or used, as well as the security of your account associated with the RiggleX Product. You are responsible for all activities that occur on a RiggleX Product under your account.</p>
            <p>You agree, inter alia, to provide true, accurate, current and complete information about yourself as prompted by the RiggleX Product. If you provide any information that is untrue, inaccurate, not current or incomplete, We reserve the right to indefinitely suspend, terminate or block Your access to the individual RiggleX Product and/or the RiggleX Suite.</p>
          </Section>

          <div className="border-t border-slate-100 my-8" />

          <Section number="6" title="Your Rights">
            <p>Many of our Services allow you to store or share any information, text, links, graphics, photos, videos, or other materials or arrangements of materials ("Content"). We don't claim ownership of these Content. These Content remains your Content and You are responsible for it.</p>
            <p>When you share these Content with other people, you understand that they may be able to, on a worldwide basis, use, save, record, reproduce, broadcast, transmit, share and display Content without compensating you. If you do not want others to have that ability, do not use the Services to share Content.</p>
            <p>You represent and warrant that for the duration of these Terms, you have (and will have) all the rights necessary for these Content that is uploaded, stored, or shared on or through the Services and that the collection, use, and retention of these Content will not violate any law or rights of others.</p>
          </Section>

          <div className="border-t border-slate-100 my-8" />

          <Section number="7" title="Representations, Warranties and Obligations of the Company">
            <p>We hereby represent and warrant that:</p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>We are a duly registered company under the laws of India.</li>
              <li>We are in compliance with the Applicable Law to provide Services, subject to these Terms of Use.</li>
              <li>We will comply with the Privacy Policy and ensure data security of the Users at all times as per RiggleX Privacy Policy.</li>
            </ul>
          </Section>

          <div className="border-t border-slate-100 my-8" />

          <Section number="8" title="Representations, Warranties and Obligations of the User">
            <p>You hereby represent and warrant that:</p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>You are a natural person, of the Minimum Age, competent to contract, have read, understood and agree to be bound by these Terms of Use.</li>
              <li>You have provided accurate information and details to the Company with respect to your use of the RiggleX Product and shall also keep the contact information up to date.</li>
            </ul>
          </Section>

          <div className="border-t border-slate-100 my-8" />

          <Section number="9" title="User Feedback, Comments & Suggestions">
            <p>While submitting/posting comments/suggestions/opinions/feedback etc. ("User Content"), You agree and acknowledge that:</p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>We are not under any obligation of confidentiality, express or implied, regarding the User Content.</li>
              <li>We reserve the right to use or disclose such User Content for any purpose, in any way, as We deem fit.</li>
              <li>By posting/submitting User Content, the same shall become our intellectual property right without any obligations including but not limited to any compensation or consideration, express or implied to You.</li>
            </ul>
            <p className="mt-3">Any feedback, comments, or suggestions you may provide regarding RiggleX Suite, or the Services is entirely voluntary and we will be free to use such feedback, comments or suggestions as we see fit and without any obligation to you.</p>
          </Section>

          <div className="border-t border-slate-100 my-8" />

          <Section number="10" title="Intellectual Property Rights">
            <p>All rights, title and interest in and to all materials that are part of the Service (including, but not limited to, designs, text, graphics, pictures, video, information, applications, software, music, sound and other files, and their selection and arrangement), except for Your content, are owned by the Company and/or its third-party licensors.</p>
            <p>You agree that you shall not modify, copy, distribute, frame, reproduce, republish, download, scrape, display, post, transmit, or sell in any form or by any means, in whole or in part, or otherwise exploit the intellectual property of the Company without our express prior written permission.</p>
            <p>You are only granted a limited, nonexclusive, revocable license to access and make use of the Service after agreeing to these Terms of Use, but do not acquire the intellectual property rights, such as copyrights related to the Website, RiggleX Products and/or RiggleX Suite.</p>
          </Section>

          <div className="border-t border-slate-100 my-8" />

          <Section number="11" title="Links">
            <p>The Website, RiggleX Product and/or the RiggleX Suite may contain links to other websites ("Linked Sites"). The Linked Sites are not under the control of the Company and We are not responsible for the content of any Linked Site.</p>
            <p>We are providing these links only for convenience, and the inclusion of any such link does not imply endorsement by RiggleX, of the Linked Sites or any association with its operators or owners.</p>
            <p>On accessing the Linked Sites, You shall be governed by the terms of use, privacy policy and such other additional policies of the Linked Sites. You further acknowledge and agree that We shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, advertising, products, services or other materials available on or through any Linked Sites.</p>
          </Section>

          <div className="border-t border-slate-100 my-8" />

          <Section number="12" title="Fraud and Improper Conduct">
            <p>You may only access the RiggleX Suite and use the Services for lawful purposes. You agree that You will not:</p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>Interfere with the ability of others to access or use the individual RiggleX Products and the RiggleX Suite.</li>
              <li>Disrupt the normal flow of communication or otherwise act in a manner that adversely affects other Users.</li>
              <li>Interfere with or disrupt the Services or servers or networks connected to the Services.</li>
              <li>Post, upload, transmit or otherwise disseminate inappropriate content that is obscene, indecent, vulgar, pornographic, offensive, graphic violence, sexual or otherwise objectionable or criminal.</li>
              <li>Defame, libel, ridicule, mock, stalk, threaten, harass, intimidate or abuse anyone.</li>
              <li>Upload or transmit files that contain viruses, Trojan horses, worms, time bombs, or any other similar software or programs that may damage the operation of the Service.</li>
              <li>Violate the contractual, personal, intellectual property, confidentiality or other rights of any party.</li>
              <li>Violate any Applicable Laws or regulations, or promote or encourage any illegal activity including hacking, cracking or distribution of counterfeit software.</li>
            </ul>
          </Section>

          <div className="border-t border-slate-100 my-8" />

          <Section number="13" title="Limitation and Disclaimer of Warranty">
            <p>The Website, the RiggleX Products and the RiggleX Suite and each portion thereof are provided <strong>"AS IS"</strong> without warranties of any kind either express or implied. To the fullest extent possible pursuant to Applicable Law, We disclaim all warranties, express or implied.</p>
            <p>We do not warrant or make any representations regarding the use, validity, accuracy, or reliability of the information shared on the RiggleX Suite or its Services.</p>
            <p>We shall not be liable for any direct, indirect, incidental or consequential damages, whatsoever incurred by the User due to use of the Services or due to the non-availability of any of the Products of RiggleX Suite.</p>
            <p>In no event shall the aggregate liability of the Company exceed the amount you paid the Company, if any, in the past six months for the Services giving rise to the claim.</p>
            <p>We shall not be liable in the event any damage or loss occurs to your computer system, or any other electronic device, or any data as a result of (i) your access to or use of or inability to access or use the Services; (ii) any conduct or content of any third party on the services; (iii) any content obtained from the Services; or (iv) unauthorized access, use or alteration of your transmissions or content.</p>
            <p>You understand and acknowledge that the Services are not meant to and do not support or carry calls to emergency services of any kind. The Company shall not be liable for any attempted emergency calls.</p>
          </Section>

          <div className="border-t border-slate-100 my-8" />

          <Section number="14" title="Indemnification">
            <p>You undertake to indemnify Us, for any losses or damages resulting from any third party claims or complaints arising from, or in connection with Your actions on the Website, or the RiggleX Products and/or breach of this Agreement.</p>
          </Section>

          <div className="border-t border-slate-100 my-8" />

          <Section number="15" title="Termination">
            <p>These Terms of Use shall stand automatically terminated when a User is no longer using at least 1 (one) RiggleX Product and/or such User's credentials are disassociated with all RiggleX Products. We may terminate these Terms of Use with respect to You, immediately without notice in the event of any breach by You of these Terms of Use or any of our applicable policies.</p>
            <p>You agree that upon the termination of these Terms of Use, we may delete all information related to You with respect to the Services availed by you and in accordance to RiggleX Privacy Policy. Further, you will no longer be able to log into the RiggleX Suite.</p>
          </Section>

          <div className="border-t border-slate-100 my-8" />

          <Section number="16" title="Severability">
            <p>If any part of the Terms of Use are determined to be invalid or unenforceable pursuant to Applicable Laws, including, but not limited to, the warranty disclaimers and liability limitations set forth above, then the invalid or unenforceable provision will be deemed to be superseded by a valid, enforceable provision that most closely matches the intent of the original provision and the remainder of the Terms of Use for Services shall continue in effect.</p>
          </Section>

          <div className="border-t border-slate-100 my-8" />

          <Section number="17" title="General">
            <p>Unless otherwise specified herein, these Terms of Use for Services and the Privacy Policy available here constitutes the entire agreement between you and RiggleX, in respect of the Services and supersedes all previous written and oral agreements between You and RiggleX, if any. Our failure to act with respect to a breach by you or others does not waive Our right to act with respect to subsequent or similar breaches.</p>
          </Section>

          <div className="border-t border-slate-100 my-8" />

          <Section number="18" title="Governing Law">
            <p>These Terms of Use shall be governed by and constructed in accordance with the laws of India, without reference to conflict of laws principles. The courts in India shall have the exclusive jurisdiction to determine any disputes arising in relation to, or under, these Terms of Use. You agree to submit to the jurisdiction of the courts in India and agree to waive any and all objections to the exercise of jurisdiction over the parties by such courts and to venue in such courts.</p>
          </Section>

          {/* Footer note */}
          <div className="mt-10 pt-8 border-t border-slate-100 text-center">
            <p className="text-slate-400 text-xs md:text-sm">
              For questions about these Terms, contact us at{' '}
              <a href="mailto:support@rigglex.in" className="text-orange-500 hover:underline">support@rigglex.in</a>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default TermsAndConditions
