import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

export default function Legal() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-6 lg:px-8 py-4">
          <Link href="/">
            <Button variant="ghost" size="sm" className="gap-2" data-testid="button-back">
              <ChevronLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-6 lg:px-8 py-12 max-w-4xl">
        <div className="space-y-12">
          {/* Terms of Service */}
          <section id="terms" className="space-y-6" data-testid="section-terms">
            <h1 className="text-4xl font-bold" data-testid="text-terms-title">Terms of Service</h1>
            
            <div className="prose prose-invert max-w-none space-y-4 text-muted-foreground">
              <p className="text-sm italic">Effective Date: 11.1.2025</p>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-2">1. Acceptance of Terms</h2>
                <p>By downloading, installing, or using Candlesticks101 (the "App") provided by GoliathGames ("we," "us," or "our"), you ("User," "you") agree to be bound by these Terms of Service ("Terms"). If you do not agree, do not access or use the App.</p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-2">2. Purpose of the App</h2>
                <p>The App is provided solely for educational purposes to teach candlestick patterns and trading concepts. It is not intended as financial advice and does not constitute a solicitation or recommendation to invest, trade, or engage in financial transactions.</p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-2">3. No Guarantee of Results</h2>
                <p>The App does not guarantee profits, prevent losses, or ensure any financial outcome. Users are solely responsible for any decisions or actions taken based on information obtained from the App.</p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-2">4. User Accounts</h2>
                <p>Some features may require account creation. You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account.</p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-2">5. Intellectual Property Rights</h2>
                <p>All content, graphics, text, code, and materials in the App are the exclusive property of GoliathGames and are protected under copyright, trademark, and other intellectual property laws. Users may not reproduce, distribute, modify, or create derivative works without express written permission.</p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-2">6. Disclaimer of Warranties</h2>
                <p>The App is provided "as is" and "as available," without warranties of any kind, whether express, implied, statutory, or otherwise, including but not limited to warranties of accuracy, reliability, completeness, merchantability, or fitness for a particular purpose.</p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-2">7. Limitation of Liability</h2>
                <p>To the maximum extent permitted by law, GoliathGames shall not be liable for any direct, indirect, incidental, consequential, special, or punitive damages, including but not limited to financial loss, loss of data, or loss of business opportunity, arising out of or related to your use or inability to use the App.</p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-2">8. Indemnification</h2>
                <p>You agree to indemnify, defend, and hold harmless GoliathGames and its affiliates, officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses, including reasonable legal fees, arising from your use of the App, violation of these Terms, or infringement of any rights of a third party.</p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-2">9. Privacy</h2>
                <p>Use of the App is subject to our Privacy Policy. By using the App, you consent to the collection, storage, and use of data as described therein.</p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-2">10. Modifications to Terms or App</h2>
                <p>We may modify or discontinue the App, or update these Terms, at any time without prior notice. Your continued use constitutes acceptance of any changes.</p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-2">11. Governing Law and Dispute Resolution</h2>
                <p>These Terms are governed by the laws of applicable jurisdiction. Any disputes arising under or relating to these Terms shall be resolved in the appropriate courts.</p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-2">12. Contact Information</h2>
                <p>For questions regarding these Terms, contact: david.alex.ilie@gmail.com</p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-2">13. Financial Disclaimer</h2>
                <p>Candlesticks101 is an educational simulation only. The App does not provide financial advice, and any investment, trading, or financial decisions made by users are at their own risk. We do not guarantee any financial returns and are not responsible for losses incurred through the use of the App.</p>
              </div>
            </div>
          </section>

          {/* Privacy Policy */}
          <section id="privacy" className="space-y-6 pt-12 border-t" data-testid="section-privacy">
            <h1 className="text-4xl font-bold" data-testid="text-privacy-title">Privacy Policy</h1>
            
            <div className="prose prose-invert max-w-none space-y-4 text-muted-foreground">
              <p className="text-sm italic">Effective Date: 25.11.2025</p>
              
              <p>Candlesticks101 ("we," "our," or "us") values your privacy. This Privacy Policy explains how we collect, use, and protect your information when you use our mobile application Candlesticks101 ("App"). By using our App, you agree to the practices described in this policy.</p>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-2">1. Information We Collect</h2>
                <p>We may collect the following types of information:</p>
                <div className="ml-4 space-y-2">
                  <div>
                    <h3 className="font-semibold text-foreground">a. Personal Information (Optional)</h3>
                    <p>Email address (if you create an account or sign up for premium)</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">b. Usage Information</h3>
                    <p>How you interact with the app (lessons completed, features used, session duration), Device information (model, OS version), Analytics data for app improvement</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">c. Advertising Information</h3>
                    <p>Anonymous identifiers for ads (e.g., Ad IDs) to show relevant ads</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-2">2. How We Use Your Information</h2>
                <p>We use the collected information to:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Provide and improve the App features</li>
                  <li>Display relevant ads</li>
                  <li>Manage premium subscriptions</li>
                  <li>Communicate with you regarding updates or offers</li>
                  <li>Monitor and analyze usage for app performance and security</li>
                </ul>
                <p className="mt-2">We do not sell or share your personal information with third parties for unrelated purposes.</p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-2">3. Ads and Third-Party Services</h2>
                <p>Our App may display third-party advertisements and may use analytics services provided by external companies. These third parties may collect anonymous usage data. We are not responsible for the privacy practices of these third parties. Please review their privacy policies before interacting with their ads.</p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-2">4. Premium Subscription</h2>
                <p>Purchasing the premium subscription removes ads. Payment is processed through Google In-App Purchases. We do not store your payment details.</p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-2">5. Data Retention</h2>
                <p>We retain your information only as long as necessary to provide the App and comply with legal obligations. Usage data may be stored longer in anonymized form for analytics purposes.</p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-2">6. Your Rights</h2>
                <p>Depending on your location, you may have rights to:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Access or correct your personal data</li>
                  <li>Delete your account and personal data</li>
                  <li>Opt-out of analytics or personalized ads</li>
                </ul>
                <p className="mt-2">To exercise your rights, contact us at: david.alex.ilie@gmail.com</p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-2">7. Security</h2>
                <p>We implement reasonable measures to protect your information. However, no system is completely secure. Use the App at your own risk.</p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-2">8. Changes to This Policy</h2>
                <p>We may update this Privacy Policy occasionally. Changes will be posted with the updated date. Continued use of the App after changes indicates acceptance.</p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-2">9. Contact Us</h2>
                <p>If you have questions about this Privacy Policy, contact us:</p>
                <p>Email: david.alex.ilie@gmail.com<br />App: Candlesticks101</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
