import React from 'react';
import { Shield } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Shield className="w-16 h-16 text-purple-600 mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-gray-600">Last Updated: November 14, 2024</p>
          </div>

          <article className="prose prose-slate lg:prose-lg mx-auto">
            <p>At bestdadjokesgenerator.com, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information.</p>

            <h2>Information We Collect</h2>
            <p>We collect information that you voluntarily provide to us when using our website:</p>
            <ul>
              <li>Usage data (pages visited, time spent on site)</li>
              <li>Device information (browser type, operating system)</li>
              <li>IP address and location data</li>
            </ul>

            <h2>Google Analytics</h2>
            <p>We use Google Analytics to understand how visitors interact with our website. Google Analytics collects:</p>
            <ul>
              <li>Pages visited and time spent on each page</li>
              <li>Device and browser information</li>
              <li>Geographic location (country/city level)</li>
              <li>Referral sources</li>
            </ul>
            <p>You can opt-out of Google Analytics tracking by installing the Google Analytics Opt-out Browser Add-on.</p>

            <h2>Google AdSense</h2>
            <p>We use Google AdSense to display advertisements:</p>
            <ul>
              <li>Third-party vendors, including Google, use cookies to serve ads based on your prior visits</li>
              <li>Google's use of advertising cookies enables it and its partners to serve ads based on your visits to our site</li>
              <li>You can opt out of personalized advertising by visiting Ads Settings</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <ul>
              <li>To improve our website and user experience</li>
              <li>To analyze website traffic and performance</li>
              <li>To display relevant advertisements</li>
              <li>To comply with legal obligations</li>
            </ul>

            <h2>Data Security</h2>
            <p>We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure.</p>

            <h2>Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>

            <h2>Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at contact@bestdadjokesgenerator.com</p>
          </article>
        </div>
      </div>
    </div>
  );
}