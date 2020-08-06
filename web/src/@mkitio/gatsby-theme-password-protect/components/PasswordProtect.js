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



                    </div>
                </Container>
            </Layout>
        </div>
    );
};

export default PasswordProtect;
