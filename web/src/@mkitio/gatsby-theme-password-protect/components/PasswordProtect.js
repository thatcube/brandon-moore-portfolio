/**
 * Write-only the password as cookie
 */
import React, { useState } from 'react';
import { setSessionPassword } from '../utils/utils';
import Layout from '../../../components/layout'
import Container from '../../../components/container'
import { Link } from "gatsby";

const styles = {
    input: {
        width: '100%'
    },
    button: {
        width: '100%',
        marginTop: '2rem'
    }
};

const PasswordProtect = () => {
    const [password, setPassword] = useState('');

    const onSubmit = event => {
        event.preventDefault();
        setSessionPassword(password);
        window.location.reload(); // eslint-disable-line
    };

    return (
        <div className="passwordModal">
            <Layout>
                <Container>
                    <div className="col-1-start col-9-end passwordWrapper fade-zoom">
                        <Link to="/" className="modalClose">
                            <svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M31.35 16.662a1.162 1.162 0 00-1.645 0L24 22.355l-5.705-5.705a1.162 1.162 0 00-1.645 0 1.162 1.162 0 000 1.645L22.355 24l-5.705 5.705a1.162 1.162 0 000 1.645c.455.455 1.19.455 1.645 0L24 25.645l5.705 5.705c.455.455 1.19.455 1.645 0a1.162 1.162 0 000-1.645L25.645 24l5.705-5.705a1.17 1.17 0 000-1.634z" fill="currentColor" /></svg>
                        </Link>

                        <form onSubmit={onSubmit}>
                            <h1 style={{ color: 'var(--color-text-high-contrast)' }}>Password please</h1>
                            <div className="textBoxContainer">

                                <input
                                    name="password"
                                    type="password"
                                    id="passwordinput"
                                    value={password}
                                    className="textbox"
                                    onChange={event => setPassword(event.target.value)}
                                    style={styles.input}
                                />
                                <label className="textBoxLabel" htmlFor="passwordinput">Password</label>

                            </div>

                            <button
                                type="submit"
                                className="button"
                                style={styles.button}
                            >
                                Submit
                        </button>
                        </form>
                        <div class="inline-message">
                        <svg width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.8 14a11.2 11.2 0 1122.4 0 11.2 11.2 0 01-22.4 0zM14 23.75a9.75 9.75 0 100-19.5 9.75 9.75 0 000 19.5zm-1.63-5.41h.55v-5.42h-.55a.54.54 0 01-.54-.55v-.36c0-.3.24-.54.54-.54h2.17c.3 0 .54.24.54.54v6.33h.55c.3 0 .54.24.54.54v.36c0 .3-.25.54-.54.54h-3.26a.54.54 0 01-.54-.54v-.36c0-.3.24-.54.54-.54zm.18-9.4a1.45 1.45 0 112.9 0 1.45 1.45 0 01-2.9 0z" fill="currentColor"/></svg>
                            <span>The password can be found on my resume. <a class="link" href="mailto:brandoncmoore4@gmail.com">Send me an email</a> if you need help.</span>
                        </div>


                    </div>
                </Container>
            </Layout>
        </div>
    );
};

export default PasswordProtect;
