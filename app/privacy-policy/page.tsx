export const metadata = {
  title: "Privacy Policy | Chhotelal",
  description: "Privacy Policy for Chhotelal",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

      <p className="text-gray-600 mb-6">
        Last Updated: June 2026
      </p>

      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-2">
            Information We Collect
          </h2>
          <p>
            We may collect your name, email address, phone number,
            IP address, browser information, and any information
            submitted through contact forms.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">
            How We Use Information
          </h2>
          <p>
            We use collected information to improve our services,
            respond to inquiries, and maintain website security.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">
            Cookies
          </h2>
          <p>
            Our website may use cookies to enhance your browsing
            experience and analyze website traffic.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">
            Data Protection
          </h2>
          <p>
            We implement appropriate security measures to protect
            your information from unauthorized access.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">
            Contact
          </h2>
          <p>Email: info@chhotelal.com.np</p>
        </div>
      </section>
    </main>
  );
}