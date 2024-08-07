const PrivacyPolicy = () => {
    return (
        <div className="flex flex-column p-6 mt-6 justify-content-center align-items-center">
            <div
                className="flex flex-column justify-content-center align-items-center"
                style={{ width: "960px" }}
            >
                <h1>Privacy Policy</h1>
                <h5>Effective Date: August 06, 2024</h5>
                <div className="flex flex-column justify-content-center">
                    <section id="introduction">
                        <h3>Introduction</h3>
                        <span>
                            <b>Kuramisa</b> ("we," "our," or "us") is committed
                            to protecting your privacy. This Privacy Policy
                            explains how we collect, use, disclose, and
                            safeguard your information when you use our Discord
                            bot. By using <b>Kuramisa</b>, you agree to the
                            terms of this Privacy Policy.
                        </span>
                    </section>
                    <section id="datacollection">
                        <h3>
                            Information We Collect | Minimal Data Collection
                        </h3>
                        <span>
                            We only collect the minimum amount of information
                            necessary to operate and maintain our Discord bot
                            effectively. <br />
                            <b>
                                Types of Data collected:
                                <ul>
                                    <li>
                                        User and Server Infomration: These are
                                        necessary to identify users and servers
                                        within Discord and to provide bot
                                        functionality.
                                    </li>
                                    <li>
                                        Messages and Commands: We process the
                                        messages and commands you send to the
                                        bot to provide the requested services.
                                    </li>
                                </ul>
                            </b>
                        </span>
                    </section>
                    <section id="infousage">
                        <h3>How We Use Your Information | Operating the Bot</h3>
                        <span>
                            <b>Service Provision:</b> We use the collected data
                            to operate the bot and provide you with the services
                            you request.
                            <br />
                            <b>Feature Improvement:</b> Aggregate and anonymous
                            data may be used to improve the bot{"'"}s features
                            and performance.
                        </span>
                    </section>
                    <section id="nopersonaldata">
                        <h3>No Personal Data Storage</h3>
                        <span>
                            We do not store personal data beyond what is
                            necessary for the immediate processing of commands
                            and interactions.
                        </span>
                    </section>
                    <section id="temporarystorage">
                        <h3>Temporary Data Storage</h3>
                        <span>
                            We only retain your data as long as it is necessary
                            for the operation of the bot. Data is deleted once
                            it is no longer needed.
                        </span>
                    </section>
                    <section id="no3rdparty">
                        <h3>No Third-Party Sharing</h3>
                        <span>
                            We do not share, sell, or disclose your data to
                            third parties.
                        </span>
                    </section>
                    <section id="dataprotection">
                        <h3>Data Protection</h3>
                        <span>
                            We take reasonable measures to protect your data
                            from unauthorized access, alteration, disclosure, or
                            destruction. However, no method of transmission over
                            the Internet or electronic storage is 100% secure.
                        </span>
                    </section>
                    <section id="optingout">
                        <h3>Opting Out</h3>
                        <span>
                            If you wish to stop using <b>Kuramisa</b> and have
                            your data deleted, you can remove the bot from your
                            server. This will stop any further data collection
                            and processing.
                        </span>
                    </section>
                    <section id="childrenprivacy">
                        <h3>Children's Privacy | Not Intended for Children</h3>
                        <span>
                            Our bot is not intended for use by individuals under
                            the age of 13. We do not knowingly collect
                            information from children under 13. If we become
                            aware that we have collected personal data from a
                            child under 13, we will delete that information.
                        </span>
                    </section>
                    <section id="changesprivacy">
                        <h3>Changes to This Privacy Policy | Policy Updates</h3>
                        <span>
                            We may update this Privacy Policy from time to time.
                            If we make significant changes, we will notify you
                            through the bot or via an announcement in our
                            support server. Your continued use of the bot after
                            any changes indicates your acceptance of the new
                            Privacy Policy.
                        </span>
                    </section>
                    <section id="contactus">
                        <h3>Contact Us</h3>
                        <span>
                            If you have any questions or concerns about this
                            Privacy Policy{" "}
                            <a
                                target="_blank"
                                rel="noreferrer noopener"
                                href="https://discord.gg/e2u6rQUJ9C"
                            >
                                here
                            </a>
                            .
                        </span>
                    </section>
                    <section id="thankyou">
                        <h3>Thank You</h3>
                        <span>
                            Thank you for using <b>Kuramisa</b>! We appreciate
                            your trust and are committed to protecting your
                            privacy.
                        </span>
                    </section>
                    <section id="lastupdated">
                        <h3>Last Updated</h3>
                        <span>August 06, 2024</span>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
