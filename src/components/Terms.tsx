import React from 'react';
import { ScrollText } from 'lucide-react';

export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <ScrollText className="w-16 h-16 text-purple-600 mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Terms of Service
            </h1>
          </div>

          <article className="prose prose-slate lg:prose-lg mx-auto">
            <h2>1. Acceptance of Terms</h2>
            <p>By accessing and using bestdadjokesgenerator.com, you accept and agree to be bound by these Terms of Service.</p>

            <h2>2. Use License</h2>
            <p>Permission is granted to temporarily access and use our website for personal, non-commercial use. You may not:</p>
            <ul>
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose</li>
              <li>Remove any copyright or other proprietary notations</li>
              <li>Transfer the materials to another person</li>
            </ul>

            <h2>3. Content</h2>
            <p>All jokes and content generated through our service are for entertainment purposes only. We strive to maintain family-friendly content but cannot guarantee the appropriateness of all generated content.</p>

            <h2>4. User Conduct</h2>
            <p>You agree to use the website in a manner consistent with all applicable laws and regulations.</p>

            <h2>5. Disclaimer</h2>
            <p>The materials on our website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation:</p>
            <ul>
              <li>Implied warranties of merchantability</li>
              <li>Fitness for a particular purpose</li>
              <li>Non-infringement of intellectual property</li>
            </ul>

            <h2>6. Limitations</h2>
            <p>In no event shall bestdadjokesgenerator.com or its suppliers be liable for any damages arising out of the use or inability to use the materials on our website.</p>

            <h2>7. Revisions</h2>
            <p>We may revise these terms of service at any time without notice. By using this website, you agree to be bound by the current version of these terms of service.</p>

            <h2>8. Governing Law</h2>
            <p>These terms and conditions are governed by and construed in accordance with applicable laws, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.</p>

            <h2>Contact Information</h2>
            <p>If you have any questions about these Terms of Service, please contact us at contact@bestdadjokesgenerator.com</p>
          </article>
        </div>
      </div>
    </div>
  );
}