import tickSvg from '../assets/charm_circle-tick.svg'

const categories = [
  { label: 'Mobile Access',                    values: ['Yes', 'Yes', 'Yes'] },
  { label: 'Web Access',                        values: ['Yes', 'Yes', 'Yes'] },
  { label: 'Signup using Email',                values: ['Yes', 'Yes', 'Yes'] },
  { label: 'Notification Centre',               values: ['Yes', 'Yes', 'Yes'] },
  { label: 'Single Sign On',                    values: ['Yes', 'Yes', 'Yes'] },
  { label: 'Unlimited 1:1 & Group Chats',       values: ['Yes', 'Yes', 'Yes'] },
  { label: 'Email Notifications',               values: ['Yes', 'Yes', 'Yes'] },
  { label: 'Read Receipts',                     values: ['Yes', 'Yes', 'Yes'] },
  { label: 'End-to-End Encryption',             values: ['Yes', 'Yes', 'Yes'] },
  { label: 'Audio Call (1:1)',                  values: ['Yes', 'Yes', 'Yes'] },
  { label: 'Video Call (1:1)',                  values: ['Yes', 'Yes', 'Yes'] },
  { label: 'Screen Sharing',                    values: ['-',   'Yes', 'Yes'] },
  { label: 'Group Video Call',                  values: ['-',   'Yes', 'Yes'] },
  { label: 'Chat History',                      values: ['30 days', 'Unlimited', 'Unlimited'] },
  { label: 'Schedule Meetings',                 values: ['-',   'Yes', 'Yes'] },
  { label: 'Tasks & Subtasks',                  values: ['-',   'Yes', 'Yes'] },
  { label: 'Notes',                             values: ['-',   'Yes', 'Yes'] },
  { label: 'Roles & Permissions',               values: ['-',   'Yes', 'Yes'] },
  { label: 'Attendance Management',             values: ['-',   '-',   'Yes'] },
  { label: 'Selfie Clock-In',                   values: ['-',   '-',   'Yes'] },
  { label: 'Continuous Location Punching',      values: ['-',   '-',   'Yes'] },
  { label: 'Leave Management',                  values: ['-',   '-',   'Yes'] },
  { label: 'Holiday Calendar',                  values: ['-',   '-',   'Yes'] },
  { label: 'Expense Claims',                    values: ['-',   '-',   'Yes'] },
]

const columns = [
  { label: 'Free',     color: 'text-slate-600',  bg: 'bg-slate-50' },
  { label: 'Pro',      color: 'text-orange-500', bg: 'bg-orange-50' },
  { label: 'Pro Plus', color: 'text-orange-600', bg: 'bg-orange-100' },
]

const ComparisonTable = () => (
  <section id="benefits" className="bg-[#F9F5F1] px-4 py-16 sm:px-6 lg:py-24">
    <div className="mx-auto max-w-5xl space-y-10">

      {/* Header */}
      <div className="space-y-4 text-center">
        <span className="inline-flex items-center rounded-full bg-orange-100 px-4 py-1.5 font-['Montserrat'] text-xs font-bold uppercase tracking-widest text-orange-500">
          Compare Plans
        </span>
        <h2
          className="font-['Montserrat'] font-extrabold leading-tight text-slate-900"
          style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
        >
          Everything You Need,{' '}
          <span className="text-[#F57E3B]">At Every Stage</span>
        </h2>
        <p className="mx-auto max-w-lg font-['Montserrat'] text-base text-slate-500">
          See exactly what's included in each plan before you decide.
        </p>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse">

            {/* Column headers */}
            <thead>
              <tr>
                <th className="w-[45%] px-6 py-6 text-left font-['Montserrat'] text-base font-bold text-slate-500 uppercase tracking-wider">
                  Feature
                </th>
                {columns.map((col) => (
                  <th
                    key={col.label}
                    className={`px-4 py-6 text-center font-['Montserrat'] text-base font-extrabold ${col.color} ${col.bg}`}
                  >
                    {col.label}
                  </th>
                ))}
              </tr>
            </thead>

            {/* Rows */}
            <tbody>
              {categories.map((row, idx) => (
                <tr
                  key={row.label}
                  className={`border-t border-slate-100 transition-colors hover:bg-orange-50/40 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/40'}`}
                >
                  <td className="px-6 py-5 font-['Montserrat'] text-base font-semibold text-slate-700">
                    {row.label}
                  </td>
                  {row.values.map((val, i) => (
                    <td key={i} className="px-4 py-5 text-center">
                      {val === 'Yes' ? (
                        <span className="flex justify-center">
                          <img src={tickSvg} alt="Yes" className="h-6 w-6" />
                        </span>
                      ) : val === '-' ? (
                        <span className="text-slate-300 font-bold text-xl">—</span>
                      ) : (
                        <span className="inline-block rounded-full bg-orange-50 px-3 py-1 font-['Montserrat'] text-sm font-bold text-orange-500">
                          {val}
                        </span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>

          </table>
        </div>

        {/* Footer CTA */}
        <div className="border-t border-slate-100 bg-gradient-to-r from-orange-50 to-white px-6 py-6 text-center">
          <p className="mb-4 font-['Montserrat'] text-base font-medium text-slate-500">
            Need a custom plan for a large team?
          </p>
          <a
            href="https://mail.google.com/mail/?view=cm&to=hello@riggleapp.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-[#F57E3B] px-8 py-4 font-['Montserrat'] text-base font-bold text-white shadow-md shadow-orange-200 transition hover:bg-orange-500"
          >
            Contact Us for Enterprise →
          </a>
        </div>
      </div>

    </div>
  </section>
)

export default ComparisonTable
