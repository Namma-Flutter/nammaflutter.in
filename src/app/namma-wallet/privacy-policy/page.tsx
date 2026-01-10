export default function NammaWallet() {
    return (
        <div style={{color:'black'}}>
            <h1 id="-privacy-policy-namma-wallet-"><strong>Privacy Policy – Namma Wallet</strong></h1>
            <p><strong>Last Updated: [22-11-2025]</strong></p>
            <p>Namma Wallet (“we”, “our”, “the app”) is an open-source Flutter application built by the Flutter Chennai Community. The app helps users automatically create tickets or events by processing SMS and notifications using an <strong>on-device Large Language Model (LLM)</strong>.
                We care about your privacy and are committed to transparency in how the app works and what data it handles.</p>

            <h2 id="-1-data-collection-and-use-"><strong>1. Data Collection and Use</strong></h2>
            <h3 id="-1-1-sms-data-"><strong>1.1 SMS Data</strong></h3>
            <ul>
                <li>The app reads selected SMS messages for the sole purpose of extracting relevant information to create tickets or events.</li>
                <li>SMS content is processed <strong>entirely on your device</strong> using an <strong>offline LLM</strong>.</li>
                <li><strong>No SMS data is transmitted, stored on external servers, or shared with anyone.</strong></li>
            </ul>
            <h3 id="-1-2-notification-data-"><strong>1.2 Notification Data</strong></h3>
            <ul>
                <li>The app accesses specific app notifications if permission is granted.</li>
                <li>The purpose is to detect relevant notifications (e.g., ticket updates, transactions, travel confirmations) and create events.</li>
                <li>Notification data is <strong>never uploaded</strong> or shared outside the device.</li>
            </ul>
            <h3 id="-1-3-camera-access-"><strong>1.3 Camera Access</strong></h3>
            <ul>
                <li>Camera permission is used only for features like scanning (QR codes, receipts, etc.) depending on the app features.</li>
                <li>No images or video data leave your device.</li>
            </ul>
            <h3 id="-1-4-internet-access-"><strong>1.4 Internet Access</strong></h3>
            <ul>
                <li>The app uses the internet <strong>only once</strong> to download the required LLM model.</li>
                <li>After the model is downloaded, <strong>all processing happens offline</strong>.</li>
                <li>The app does <strong>not</strong> send personal data over the internet.</li>
            </ul>

            <h2 id="-2-no-data-leaves-your-device-"><strong>2. No Data Leaves Your Device</strong></h2>
            <ul>
                <li>All SMS, notification, and generated ticket/event data remains on your device.</li>
                <li>All text processing is performed using an <strong>on-device AI model</strong>.</li>
                <li>The app does <strong>not</strong> use cloud servers, external APIs, analytics, tracking, or remote processing.</li>
                <li>We do not collect, store, or transmit any personal information.</li>
            </ul>

            <h2 id="-3-open-source-transparency-"><strong>3. Open Source Transparency</strong></h2>
            <p>Namma Wallet is fully open-source.
                The complete source code is publicly available at:</p>
            <p><strong><a href="https://github.com/Namma-Flutter/namma_wallet">https://github.com/Namma-Flutter/namma_wallet</a></strong></p>
            <p>Anyone can review, verify, or contribute to the code, ensuring full transparency regarding privacy and data handling.</p>

            <h2 id="-4-permissions-we-request-"><strong>4. Permissions We Request</strong></h2>
            <table>
                <thead>
                    <tr>
                        <th>Permission</th>
                        <th>Why We Need It</th>
                        <th>Data Sent to Server?</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Read SMS</strong></td>
                        <td>To extract details and create tickets/events</td>
                        <td>No</td>
                    </tr>
                    <tr>
                        <td><strong>Notification Access</strong></td>
                        <td>To process relevant notifications</td>
                        <td>No</td>
                    </tr>
                    <tr>
                        <td><strong>Camera</strong></td>
                        <td>For scanning-based features (if used)</td>
                        <td>No</td>
                    </tr>
                    <tr>
                        <td><strong>Internet</strong></td>
                        <td>To download the LLM model once</td>
                        <td>No data sent</td>
                    </tr>
                    <tr>
                        <td><strong>Storage (if applicable)</strong></td>
                        <td>To store the downloaded model and generated tickets</td>
                        <td>No</td>
                    </tr>
                </tbody>
            </table>

            <h2 id="-5-data-retention-"><strong>5. Data Retention</strong></h2>
            <ul>
                <li>All data (SMS-derived fields, notifications, tickets, model files) remains stored locally on your device.</li>
                <li>You may clear the app’s data at any time to remove everything.</li>
            </ul>
            <h2 id="-6-third-party-services-"><strong>6. Third-Party Services</strong></h2>
            <ul>
                <li>The app does <strong>not</strong> use any third-party analytics, tracking SDKs, or cloud services.</li>
                <li>No third-party receives your data.</li>
            </ul>

            <h2 id="-7-children-s-privacy-"><strong>7. Children’s Privacy</strong></h2>
            <p>We do not target or knowingly collect data from children under 13.</p>

            <h2 id="-8-changes-to-this-privacy-policy-"><strong>8. Changes to This Privacy Policy</strong></h2>
            <p>We may update this Privacy Policy when necessary. Any updates will be reflected in this page.</p>

            <h2 id="-9-contact-us-"><strong>9. Contact Us</strong></h2>
            <p>For questions or suggestions regarding this Privacy Policy, please contact:
                <strong>Flutter Chennai Community</strong>
                GitHub: <a href="https://github.com/Namma-Flutter/namma_wallet">https://github.com/Namma-Flutter/namma_wallet</a></p>

        </div>
    );
}
