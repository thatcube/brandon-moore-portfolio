/**
 * Write-only the password as cookie
 */
import React, { useState } from 'react';
import { setSessionPassword } from '../utils/utils';
import Layout from '../../../components/layout'
import Container from '../../../components/container'

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
        <Layout>
            <Container>
                <div className="col-1-start col-9-end passwordWrapper">
                    <form onSubmit={onSubmit}>
                        <h1 style={{ color: 'var(--color-text-high-contrast)' }}>Password please</h1>
                        <div className="textBoxContainer">

                            <input
                                name="password"
                                type="password"
                                id="cats"
                                value={password}
                                className="textbox"
                                onChange={event => setPassword(event.target.value)}
                                style={styles.input}
                            />
                            <label className="textBoxLabel" for="cats">Password</label>

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
    );
};

export default PasswordProtect;
