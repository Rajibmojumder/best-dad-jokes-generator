import React from 'react';
import { AlertCircle } from 'lucide-react';

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <AlertCircle className="w-16 h-16 text-purple-600 mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Disclaimer
            </h1>
          </div>

          <article className="prose prose-slate lg:prose-lg mx-auto">
            <h2>Website Disclaimer</h2>
            <p>The information provided by bestdadjokesgenerator.com is for general informational and entertainment purposes only.</p>

            <h2>Content Disclaimer</h2>
            <p>While we strive to keep the content family-friendly and appropriate for all ages:</p>
            <ul>
              <li>All jokes are generated using AI technology and may occasionally produce unexpected results</li>
              <li>We do not guarantee the appropriateness of all content for all audiences</li>
              <li>Parents should supervise children's use of the website</li>
              <li>Users should use their discretion when sharing jokes in professional or formal settings</li>
            </ul>

            <h2>No Professional Advice</h2>
            <p>The content on this website is provided for entertainment purposes only. It should not be construed as professional advice of any kind.</p>

            <h2>Accuracy and Completeness</h2>
            <p>We make no representations or warranties of any kind, express or implied, about:</p>
            <ul>
              <li>The completeness, accuracy, reliability, suitability, or availability of the website or the information, products, services, or related graphics contained on the website</li>
              <li>The originality or uniqueness of any jokes generated</li>
              <li>The appropriateness of content for specific situations or audiences</li>
            </ul>

            <h2>External Links</h2>
            <p>Our website may contain links to external websites. We have no control over the nature, content, and availability of those sites.</p>

            <h2>Limitation of Liability</h2>
            <p>In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, arising out of or in connection with the use of this website.</p>

            <h2>Changes to Disclaimer</h2>
            <p>We reserve the right to modify this disclaimer at any time. By using our website, you agree to be bound by the current version of this disclaimer.</p>

            <h2>Contact Information</h2>
            <p>If you have any questions about this disclaimer, please contact us at contact@bestdadjokesgenerator.com</p>
          </article>
        </div>
      </div>
    </div>
  );
}