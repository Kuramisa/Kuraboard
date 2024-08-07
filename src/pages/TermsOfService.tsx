const TermsOfService = () => {
    return (
        <div className="flex flex-column p-6 mt-6 justify-content-center align-items-center">
            <div className="flex flex-row justify-content-center">
                <ul
                    style={{
                        listStyle: "none",
                        justifyItems: "self-start",
                    }}
                >
                    <li>
                        <a href="#acceptance">1. Acceptance of Terms</a>
                    </li>
                    <li>
                        <a href="#dataprivacy">
                            2. Data Collection and Privacy
                        </a>
                    </li>
                    <li>
                        <a href="#datausage">3. Data Usage</a>
                    </li>
                    <li>
                        <a href="#dataretention">4. Data Retention</a>
                    </li>
                    <li>
                        <a href="#userresponsibilities">
                            5. User Responsibilities
                        </a>
                    </li>
                    <li>
                        <a href="#modifications">6. Modifications</a>
                    </li>
                    <li>
                        <a href="#limitation">7. Limitiation of Liability</a>
                    </li>
                    <li>
                        <a href="#termination">8. Termination</a>
                    </li>
                    <li>
                        <a href="#contactus">9. Contact Us</a>
                    </li>
                </ul>
                <div
                    className="flex flex-column justify-content-center align-items-center"
                    style={{ width: "960px" }}
                >
                    <h1>Terms of Service</h1>
                    <h5>
                        By using our services, you agree to the following terms
                        of service.
                    </h5>
                    <div className="flex flex-column justify-content-center">
                        <section id="acceptance">
                            <h3>1. Acceptance of Terms</h3>
                            <span>
                                By adding and using <b>Kuramisa</b> in your
                                server, you agree to be bound by these Terms of
                                Service. If you do not agree with any part of
                                these terms, you must not use our bot.
                            </span>
                        </section>
                        <section id="dataprivacy">
                            <h3>2. Data Collection and Privacy</h3>
                            <span>
                                We value your privacy and are committed to
                                collecting only the bare minimum of data
                                necessary for the bot to function.{" "}
                                <b>
                                    All the information we collect is provided
                                    by Discord
                                </b>
                                <br />
                                <b>
                                    What We Collect:
                                    <ul>
                                        <li>User Information</li>
                                        <li>Server Information</li>
                                    </ul>
                                </b>
                                These are used to identify and interact with
                                users and servers within Discord. Messages and
                                Commands: When you interact with the bot, we
                                process the messages and commands you send to
                                provide the requested service.
                                <b>
                                    What We Do Not Collect:
                                    <ul>
                                        <li>
                                            We do not collect or store any
                                            personal information beyond what is
                                            necessary for the bot's
                                            functionality.
                                        </li>
                                        <li>
                                            We do not log message content beyond
                                            the scope of immediate processing.{" "}
                                            <i>
                                                Besides moderation features (it
                                                needs to be enabled via server
                                                owners)
                                            </i>
                                        </li>
                                    </ul>
                                </b>
                                <br />
                                We do not share your data with third parties.
                            </span>
                        </section>
                        <section id="datausage">
                            <h3>3. Data Usage</h3>
                            <span>
                                <b>Functionality:</b> Collected data is used
                                solely to operate the bot and provide you with
                                the requested services. <br />
                                <b>Improvement:</b> We may use aggregate and
                                anonymous data to improve the bot's features and
                                performance.
                            </span>
                        </section>
                        <section id="dataretention">
                            <h3>4. Data Retention</h3>
                            <span>
                                We only retain your data as long as it is
                                necessary for the operation of the bot. Once the
                                data is no longer needed, it will be deleted.
                            </span>
                        </section>
                        <section id="userresponsibilities">
                            <h3>5. User Responsibilities</h3>
                            <span>
                                <b>Compliance:</b> You must comply with
                                Discord's Terms of Service and Community
                                Guidelines.
                                <br />
                                <b>Prohibited Activities:</b> You must not use
                                the bot for any illegal or unauthorized
                                purposes.
                            </span>
                        </section>
                        <section id="modifications">
                            <h3>6. Modifications</h3>
                            <span>
                                We reserve the right to modify these terms at
                                any time. If we make significant changes, we
                                will notify you through the bot or via an
                                announcement in our support server
                            </span>
                        </section>
                        <section id="limitation">
                            <h3>7. Limitation of Liability</h3>
                            <span>
                                <b>Kuramisa</b> is provided "as is" without any
                                warranties or guarantees. We are not liable for
                                any damages or losses resulting from the use of
                                our bot.
                            </span>
                        </section>
                        <section id="termination">
                            <h3>8. Termination</h3>
                            <span>
                                We reserve the right to terminate or restrict
                                access to the bot at any time, with or without
                                notice, for any reason.
                            </span>
                        </section>
                        <section id="contactus">
                            <h3>9. Contact Us</h3>
                            <span>
                                If you have any questions or concerns about
                                these terms, you can join our support server{" "}
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsOfService;
